"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/beneath-the-surface",
    name: "Beneath the Surface",
  },
  {
    path: "/beneath-the-surface/yacht-charter/subsea-thrills-submarine-treasure-hunt-legend",
    name: "Submarine Treasure Hunt",
  },
  {
    path: "/beneath-the-surface/yco-news/team-talk-holly-bottau-interview",
    name: "Holly Bottau Interview",
  },
]

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {routes.map((route) => (
            <CommandItem key={route.path} onSelect={() => runCommand(() => router.push(route.path))}>
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                document.documentElement.classList.toggle("dark")
              })
            }
          >
            Toggle Dark Mode
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.location.href = "mailto:contact@ymodern.com"
              })
            }
          >
            Contact Us
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              })
            }
          >
            Back to Top
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

