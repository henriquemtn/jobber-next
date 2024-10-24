// import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { BreadcrumbGeneric } from "../breadcrumb/breadcrumb";
import { ThemeToggle } from "../themeToggle";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {
  breadcrumb: string[][];
}

export const Header = ({ breadcrumb }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-2 flex h-14 items-center">
        <div className="flex gap-2 items-center space-x-4 lg:space-x-0">
          <SidebarTrigger />
          <BreadcrumbGeneric className="text-gray-600">
            {breadcrumb.map((crumb) => [crumb[0], crumb[1]])}
          </BreadcrumbGeneric>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}