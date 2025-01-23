package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.Subscription;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.service.SubscriptionService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<Subscription> getUserSubscription(
            @RequestHeader("Authorization") String jwtToken
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        Subscription subscription = subscriptionService.getUsersSubscription(user.getId());
        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

    @PatchMapping("/upgrade")
    public ResponseEntity<Subscription> upgradeSubscription(
            @RequestHeader("Authorization") String jwtToken,
            @RequestParam PlanType planType
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        Subscription subscription = subscriptionService.upgradeSubscription(user.getId(), planType);
        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

}
