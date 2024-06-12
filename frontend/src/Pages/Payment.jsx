import React from "react";
import './CSS/Payment.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const Payment = () => {
    const handlePay =()=>{
        NotificationManager.success('Your order has been placed.', 'Payment Successfully');
    }
  return (
    <div className="Payment">
    <div className="payment">
      <form className="payment-form">
        <h1>Payment Page</h1>
        <div className="payment-form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div className="payment-form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <div className="payment-form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input type="text" id="cardName" name="cardName" required />
        </div>
        <button type="submit" onClick={handlePay}>Pay Now</button>
      </form>
    </div>
    <NotificationContainer />
    </div>
    
  );
};

export default Payment;
