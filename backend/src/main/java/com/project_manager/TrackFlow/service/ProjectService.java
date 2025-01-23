package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;

import java.util.List;

public interface ProjectService {

    Project createProject(Project project, User user);

    List<Project> getProjectByTeam(User user, String category, String tag);

    Project getProjectById(Integer projectId);

    void deleteProject(Integer projectId, User user);

    Project updateProject(Project updatedProject, Integer projectId);

    void addUserToProject(Integer projectId, Integer userId);

    void removeUserFromProject(Integer projectId, Integer userId);

    Chat getChatByProjectId(Integer projectId);

    List<Project> searchProject(String partialName, User user);

}
