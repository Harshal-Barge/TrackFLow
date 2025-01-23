package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.InvalidRequest;
import com.project_manager.TrackFlow.model.Invitation;
import com.project_manager.TrackFlow.repository.InvitationRepository;
import com.project_manager.TrackFlow.service.EmailService;
import com.project_manager.TrackFlow.service.InvitationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class InvitationServiceImpl implements InvitationService {

    @Autowired
    private InvitationRepository invitationRepo;

    @Autowired
    private EmailService emailService;

    @Override
    public void sendInvitation(String email, Integer projectId) {
        String inviteToken = UUID.randomUUID().toString();
        Invitation invitation = new Invitation();
        invitation.setEmail(email);
        invitation.setToken(inviteToken);
        invitation.setProjectId(projectId);
        invitationRepo.save(invitation);

        String inviteLink = "http://localhost:5173/accept_invitaion?token="+inviteToken;
        emailService.sendEmailWithToken(email, inviteLink);
    }

    @Override
    public Invitation acceptInvitation(String token, Integer userId) {
        Optional<Invitation> invitation = invitationRepo.findByToken(token);
        if(invitation.isEmpty()){
            throw new InvalidRequest("Invalid Invitation token");
        }
        return invitation.get();
    }

    @Override
    public String getTokenByUserMail(String userEmail) {
        Optional<Invitation> invitation = invitationRepo.findByEmail(userEmail);
        if(invitation.isEmpty()){
            throw new InvalidRequest("Token not Found");
        }
        return invitation.get().getToken();
    }

    @Override
    public void deleteToken(String token) {
        Optional<Invitation> invitation = invitationRepo.findByToken(token);
        if(invitation.isEmpty()){
            throw new InvalidRequest("Token not Found");
        }
        invitationRepo.delete(invitation.get());
    }
}
