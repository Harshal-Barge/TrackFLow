package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.ResourceNotFound;
import com.project_manager.TrackFlow.model.Issue;
import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.IssueRepository;
import com.project_manager.TrackFlow.request.IssueRequest;
import com.project_manager.TrackFlow.service.IssueService;
import com.project_manager.TrackFlow.service.ProjectService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Override
    public Issue getIssueById(Integer id) {
        Optional<Issue> issue = issueRepository.findById(id);
        if(issue.isEmpty()){
            throw new ResourceNotFound("Issue Not Found With IssueId : " + id);
        }
        return issue.get();
    }

    @Override
    public List<Issue> getIssuesByProjectId(Integer projectId) {
        return issueRepository.findByProjectId(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest) {
        Project project = projectService.getProjectById(issueRequest.getProjectId());

        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setPriority(issueRequest.getPriority());
        issue.setStatus(issueRequest.getStatus());
        issue.setDueDate(issueRequest.getDueDate());
        issue.setProject(project);

        return issueRepository.save(issue);
    }

    @Override
    public void deleteIssue(Integer issueId) {
        issueRepository.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(Integer issueId, Integer userId) {
        User user = userService.findUserById(userId);
        Issue issue = getIssueById(issueId);
        issue.setAssignee(user);
        return issueRepository.save(issue);
    }

    @Override
    public Issue updateStatus(Integer issueId, String status) {
        Issue issue = getIssueById(issueId);
        issue.setStatus(status);
        return issueRepository.save(issue);
    }
}
