"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HomeIcon, SettingsIcon, UserIcon, HelpCircleIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
  <>
    {/* Navbar */}
    <div className='fixed top-0 w-full bg-[#17162E] shadow-sm border-b-[1px] border-[#D1D1D1] h-14 z-[999]'>
        <div className='flex flex-row items-center h-full justify-between pr-4'>
            <div className='flex flex-row items-center'>
            <Button onClick={toggleSidebar} variant='default'>
              <MenuIcon 
                className='h-full w-full text-whitecursor-pointer' 
              />
            </Button>
            <Image 
                src='/jobber-white-logo.svg'
                alt='logo'
                width={90}
                height={31.66}
                className="ml-4"
            />
            </div>
            <Avatar>
                <AvatarFallback className='bg-slate-700 text-white'>H</AvatarFallback>
                <AvatarImage />
            </Avatar>
        </div>
    </div>

      {/* Sidebar */}
      <aside
        className={`mt-14 bg-white min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-14"
        } absolute z-10`}
      >
        <nav>
          <Link className="flex items-center w-full p-4 border-b-[1px] border-slate-200" href="/">
            <HomeIcon className="h-6 w-6" />
              {isSidebarOpen && <span className="ml-2">Home</span>}
          </Link>
          <Link className="flex items-center w-full p-4 border-b-[1px] border-slate-200" href="/">
            <UserIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Profile</span>}
          </Link>
          <Link className="flex items-center w-full p-4 border-b-[1px] border-slate-200" href="/">
            <SettingsIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Settings</span>}
          </Link>
          <Link className="flex items-center w-full p-4 border-b-[1px] border-slate-200" href="/">
            <HelpCircleIcon className="h-6 w-6" />
            {isSidebarOpen && <span className="ml-2">Help</span>}
          </Link>
        </nav>
      </aside>
  </>
  )
}
