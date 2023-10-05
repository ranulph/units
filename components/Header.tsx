import Link from "next/link"
import { Button } from "./ui/button"
import { ReloadIcon, Cross1Icon } from "@radix-ui/react-icons"


export default function Header({ title, clear }: { title: string; clear: () => void }) {
    return (
        <>
            <div className='flex justify-between items-baseline px-1'>
                <Link href="/">
                    <h1 className="text-4xl font-extrabold tracking-tight pl-2" onClick={() => clear()}>
                        {title}
                    </h1>
                </Link>
                <div>
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