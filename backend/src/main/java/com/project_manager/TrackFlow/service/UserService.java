package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.User;

public interface UserService {

    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Integer id) throws Exception;

    User updateProjectsCreated(User user, int number) throws Exception;

}
