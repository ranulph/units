'use client'

import { ModeToggle } from '@/components/ui/modetoggle';
import UnitCard from '../components/UnitCard';
import { Button } from '@/components/ui/button';
import { useAtom, useSetAtom } from 'jotai';

import { focusedAtom, cardsExpandedAtom, expandedAtom, activeAtom, swapViewAtom } from '@/app/Atoms';

export default function Units() {

    const [cardsExpanded, setCardsExpanded] = useAtom(cardsExpandedAtom);
    const setFocused = useSetAtom(focusedAtom);
    const setExpanded = useSetAtom(expandedAtom);
    const setActive = useSetAtom(activeAtom);
    const setSwapView = useSetAtom(swapViewAtom);

    const cardClick = () => {
        setFocused('');
        setExpanded(false);
        setActive(false);
        setSwapView(false);
    };

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
            <div className='flex flex-wrap justify-center mt-2' onClick={() => cardClick()}>
                <UnitCard name='Weight' icon='weight' />
                <UnitCard name='Length' icon='length' />
                <UnitCard name='Temp' icon='thermo' />
                <UnitCard name='Date' icon='calendar' />
                <UnitCard name='Volume' icon='liquid' />
                <UnitCard name='Currency' icon='currency' />
            </div>
                {cardsExpanded ?
                    <>
                        <div className='mx-10 py-10 mt-2 border-x'></div>
                        <div className='flex flex-wrap justify-center mt-2 mb-20' onClick={() => cardClick()}>
                            <UnitCard name='Speed' icon='speed' />
                            <UnitCard name='Area' icon='area' />
                            <UnitCard name='Time' icon='time2' />
                            <UnitCard name='Pressure' icon='pressure' />
                            <UnitCard name='Dry Volume' icon='volume' />
                            <UnitCard name='Energy' icon='energy' />
                        </div>   
                    </>
                :
                    <div className='flex justify-center my-16'>
                        <Button variant='ghost2' onClick={() => setCardsExpanded(true)}>+ More Units</Button>
                    </div>
                }
        </>

    )
}