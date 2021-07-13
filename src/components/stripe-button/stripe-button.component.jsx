import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51JClxDJkUdlMW4Ik0YchGoYgCMRw1MG3eWhw5nNqJks3S0I3AWANcZwS22WCrJFNh4OsxEgAdLHSX6evEVknkZmk001n0LyxtK'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey} 
        />
    )
}


export default StripeCheckoutButton;