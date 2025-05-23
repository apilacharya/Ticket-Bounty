import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { cloneElement, ReactElement } from "react";
import { closedClassName } from "../constants";
import { NavItem } from "../types";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
  isOpen: boolean;
  navItem: NavItem;
};

const SidebarItem = ({ isOpen, navItem }: SidebarItemProps) => {
  const path = usePathname();
  const isActive = path === navItem.href;
  return (
    <Link
      href={navItem.href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "group relative flex h-12 justify-start",
        isActive && "bg-muted font-bold hover:bg-muted"
      )}
    >
      {cloneElement(navItem.icon as ReactElement<{ className?: string }>, {
        className: "h-5 w-5",
      })}
      <span
        className={cn(
          "absolute left-12 text-base duration-200",
          isOpen ? "md:block hidden" : "w-[78px]",
          !isOpen && closedClassName
        )}
      >
        {navItem.title}
      </span>
    </Link>
  );
};

export { SidebarItem };
