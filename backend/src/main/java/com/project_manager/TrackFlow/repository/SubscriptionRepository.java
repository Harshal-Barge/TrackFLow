package com.project_manager.TrackFlow.repository;

import com.project_manager.TrackFlow.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Integer> {
    Subscription findByUserId(Integer userId);
}
