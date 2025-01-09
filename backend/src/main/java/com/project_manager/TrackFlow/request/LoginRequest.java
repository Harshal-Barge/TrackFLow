package com.project_manager.TrackFlow.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
