import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addToCartHandler = () => addItem(item);

  const backgroundImageStyle = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="collection-item">
      <div className="image" style={backgroundImageStyle} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={addToCartHandler} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;