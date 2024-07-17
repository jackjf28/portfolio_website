import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import NavItem from '@/components/NavItem'

export default function Nav() {
  return (
    <ul className="lg:flex lg:flex-col mt-20 gap-4 list-none">
      {links.map((link) =>
        <li
          id={link.hash}
        >
          <NavItem {...link} />
        </li>
      )}
    </ul>
  )
}
