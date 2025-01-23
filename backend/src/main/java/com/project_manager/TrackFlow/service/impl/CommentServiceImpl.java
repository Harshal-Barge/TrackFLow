package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.PermissionDeniedException;
import com.project_manager.TrackFlow.Exceptions.ResourceNotFound;
import com.project_manager.TrackFlow.model.Comment;
import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.CommentRepository;
import com.project_manager.TrackFlow.service.CommentService;
import com.project_manager.TrackFlow.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private IssueService issueService;

    @Override
    public Comment createComment(Integer issueId, User user, String content) {
        Issue issue = issueService.getIssueById(issueId);

        Comment comment = new Comment();
        comment.setIssue(issue);
        comment.setCommenter(user);
        comment.setContent(content);

        return commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Integer commentId, Integer userId) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if(comment.isEmpty()){
            throw new ResourceNotFound("Comment Not Found");
        }
        if(!comment.get().getCommenter().getId().equals(userId)){
            throw new PermissionDeniedException("User does not have permission");
        }
        commentRepository.delete(comment.get());
    }

    @Override
    public List<Comment> findCommentsByIssueId(Integer issueId){
        return commentRepository.findByIssueId(issueId);
    }
}
