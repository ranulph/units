import Link from "next/link"
import { Button } from "./ui/button";

import { ReloadIcon, Cross1Icon, QuoteIcon } from "@radix-ui/react-icons"

import { useAtom } from "jotai";
import { activeAtom } from '@/app/Atoms';

export default function Header({ title, clear, date }: { title: string; clear: () => void; date?: boolean }) {

    const [active, setActive] = useAtom(activeAtom);

        return (
        <>
            <div className='flex justify-between items-baseline px-1'>
                <Link href="/">
                    <h1 className="text-4xl font-extrabold tracking-tight pl-2" onClick={() => clear()}>
                        {title}
                    </h1>
                </Link>
                <div>
                    {date ? 
                        null 
                    :                     
                        <Button data-isactive={active} variant="ghost" className="data-[isactive=true]:bg-accent data-[isactive=true]:text-accent-foreground data-[isactive=true]:shadow-inner data-[isactive=true]:border data-[isactive=true]:border-neutral-300 data-[isactive=true]:dark:border-neutral-700 data-[isactive=true]:dark:bg-neutral-800/50 data-[isactive=true]:active:scale-95" size="icon" onClick={() => setActive(!active)}>
                                <QuoteIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:skew-x-12 transition-all' />
                        </Button>
                    }
                    <Button variant="ghost" size="icon" onClick={() => clear()}>
                            <ReloadIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-180 transition-all' />
                    </Button>
                    <Link href="/">
                        <Button variant="ghost" size="icon" onClick={() => clear()}>
                            <Cross1Icon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-90 transition-all' />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}