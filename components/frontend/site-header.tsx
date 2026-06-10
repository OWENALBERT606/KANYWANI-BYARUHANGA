"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../global/Logo";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/generateInitials";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/nosigaki", label: "N'osigaki" },
  { href: "/mpomurro", label: "Mp'omurro" },
  { href: "/contacts", label: "Contacts" },
];

export default function SiteHeader({ session }: { session: Session | null }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-200/60 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">

        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-yellow-100 text-yellow-800 font-semibold"
                  : "text-gray-600 hover:bg-yellow-50 hover:text-gray-900"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/hoimacitywest"
            className={cn(
              "ml-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all",
              pathname === "/hoimacitywest"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:shadow-md"
            )}
          >
            Elections 2026
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/dashboard">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={session?.user?.image ?? ""} alt={session?.user?.name ?? ""} />
                  <AvatarFallback className="text-xs">{getInitials(session?.user?.name)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">Dashboard</span>
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
            <SheetHeader className="border-b border-yellow-100 p-5">
              <div className="flex items-center justify-between">
                <Logo />
              </div>
            </SheetHeader>
            <nav className="flex flex-col flex-1 py-4 px-3 gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                    pathname === href
                      ? "bg-yellow-100 text-yellow-800 font-semibold"
                      : "text-gray-700 hover:bg-yellow-50 hover:text-gray-900"
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/hoimacitywest"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-center transition-colors"
              >
                Elections 2026 (Hoima City West)
              </Link>
            </nav>
            <div className="border-t border-gray-100 p-4 grid gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full py-2.5 px-4 text-center text-sm font-medium rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
