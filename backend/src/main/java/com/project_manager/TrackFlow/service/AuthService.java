package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.Exceptions.UserAlreadyExists;
import com.project_manager.TrackFlow.config.JwtProvider;
import com.project_manager.TrackFlow.model.AuthResponse;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthResponse createUser(User user){
        Optional<User> usr = userRepository.findByEmail(user.getEmail());
        if(usr.isPresent()){
            throw new UserAlreadyExists(user.getEmail());
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        return new AuthResponse(jwt,"SignUp Successful");
    }

}
