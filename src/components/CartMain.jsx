import React , {useState , useRef , useEffect} from 'react';
import { LuPlus } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import { products } from './products';

function CartMain({ handleCloseCart }) {
  const carts = useSelector(store => store.cart.items);

  const containerRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

   const allProducts = [
    ...products.products1,
    ...products.products2,
    ...products.products3,
    ...products.products4,
    ...products.products5,
    ...products.products6,
  ];

   // Calculate total price based on cart items and product details
  const totalPrice = carts.reduce((accumulator, item) => {
    const product = allProducts.find(prod => prod.id === item.productId);
    return product ? accumulator + product.price * item.quantity : accumulator;
  }, 0);

  useEffect(() => {
    if (containerRef.current) {
      if (containerRef.current.scrollHeight > 600) {
        setShouldScroll(true);
      } else {
        setShouldScroll(false);
      }
    }
  }, [carts]);


  return (
    <div className='h-[100vh] w-full flex  top-0 fixed z-[999]'>
    <div 
      className="w-[1000px] h-[100vh] bg-black opacity-[60%]"
      onClick={handleCloseCart}
    >
    </div>


    <div className="h-[100vh] w-[450px] flex flex-col bg-white">
    <div className='w-full flex justify-between p-2 items-center '>
        <p className="text-xl text-gray-600">Your Cart </p>
        <LuPlus className='text-3xl rotate-45 ' onClick={handleCloseCart} />
      </div>

        <div
          ref={containerRef}
          className={`flex flex-col h-[560px] gap-2  ${
            shouldScroll ? 'overflow-y-scroll' : ''
          }`}
        >
          {carts.map((item, key) => (
            <CartItems key={key} data={item} />
          ))}
        </div>
        <div className='flex w-full absolute bottom-1 p-2'>
          <p  className='py-3 px-10 font-bold rounded-xl text-xl '>${totalPrice.toFixed(2)}</p>
          <button className='py-3 bg-black px-20 font-bold rounded-xl text-xl text-white'>Pay now</button>
        </div>
      </div>
      
    </div>
  );
}

export default CartMain;
