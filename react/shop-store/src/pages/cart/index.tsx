import { useSelector } from "react-redux";
import { CartState } from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state: { cart: CartState }) => state.cart);

  console.log(cart);

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      {cart &&
        cart?.items?.map((item) => {
          return (
            <div className="w-1/2 h-max rounded-md shadow-md my-10 grid grid-cols-2">
              <div className="p-5 rounded-md">
                <img src={item?.image} width={200} height={200} />
              </div>
              <div className="flex flex-col gap-10 my-5">
                <div>
                  <p>{item?.title}</p>
                </div>
                <div className="font-semibold">
                  <p>Total Items : {item?.quantity}</p>
                  <p>Total Price : {item?.price}</p>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Cart;
