"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/stories", name: "Stories" },
  { path: "/stories/all-stories", name: "All Stories" },
  { path: "/self-help", name: "Self-Help Toolkit" },
  { path: "/checkups", name: "Mental Health Check-Up" },
  { path: "/support", name: "Get Help Now" },
  { path: "/write", name: "Share Your Story" },
  { path: "/volunteer", name: "Volunteer" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {routes.map((route) => (
            <CommandItem
              key={route.path}
              onSelect={() => runCommand(() => router.push(route.path))}
            >
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                document.documentElement.classList.toggle("dark");
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
                window.location.href =
                  "mailto:truelifestories@lifeupsideview.org";
              })
            }
          >
            Contact Us
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              })
            }
          >
            Back to Top
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
