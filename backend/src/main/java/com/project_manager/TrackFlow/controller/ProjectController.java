package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.*;
import com.project_manager.TrackFlow.request.InviteRequest;
import com.project_manager.TrackFlow.request.IssueRequest;
import com.project_manager.TrackFlow.response.ApiResponse;
import com.project_manager.TrackFlow.service.InvitationService;
import com.project_manager.TrackFlow.service.IssueService;
import com.project_manager.TrackFlow.service.ProjectService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Autowired
    private InvitationService invitationService;

    @Autowired
    private IssueService issueService;

    @GetMapping("/getProjects")
    public ResponseEntity<List<Project>> getProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tag,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.getProjectByTeam(user, category, tag);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<Project> getProjectById(
            @PathVariable Integer projectId
    ) throws Exception {
        Project project = projectService.getProjectById(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Project> createProject(
            @RequestBody Project project,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Project createdProject = projectService.createProject(project,user);
        return new ResponseEntity<>(createdProject, HttpStatus.OK);
    }

    @PatchMapping("/{projectId}")
    public ResponseEntity<Project> updateProject(
            @PathVariable Integer projectId,
            @RequestBody Project project
    ) throws Exception {
        Project updatedProject = projectService.updateProject(project, projectId);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<ApiResponse> deleteProject(
            @PathVariable Integer projectId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        projectService.deleteProject(projectId, user);
        ApiResponse response = new ApiResponse("Project Deleted Successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Project>> searchProject(
            @RequestParam String keyWord,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.searchProject(keyWord, user);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/getChat/{projectId}")
    public ResponseEntity<Chat> getChatByProjectId(
            @PathVariable Integer projectId
    ) throws Exception {
        Chat chat = projectService.getChatByProjectId(projectId);
        return new ResponseEntity<>(chat, HttpStatus.OK);
    }

    @PostMapping("/invite")
    public ResponseEntity<ApiResponse> sendInvite(
            @RequestBody InviteRequest inviteRequest
    ) throws Exception {
        invitationService.sendInvitation(inviteRequest.getEmail(), inviteRequest.getProjectId());
        ApiResponse response = new ApiResponse("Invitation sent successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/accept_invite")
    public ResponseEntity<Invitation> acceptInvite(
            @RequestParam String token,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Invitation invitation = invitationService.acceptInvitation(token, user.getId());
        projectService.addUserToProject(invitation.getProjectId(), user.getId());
        return new ResponseEntity<>(invitation, HttpStatus.ACCEPTED);
    }

}
