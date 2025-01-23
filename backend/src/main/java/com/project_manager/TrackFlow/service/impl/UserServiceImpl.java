package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.ResourceNotFound;
import com.project_manager.TrackFlow.config.JwtProvider;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.UserRepository;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public User findUserProfileByJwt(String jwt) {
        String email = JwtProvider.getEmailFromToken(jwt);
        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) {
        Optional<User> user = userRepo.findByEmail(email);
        if(user.isEmpty()){
            throw new ResourceNotFound("User Not Found");
        }
        return user.get();
    }

    @Override
    public User findUserById(Integer id) {
        Optional<User> user = userRepo.findById(id);
        if(user.isEmpty()){
            throw new ResourceNotFound("User Not Found");
        }
        return user.get();
    }

    @Override
    public User updateProjectsCreated(User user, int number) {
        user.setProjectsCreated(user.getProjectsCreated() + number);
        return userRepo.save(user);
    }
}
