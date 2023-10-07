'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { caloriesAtom } from './Calories';

import { caloriesDetails } from './Calories';
import { kilojoulesDetails } from './Kilojoules';
import { JoulesDetails } from './Joules';

export default function Weight() {

    const [expanded, setExpanded] = useAtom(expandedAtom);

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
                    <div className='flex justify-center my-16'>
                        <Button variant='ghost2' onClick={() => setExpanded(true)}>+ More Units</Button>
                    </div>
                }

        </div>
    </main>
  )
}   
