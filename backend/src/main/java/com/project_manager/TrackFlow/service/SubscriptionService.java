package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.Subscription;
import com.project_manager.TrackFlow.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);

    Subscription getUsersSubscription(Integer userId);

    Subscription upgradeSubscription(Integer userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
