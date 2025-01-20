package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Comment;
import com.project_manager.TrackFlow.model.User;

import java.util.List;

public interface CommentService {

    Comment createComment(Integer issueId, User user, String content) throws Exception;

    void deleteComment(Integer commentId, Integer userId) throws Exception;

    List<Comment> findCommentsByIssueId(Integer issueId) throws Exception;

}
