'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { metresAtom } from './Metres';

import { metresDetails } from './Metres';
import { kilometresDetails } from './Kilometres';
import { centimetresDetails } from './Centimetres';
import { millimetresDetails } from './Millimetres';
import { micronsDetails } from './Microns';
import { feetDetails } from './Feet';
import { inchesDetails } from './Inches';
import { milesDetails } from './Miles';
import { yardsDetails } from './Yards';
import { nauticalMilesDetails } from './NauticalMiles';


export default function Length() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setMetres] = useAtom(metresAtom);

    const clear = () => {
        setMetres(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Length' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={millimetresDetails} />
            <UnitEntry unitDetails={metresDetails} />
            <UnitEntry unitDetails={kilometresDetails} />
            <UnitEntry unitDetails={milesDetails} />
            <UnitEntry unitDetails={feetDetails} />
            <UnitEntry unitDetails={inchesDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={centimetresDetails} />
                            <UnitEntry unitDetails={yardsDetails} />
                            <UnitEntry unitDetails={nauticalMilesDetails} />
                            <UnitEntry unitDetails={micronsDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}
