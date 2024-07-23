import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import NavItem from '@/components/NavItem'

export default function Nav() {
  return (
    <ul className="lg:flex lg:flex-col mt-20 gap-4 list-none">
      {
        links.map((link, index) =>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.225 * (index + 1)
            }}
            id={link.hash}
            key={link.hash}
          >
            <NavItem {...link} />
          </motion.li>
        )
      }
    </ul>
  )
}
