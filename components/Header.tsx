import Link from "next/link"
import { Button } from "./ui/button";
import { ReloadIcon, Cross1Icon, QuoteIcon } from "@radix-ui/react-icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

import { useAtom } from "jotai";
import { activeAtom } from '@/app/Atoms';

export default function Header({ title, clear, date, currency }: { title: string; clear: () => void; date?: boolean; currency?: boolean; }) {

    const [active, setActive] = useAtom(activeAtom);

    const reset = () => {
        clear();
        setActive(false);
    };

        return (
        <>
            <div className='flex justify-between items-baseline px-1'>
                <Link href="/">
                    <h1 className="text-4xl font-extrabold tracking-tight pl-2" onClick={() => clear()}>
                        {title}
                    </h1>
                </Link>
                <TooltipProvider>
                    <div>
                        {date || currency ? 
                            null 
                        :            
                            <Tooltip>
                                <TooltipTrigger asChild>         
                                    <Button onClick={() => setActive(!active)} data-isactive={active} variant="ghost" className="data-[isactive=true]:bg-accent data-[isactive=true]:text-accent-foreground data-[isactive=true]:shadow-inner data-[isactive=true]:border data-[isactive=true]:border-neutral-300 data-[isactive=true]:dark:border-neutral-700 data-[isactive=true]:dark:bg-neutral-800/50 data-[isactive=true]:active:scale-95" size="icon">
                                            <QuoteIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:skew-x-12 transition-all' />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Show Commas</p>
                                </TooltipContent>
                            </Tooltip>
                        }
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => reset()}>
                                        <ReloadIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-180 transition-all' />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Clear</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                                <Link href="/">
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" onClick={() => reset()}>
                                            <Cross1Icon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-90 transition-all' />
                                        </Button>
                                    </TooltipTrigger>
                                </Link>
                            <TooltipContent>
                                <p>Close</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>
        </>
    )
}

