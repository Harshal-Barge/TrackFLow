import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getUserSubscription, upgradeSubscription } from '@/redux/Subscription/Action'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const UpgradePlanSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscription);

    const queryParams = new URLSearchParams(location.search)

    const paymentId = queryParams.get("payment_id")
    const planType = queryParams.get("planType")

    useEffect(() => {
        dispatch(upgradeSubscription({ planType }))
        dispatch(getUserSubscription())
    }, [])

    return (
        <div className='flex justify-center'>
            <Card className="mt-20 p-6 space-y-5 flex flex-col items-center">
                <div className='flex items-center gap-4'>
                    <CheckCircledIcon className='h-9 w-9 text-green-500' />
                    <p className='text-xl'>Plan Upgraded Successfully</p>
                </div>
                <div className='space-y-3'>
                    <p><span className='text-green-500'>start date </span>: {subscription.userSubscription?.startDate}</p>
                    <p><span className='text-red-500'>end date </span>: {subscription.userSubscription?.endDate}</p>
                    <p className=''>plan type : {subscription.userSubscription?.planType}</p>
                </div>
                <Button onClick={() => navigate("/")}>Go to home</Button>
            </Card>
        </div>
    )
}
