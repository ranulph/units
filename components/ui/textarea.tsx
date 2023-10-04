
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-2xl hover:backdrop-blur-sm border transition-colors hover:border-neutral-300 hover:bg-accent hover:shadow-sm dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30 border-transparent bg-transparent px-3 resize-none py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
