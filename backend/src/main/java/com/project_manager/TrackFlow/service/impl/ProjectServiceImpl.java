package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.ResourceNotFound;
import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.ProjectRepository;
import com.project_manager.TrackFlow.service.ProjectService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepo;

    @Autowired
    private UserService userService;

    @Override
    public Project createProject(Project project, User user) {
        Project createdProject = new Project();
        createdProject.setName(project.getName());
        createdProject.setOwner(user);
        createdProject.setTags(project.getTags());
        createdProject.setCategory(project.getCategory());
        createdProject.setDescription(project.getDescription());
        createdProject.getTeam().add(user);

        Chat chat = new Chat();
        chat.setProject(createdProject);
        createdProject.setChat(chat);
        userService.updateProjectsCreated(user, 1);

        return projectRepo.save(createdProject);
    }

    @Override
    public List<Project> getProjectByTeam(User user, String category, String tag) {
        List<Project> projects = projectRepo.findByTeamContainingOrOwner(user, user);
        if(category != null){
            projects = projects.stream()
                    .filter(project -> project.getCategory().equals(category))
                    .toList();
        }
        if(tag != null){
            projects = projects.stream()
                    .filter(project -> project.getTags().contains(tag))
                    .toList();
        }
        return projects;
    }

    @Override
    public Project getProjectById(Integer projectId) {
        Optional<Project> project = projectRepo.findById(projectId);
        if(project.isEmpty()){
            throw new ResourceNotFound("Project not found with Id : " + projectId);
        }
        return project.get();
    }

    @Override
    public void deleteProject(Integer projectId, User user) {
        Optional<Project> project = projectRepo.findById(projectId);
        if(project.isEmpty()){
            throw new ResourceNotFound("Project does not exist with Id : " + projectId);
        }
        projectRepo.delete(project.get());
        userService.updateProjectsCreated(user, -1);
    }

    @Override
    public Project updateProject(Project updatedProject, Integer projectId) {
        Project project = getProjectById(projectId);
        project.setName(updatedProject.getName());
        project.setCategory(updatedProject.getCategory());
        project.setDescription(updatedProject.getDescription());
        return projectRepo.save(project);
    }

    @Override
    public void addUserToProject(Integer projectId, User user) {
        Project project = getProjectById(projectId);
        if(!project.getTeam().contains(user)){
            project.getTeam().add(user);
            project.getChat().getUsers().add(user);
        }
        projectRepo.save(project);
    }

    @Override
    public void removeUserFromProject(Integer projectId, Integer userId) {
        Project project = getProjectById(projectId);
        User user = userService.findUserById(userId);
        project.getTeam().add(user);
        project.getChat().getUsers().add(user);
        projectRepo.save(project);
    }

    @Override
    public Chat getChatByProjectId(Integer projectId) {
        Project project = getProjectById(projectId);
        return project.getChat();
    }

    @Override
    public List<Project> searchProject(String partialName, User user) {
        return projectRepo.findByNameContainingAndTeamContains(partialName, user);
    }
}
