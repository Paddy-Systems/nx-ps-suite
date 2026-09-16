import { Link } from "@ui/primitives";
import { Container } from "@ui/primitives/server";

export interface FooterProps {
  appName?: string;
}

export const Footer = ({ appName = "Paddy Systems" }: FooterProps) => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
      <Container
        size="lg"
        className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
      >
        <p>
          {appName} : {new Date().getFullYear()} Paddy Systems. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="https://paddy.systems" variant="subtle" size="sm">
            Platform
          </Link>
          <Link href="/privacy" variant="subtle" size="sm">
            Privacy
          </Link>
          <Link href="/terms" variant="subtle" size="sm">
            Terms
          </Link>
        </nav>
      </Container>
    </footer>
  );
};
