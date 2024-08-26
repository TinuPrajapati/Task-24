import React from "react";
import { Link } from "react-router-dom";
import { useItem } from "../../Context/ItemContext";

function Cart() {
  const {item,price}=useItem();

  
  return (
    <div className="w-[40%] flex flex-col gap-4">
      <h1 className="text-2xl font-serif w-full bg-sky-500 text-white font-semibold text-center rounded-lg py-1">
        Cart
      </h1>
      <div className="w-full bg-slate-600 py-2 px-4 rounded-md flex flex-col gap-2">
        {item.map((el, index) => (
          <div key={index} className="w-full h-16 flex bg-white text-black rounded-lg shadow-lg  items-center px-2 gap-[1vw] py-1">
            <img src={el.image} className="w-[15%] h-full rounded-md" />
            <div className="w-[67%]">
              <p>{el.shoesName}</p>
              <p className="text-sm">${el.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-2xl w-full flex flex-col items-center gap-2 bg-sky-500 text-white font-semibold text-center rounded-lg py-2">
        <p>
          <span className="font-serif">Total :</span> ${price}
        </p>
        <Link
          to="/"
          className="py-2 px-4 border-2 rounded-lg hover:bg-white hover:text-sky-500 shadow-xl active:scale-95"
        >
          go back to Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
