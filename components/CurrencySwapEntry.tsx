'use client'

import Link from "next/link";
import { CheckIcon } from "@radix-ui/react-icons";
import { swapCurrencyAtom, currencySwapAtom, swapViewAtom } from "@/app/Atoms";
import { useSetAtom } from "jotai";

export default function CurrencySwapEntry({ id, code, name, flag }: { id: number; code: string; name: string, flag: string }) {

    const setSwapCurrency = useSetAtom(swapCurrencyAtom);
    const currencySwap = useSetAtom(currencySwapAtom);
    const setSwapView = useSetAtom(swapViewAtom);

    const makeSwap = () => {
        setSwapCurrency({ id: id, currency: code});
        currencySwap();
        setSwapView(false);
    };

    return (
            <div className="flex flex-col justify-between items-center text-base md:text-xl my-2 h-16 md:h-20 p-4 rounded-xl border hover:bg-card hover:text-card-foreground hover:shadow active:shadow-inner transition-colors">
                <div className="flex w-full justify-between md:mt-2 items-center">
                    <div className="flex items-center">
                            <div className="h-8 w-12">
                                <img src={flag} className="w-full h-full object-cover" alt={code} />
                            </div>
                        <div className="flex-1 max-w-fit ml-4" >
                            {name}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Link href='/currency/'><div onClick={() => makeSwap()} className="flex items-center cursor-pointer text-base mr-2 hover:text-accent-foreground active:scale-95 transition-all"><CheckIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Select</div></Link>
                    </div>
                </div>
            </div>
    )
}


