import { Fragment } from "react";

// * Utils
import { cn } from "@/lib/utils";

// * Icons
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Home, Users } from "lucide-react";

// * Next
import Link from "next/link";

interface IBreadcrumbProps {
  children: Array<[string, string | undefined]>;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "Dashboard": <Home className="h-4 w-4" />,
  "Grupos": <Users className="h-4 w-4" />,
};

export const BreadcrumbGeneric = ({ children, className }: IBreadcrumbProps) => {
  const isArray = Array.isArray(children);

  if (!isArray || children.length === 0) {
    return <nav className={cn("text-sm", className)}>{children}</nav>;
  }

  return (
    <nav className={`flex items-center space-x-2 text-sm ml-5 ${className}`}>
      {children.map(([label, href], index) => (
        <Fragment key={`breadcrumb-item-${index}`}>
          {href ? (
            <Link
              href={href}
              className="flex items-center transition-colors hover:text-gray-600"
            >
              {iconMap[label]}
              <span className="ml-1">{label}</span>
            </Link>
          ) : (
            <span className="flex items-center text-gray-500">
              {iconMap[label]}
              <span className="ml-1">{label}</span>
            </span>
          )}
          {index !== children.length - 1 && (
            <ChevronRightIcon className={cn("h-4 w-4 text-gray-400", className)} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};
