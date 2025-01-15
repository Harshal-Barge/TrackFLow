package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;

import java.util.List;

public interface ProjectService {

    Project createProject(Project project, User user) throws Exception;

    List<Project> getProjectByTeam(User user, String category, String tag) throws Exception;

    Project getProjectById(Integer projectId) throws Exception;

    void deleteProject(Integer projectId) throws Exception;

    Project updateProject(Project updatedProject, Integer projectId) throws Exception;

    void addUserToProject(Integer projectId, Integer userId) throws Exception;

    void removeUserFromProject(Integer projectId, Integer userId) throws Exception;

    Chat getChatByProjectId(Integer projectId) throws Exception;

    List<Project> searchProject(String partialName, User user) throws Exception;

}
