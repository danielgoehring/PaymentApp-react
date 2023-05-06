import React from 'react'
import image from './dogpicture.jpg';
import AuthDetails from './components/AuthDetails';


const Home = () => {
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
                    $0.00 in PaymentApp
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
                <button id="porButton">Make Payment</button>
            </div>
        </div>
        <div className="container-right">
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
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                            
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                         
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                           
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                        
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                            
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                            
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                            
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
            <div className="name-section-container">
                <div className="name-section">
                    <div className="name-img">
                        <img src={image} alt="" className="other-pro-pic"/>
                    </div>
                    <div className="otherinfo">
                        <div className="name-i">
                            <p><span className="bold">user</span> paid <span className="bold">Daniel Goehring</span></p>
                        </div>
                        <div className="i1">
                        
                        </div>
                        <div className="occasion">
                            for work
                        </div>
                        <div className="emojies">
                            
                        </div>
                    </div>
                </div>
                
                <div className="divider"></div>
            </div>  
        </div>
        </div>
    )
}

export default Home
