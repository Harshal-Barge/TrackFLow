package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.response.AuthResponse;
import com.project_manager.TrackFlow.request.LoginRequest;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("signup")
    public ResponseEntity<AuthResponse> signUp(@RequestBody User user){
        AuthResponse res = authService.createUser(user);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody LoginRequest loginRequest){
        AuthResponse res = authService.loginUser(loginRequest);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
