import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav
      style={{ padding: 16, borderBottom: "1px solid #eee", marginBottom: 24 }}
    >
      <Link href="/home" style={{ marginRight: 16 }}>
        Home
      </Link>
      <Link href="/about" style={{ marginRight: 16 }}>
        About
      </Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
}

export default Header;
