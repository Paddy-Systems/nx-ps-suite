import { cn } from "@libs/display";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 hover:bg-slate-200 focus-visible:ring-white",
        secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 focus-visible:ring-slate-700",
        outline:
          "border border-slate-700 text-slate-200 hover:bg-slate-800 focus-visible:ring-slate-700",
        ghost: "text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:ring-slate-700",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

export const Button = ({ className, variant, size, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
};
