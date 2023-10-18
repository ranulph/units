'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { kilogramsAtom } from './Kilograms';

import { kilogramsDetails } from './Kilograms';
import { milligramsDetails } from './Milligrams';
import { gramsDetails } from './Grams';
import { poundsDetails } from './Pounds';
import { ouncesDetails } from './Ounces';
import { tonnesDetails } from './Tonnes';
import { microgramsDetails } from './Micrograms';
import { stoneDetails } from './Stone';


export default function Weight() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setKilograms] = useAtom(kilogramsAtom);

    const clear = () => {
        setKilograms(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Weight' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={gramsDetails} />
            <UnitEntry unitDetails={kilogramsDetails} />
            <UnitEntry unitDetails={poundsDetails} />
            <UnitEntry unitDetails={ouncesDetails} />
            
            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={tonnesDetails} />
                            <UnitEntry unitDetails={milligramsDetails} />
                            <UnitEntry unitDetails={microgramsDetails} />
                            <UnitEntry unitDetails={stoneDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}
