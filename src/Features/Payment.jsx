import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const { state } = useLocation();
  const navigation = useNavigate();
  // console.log(state.TotalAmount)
  let total_amount = state.TotalAmount;
  let transaction_uuid = uuidv4();
  let message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
  let hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);


  console.log(uuidv4())

  return (
    <div className=' '>

      <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST"  className='relative w-96 h-72 flex justify-center items-center mt-20 m-auto bg-white  '>
        <input type="hidden" id="amount" name="amount" value={total_amount} required />
        <input type="hidden" id="tax_amount" name="tax_amount" value="0" required />
        <input type="hidden" id="total_amount" name="total_amount" value={total_amount} required />
        <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required />
        <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
        <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
        <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
        <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/success" required />
        <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/failer" required />

        <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
        <input type="hidden" id="signature" name="signature" value={hashInBase64} required />
        <div className='flex flex-col gap-5 text-xl text-center'>
          <div><p>Total Amount: {total_amount}</p></div>
          <div className='flex gap-5'>

            <input value="Submit" type="submit" className=' flex-1 py-2 px-8  bg-orange-500 text-white border' />
          </div>
        </div>
      </form>
      <button className='absolute left-[705px] top-[275px] bg-orange-500 text-white px-8 py-2' onClick={() => {
        navigation('/cartpage')
      }}>Cancel</button>


    </div>
  )
}

export default Payment