import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.5)', // Transparent gray background
      display: 'flex', // Add flexbox layout to center the modal box
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ 
        display: 'flex', // Add flexbox layout to center the modal box
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%', // Adjust to desired size
        maxWidth: '400px', // Maximum width for mobile view
        backgroundColor: 'rgb(44, 44, 44)', 
        padding: '1em', 
        borderRadius: '10px', // Rounded corners
      }}>
        {children}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button style={{ marginTop: '16px' }} className='addPayment' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;