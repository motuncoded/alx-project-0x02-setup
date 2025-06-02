import { Link } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header