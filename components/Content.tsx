'use client';

import React from 'react'
import { motion } from 'framer-motion'
import About from "@/components/About"
import JobHistory from '@/components/JobHistory'

export default function Content() {
  return (
    <>
      <motion.div className="lg:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25 }}
      >
        <About />
        <JobHistory />
      </motion.div>
    </>
  )
}
