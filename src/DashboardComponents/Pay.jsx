import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";



function Pay() {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);




    return (
        <div className='min-h-screen w-full p-9'>
            <h1 className="text-3xl font-medium text-[#343a40]">Pay Now</h1>

            <br />
            <Elements stripe={stripePromise}>
                <CheckoutForm />

            </Elements>
        </div>
    )
}

export default Pay