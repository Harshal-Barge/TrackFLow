package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.Subscription;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.repository.SubscriptionRepository;
import com.project_manager.TrackFlow.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepo;

    @Override
    public Subscription createSubscription(User user) {
        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setStartDate(LocalDate.now());
        subscription.setEndDate(LocalDate.now().plusMonths(12));
        subscription.setValid(true);
        subscription.setPlanType(PlanType.FREE);
        return subscriptionRepo.save(subscription);
    }

    @Override
    public Subscription getUsersSubscription(Integer userId) throws Exception {
        Subscription subscription = subscriptionRepo.findByUserId(userId);
        if(!isValid(subscription)){
            subscription.setPlanType(PlanType.FREE);
            subscription.setStartDate(LocalDate.now());
            subscription.setEndDate(LocalDate.now().plusMonths(12));
            subscription = subscriptionRepo.save(subscription);
        }
        return subscription;
    }

    @Override
    public Subscription upgradeSubscription(Integer userId, PlanType planType) throws Exception {
        Subscription subscription = subscriptionRepo.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setStartDate(LocalDate.now());
        if(planType.equals(PlanType.ANNUALLY)){
            subscription.setEndDate(LocalDate.now().plusMonths(12));
        }else{
            subscription.setEndDate(LocalDate.now().plusMonths(1));
        }
        return subscriptionRepo.save(subscription);
    }

    @Override
    public boolean isValid(Subscription subscription) {
        if(subscription.getPlanType().equals(PlanType.FREE)){
            return true;
        }
        LocalDate endDate = subscription.getEndDate();
        LocalDate currDate = LocalDate.now();
        return endDate.isAfter(currDate) || endDate.isEqual(currDate);
    }
}
