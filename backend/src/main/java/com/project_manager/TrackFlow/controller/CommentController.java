package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.Comment;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.request.CommentRequest;
import com.project_manager.TrackFlow.response.ApiResponse;
import com.project_manager.TrackFlow.service.CommentService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Comment> createComment(
            @RequestBody CommentRequest commentRequest,
            @RequestHeader("Authorization") String jwtToken
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        Comment comment = commentService.createComment(commentRequest.getIssueId(),
                user, commentRequest.getContent());
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<ApiResponse> deleteComment(
            @PathVariable Integer commentId,
            @RequestHeader("Authorization") String jwtToken
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        commentService.deleteComment(commentId, user.getId());
        ApiResponse response = new ApiResponse("Comment deleted");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comment>> getCommentsByIssueId(
            @PathVariable Integer issueId
    ) {
        List<Comment> comments = commentService.findCommentsByIssueId(issueId);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}
