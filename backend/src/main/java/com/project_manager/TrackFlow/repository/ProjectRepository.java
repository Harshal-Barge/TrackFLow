package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Project;
import com.project_manager.TrackFlow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    List<Project> findByOwner(User user);

    List<Project> findByNameContainingAndTeamContaining(String partialName, User user);

    @Query("SELECT p FROM project p join p.team t WHERE t=:user")
    List<Project> findProjectByTeam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user, User owner);
}
