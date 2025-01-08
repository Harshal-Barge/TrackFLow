package com.project_manager.TrackFlow.Exceptions;

public class UserAlreadyExists extends RuntimeException {

    public UserAlreadyExists(String email){
        super("User with this Email already exists, Email : " + email);
    }

}
