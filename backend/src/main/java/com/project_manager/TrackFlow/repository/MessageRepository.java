package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> findByChatIdOrderBySentTimeAsc(Integer chatId);
}
