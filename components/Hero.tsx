'use client';

import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { links } from '@/lib/data'
import Nav from '@/components/Nav';

export default function Hero() {

  return (
    <header className="h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.125
        }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Jack Farrell</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer</h2>
        <p className="mt-4 max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem numquam mollitia?</p>
        <Nav />
      </motion.div>

      <motion.ul className="lg:flex gap-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.925
        }}
      >
        <li>
          <a className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-xl text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/jackjf28" target="_blank">
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a className="bg-white text-slate-700 p-4 flex items-center gap-2 rounded-xl text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/jackfarrell" target="_blank">
            <BsLinkedin />
          </a>
        </li>
      </motion.ul>
    </header>
  )
}
