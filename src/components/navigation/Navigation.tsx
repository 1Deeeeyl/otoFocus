import Link from "next/link";
import React from 'react'

function Navigation() {
  return (
    <div className="flex flex-row gap-5 mt-5 pb-5">
      <Link href= "/">HOME</Link>
      <Link href= "/portfolio">PORTFOLIO</Link>
      <Link href= "/portfolio">CONTACT</Link>
      
    </div>
  )
}

export default Navigation
