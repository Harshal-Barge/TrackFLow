package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Message;
import com.project_manager.TrackFlow.model.User;

import java.util.List;

public interface MessageService {
    Message sendMessage(User sender, Integer projectId, String content);

    List<Message> getMessagesByChatId(Integer projectId);
}
