"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

const navItems = [
  { label: "Conta", href: "/conta", icon: User },
  { label: "Projetos", href: "/projetos", icon: FolderKanban },
  { label: "Configurações", href: "/configuracoes", icon: Settings },
];

export function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-44 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Vilicus
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon icon={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
