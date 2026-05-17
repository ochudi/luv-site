"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const options = [
  { value: "system", icon: Monitor, label: "System" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center border border-current/30 p-0.5 opacity-50">
        {options.map((opt) => (
          <span key={opt.value} className="p-1.5">
            <opt.icon className="h-3.5 w-3.5" />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center border border-current/25 p-0.5"
    >
      {options.map((opt) => {
        const Icon = opt.icon;
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={opt.label}
            onClick={() => setTheme(opt.value)}
            className={cn(
              "p-1.5 transition-colors duration-200",
              active
                ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                : "opacity-60 hover:opacity-100"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
