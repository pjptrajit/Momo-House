import Header from '../components/Header'
import Footer from '../components/Footer'
import serv from "../assets/service1.png"
import { RiVideoFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import image1 from "../assets/service3.png"
import image2 from "../assets/service4.png"
import image3 from "../assets/service5.png"

function Services() {
  return (
    <div>
      <Header />
      <div>
        <div className='w-full h-screen flex justify-around items-center gap-5  px-32'>
          <div className='w-fit h-70 space-y-4 '>
            <h1 className='text-5xl text-[#0C6967] font-Allura'>Our Services</h1>
            <div className='w-full h-[122px] space-y-2 '>
              <p className='text-[#6B788E]'>KNOWING OUR CUSTOMERS NEEDS</p>
              <h1 className='text-[39px] font-bold'><span className='text-[#D95103]'>We're more than just momos.</span><br /> We're a full-service dining experience.</h1>
            </div>
          </div>
          <div className='w-[417px] h-[499px] '>
            <img src={serv} alt="image" />
          </div>
        </div>
        <div className="w-full h-[608px] relative bg-black/30 bg-[url(./assets/service2.png)] ">
          <div className='w-[837px] absolute top-96 left-28 text-white  '>
            <div className='w-full h-[97px] '>
              <h1 className='text-[49px] font-bold'>Dine With Us</h1>
              <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
            </div>
            <div>
              <NavLink to="https://www.youtube.com/" target="_blank">
                <button className="flex items-center  px-6 py-3 bg-[#0C6967] text-white mt-10 rounded-full">
                  <RiVideoFill size={20} className="mr-2" />
                  Watch the Video
                </button>
              </NavLink>
            </div>
          </div>

        </div>
        <div className='w-full h-[1176px] flex flex-col justify-around items-center '>
          <div className='w-[1128px] h-[448px] flex justify-between '>
            <div className='w-[456px] h-[420px] flex flex-col justify-between p-10 '>
              <div className='h-fit space-y-1.5'>
                <img src={image1} />
                <h1 className='font-bold text-2xl'>Private Party</h1>
                <p className='text-[#6B788E]'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
              </div>
              <div className='w-full flex justify-around gap-1 p-3 rounded-2xl shadow'>
                <div>
                  <h1 className='text-[#0C6967] font-bold'>Scan the QR code</h1>
                  <p className='text-[#6B788E] text-sm'>You can also check about the service</p>
                </div>
                <div>
                  <img src={image2} alt="" />
                </div>

              </div>
            </div>
            <div className='w-[552px] h-[448px] '>
              <img src={image3} alt="" className='rounded-2xl' />
            </div>
          </div>
          <div className='w-[1128px] h-[448px] flex justify-between '>
            <div className='w-[552px] h-[448px] '>
              <img src={image3} alt="" className='rounded-2xl' />
            </div>
            <div className='w-[456px] h-[420px] flex flex-col justify-between p-10 '>
              <div className='h-fit space-y-1.5'>
                <img src={image1} />
                <h1 className='font-bold text-2xl'>Categring</h1>
                <p className='text-[#6B788E]'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
              </div>
              <div className='w-full flex justify-around items-center gap-1 p-3 rounded-2xl shadow'>
                <div>
                  <h1 className='text-[#0C6967] font-bold'>Scan the QR code</h1>
                  <p className='text-[#6B788E] text-sm'>You can also check about the service</p>
                </div>
                <div>
                  <img src={image2} alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[385px] '>
          <div className='w-[1128px] h-[305px] flex flex-col items-center justify-center gap-5 text-center bg-gray-100 rounded-2xl m-auto'>
            <div className='space-y-1'>
              <h1 className='text-2xl font-bold'>Got any Queries?</h1>
              <p className='text-sm text-[#6B788E]'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
            </div>
            <div><button className='px-4 py-2 bg-[#0C6967] text-white rounded-2xl'>Get In Touch</button></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services