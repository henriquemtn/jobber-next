// * Next
<<<<<<< HEAD
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
=======
import Link from "next/link"

// * Components
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"

interface IPageContainerContentProps {
  auto?: boolean
  max?: boolean
}

interface IPageProps {
  title: string
  breadcrumb: string[][]
  children: React.ReactNode | React.ReactNode[]
  addButton?: boolean
  otherButtons?: React.ReactNode[]
  contentSize: "max" | "auto"
>>>>>>> developer
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
<<<<<<< HEAD
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
=======
    <div className="ml-0 mt-14 w-full h-[calc(100vh-55px)] bg-gray-100 p-6 text-gray-900 md:ml-14">
      {/* Breadcrumb */}
      <Breadcrumb>
        {breadcrumb.map((crumb, index) => (
          <Link key={crumb[1] + index} href={crumb[1]}>
            {crumb[0]}
          </Link>
        ))}
      </Breadcrumb>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <h1 className="m-0">{title}</h1>
>>>>>>> developer

        {(addButton || otherButtons) && (
          <div className="flex space-x-2">
            {addButton && (
<<<<<<< HEAD
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Adicionar</span>
              </Button>
            )}

            {otherButtons &&
              otherButtons.map((button, index) => (
                <div key={index}>{button}</div>
              ))}
=======
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Adicionar
              </Button>
            )}

            {otherButtons && (
              <div className="flex space-x-2">
                {otherButtons.map((button, index) => (
                  <div key={index}>{button}</div>
                ))}
              </div>
            )}
>>>>>>> developer
          </div>
        )}
      </div>

<<<<<<< HEAD
      <div
        className={`ml-5 bg-white rounded-md shadow-md overflow-hidden ${contentSize === "auto" ? "h-auto max-h-[90%] overflow-y-auto" : "h-[90%] flex flex-col"
          }`}
=======
      {/* Content */}
      <div
        className={cn(
          "w-full bg-white rounded-md shadow-sm overflow-hidden",
          contentSize === "auto"
            ? "h-auto max-h-[90%] overflow-y-auto"
            : "h-[90%] flex flex-col"
        )}
>>>>>>> developer
      >
        {children}
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> developer
