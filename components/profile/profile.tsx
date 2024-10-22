"use client"

// * Components
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
import { ChevronsUpDown } from "lucide-react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export const Profile = () => {
  const { logout, user } = useAuth()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="h-auto">
              <Avatar>
                <AvatarFallback className="bg-gray-700 text-white ">
                  {user && user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                {user && (
                  <span className="text-black dark:text-white truncate text-sm">
                    {user.first_name} {user.last_name}
                  </span>
                )}
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="top"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuLabel className="pt-3 flex flex-col">
              {user && (
                <>
                  <span className="text-black dark:text-white truncate text-sm">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="text-black dark:text-white truncate text-xs font-normal">
                    {user.email}
                  </span>
                </>
              )}
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Minha conta</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Suporte</DropdownMenuItem>
            <ThemeSwitch />
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={logout} className="cursor-pointer">
              Sair
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}