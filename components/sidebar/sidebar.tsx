'use client'

import { useState } from "react"

// * Next
import Link from "next/link"
import Image from "next/image"

// * Components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Profile } from "@/components/profile/profile"
import { CollapsibleMenuItem } from "@/components/sidebar/collapse-menu-item"


// * Icons
import { CalendarCheck2, ChartLine, Clock, Heart, Home, Info, MessageSquareText, Package, Pin, SquarePlus, Star, TabletSmartphone, User, Users, Wallet } from "lucide-react"

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/dev",
    icon: Home,
  },
  {
    title: "Grupos",
    url: "/groups",
    icon: Users,
  },
  {
    title: "Usuários",
    url: "/users",
    icon: User,
  },
  {
    title: "Eventos",
    url: "/events",
    icon: Pin,
  },
  {
    title: "Clientes",
    url: "/customers",
    icon: Heart,
  },
  {
    title: "Projetos",
    url: "/projects",
    icon: Star,
  },
  {
    title: "Pacotes",
    url: "/packages",
    icon: Package,
  },
  {
    title: "Carteiras de Pacotes",
    url: "/walletpackages",
    icon: Wallet,
  },
  {
    title: "Bônus",
    url: "/bonus",
    icon: SquarePlus,
  },
  {
    title: "Status",
    url: "/status",
    icon: Info,
  },
  {
    title: "Solicitações",
    url: "",
    icon: MessageSquareText,
    submenu: [
      { title: "Todas", url: "/requests/all", icon: MessageSquareText },
      { title: "Por pacotes", url: "/requests/package", icon: MessageSquareText },
      { title: "Por projetos", url: "/requests/project", icon: MessageSquareText }
    ]
  },
  {
    title: "Jobs",
    url: "",
    icon: Clock,
    submenu: [
      { title: "Listar", url: "/jobs", icon: Clock },
      { title: "Importar", url: "/jobs/import", icon: Clock },
    ]
  },
  {
    title: "Pauta",
    url: "",
    icon: CalendarCheck2,
    submenu: [
      { title: "Pauta de produção", url: "/schedules/production", icon: CalendarCheck2 },
      { title: "Pauta de entrega", url: "/schedules/deadline", icon: CalendarCheck2 },
    ]
  },
  {
    title: "Relatórios",
    url: "",
    icon: ChartLine,
    submenu: [
      { title: "Customizados", url: "/dev", icon: ChartLine },
      { title: "Apontamentos", url: "/reports/note", icon: ChartLine },
      { title: "Clientes", url: "/reports/customer", icon: ChartLine },
      { title: "Jobs", url: "/reports/job", icon: ChartLine },
      { title: "Pacotes", url: "/reports/package", icon: ChartLine },
    ]
  },
  {
    title: "App",
    url: "",
    icon: TabletSmartphone,
    submenu: [
      { title: "Apps", url: "/apps", icon: TabletSmartphone },
      { title: "FAQS", url: "/faqs", icon: TabletSmartphone },
      { title: "Postagens", url: "/posts", icon: TabletSmartphone },
      { title: "Serviços", url: "/services", icon: TabletSmartphone },
    ]
  },
]

export const AppSidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  // Change the opening state of the menus
  const toggleMenu = (title: string) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [title]: !prevOpenMenus[title],
    }));
  };

  const isOpen = (title: string) => !!openMenus[title];
  console.log("Menu is open?", openMenus);


  return (
    <Sidebar collapsible="icon" className="z-[889]">
      <SidebarHeader>
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <Image alt="Jobber" src="/jobber-logo.png" width={90} height={31} />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.submenu ? (
                  <CollapsibleMenuItem
                    key={item.title}
                    item={item}
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                  />
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Profile />
      </SidebarFooter>
    </Sidebar>
  )
}