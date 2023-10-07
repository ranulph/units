'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { metresPSAtom } from './MetresPS';

import { metresPSDetails } from './MetresPS';
import { kilometresPHDetails } from './KilometresPH';
import { feetPSDetails } from './FeetPS';
import { milesPHDetails } from './MilesPH';
import { knotsDetails } from './Knots';


export default function Speed() {

    const [expanded, setExpanded] = useAtom(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setMetresPS] = useAtom(metresPSAtom);

    const clear = () => {
        setMetresPS(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Speed' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={metresPSDetails} />
            <UnitEntry unitDetails={kilometresPHDetails} />
            <UnitEntry unitDetails={feetPSDetails} />
            <UnitEntry unitDetails={milesPHDetails} />


            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={knotsDetails} />

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
