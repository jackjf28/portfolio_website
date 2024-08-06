import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'

type LinkProps = (typeof links)[number]


export default function NavItem({ name, hash }:
  LinkProps) {
  return (
    <div>
      <a href={hash} className="lg:flex items-center gap-4 group">
        <div className='bg-gray-200 my-4 h-[2px] w-12 rounded-full hidden sm:block dark:bg-opacity-20 group-hover:bg-gray-200 transition-all group-focus:bg-gray-200 group-hover:w-20 group-focus:w-20'>
        </div>
        <span className="pb-1 group-hover:text-gray-200 group-focus:text-gray-200 transition">{name}</span>
      </a>
    </div>
  )
}
