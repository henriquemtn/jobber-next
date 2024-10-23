// * Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// * Icons
import { ChevronRight, LucideIcon } from "lucide-react";

// * Components
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


// Type for submenu
interface SubMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  active?: boolean;
}

// Type for main menu item
interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  active?: boolean;
  submenu?: SubMenuItem[];
}

// Type for component props
interface CollapsibleMenuItemProps {
  menu: MenuItem;
  submenus: SubMenuItem[];
}

// Component for items with submenu (using collapsible)
export const CollapsibleMenuItem = ({ menu, submenus }: CollapsibleMenuItemProps) => {
  const pathname = usePathname();

  return (
    <SidebarMenuItem key={menu.title}>
      <Collapsible
        className="group/collapsible"
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={menu.title}
          >
            {menu.icon && <menu.icon />}
            <span>{menu.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pl-4">
            {submenus && submenus.map(({ title, url, icon: Icon, active }) => (
              <SidebarMenuSub key={title}>
                <SidebarMenuSubButton
                  asChild
                >
                  <Link href={url} className={`${((active === undefined && pathname === url) || active) &&
                    "bg-[#17162E] dark:bg-[#37373b] text-white"
                    }`}>
                    {<Icon />}
                    <span>{title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSub>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
} 
