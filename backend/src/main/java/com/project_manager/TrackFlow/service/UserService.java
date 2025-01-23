package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.User;

public interface UserService {

    User findUserProfileByJwt(String jwt);

    User findUserByEmail(String email);

    User findUserById(Integer id);

    User updateProjectsCreated(User user, int number);

}
