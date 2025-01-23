package com.project_manager.TrackFlow.controller;

import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.response.PaymentLinkResponse;
import com.project_manager.TrackFlow.service.PaymentService;
import com.project_manager.TrackFlow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwtToken
    ) {
        User user = userService.findUserProfileByJwt(jwtToken);
        PaymentLinkResponse response = paymentService.createPaymentLink(planType, user);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
