package com.project_manager.TrackFlow.Exceptions;

public class ProjectNotFound extends RuntimeException {
    public ProjectNotFound(){
        super("Project Not Found");
    }
}
