"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css"

export default function VerticalNavbar() {
  const pathname = usePathname();

  const menu = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Applications", href: "/applications" },
    { label: "Licenses", href: "/licenses" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="sidebar bg-[#8B5CF6] p-1.5 text-white ml-2 my-2 rounded-lg hidden lg:block">
      <h2 className="logo">My App</h2>
      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}