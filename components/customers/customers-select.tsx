"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "@/services"; 
import { ICustomerData, IRequestPaginated } from "@/models";

export function ComboboxCustomers() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { data: customers, isLoading, isError } = useQuery<IRequestPaginated<ICustomerData>>({
    queryKey: ["customers", 1, 100],
    queryFn: ({ queryKey }) => {
      const [, page, pageSize] = queryKey as [string, number, number];
      return fetchCustomers(page, pageSize);
    },
  });

  if (isLoading) return <div>Carregando clientes...</div>;
  if (isError) return <div>Erro ao carregar clientes</div>;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? customers?.results.find(customer => customer.id.toString() === value)?.name
            : "Selecione um cliente..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar cliente..." />
          <CommandList>
            <CommandEmpty>Nenhum cliente encontrado.</CommandEmpty>
            <CommandGroup>
              {customers?.results.map((customer: ICustomerData) => (
                <CommandItem
                  key={customer.id}
                  value={customer.id.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === customer.id.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {customer.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
