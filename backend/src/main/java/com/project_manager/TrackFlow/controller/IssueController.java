package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.request.IssueRequest;
import com.project_manager.TrackFlow.response.ApiResponse;
import com.project_manager.TrackFlow.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(
            @PathVariable Integer issueId
    ) {
        Issue issue = issueService.getIssueById(issueId);
        return new ResponseEntity<>(issue, HttpStatus.OK);
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(
            @PathVariable Integer projectId
    ) {
        List<Issue> issues = issueService.getIssuesByProjectId(projectId);
        return new ResponseEntity<>(issues, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Issue> createIssue(
            @RequestBody IssueRequest issueRequest
    ) {
        Issue createdIssue = issueService.createIssue(issueRequest);
        return new ResponseEntity<>(createdIssue, HttpStatus.OK);
    }

    @DeleteMapping("/{issueId}")
    public ResponseEntity<ApiResponse> updateIssue(
            @PathVariable Integer issueId
    ) {
        issueService.deleteIssue(issueId);
        ApiResponse response = new ApiResponse("Issue Deleted Successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> assignIssue(
            @PathVariable Integer issueId,
            @PathVariable Integer userId
    ) {
        Issue issue = issueService.addUserToIssue(issueId, userId);
        return new ResponseEntity<>(issue, HttpStatus.OK);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateStatus(
            @PathVariable Integer issueId,
            @PathVariable String status
    ) {
        Issue issue = issueService.updateStatus(issueId, status);
        return new ResponseEntity<>(issue, HttpStatus.OK);
    }
}
