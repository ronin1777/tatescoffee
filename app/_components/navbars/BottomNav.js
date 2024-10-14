'use client'

import { FaHome, FaSearch, FaShoppingCart, FaUser, FaStore } from 'react-icons/fa';
import './BottomNav.css';
import {useState} from "react";
import Link from "next/link";
import LoginButton from "@/app/_components/Modals/LoginButton";
import {hidden} from "next/dist/lib/picocolors";


const BottomNav = ({ user }) => {
  const [active, setActive] = useState('home');

  return (
    <div className="fixed bottom-0 md:hidden flex justify-around bg-black h-[50px] p-2 w-[100%] rounded-t-full z-20">
      {/*home section*/}
      <Link href='/' className={`nav-item ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>
        <FaHome />
        <span>Home</span>
      </Link>
      {/*shop section*/}
      <Link href='/shop' className={`nav-item ${active === 'shop' ? 'active' : ''}`} onClick={() => setActive('shop')}>
        <FaStore />
        <span>Shop</span>
      </Link>
      {/*profile section*/}
      {user && (
        <div className={`nav-item ${active === 'profile' ? 'active' : ''}`} onClick={() => setActive('profile')}>
          <Link href='/account/profile'>
            <FaUser />
            <span>{user?.name?.split(' ')[0]}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BottomNav;