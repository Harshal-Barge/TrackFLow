package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.config.JwtProvider;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.UserRepository;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
        String email = JwtProvider.getEmailFromToken(jwt);
        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        Optional<User> user = userRepo.findByEmail(email);
        if(user.isEmpty()){
            throw new Exception("User Not Found");
        }
        return user.get();
    }

    @Override
    public User findUserById(Integer id) throws Exception {
        Optional<User> user = userRepo.findById(id);
        if(user.isEmpty()){
            throw new Exception("User Not Found");
        }
        return user.get();
    }

    @Override
    public User updateProjectsCreated(User user, int number) throws Exception {
        user.setProjectsCreated(user.getProjectsCreated() + number);
        return userRepo.save(user);
    }
}
