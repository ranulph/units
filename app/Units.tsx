'use client'

import { useState } from 'react';
import { ModeToggle } from '@/components/ui/modetoggle';
import UnitCard from '../components/UnitCard';
import { Button } from '@/components/ui/button';

export default function Units() {

    const [expanded, setExpanded] = useState(false);

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
            <div className='flex flex-wrap justify-center mt-2'>
                <UnitCard name='Weight' icon='weight' />
                <UnitCard name='Length' icon='length' />
                <UnitCard name='Temp' icon='thermo' />
                <UnitCard name='Date' icon='calendar' />
                <UnitCard name='Volume' icon='liquid' />
                <UnitCard name='Currency' icon='currency' />
            </div>
            <div className='flex justify-center my-16'>
                {expanded ?
                    <div className='flex flex-wrap justify-center mt-3'>
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
                :
                    <Button variant='ghost2' onClick={() => setExpanded(true)}>+ More Units</Button>
                }
            </div>
        </>

    )
}