'use client'

import { useEffect, useRef } from 'react';
import { ModeToggle } from '@/components/ui/modetoggle';
import UnitCard from '../components/UnitCard';
import { Button } from '@/components/ui/button';
import { useAtom, useSetAtom } from 'jotai';
import { Gradient } from '@/components/ui/gradient';

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

    const mRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const updateMousePostion = (ev: MouseEvent) => {
            if (!mRef.current) return
            const { clientX, clientY } = ev;
            mRef.current.style.setProperty('--x', `${clientX - 50}px`);
            mRef.current.style.setProperty('--y', `${clientY - 50}px`);

        }

        window.addEventListener('mousemove', updateMousePostion)

        return () => {
            window.removeEventListener('mousemove', updateMousePostion)
        }

    }, [])

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
            <div className='flex flex-wrap justify-center mt-2 [perspective:1500px]' onClick={() => cardClick()}>
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
                        <div className='flex flex-wrap justify-center mt-2 mb-20 [perspective:1500px]' onClick={() => cardClick()}>
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