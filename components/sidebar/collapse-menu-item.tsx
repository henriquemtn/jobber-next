// *Icons
import { ChevronDown, LucideIcon } from "lucide-react";

// *Components
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Type for submenu
interface SubMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

// Type for main menu item
interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  submenu?: SubMenuItem[];
}

// Type for component props
interface CollapsibleMenuItemProps {
  item: MenuItem;
  isOpen: (title: string) => boolean;
  toggleMenu: (title: string) => void;
}

// Component for items with submenu (using collapsible)
export const CollapsibleMenuItem = ({ item, isOpen, toggleMenu }: CollapsibleMenuItemProps) => {
  return (
    <SidebarMenuItem key={item.title}>
      <Collapsible
        open={isOpen(item.title)}
        onOpenChange={() => toggleMenu(item.title)}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton asChild>
            <div className="flex items-center justify-between gap-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <item.icon size={18} />
                <span>{item.title}</span>
              </div>
              <ChevronDown className={`transition-transform ${isOpen(item.title) ? 'rotate-180' : ''}`} />
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pl-4">
            {item.submenu && item.submenu.map((subitem) => (
              <SidebarMenuItem key={subitem.title}>
                <SidebarMenuButton asChild>
                  <a href={subitem.url} className="flex items-center gap-2">
                    <subitem.icon size={16} />
                    <span>{subitem.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
} 
