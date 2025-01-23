package com.project_manager.TrackFlow.service;

import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.response.PaymentLinkResponse;

public interface PaymentService {
    PaymentLinkResponse createPaymentLink(PlanType planType, User user);
}
