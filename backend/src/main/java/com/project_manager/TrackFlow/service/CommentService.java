package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Comment;
import com.project_manager.TrackFlow.model.User;

import java.util.List;

public interface CommentService {

    Comment createComment(Integer issueId, User user, String content);

    void deleteComment(Integer commentId, Integer userId);

    List<Comment> findCommentsByIssueId(Integer issueId);

}
