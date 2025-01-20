package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findByIssueId(Integer issueID);

}
