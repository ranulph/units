'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ReloadIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import CurrencySwapEntry from '@/components/CurrencySwapEntry';
import { searchAtom, currencySearchListAtom, swapViewAtom } from '@/app/Atoms';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CurrencySwap() {

    const [search, setSearch] = useAtom(searchAtom);
    const currencySearchList = useAtomValue(currencySearchListAtom);
    const setSwapView = useSetAtom(swapViewAtom);
   
    const id = Number(usePathname().at(-1));

    let currencyList: JSX.Element[] = [];
    currencySearchList.forEach(currency => {
        currencyList.push(<CurrencySwapEntry id={id} key={currency.value.code} code={currency.value.code} name={currency.value.name} flag={currency.value.flag} />)
    });

    return (    
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}  
        className="flex flex-col max-w-lg mx-auto px-2 mt-24">
                <div className='flex justify-between items-baseline px-1'>
                        <h1 className="flex items-baseline text-4xl text-d font-extrabold tracking-tight pl-2">
                            <input value={search} onChange={(e) => setSearch(e.currentTarget.value)} autoFocus autoComplete='off' className='bg-transparent w-56 focus-visible:outline-none ml-1 border-b-2' placeholder='Search' />
                        </h1>
                    <div>
                        <Button variant="ghost" size="icon" onClick={() => setSearch('')}>
                                <ReloadIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-180 transition-all' />
                        </Button>
                        <Link href="/currency">
                            <Button variant="ghost" size="icon" onClick={() => setSwapView(false)}>
                                <Cross1Icon className='text-muted-foreground h-[1.2rem] w-[1.2rem] active:rotate-90 transition-all' />
                            </Button>
                        </Link>
                    </div>
                </div>
            <div 
            className='mt-1 px-1 mb-16'>
                {currencyList}
            </div>
        </motion.div>
    )
}


