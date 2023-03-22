/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Todo from '../assets/projects/ToDo.png';
import Ecom from '../assets/projects/eCommerce.png';
import Product from '../assets/projects/productpage.png';
import Watchmojo from '../assets/projects/watchmojo.png';
import Calci from '../assets/projects/calci.png';

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pt-8'>
          <p
            className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600
          '
          >
            Projects
          </p>
          <p className='py-2'>// Check out some of my recent projects</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {/* grid item 1*/}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Firebase ToDo App
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://firebasetodowebapp.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/akashhadli/firebase-todoapp'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 2*/}
          <div
            style={{ backgroundImage: `url(${Ecom})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                E-Commerce Site
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://ecommerce-shop-project.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/akashhadli/ecommerce-project'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 3*/}
          <div
            style={{ backgroundImage: `url(${Watchmojo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Youtube Clone
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://watchmojo-youtube-clone.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/akashhadli/Youtube-Clone-using-Youtube-API'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 4*/}
          <div
            style={{ backgroundImage: `url(${Product})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Apple Product Landing Page
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://apple-productpage-project.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/akashhadli/Apple-Product-Page/tree/main/Product%20Page'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Calci})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Simple Calculator
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://calculator-webapp-project.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/akashhadli/calculator-web-app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
