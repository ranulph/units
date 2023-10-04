'use client'

import React from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";

import UnitEntry from '@/components/UnitEntry';
import { focusedAtom } from '@/components/Focused';
import { kilogramsAtom } from './Kilograms';

import { kilogramsDetails } from './Kilograms';
import { gramsDetails } from './Grams';
import { poundsDetails } from './Pounds';


export default function Weight() {

    const [, setFocused] = useAtom(focusedAtom);

    const [, setKilograms] = useAtom(kilogramsAtom);

    const clear = () => {
        setKilograms(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <div className='flex justify-between items-baseline px-1'>
            <h1 className="text-4xl font-extrabold tracking-tight pl-2">
                Weight
            </h1>
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
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={kilogramsDetails}  />
            <UnitEntry unitDetails={gramsDetails}  />
            <UnitEntry unitDetails={poundsDetails}  />

        </div>
    </main>
  )
}
