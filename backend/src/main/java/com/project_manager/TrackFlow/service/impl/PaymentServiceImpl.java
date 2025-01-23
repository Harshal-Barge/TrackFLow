package com.project_manager.TrackFlow.service.impl;

import com.project_manager.TrackFlow.Exceptions.PaymentException;
import com.razorpay.RazorpayClient;
import com.razorpay.PaymentLink;
import com.project_manager.TrackFlow.model.PlanType;
import com.project_manager.TrackFlow.model.User;
import com.project_manager.TrackFlow.response.PaymentLinkResponse;
import com.project_manager.TrackFlow.service.PaymentService;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Override
    public PaymentLinkResponse createPaymentLink(PlanType planType, User user) {
        int amount = 7900;
        if(planType.equals(PlanType.ANNUALLY)){
            amount = (int)((amount * 12) * 0.7);;
        }
        try{
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
            JSONObject paymentLinkReq = new JSONObject();
            paymentLinkReq.put("amount", amount);
            paymentLinkReq.put("currency", "INR");

            JSONObject customer = new JSONObject();
            customer.put("name", user.getFullName());
            customer.put("email", user.getEmail());
            paymentLinkReq.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkReq.put("notify", notify);

            paymentLinkReq.put("callback_url", "http://localhost:5173/upgrade_plan/success?planType="+planType);

            PaymentLink payment = razorpay.paymentLink.create(paymentLinkReq);

            return new PaymentLinkResponse(payment.get("id"), payment.get("short_url"));

        } catch (RazorpayException e) {
            throw new PaymentException("Failed to Process Payment");
        }
    }
}
