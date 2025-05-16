"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const routes = [
    {
      href: "/",
      label: "Email Sender",
      active: location.pathname === "/",
    },
    {
      href: "/how-to-use",
      label: "How to Use",
      active: location.pathname === "/how-to-use",
    },
    {
      href: "/faq",
      label: "FAQ",
      active: location.pathname === "/faq",
    },
    {
      href: "/about",
      label: "About",
      active: location.pathname === "/about",
    },
  ];

  return (
    <div className="flex h-16 items-center border-b bg-white/90 backdrop-blur-sm px-4 md:px-6">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-violet-600" />
          <span className="font-bold text-xl hidden md:inline-block">
            EmailSender
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center ml-auto space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            to={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-violet-600",
              route.active ? "text-violet-600" : "text-gray-600"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden ml-auto">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-violet-600 py-2",
                    route.active ? "text-violet-600" : "text-gray-600"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
