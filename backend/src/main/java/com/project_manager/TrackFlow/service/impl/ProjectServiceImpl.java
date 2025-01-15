package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.ProjectRepository;
import com.project_manager.TrackFlow.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepo;

    @Override
    public Project createProject(Project project, User user) throws Exception {
        return null;
    }

    @Override
    public List<Project> getProjectByTeam(User user, String category, String tag) throws Exception {
        return List.of();
    }

    @Override
    public Project getProjectById(Integer projectId) throws Exception {
        return null;
    }

    @Override
    public void deleteProject(Integer projectId, Integer userId) throws Exception {

    }

    @Override
    public Project updateProject(Project updatedProject, Integer projectId) throws Exception {
        return null;
    }

    @Override
    public void addUserToProject(Integer projectId, Integer userId) throws Exception {

    }

    @Override
    public void removeUserFromProject(Integer projectId, Integer userId) throws Exception {

    }

    @Override
    public Chat getChatByProjectId(Integer projectId) throws Exception {
        return null;
    }
}
