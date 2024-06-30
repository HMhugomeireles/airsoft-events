import { defaultUrl } from "@/utils/utils";
import { stripe } from "../index";

type Props = {
    product: {
        amount: number;
        productName: string;
        productDescription: string;
    }
    customer: {
        email: string;
    }
}


export async function createStripeCheckoutLink({
    customer,
    product
}: Props) {
    const domain = defaultUrl;
    const session = await stripe.checkout.sessions.create({
        return_url: `${domain}/event-detail/buy-ticket`,
        success_url: `${domain}/event-detail/thank-you`,
        cancel_url: `${domain}/event-detail/buy-ticket`,
        customer_email: customer.email,
        mode: 'payment',
        line_items: [{
            price_data: {
                unit_amount: product.amount * 100,
                currency: 'eur',
                product_data: {
                    name: product.productName,
                    description: product.productDescription
                }
            },
            quantity: 1
        }],
        submit_type: 'pay'
    })
    
    return session.url
}