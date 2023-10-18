import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm md:text-lg text-base hover:bg-accent hover:border-neutral-300 dark:hover:border-neutral-800 dark:hover:bg-card/90 hover:text-card-foreground hover:shadow-sm md:active:shadow-inner",
        secondary:
          "bg-secondary dark:text-neutral-300 text-neutral-600 shadow-sm hover:bg-secondary/50",
        ghost: "lg:hover:bg-accent lg:hover:text-accent-foreground active:shadow-inner border border-transparent lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:hover:bg-neutral-800/50 active:scale-95",
        ghost2: "text-medium lg:hover:bg-accent dark:text-neutral-400 md:text-base text-sm font-normal text-neutral-600 active:shadow-inner border border-transparent lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:hover:bg-neutral-800/50 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline text-muted-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
