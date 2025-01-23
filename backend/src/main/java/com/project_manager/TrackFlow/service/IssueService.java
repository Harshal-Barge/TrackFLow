package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.request.IssueRequest;

import java.util.List;

public interface IssueService {

    Issue getIssueById(Integer id);

    List<Issue> getIssuesByProjectId(Integer projectId);

    Issue createIssue(IssueRequest issueRequest);

    void deleteIssue(Integer issueId);

    Issue addUserToIssue(Integer issueId, Integer userId);

    Issue updateStatus(Integer issueId, String status);

}
