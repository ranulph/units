'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { litresAtom } from './Litres';

import { litresDetails } from './Litres';
import { millilitresDetails } from './Millilitres';
import { centilitersDetails } from './Centiliters';
import { gallonsDetails } from './Gallons';
import { quartsDetails } from './Quarts';
import { pintsDetails } from './Pints';
import { cupsDetails } from './Cups';
import { tablespoonsDetails } from './Tablespoons';
import { ukPintsDetails } from './UKPints';
import { teaspoonsDetails } from './Teaspoons';
import { fluidOuncesDetails } from './FluidOunces';


export default function Volume() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setLitres] = useAtom(litresAtom);

    const clear = () => {
        setLitres(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Volume' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={litresDetails} />
            <UnitEntry unitDetails={millilitresDetails} />
            <UnitEntry unitDetails={gallonsDetails} />
            <UnitEntry unitDetails={cupsDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x'></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={pintsDetails} />
                            <UnitEntry unitDetails={ukPintsDetails} />
                            <UnitEntry unitDetails={quartsDetails} />
                            <UnitEntry unitDetails={teaspoonsDetails} />
                            <UnitEntry unitDetails={tablespoonsDetails} />
                            <UnitEntry unitDetails={fluidOuncesDetails} />
                            <UnitEntry unitDetails={centilitersDetails} />                        
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}
