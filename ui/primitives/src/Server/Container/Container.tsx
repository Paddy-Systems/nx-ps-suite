import { cn } from "@libs/display";
import type { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
}

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

export const Container = ({ className, size = "lg", children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
