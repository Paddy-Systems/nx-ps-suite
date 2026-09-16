import { cn } from "@libs/display";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export const linkVariants = cva(
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-slate-200 hover:text-white underline-offset-4 hover:underline",
        subtle: "text-slate-400 hover:text-slate-200",
        button: "bg-slate-100 text-slate-950 font-medium px-4 py-2 rounded-md hover:bg-white",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  children: ReactNode;
}

export const Link = ({ className, variant, size, children, ...props }: LinkProps) => {
  return (
    <a className={cn(linkVariants({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
};
