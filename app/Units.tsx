'use client'

import { ModeToggle } from '@/components/ui/modetoggle';
import UnitCard from '../components/UnitCard';
import { Button } from '@/components/ui/button';
import { atom, useAtom, useSetAtom } from 'jotai';

import { focusedAtom } from '@/components/Focused';

const expandedAtom = atom(false);

export default function Units() {

    const setFocused = useSetAtom(focusedAtom);
    const [expanded, setExpanded] = useAtom(expandedAtom);

    return (
        <>
            <div className='flex justify-between items-baseline px-1'>
                <h1 className="text-4xl font-extrabold tracking-tight pl-2 cursor-default">
                    Units
                </h1>
                <div className='flex'>
                    <ModeToggle />
                </div>
            </div>
            <div className='flex flex-wrap justify-center mt-2' onClick={() => setFocused('')}>
                <UnitCard name='Weight' icon='weight' />
                <UnitCard name='Length' icon='length' />
                <UnitCard name='Temp' icon='thermo' />
                <UnitCard name='Date' icon='calendar' />
                <UnitCard name='Volume' icon='liquid' />
                <UnitCard name='Currency' icon='currency' />
            </div>
                {expanded ?
                    <>
                        <div className='mx-10 py-10 mt-2 border-x'></div>
                        <div className='flex flex-wrap justify-center mt-2 mb-20' onClick={() => setFocused('')}>
                            <UnitCard name='Speed' icon='speed' />
                            <UnitCard name='Dry Volume' icon='volume' />
                            <UnitCard name='Time' icon='time2' />
                            <UnitCard name='Power' icon='power' />
                            <UnitCard name='Energy' icon='energy' />
                            <UnitCard name='Force' icon='force' />
                            <UnitCard name='Area' icon='area' />
                            <UnitCard name='Pressure' icon='pressure' />
                            <UnitCard name='Torque' icon='torque' />
                        </div>   
                    </>
                :
                    <div className='flex justify-center my-16'>
                        <Button variant='ghost2' onClick={() => setExpanded(true)}>+ More Units</Button>
                    </div>
                }
        </>

    )
}