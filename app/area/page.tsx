'use client'

import React from 'react';
import Header from '@/components/Header';
import UnitEntry from '@/components/UnitEntry';
import MoreUnitsButton from '@/components/MoreUnitsButton';

import { useAtom, useAtomValue } from 'jotai';
import { expandedAtom, focusedAtom } from '@/app/Atoms';
import { squareMetresAtom } from './SquareMetres';

import { squareMetresDetails } from './SquareMetres';
import { acresDetails } from './Acres';
import { hectareDetails } from './Hectare';
import { squareFeetDetails } from './SquareFeet';
import { squareKilometeresDetails } from './SquareKilometres';
import { squareMilesDetails } from './SquareMiles';


export default function Area() {

    const expanded = useAtomValue(expandedAtom);

    const [, setFocused] = useAtom(focusedAtom);

    const [, setSquareMetres] = useAtom(squareMetresAtom);

    const clear = () => {
        setSquareMetres(0)
        setFocused('')
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Area' clear={clear} />
        <div className='mt-1 px-1'>

            <UnitEntry unitDetails={squareMetresDetails} />
            <UnitEntry unitDetails={hectareDetails} />
            <UnitEntry unitDetails={acresDetails} />
            <UnitEntry unitDetails={squareFeetDetails} />

            {expanded ?
                    <>
                        <div className='mx-10 py-10 border-x '></div>
                        <div className='mb-20'>
                            <UnitEntry unitDetails={squareMilesDetails} />
                            <UnitEntry unitDetails={squareKilometeresDetails} />
                        </div>
                    </>   
                :
                    <MoreUnitsButton />
                }

        </div>
    </main>
  )
}
