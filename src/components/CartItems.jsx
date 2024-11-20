import React, { useEffect, useState } from 'react';
import { products } from './products'; // Import your products file
import {useDispatch} from 'react-redux'
import { changeQuantity } from "../store/cart";


function CartItems(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null); // Start with null
  const dispatch = useDispatch();

  useEffect(() => {
    // Combine all products arrays into one
    const allProducts = [
      ...products.products1,
      ...products.products2,
      ...products.products3,
      ...products.products4,
      ...products.products5,
      ...products.products6,
    ];

    // Find the product by productId
    const findDetail = allProducts.find(product => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () =>{
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1
    }))
  }

  const handleAddQuantity = () =>{
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1
    }))
  }

  return (
    <div className="flex justify-between">
      {detail ? (
        <div className="flex p-5 h-[150px] bg-white w-full gap-4 border-b-[1px] border-gray-300">
          <img src={detail.image} className="h-[120px] w-[110px]" alt={detail.name} />
          <div className="w-[70%]">
            <h3 className="text-xl mb-1 text-gray-600 font-semibold">{detail.name}</h3>
            <p className="font-bold text-gray-900 text-lg">${detail.price * quantity}</p>
            <div className="w-full flex mt-6 justify-end">
              <button className="bg-gray-200 rounded-tl-xl rounded-bl-xl w-8 h-8 text-2xl font-bold flex items-center justify-center text-gray-800"  onClick={handleMinusQuantity} >-</button>
              <span className="px-2 py-1">{quantity}</span>
              <button className="bg-gray-200 rounded-tr-xl rounded-br-xl w-8 h-8 text-2xl font-bold flex items-center justify-center text-gray-800" onClick={handleAddQuantity}>+</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CartItems;
