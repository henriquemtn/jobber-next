"use client"

// * Components
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeSwitch } from "@/components/themeSwitch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// * Hooks & Utils
import { useAuth } from "@/hooks/useAuth"

export const Header = () => {
  const { logout, user } = useAuth()

  return (
    <header className="fixed bg-[#17162E] dark:bg-[#18171B] z-[888] top-0 w-full flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
      <div className="flex w-full justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-transparent rounded-full text-white">
              <Avatar>
                <AvatarFallback className="bg-gray-700 text-white">
                  {user && user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="pt-3">
              {user && (
                <span className="text-black dark:text-white">
                  {user.name}
                </span>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Minha conta</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Suporte</DropdownMenuItem>
            <ThemeSwitch />
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="cursor-pointer">Sair do Jobber</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}