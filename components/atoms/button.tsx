import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // DynamicVault Brand Style Guide Button Variants
        default: "bg-deep-navy text-white hover:bg-deep-navy/90 shadow-sm",
        destructive: "bg-alert-red text-white hover:bg-alert-red/90 shadow-sm",
        outline:
          "border border-deep-navy bg-transparent text-deep-navy hover:bg-deep-navy/10",
        secondary:
          "bg-light-gray text-deep-navy hover:bg-light-gray/80 shadow-sm",
        ghost: "hover:bg-teal-accent/10 text-foreground hover:text-teal-accent",
        link: "text-teal-accent underline-offset-4 hover:underline",
        success:
          "bg-success-green text-white hover:bg-success-green/90 shadow-sm",
        // Primary call-to-action button with teal accent
        cta: "bg-teal-accent text-white hover:bg-teal-accent/90 shadow-[0_0_10px_rgba(62,207,178,0.3)] hover:shadow-[0_0_15px_rgba(62,207,178,0.5)] transition-all duration-300",
        // Ocean blue button
        ocean: "bg-ocean-blue text-white hover:bg-ocean-blue/90 shadow-sm",
        // Wallet connect button with gradient
        wallet:
          "bg-gradient-to-r from-deep-navy to-teal-accent text-white hover:from-deep-navy/90 hover:to-teal-accent/90 shadow-[0_0_10px_rgba(62,207,178,0.3)] hover:shadow-[0_0_15px_rgba(62,207,178,0.5)] transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
        // Mobile-friendly larger touch target
        mobile: "h-14 px-6 py-3 text-base rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
