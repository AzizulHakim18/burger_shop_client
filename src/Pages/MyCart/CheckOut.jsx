import React, { useContext } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../UseContext/CartContext';

const CheckOut = () => {


    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    const subTotall = cartItems.reduce((acc, item) => acc + item.price, 0)


    // const tokenhandler = (token) => {
    //     console.log(token);
    // }

    return (
        <div>
            {/* <StripeCheckout

                amount={subTotall * 100}
                shippingAddress={true}
                billingAddress={true}
                token={tokenhandler}
                currency='BDT'
                stripeKey='pk_test_51Pzv3308Yr04JaH0xjqvQc7zvSABKYjlZWz00M12AX7d963PMjM5lqLgQQ5uNsZgyStuD6KucSl4y71NsAmzribA00Gc9fCiV2'
            >

                <button type="button"
                    className="btn btn-outline w-full ml-2">
                    Pay Online
                </button>

            </StripeCheckout> */}
        </div>
    );
};

export default CheckOut;