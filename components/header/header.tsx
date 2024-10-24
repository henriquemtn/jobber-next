// * Components
import { BreadcrumbGeneric } from "@/components/breadcrumb/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/header/user-nav";
import { ThemeSwitch } from "@/components/themeSwitch";

interface NavbarProps {
  breadcrumb: string[][];
}

export const Header = ({ breadcrumb }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:ml-2 sm:mr-5 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0 lg:gap-2">
          <SidebarTrigger />
          <BreadcrumbGeneric className="text-gray-600">
            {breadcrumb.map((crumb) => [crumb[0], crumb[1]])}
          </BreadcrumbGeneric>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeSwitch />
          <UserNav />
        </div>
      </div>
    </header>
  );
}