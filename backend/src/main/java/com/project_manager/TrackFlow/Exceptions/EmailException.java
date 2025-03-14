package com.project_manager.TrackFlow.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class EmailException extends RuntimeException {
    public EmailException(String message) {
        super(message);
    }
}
