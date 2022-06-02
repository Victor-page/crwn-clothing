import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const handleGoToCheckoutClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items-list">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckoutClick}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);