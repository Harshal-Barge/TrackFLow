package com.project_manager.TrackFlow.Exceptions;

public class UserNotFound extends RuntimeException {
    public UserNotFound(){
        super("User Not Found");
    }
}
