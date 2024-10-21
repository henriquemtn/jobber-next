import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // sua função cn para concatenar classes
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: string;
  sidebarOpen?: boolean;
}

export default function NavItem({
  href,
  icon: Icon,
  label,
  badge,
  sidebarOpen,
}: NavItemProps) {
  const pathname = usePathname();

  // Verifica se a rota atual corresponde ao href do NavItem
  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}
            className={cn(
              "flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#1F1E22] transition-colors border-b rounded-none border-gray-100 dark:border-gray-800",
              isActive ? "font-semibold text-[#3F19FF]" : "",
              sidebarOpen ? "justify-start" : "justify-center"
            )}
          >
            <Icon className="h-5 w-5" />

            {sidebarOpen && (
              <>
                {/* <Icon className="h-5 w-5" /> */}
                <span>{label}</span>
                {badge && <Badge variant='secondary'>{badge}</Badge>}
              </>
            )}
          </Link>
        </TooltipTrigger>
        {!sidebarOpen && (
          <>
            <TooltipContent>
              <span>{label}</span>
            </TooltipContent>
          </>
        )}

      </Tooltip>
    </TooltipProvider>
  );
}
