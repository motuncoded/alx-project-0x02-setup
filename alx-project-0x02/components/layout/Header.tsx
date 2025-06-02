import Link  from "next/link";
import React from 'react'

function Header() {
  return (
    <div>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Header