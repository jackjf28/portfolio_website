'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <header className="h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Jack Farrell</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer</h2>
        <p className="mt-4 max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem numquam mollitia?</p>
        <ul className="lg:flex lg:flex-col mt-20 gap-4  list-none">
          <li className="">
            <a href="#about" className="lg:flex items-center gap-4 active">
              <motion.div className='bg-slate-200 my-4 h-[2px] w-12 rounded-full hidden sm:block dark:bg-opacity-20'>
              </motion.div>
              <span className="capitalize pb-1">About</span>
            </a>
          </li>
          <li>
            <a href="#experience" className="lg:flex items-center gap-4">
              <motion.div className='bg-gray-200 my-4 h-[2px] w-12 rounded-full hidden sm:block dark:bg-opacity-20'>
              </motion.div>
              <span className="capitalize pb-1">Experience</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="lg:flex items-center gap-4">
              <motion.div className='bg-gray-200 my-4 h-[2px] w-12 rounded-full hidden sm:block dark:bg-opacity-20'>
              </motion.div>
              <span className="capitalize pb-1">Skills</span>
            </a>
          </li>
        </ul>
      </div>

      <ul className="lg:flex gap-8">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>
    </header>
  )
}
