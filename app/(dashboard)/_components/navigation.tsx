"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Home,
  LineChart,
  Menu,
  Users,
  ChevronLeft,
  ChevronRight,
  Clock4,
  MessageSquareText,
  CalendarDays,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import NavItem from "./navitem"
import Image from "next/image"
import { useAuth } from "@/hooks/useAuth"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeSwitch } from "@/components/themeSwitch"

export function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { logout, user } = useAuth()

  return (
    <div className="grid w-full md:grid-cols-[auto_1fr]">
      <div
        className={cn(
          "hidden shadow-lg bg-white dark:bg-[#1F1E23] md:block transition-all duration-300 ease-out fixed z-[999] h-full left-0",
          sidebarOpen ? "md:w-[220px] lg:w-[280px]" : "md:w-[60px] lg:w-[72px]"
        )}
      >
        <div className="flex h-full max-h-screen flex-col relative">
          <div className="flex h-14 w-full justify-center items-center px-4 lg:h-[60px] text-white bg-[#17162E] dark:bg-[#18171B] border-r border-slate-800">
            <Link href="/" className="flex items-center justify-center gap-2 font-semibold">
              {!sidebarOpen && <Image alt="Jobber" src="/favicon.svg" width={25} height={25} />}
              {sidebarOpen && <Image alt="Jobber" src="/jobber-white-logo.svg" width={90} height={31} />}
            </Link>
            <Button
              variant="outline"
              size="icon"
              className={`h-6 w-6 bg-[#17162E] absolute right-[-12px] rounded-full top-7 transform -translate-y-1/2 transition-all duration-300 ease-out`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start text-sm font-medium">
              <NavItem href="/" icon={Home} label="Dashboard" sidebarOpen={sidebarOpen} />
              <NavItem href="/groups" icon={Users} label="Grupos" sidebarOpen={sidebarOpen} />
              <NavItem href="/solicitacoes" icon={MessageSquareText} label="Solicitações" sidebarOpen={sidebarOpen} />
              <NavItem href="/jobs" icon={Clock4} label="Jobs" badge="6" sidebarOpen={sidebarOpen} />
              <NavItem href="/pauta" icon={CalendarDays} label="Pauta" sidebarOpen={sidebarOpen} />
              <NavItem href="/relatorios" icon={LineChart} label="Relatórios" sidebarOpen={sidebarOpen} />
            </nav>
          </div>
          {sidebarOpen && (
            <div className="mt-auto p-4 transition-all ease-out">
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Jobber Atualizado🎉</CardTitle>
                  <CardDescription>
                    Com novas funcionalidades, melhorias no layout e muito mais!
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Ver todas as mudanças
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="fixed bg-[#17162E] dark:bg-[#18171B] z-[888] top-0 w-full flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetTitle>
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Image alt="Jobber" src="/jobber-logo.png" width={90} height={31} />
                </Link>
              </SheetTitle>
              <nav className="grid gap-2 text-lg font-medium">
                <NavItem href="/" icon={Home} label="Dashboard" sidebarOpen={true} />
                <NavItem href="/groups" icon={Users} label="Grupos" sidebarOpen={sidebarOpen} />
                <NavItem href="/solicitacoes" icon={MessageSquareText} label="Solicitações" sidebarOpen={true} />
                <NavItem href="/jobs" icon={Clock4} label="Jobs" badge="6" sidebarOpen={true} />
                <NavItem href="/pauta" icon={CalendarDays} label="Pauta" sidebarOpen={true} />
                <NavItem href="/relatorios" icon={LineChart} label="Relatórios" sidebarOpen={true} />
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full">
          </div>
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
        </header>
      </div>
    </div>
  )
}