// * Next
// import Link from "next/link";

// * Icons
import { Plus } from "lucide-react";

// * Components
import { Button } from "@/components/ui/button";
import { BreadcrumbGeneric } from "@/components/breadcrumb/breadcrumb";


interface IPageProps {
  title: string;
  breadcrumb: string[][];
  children: React.ReactNode | React.ReactNode[];
  addButton?: boolean;
  otherButtons?: React.ReactElement[];
  contentSize: "max" | "auto";
}

export const Page = ({
  title,
  breadcrumb,
  addButton,
  otherButtons,
  children,
  contentSize,
}: IPageProps) => {
  return (
    <div
      className="ml-0 mt-14 p-6 h-[calc(100vh-60px)] bg-gray-100 md:ml-14 dark:bg-[#0E0E10]"
    >

      {/* <BreadcrumbGeneric>
        {breadcrumb.map((crumb, index) => (
          <Link key={crumb[1] + index} href={crumb[1]} className="ml-5 transition-colors hover:text-gray-600">
            {crumb[0]}
          </Link>
        ))}
      </BreadcrumbGeneric> */}


      <BreadcrumbGeneric className="text-gray-600">
        {breadcrumb.map((crumb) => [crumb[0], crumb[1]])}
      </BreadcrumbGeneric>

      <div className="flex flex-wrap items-center justify-between mb-6 mt-2 ml-5">
        <h1 className="m-0 text-2xl font-bold">{title}</h1>

        {(addButton || otherButtons) && (
          <div className="flex space-x-2">
            {addButton && (
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Adicionar</span>
              </Button>
            )}

            {otherButtons &&
              otherButtons.map((button, index) => (
                <div key={index}>{button}</div>
              ))}
          </div>
        )}
      </div>

      <div
        className={`ml-5 bg-white rounded-md shadow-md overflow-hidden ${contentSize === "auto" ? "h-auto max-h-[90%] overflow-y-auto" : "h-[90%] flex flex-col"
          }`}
      >
        {children}
      </div>
    </div>
  );
};
