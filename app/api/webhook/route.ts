
import { stripe } from "@/lib/stripe";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    const payload = await req.text();
    const res = JSON.parse(payload);

    const sig = req.headers.get("Stripe-Signature");

    const dateTime = new Date(res?.created * 1000).toLocaleDateString();
    const timeString = new Date(res?.created * 1000).toLocaleDateString();

    try {
        let event = stripe.webhooks.constructEvent(
            payload,
            sig!,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
        console.log("Event", event?.type);

        return NextResponse.json({ status: "sucess", event: event.type, response: res });
    } catch (error) {
        return NextResponse.json({ status: "Failed", error });
    }
}