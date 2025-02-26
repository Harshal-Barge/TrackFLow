import React, { useEffect } from 'react'
import { SubscriptionCard } from './SubscriptionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSubscription } from '@/redux/Subscription/Action'
const monthlyPlan = [
    "Create unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom WorkFlows"
]
const annualPlan = [
    "Create unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything that monthly plan has"
]

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control"
]
export const Subscription = () => {
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscription);

    useEffect(() => {
        dispatch(getUserSubscription());
    }, [])
    return (
        <div className='p-5'>
            <h1 className='text-4xl font-semibold py-5 pb-10 text-center'>Pricing</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
                <SubscriptionCard
                    data={{
                        planName: "Free",
                        features: freePlan,
                        planType: "FREE",
                        price: 0,
                        buttonName: subscription.userSubscription?.planType === "FREE" ? "Current Plan" : "Get Started"
                    }} />
                <SubscriptionCard
                    data={{
                        planName: "Monthly paid plan",
                        features: monthlyPlan,
                        planType: "MONTHLY",
                        price: 799,
                        buttonName: subscription.userSubscription?.planType === "MONTHLY" ? "Current Plan" : "Get Started"
                    }} />
                <SubscriptionCard
                    data={{
                        planName: "Annual paid plan",
                        features: annualPlan,
                        planType: "ANNUALLY",
                        price: 6711,
                        buttonName: subscription.userSubscription?.planType === "ANNUALLY" ? "Current Plan" : "Get Started"
                    }} />
            </div>
        </div>
    )
}
