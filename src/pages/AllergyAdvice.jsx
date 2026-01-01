import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import advice1 from '../assets/Advice1.png'
import advice2 from '../assets/Advice2.png'
import advice3 from '../assets/Advice3.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import img from '../assets/adv.png'

function AllergyAdvice() {
  return (
    <div>
      <Header />
      <div className='w-full h-[611px] flex items-center justify-around px-40 '>
        <div className='w-[576px] h-[391px] flex flex-col justify-around py-10 '>
          <h1 className='text-[#0C6967] italic font-Allura text-5xl'>Allergy Advices</h1>
          <div className='w-full h-[220px] space-y-2.5 '>
            <h1 className='text-[#6B788E]'>AT OUR RESTAURANT</h1>
            <h1 className='text-2xl font-bold text-justify'>We use only the freshest and highest quality ingredients in all our dishes,
              <span className='text-orange-500'> and offer transparency in our ingredient labeling.</span></h1>
          </div>
        </div>
        <div className='w-[494px] h-[499px] '>
          <img src={advice1} alt='image' />
        </div>
      </div>
      <div className='w-full h-[2300px] flex flex-col items-center '>
        <div className='w-[1128px] h-[128px]  flex items-center justify-center gap-5 '>
          <div className='w-[200]'><img src={left} alt="imgleft" /></div>
          <h1 className='text-2xl  '><span className='text-orange-500 font-bold '>Ingredient's</span> Used</h1>
          <div className='w-[200]'><img src={right} alt="imgright" /></div>

        </div>
        <div className='relative top-0 left-0 w-full space-y-10'>


          <div className='absolute left-72 top-32 w-[500px] h-46 bg-white  border-2 border-[#0C6967] p-10 rounded-2xl  ml-36 font-bold '>
            <h1 className='text-2xl'>For the Dough</h1>
            <div className='mt-3 space-y-2'>
              <li className='text-orange-500'><span className='text-black'>120 gms refined flour</span></li>
              <li className='text-orange-500'><span className='text-black'>1/4 tsp baking powder</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp salt water (for kneading)</span></li>
            </div>
          </div>
          <div className='absolute left-72 top-[400px] w-[500px] h-fit bg-white  border-2 border-[#0C6967] p-10 rounded-2xl  ml-36 font-bold '>
            <h1 className='text-2xl'>For the Chicken Filling:</h1>
            <div className='mt-3 space-y-2'>
              <li className='text-orange-500 '><span className='text-black'>1 cup chicken (minced)</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 cup onions, finely chopped</span></li>
              <li className='text-orange-500'><span className='text-black'>1/4 tsp black pepper powder</span></li>
              <li className='text-orange-500'><span className='text-black'>1 tbsp oil</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp garlic paste</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp soya sauce</span></li>
              <li className='text-orange-500'><span className='text-black'>Salt</span></li>
              <li className='text-orange-500'><span className='text-black'>1/4 tsp vinegar</span></li>
            </div>
          </div>
          <div className='absolute left-72 top-[900px] w-[500px] h-fit bg-white  border-2 border-[#0C6967] p-10 rounded-2xl  ml-36 font-bold '>
            <h1 className='text-2xl'>For the Vegetarian Filling:</h1>
            <div className='mt-3 space-y-2'>
              <li className='text-orange-500'><span className='text-black'>1 cup cabbage and carrots, grated</span></li>
              <li className='text-orange-500'><span className='text-black'>2 tbsp onions , finely chopped</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp garlic, finely chopped</span></li>
              <li className='text-orange-500'><span className='text-black'>1 tbsp oil</span></li>
              <li className='text-orange-500'><span className='text-black'>1/4 tsp vinegar</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp soya sauce</span></li>
              <li className='text-orange-500'><span className='text-black'>to taste salt</span></li>
              <li className='text-orange-500'><span className='text-black'>to taste pepper</span></li>
              <li className='text-orange-500'><span className='text-black'>1 tbsp cornflour</span></li>
            </div>
          </div>
          <div className='absolute left-72 top-[1400px] w-[500px] h-fit bg-white  border-2 border-[#0C6967] p-10 rounded-2xl  ml-36 font-bold '>
            <h1>For Chilli Sauce:</h1>
            <div className='mt-3 space-y-2'>
              <li className='text-orange-500'><span className='text-black'>25 gram garlic, peeled</span></li>
              <li className='text-orange-500'><span className='text-black'>6 gms whole red chillies</span></li>
              <li className='text-orange-500'><span className='text-black'>3 tbsp vinegar</span></li>
              <li className='text-orange-500'><span className='text-black'>3 tbsp vinegar</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp garlic paste</span></li>
              <li className='text-orange-500'><span className='text-black'>1/2 tsp soya sauce</span></li>
              <li className='text-orange-500'><span className='text-black'>to taste salt</span></li>
              <li className='text-orange-500'><span className='text-black'>to taste pepper</span></li>
              <li className='text-orange-500'><span className='text-black'>to taste sugar</span></li>
            </div>
          </div>

          <div className='w-[521px] h-[490px]  bg-[url(./assets/advice3.png)] ml-60 '>

          </div>
          <div className='w-full h-[1030px] bg-[url(./assets/advice2.png)] '>

          </div>
          <div className='w-[521px] h-[490px]  bg-[url(./assets/advice3.png)] ml-auto mr-60 '>
          </div>
        </div>

      </div>
      <div className=' flex flex-col justify-center items-center py-10'>
        <div className='w-[1128px] h-[128px]  flex items-center justify-center gap-5 '>
          <div className='w-[200]'><img src={left} alt="imgleft" /></div>
          <h1 className='text-2xl  '><span className='text-orange-500 font-bold '>Ingredient's</span> Used</h1>
          <div className='w-[200]'><img src={right} alt="imgright" /></div>
        </div>
        <p className='w-[1128px] h-[696px]'>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna.
          <br />
          <br />
          Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.
          <br />
          <br />
          Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.
          <br />
          <br />
          Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.
          <br />
          <br />
          Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.</p>

        <div className='w-[1128px] h-[305px] flex flex-col items-center justify-center text-center bg-gray-100 rounded-2xl m-auto'>
          <div className='space-y-1'>
            <h1 className='text-2xl font-bold mt-2.5'>Scan the QR code</h1>
            <p className='text-sm text-[#6B788E]'>You can also check the allergy advices using your phone as well</p>
          </div>
          <div className='w-[192px] h-[245px] p-10'><img src={img} alt="" /></div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AllergyAdvice