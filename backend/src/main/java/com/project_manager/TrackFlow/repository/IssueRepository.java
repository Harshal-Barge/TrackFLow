package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Integer> {
    List<Issue> findByProjectId(Integer projectId);
}
