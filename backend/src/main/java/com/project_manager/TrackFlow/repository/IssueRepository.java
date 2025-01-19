package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Integer> {
    List<Issue> findByProjectId(Integer projectId);
}
