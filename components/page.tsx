// * Next
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

        {(addButton || otherButtons) && (
          <div className="flex space-x-2">
            {addButton && (
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
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "w-full bg-white rounded-md shadow-sm overflow-hidden",
          contentSize === "auto"
            ? "h-auto max-h-[90%] overflow-y-auto"
            : "h-[90%] flex flex-col"
        )}
      >
        {children}
      </div>
    </div>
  )
}
