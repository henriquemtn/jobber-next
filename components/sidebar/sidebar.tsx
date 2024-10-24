'use client'

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
  useSidebar,
} from "@/components/ui/sidebar"
import { NavUser } from "@/components/navuser/nav-user"
import { CollapsibleMenuItem } from "@/components/sidebar/collapse-menu-item"

// * Data
import { getMenuList } from "@/lib/menu-list/menu-list"
import { usePathname } from "next/navigation"


export const AppSidebar = () => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-[#17162E]">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold mx-auto">
          <Image alt="Jobber" src={open ? "/jobber-white-logo.svg" : "/favicon.svg"} width={open ? 90 : 31} height={open ? 31 : 31} />
        </Link>
      </SidebarHeader>

      <SidebarContent className="scrollbar dark:scrollbar-dark">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuList.map(({ menus }) =>
                menus.map(({ title, url, icon: Icon, submenus, active }) =>
                  submenus ? (
                    <CollapsibleMenuItem
                      key={title}
                      menu={{ title, icon: Icon }}
                      submenus={submenus}
                    />
                  ) : (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton
                        tooltip={title}
                        asChild
                      >
                        <Link href={url} className={`${((active === undefined && pathname === url) || active) &&
                          "bg-[#17162E] dark:bg-[#37373b] text-white transition-all hover:bg-gray-800"
                          }`}>
                          {Icon && <Icon />}
                          <span>{title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}