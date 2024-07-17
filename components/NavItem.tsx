import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'

type LinkProps = (typeof links)[number]


export default function NavItem({ name, hash }:
  LinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.125
      }}
    >
      <a href={hash} className="lg:flex items-center gap-4">
        <div className='bg-gray-200 my-4 h-[2px] w-12 rounded-full hidden sm:block dark:bg-opacity-20'>
        </div>
        <span className="capitalize pb-1">{name}</span>
      </a>
    </motion.div>
  )
}
