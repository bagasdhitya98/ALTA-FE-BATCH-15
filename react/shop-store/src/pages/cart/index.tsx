const Cart = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-1/2 h-max rounded-md shadow-md my-10 grid grid-cols-2">
        <div className="p-5 rounded-md">
          <img width={200} height={200} />
        </div>
        <div className="flex flex-col gap-10 my-5">
          <div>
            <p>Lorem ipsum consectetur dolor sit amet</p>
          </div>
          <div className="font-semibold">
            <p>Total Items : 4</p>
            <p>Total Price : 10,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
