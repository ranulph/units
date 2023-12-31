'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { pascalsAtom } from './Pascals';

import { pascalsDetails } from './Pascals';
import { kilopascalsDetails } from './Kilopascals';
import { megapascalsDetails } from './Megapascals';
import { atomspheresDetails } from './Atmospheres';
import { psiDetails } from './Psi';
import { barDetails } from './Bar';
import { millibarDetails } from './Millibar';


export default function Pressure() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setPascals] = useAtom(pascalsAtom);

    const clear = () => {
        setPascals(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Pressure' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={psiDetails} />
            <UnitEntry unitDetails={atomspheresDetails} />
            <UnitEntry unitDetails={pascalsDetails} />
            <UnitEntry unitDetails={kilopascalsDetails} />
            <UnitEntry unitDetails={megapascalsDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={barDetails} />
                            <UnitEntry unitDetails={millibarDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}
