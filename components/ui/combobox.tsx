"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Loader2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps<T> {
  queryKey: string
  queryFn: () => Promise<T[]>
  labelKey: keyof T
  valueKey: keyof T
  placeholder: string
  emptyText: string
  onChange: (value: T | null) => void
}

export function Combobox<T>({
  queryKey,
  queryFn,
  labelKey,
  valueKey,
  placeholder,
  emptyText,
  onChange,
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [value, setValue] = React.useState<T | null>(null)

  const { data: allItems = [], isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  })

  const filteredItems = React.useMemo(() => {
    return allItems.filter((item) =>
      String(item[labelKey])
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [allItems, labelKey, search])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? String(value[labelKey]) : placeholder}
          {isLoading ? (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${placeholder.toLowerCase()}...`}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item) => (
                <CommandItem
                  key={String(item[valueKey])}
                  value={String(item[valueKey])}
                  onSelect={() => {
                    setValue(item)
                    onChange(item)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {String(item[labelKey])}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}