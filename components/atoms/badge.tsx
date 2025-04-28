import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // DynamicVault Brand Style Guide Badge Variants
        default:
          "border-transparent bg-deep-navy text-white hover:bg-deep-navy/90",
        secondary:
          "border-transparent bg-light-gray text-deep-navy hover:bg-light-gray/90",
        destructive:
          "border-transparent bg-alert-red text-white hover:bg-alert-red/90",
        outline: "border-deep-navy text-deep-navy",
        success:
          "border-transparent bg-success-green text-white hover:bg-success-green/90",
        teal: "border-transparent bg-teal-accent text-white hover:bg-teal-accent/90",
        ocean:
          "border-transparent bg-ocean-blue text-white hover:bg-ocean-blue/90",
        // DynamicVault branded badge
        ai: "border-transparent bg-gradient-to-r from-deep-navy to-teal-accent text-white",
        // AI confidence levels
        confidence: {
          high: "border-transparent bg-success-green text-white",
          medium: "border-transparent bg-ocean-blue text-white",
          low: "border-transparent bg-alert-red text-white"
        }
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
