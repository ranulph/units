
import { useAtom, PrimitiveAtom } from "jotai";


export default function AddEntry({ atom, name }: { atom: PrimitiveAtom<number>; name: string }) {

    const [value, setValue] = useAtom(atom)

    return (
        <div className="w-fit flex items-center text-lg md:text-xl mt-2 mx-1 justify-between h-12">
            <div>
                <input type="number" value={value === 0 ? '' : value} onChange={(e) => setValue(Number(e.currentTarget.value))} className='w-16 text-right border-b-2 bg-transparent focus-visible:outline-none' />
            </div>
            <div className="flex-1 ml-2 text-left w-16 md:text-lg text-base text-muted-foreground font-medium">
                {name}
            </div>
        </div>
    )
}