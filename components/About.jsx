import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../public/assets/about.png';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#000000] border-[#000000]'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className={titleStyle}><br></br><br></br>About</p>
          <p className='py-2'></p>
          <p className='py-2 text-gray-600'>
            Welcome to our premier lawn service company with over a decade of experience in providing 
            top-notch landscaping solutions. Since our establishment, we have been dedicated to enhancing 
            the beauty and health of outdoor spaces for countless satisfied customers. 
          <br></br><br></br>
            Our comprehensive range of services includes flower bed design and maintenance, expert tree 
            trimming to ensure optimal growth and aesthetics, meticulous lawn care to keep your green spaces 
            vibrant and lush, and professional sod installation for an instant lawn transformation. 
          <br></br><br></br>
            Moreover, we specialize in combating the pesky ficus whitefly, protecting your precious plants 
            and trees from infestations. With a skilled team of landscape experts, state-of-the-art equipment, 
            and a commitment to excellence, we take pride in turning your lawn dreams into reality. Join our long 
            list of happy clients and experience the unmatched expertise of our lawn service veterans. Your satisfaction 
            is our priority, and we guarantee that your outdoor spaces will be the envy of the neighborhood.
          </p>
          <br></br>

        </div>
        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;