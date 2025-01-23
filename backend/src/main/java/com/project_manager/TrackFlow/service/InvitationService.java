package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Invitation;
import jakarta.mail.MessagingException;

public interface InvitationService {
    void sendInvitation(String email, Integer projectId);

    Invitation acceptInvitation(String token, Integer userId);

    String getTokenByUserMail(String userEmail);

    void deleteToken(String token);
}
