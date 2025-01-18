package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvitationRepository extends JpaRepository<Invitation, Integer> {
    Optional<Invitation> findByToken(String token);

    Optional<Invitation> findByEmail(String email);
}
