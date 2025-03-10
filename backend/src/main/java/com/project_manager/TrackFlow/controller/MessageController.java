package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.Message;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.request.MessageRequest;
import com.project_manager.TrackFlow.service.MessageService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(
            @RequestBody MessageRequest messageRequest,
            @RequestHeader("Authorization") String jwtToken
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        Message message = messageService.sendMessage(user, messageRequest.getProjectId(), messageRequest.getContent());
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/chat/{chatId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(
            @PathVariable Integer chatId
    ) {
        List<Message> messages = messageService.getMessagesByChatId(chatId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
