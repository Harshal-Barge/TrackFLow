package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.UserAlreadyExists;
import com.project_manager.TrackFlow.config.JwtProvider;
import com.project_manager.TrackFlow.response.AuthResponse;
import com.project_manager.TrackFlow.request.LoginRequest;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.UserRepository;
import com.project_manager.TrackFlow.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserDetailsService userDetailsService;

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

    public AuthResponse loginUser(LoginRequest loginRequest){
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getEmail());
        if(!passwordEncoder.matches(loginRequest.getPassword(), userDetails.getPassword())){
            throw new BadCredentialsException("Incorrect password");
        }
        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails.getUsername(),userDetails.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        return new AuthResponse(jwt, "SignIn Successful");
    }

}
