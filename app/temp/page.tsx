'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { atom, useAtom } from 'jotai';
import { focusedAtom } from '@/components/Focused';
import { celsiusAtom } from './Celsius';

import { celsiusDetails } from './Celsius';
import { fahrenheitDetails } from './Fahrenheit';
import { kelvinDetails } from './Kelvin';


const expandedAtom = atom(false);


export default function Length() {

    const [expanded, setExpanded] = useAtom(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setCelsius] = useAtom(celsiusAtom);

    const clear = () => {
        setCelsius(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Temperature' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={celsiusDetails} />
            <UnitEntry unitDetails={fahrenheitDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x'></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={kelvinDetails} />
                        </div>
                    </>   
                :
                    <div className='flex justify-center my-16'>
                        <Button variant='ghost2' onClick={() => setExpanded(true)}>+ More Units</Button>
                    </div>
                }

        </div>
    </main>
  )
}
