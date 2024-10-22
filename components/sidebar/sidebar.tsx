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
} from "@/components/ui/sidebar"
import { NavUser } from "@/components/profile/nav-user"
import { CollapsibleMenuItem } from "@/components/sidebar/collapse-menu-item"

// * Data
import { getMenuList } from "@/lib/menu-list/menu-list"
import { usePathname } from "next/navigation"


export const AppSidebar = () => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <Image alt="Jobber" src="/jobber-logo.png" width={100} height={100} />
        </Link>
      </SidebarHeader>

      <SidebarContent>
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
                          "bg-gray-700 text-white"
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