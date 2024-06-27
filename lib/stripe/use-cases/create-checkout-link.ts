import { defaultUrl } from "@/utils/utils";
import { stripe } from "../index";

type Props = {
    amount: number;
    productName: string;
    productDescription: string;
}


export async function createStripeCheckoutLink({
    amount,
    productName,
    productDescription
}: Props) {
    const domain = defaultUrl;
    const session = await stripe.checkout.sessions.create({
        success_url: `${domain}/event-detail/thank-you`,
        cancel_url: `${domain}/event-detail/buy-ticket`,
        mode: 'payment',
        line_items: [{
            price_data: {
                unit_amount: amount * 100,
                currency: 'eur',
                product_data: {
                    name: productName,
                    description: productDescription
                }
            },
            quantity: 1
        }],
        submit_type: 'pay'
    })
    
    return session.url
}