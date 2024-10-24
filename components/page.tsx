// * Icons
import { Plus } from "lucide-react";

// * Components
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header/header";

interface IPageProps {
  title: string;
  addButton?: boolean;
  breadcrumb: string[][];
  contentSize: "max" | "auto";
  otherButtons?: React.ReactElement[];
  children: React.ReactNode | React.ReactNode[];
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
    <div className="m-0 w-screen h-[calc(100vh-3.5rem)] bg-gray-100 dark:bg-[#0E0E10]">
      <Header breadcrumb={breadcrumb} />

      <div className="flex flex-wrap items-center justify-between mb-3 mt-2">
        <h1 className="ml-5 text-2xl font-bold">{title}</h1>

        {(addButton || otherButtons) && (
          <div className="flex space-x-2">
            {addButton && (
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
              >
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
        className={`ml-5 mr-5 mb-5 bg-white dark:bg-[#18171B] rounded-md shadow-md overflow-hidden ${contentSize === "auto"
          ? "h-auto max-h-[90%] overflow-y-auto"
          : "h-[90%] flex flex-col"
          }`}
      >
        {children}
      </div>
    </div>
  );
};
