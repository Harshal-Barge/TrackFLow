package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.Invitation;
import jakarta.mail.MessagingException;

public interface InvitationService {
    void sendInvitation(String email, Integer projectId) throws MessagingException;

    Invitation acceptInvitation(String token, Integer userId) throws Exception;

    String getTokenByUserMail(String userEmail) throws Exception;

    void deleteToken(String token);
}
