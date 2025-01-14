package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.request.LoginRequest;
import com.project_manager.TrackFlow.response.AuthResponse;

public interface AuthService {
    AuthResponse createUser(User user);

    AuthResponse loginUser(LoginRequest loginRequest);
}
