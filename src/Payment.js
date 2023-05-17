import React, { useState } from 'react'
import image from './dogpicture.jpg';

const Payment = (props) => {
    return(
        <div>
        <div className="btn-swap-container">
               
               </div>
               <div style={{textAlign: 'right'}}>
                       {/* <AuthDetails /> */}
                   </div>
               <div className="name-section-container">
                   
                   <div className="name-section">
                       <div className="name-img">
                           <img src={image} alt="" className="other-pro-pic"/>
                       </div>
                       <div className="otherinfo">
                           
                           <div className="name-i">
                               <p><span className="bold">you</span> paid <span className="bold">${props.amount}</span> to <span className="bold">{props.name} </span></p>
                           </div>
                           <div className="i1">
                               
                           </div>
                           <div className="occasion">
                              for  {props.reason}
                           </div>
                           <div style={{marginTop:"14px"}}>
                            <div>
                           <button className="removePay" onClick={props.onRemove}>Remove</button>
                           </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="divider"></div>
               </div> 

        </div>
    )
}

export default Payment;