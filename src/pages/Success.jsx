import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { cartContext } from "../store/CartProvider";
import Header from "../components/Header";

function Success() {
  const{dispatch} = useContext(cartContext);
  const [SearchParams] = useSearchParams();
  let res = atob(SearchParams.get("data"));
  res = JSON.parse(res);
  // console.log(SearchParams.get("data"));
  // console.log(res);
  useEffect(()=>{
    dispatch({type: "ClearCart"})
  },[])


  return (
    <div className="h-screen flex flex-col bg-gray-300 ">
      <Header />
      <div className="w-96 m-auto space-y-5 p-16 rounded-2xl  bg-white ">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/060/195/196/small/3d-green-check-mark-icon-on-transparent-background-png.png"
          alt="img"
          width={300}
          className=""
        />
        <div className="w-fit text-center m-auto  space-y-2.5 ">
          <div className="space-y-2.5">
            <h1 className="text-2xl text-green-500">Payment Successful</h1>
            <h1>Transaction Number: {res.transaction_code}</h1>
          </div>
          <div className="space-y-2.5">
            <h1>
              Amount Paid: <span>Rs. {res.total_amount}</span>
            </h1>
            <h1>Paid by E sewa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
