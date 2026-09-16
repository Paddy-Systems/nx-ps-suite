import { Link } from "@ui/primitives";
import { Container } from "@ui/primitives/server";
import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  appName: string;
  navItems?: NavItem[];
  actions?: ReactNode;
}

export const Header = ({ appName, navItems = [], actions }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container size="lg" className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-white hover:no-underline"
          >
            <span>{appName}</span>
            <span className="text-xs font-normal text-slate-400">by Paddy Systems</span>
          </Link>
          {navItems.length > 0 && (
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} variant="subtle" size="sm">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-3">
          {actions || (
            <Link href="/auth/login" variant="button" size="sm">
              Sign In
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};
