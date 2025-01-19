package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.request.IssueRequest;

import java.util.List;

public interface IssueService {

    Issue getIssueById(Integer id) throws Exception;

    List<Issue> getIssuesByProjectId(Integer projectId) throws Exception;

    Issue createIssue(IssueRequest issueRequest) throws Exception;

    void deleteIssue(Integer issueId) throws Exception;

    Issue addUserToIssue(Integer issueId, Integer userId) throws Exception;

    Issue updateStatus(Integer issueId, String status) throws Exception;

}
