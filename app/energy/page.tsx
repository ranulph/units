'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { caloriesAtom } from './Calories';

import { caloriesDetails } from './Calories';
import { kilojoulesDetails } from './Kilojoules';
import { JoulesDetails } from './Joules';

export default function Energy() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setCalories] = useAtom(caloriesAtom);

    const clear = () => {
        setCalories(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Energy' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={caloriesDetails} />
            <UnitEntry unitDetails={kilojoulesDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={JoulesDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}   
