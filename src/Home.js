import React, { useState, useEffect } from 'react'

import image from './dogpicture.jpg';
import AuthDetails from './components/AuthDetails';
import Payment from './Payment'
import Modal from './Modal';


const Home = () => {

  const [payments, setPayments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(2000);
  const [isBelowZero, setisBelowZero] = useState(false);
 
  useEffect(() => {
    if (balance < 0) {
        setisBelowZero(true);
    }
}, [balance])
  
  

  const removePayment = (indexToRemove) => {
    setPayments(payments.filter((payment, index) => index !== indexToRemove));
  };
  

  const makePayment = () => {
    setShowModal(true);
    setBalance(2000);
    setisBelowZero(false);
  };

  const addPayment = () => {
    
    setPayments([...payments, { name, reason, amount }]);
    setName("");
    setReason("");
    setShowModal(false);
    setAmount("");
    setBalance(balance-amount);
    
    
  };

    return (
        <div className="main-container">
            <div className="container-left">
            <div className="img-name-ct">
                <img src={image} alt="" className="profile-pic"/>
                <div className="name-ct">
                    <p style={{marginRight:'10px'}}>Hi,</p>
                    <div>
                    <AuthDetails />
                    </div>

                </div>
            </div>
            <div className="money-ct">
                <div className="m1">
                    ${balance} in PaymentApp
                </div>
                <div className="transfer-m">
                    Transfer Funds
                </div>
            </div>
            <div className="hr">
            
            </div>
            <div className="cred-container">
                <div className="credit-card">
                    <div className="cc">PaymentApp Credit Card</div>
                    <div className="cc2">You're invited to apply</div>
                </div>
                <div className="learn-more">Learn more</div>
            </div>
            
            <div className="button-ctn">
                <button id="porButton" onClick={makePayment}>Make Payment</button>
            </div>
        </div>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <h2>Make a Payment</h2>
            <label>
            <span style={{margin:'10px'}}>Name:</span>
            <input style={{color: 'white'}} value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
            <span style={{margin:'10px'}}>Amount:</span> 
            <input style={{color: 'white'}} value={amount} onChange={e => setAmount(e.target.value)} />
            </label>
            <label>
            <span style={{margin:'10px'}}>Reason:</span>
            <input style={{color: 'white'}} value={reason} onChange={e => setReason(e.target.value)} />
            </label>
            <div>
            <button className="addPayment" onClick={addPayment}>Add Payment</button>
            
            </div>
      </Modal>
      )}
        <div className="container-right">
        {payments.length === 0 ? (
                    <div style={{textAlign: 'center'}}><p>Click "make payment" button to make payments...</p>
                    
                    </div>
                    
                ) : (
                    <>
                    {balance >= 0 && !isBelowZero ? (
                    payments.map((payment, i) => (
                        <Payment key={i} name={payment.name} reason={payment.reason} amount={payment.amount} onRemove={() => removePayment(i)} />
                    ))
                    ) : <div style={{textAlign: 'center'}}><p style={{color: '#d42424'}}>You don't have enough funds. Please try again.</p></div>}
                    {/* {balance < 0 && (<div style={{textAlign: 'center'}}><p style={{color: '#d42424'}}>You don't have enough funds. Please try again.</p></div>)} */}

                    </>
                )}
        </div>
        </div>
    )
}

export default Home
