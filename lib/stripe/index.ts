import Stripe from "stripe";

const productId = 'prod_QGmQZyDT5S7S70'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20'
});