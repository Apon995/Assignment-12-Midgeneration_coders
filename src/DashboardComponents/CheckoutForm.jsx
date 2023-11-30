import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../CustomHooks_folder/useFetch";
import useAuth from "../CustomHooks_folder/useAuth";
import Swal from "sweetalert2";




const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { data, user } = useAuth();
    const axiosFetch = useFetch();
    const [clientSecret, setClientSecret] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        axiosFetch.post('/create-prement-intent', { salary: data?.Salary })
            .then(res => {

                setClientSecret(res?.data?.clientSecret)

            })
            .catch(error => console.log(error))

    }, [data])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error?.message)
            setTimeout(() => {
                setError(null)
            }, 4000);
            return;

        }


        // ---confirmpayment--


        const { paymentIntent, error: confrimpayerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anoymonus',
                    email: user?.email || 'unknown email'

                }
            }
        })

        if (confrimpayerror) {
            return setError(confrimpayerror?.message)
        }
        else {

            if (paymentIntent.status == 'succeeded') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Payment Successfull !",
                    text: `Your transition id is : ${paymentIntent?.id}`,
                    showConfirmButton: false,
                    timer: 2000

                });


                const obj = {
                    "Transition_Id": paymentIntent?.id,
                    "Payed_salary": paymentIntent?.amount,
                    "Payment_method": paymentIntent?.payment_method_types[0] || 'unknown',
                    "Pay_email": user.email || 'Unknown email',
                    "pay_name": user.displayName || "anoymous",
                    "payment_recieve_email": data.Email || "unknown email",
                    "Payment_receive_name": data.Name || 'anoymous',
                    "salary_month": data.MonthName || '',
                    "salary_year": data.YearName || '',
                    "salary": data.Salary || ''

                }

                axiosFetch.post('/paymentInfo', obj)
                    .then(res => {
                        if (res?.data?.insertedId) {
                            setSuccess('Your paysuccessfull ! This info save to database !')
                            setTimeout(() => {
                                setSuccess(null)
                                navigate('/Dashboard/employee')
                            }, 4500);
                        }
                    })
                    .catch(error => console.log(error));



            }
        }








    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            {error && <p className="py-3 text-red-700 font-medium text-base absolute top-[71px] ">{error} Try Again please !</p>}
            {success && <p className="py-3 text-blue-700 font-medium text-base absolute top-[71px] ">{success}</p>}
            <div className="border-2 py-4 px-2 border-[#adadad] rounded-md">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'black',
                                    fontSize: '18px'
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>
            <br />
            <button className="px-8 py-2 text-white rounded-md font-medium bg-[#2742fd]" type="submit" disabled={!stripe || !clientSecret}>
                Pay Now
            </button>


        </form>
    );
};

export default CheckoutForm;