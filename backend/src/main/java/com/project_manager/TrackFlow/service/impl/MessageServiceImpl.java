package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.model.Chat;
import com.project_manager.TrackFlow.model.Message;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.MessageRepository;
import com.project_manager.TrackFlow.service.MessageService;
import com.project_manager.TrackFlow.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public Message sendMessage(User sender, Integer projectId, String content) {
        Chat chat = projectService.getChatByProjectId(projectId);
        Message message = new Message();
        message.setContent(content);
        message.setSender(sender);
        message.setSentTime(LocalDate.now());
        message.setChat(chat);
        return messageRepository.save(message);
    }

    @Override
    public List<Message> getMessagesByChatId(Integer chatId) {
        return messageRepository.findByChatIdOrderBySentTimeAsc(chatId);
    }
}
