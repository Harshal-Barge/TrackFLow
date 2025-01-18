package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.repository.ChatRepository;
import com.project_manager.TrackFlow.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
