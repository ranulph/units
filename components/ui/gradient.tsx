

export function Gradient({ className, small }: { small?: boolean; className?: string; }): JSX.Element {
    return (
      <span className={`dark:fixed mix-blend-normal will-change-[filter] rounded-[100%] bg-glow-conic ${small ? "blur-[32px]" : "blur-[75px]"} ${className}`}/>
    );
}

