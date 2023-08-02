import React from 'react'
import Adrino from '../../Assets/adrino.jpg'
const Home3 = () => {
  return (
    <><section class="text-gray-400 bg-gray-900 body-font ">

    <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-[#e27815]">Testimonials</h1>
    </div>

      
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 white-glassmorphism">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://media.licdn.com/dms/image/C4D03AQHTNbhkIQjm5g/profile-displayphoto-shrink_400_400/0/1520037890278?e=1696464000&v=beta&t=5KVQCIfgZ9YCWKwgnC1qTcIPCnNeSIYdzJ1jrkouCg4"/>
            <p class="leading-relaxed text-white">Working with this web designer was an absolute pleasure! They not only delivered an exceptional website in record time but also demonstrated excellent communication skills throughout the process. Their top-notch skills in modern web development truly shined, and I couldn't be happier with the final result. Highly recommended!</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-0"></span>
            <h2 class="  font-medium title-font tracking-wider text-md text-[#e27815]">Gopal Dutt</h2>
            <p class="text-white">Founder at Alchemist</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 white-glassmorphism">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Adrino}/>
            <p class="leading-relaxed text-white"> Fast, efficient, and incredibly talented! This web designer exceeded all my expectations with swift delivery and top-notch web development skills. Impeccable communication made the experience smooth and enjoyable. Looking forward to the next project!</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-12"></span>
            <h2 class="  font-medium title-font tracking-wider text-md text-[#e27815]">Adriano Meza</h2>
            <p class="text-white">CEO at BEEQUEENCOIN</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 white-glassmorphism">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://media.licdn.com/dms/image/D4D03AQGGsBldcghU9w/profile-displayphoto-shrink_400_400/0/1680076480156?e=1696464000&v=beta&t=fOHpgL1wjfj-5x0LZ5ZPXYC_zEJkdgsodU0mHdqE5_k"/>
            <p class="leading-relaxed text-white">Look no further for exceptional results at lightning speed! This web designer's top niche skills in web development are second to none, and their clear communication sets them apart. Impressed by their effortless ability to turn ideas into reality. A true gem in web design!</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="  font-medium title-font tracking-wider text-md text-[#e27815]">Aziz-ur Rehman</h2>
            <p class="text-white">Head of Digital D and I, Apps4free Ltd</p>
          </div>
        </div>
     
      </div>
    </div>
  </section></>
  )
}

export default Home3