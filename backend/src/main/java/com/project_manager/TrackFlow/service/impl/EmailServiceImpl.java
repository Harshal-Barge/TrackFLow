package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmailWithToken(String userEmail, String link) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,"utf-8");
        helper.setSubject("Invitation to Join Project");
        helper.setText("Click the link to join Project Team : " + link);
        helper.setTo(userEmail);
        try{
            javaMailSender.send(mimeMessage);
        }catch (MailSendException e){
            throw new MailSendException("Failed to send email");
        }
    }
}
