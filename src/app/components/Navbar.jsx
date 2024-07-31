// components/Navbar.js
import { Button } from 'shadcn-ui';
import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Brand</a>
          <div>
            <a href="/about" className="mx-2">About</a>
            <a href="/services" className="mx-2">Services</a>
            <a href="/contact" className="mx-2">Contact</a>
          </div>
        </div>
      </nav>
    );
  }