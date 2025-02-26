import api from "@/config/api"

export const createPayment = async ({ planType }) => {
    try {
        const { data } = await api.post(`/api/payment/${planType}`)
        if (data.paymentLinkUrl) {
            window.location.href = data.paymentLinkUrl;
        }
    } catch (error) {
        console.log(error)
    }
}