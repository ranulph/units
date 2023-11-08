'use client'

import React from 'react';
import MoreUnitsButton from '@/components/MoreUnitsButton';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { cubicMetresAtom } from './CubicMetres';

import { cubicMetresDetails } from './CubicMetres';
import { litresDetails } from './Litres';
import { cubicFeetDetails } from './CubicFeet';
import { cubicInchesDetails } from './CubicInches'; 
import { cubicYardsDetails } from './CubicYards';


export default function DryVolume() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setCubicMetres] = useAtom(cubicMetresAtom);

    const clear = () => {
        setCubicMetres(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Dry Volume' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={cubicMetresDetails} />
            <UnitEntry unitDetails={litresDetails} />
            <UnitEntry unitDetails={cubicFeetDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={cubicInchesDetails} />
                            <UnitEntry unitDetails={cubicYardsDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}   
