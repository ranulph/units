'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { atom, useAtom } from 'jotai';
import { focusedAtom } from '@/components/Focused';
import { minutesAtom } from './Minutes';

import { hoursDetails } from './Hours';
import { minutesDetails } from './Minutes';
import { daysDetails } from './Days';
import { secondsDetails } from './Seconds';
import { yearsDetails } from './Years';
import { millisecondsDetails } from './Milliseconds';

const expandedAtom = atom(false);


export default function Time() {

    const [expanded, setExpanded] = useAtom(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setMinutes] = useAtom(minutesAtom);

    const clear = () => {
        setMinutes(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Time' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={daysDetails} />
            <UnitEntry unitDetails={hoursDetails} />
            <UnitEntry autoFocus unitDetails={minutesDetails} />
            <UnitEntry unitDetails={secondsDetails} />


            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x'></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={yearsDetails} />
                            <UnitEntry unitDetails={millisecondsDetails} />
                     
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
