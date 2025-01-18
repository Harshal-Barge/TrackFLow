package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Integer> {
}
