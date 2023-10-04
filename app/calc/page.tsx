'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cross2Icon } from "@radix-ui/react-icons";
import Link from 'next/link';


export default function Weight() {

    let [total, setTotal] = useState(0);
    let [currentCalc, setCurrentCalc] = useState('0');

    const enterValue = (value: string) => {
        if (currentCalc === '0' && value === '0') {
            return setCurrentCalc('0')
        }
        if (currentCalc === '0') {
            return setCurrentCalc(value)
        }
        // if (currentCalc.includes('.') && value === '.') {
        //     return setCurrentCalc(currentCalc)
        // }
        if (value !== '+' || '-' || '*' || '/' ) {
            setCurrentCalc(currentCalc += value)
            return setTotal(eval(currentCalc))

        }
        setCurrentCalc(currentCalc += value)
    }


    return (
        <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
            <div className='flex justify-between items-baseline px-1'>
                <h1 className="text-4xl font-extrabold tracking-tight pl-1">
                    Calc
                </h1>
                <Link href="/">
                    <Button variant="ghost" size="icon">
                        <Cross2Icon className='text-muted-foreground h-[1.4rem] w-[1.4rem] active:rotate-90 transition-all' />
                    </Button>
                </Link>
            </div>
            <div className='mt-2 w-96 border-2'>

                <div className='grid grid-cols-4 grid-rows-7	'>
                    <div className='col-span-4 border p-2 text-3xl justify-end items-center flex'>{total}</div>
                    <div className='col-span-4 border p-2 text-3xl justify-end items-center flex'>{currentCalc}</div>
                    <div onClick={() => enterValue(' + ')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>+</div>
                    <div onClick={() => enterValue(' - ')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>-</div>
                    <div onClick={() => enterValue(' * ')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>*</div>
                    <div onClick={() => enterValue(' / ')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>/</div>
                    <div onClick={() => enterValue('7')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>7</div>
                    <div onClick={() => enterValue('8')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>8</div>
                    <div onClick={() => enterValue('9')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>9</div>
                    <div onClick={() => setTotal(eval(currentCalc))} className='row-span-4 border bg-orange-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>=</div>
                    <div onClick={() => enterValue('4')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>4</div>
                    <div onClick={() => enterValue('5')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>5</div>
                    <div onClick={() => enterValue('6')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>6</div>
                    <div onClick={() => enterValue('1')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>1</div>
                    <div onClick={() => enterValue('2')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>2</div>
                    <div onClick={() => enterValue('3')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>3</div>
                    <div onClick={() => enterValue('0')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>0</div>
                    <div onClick={() => enterValue('.')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>.</div>
                    <div onClick={() => setCurrentCalc('0')} className='border active:bg-neutral-400 cursor-pointer p-2  text-3xl justify-center items-center flex'>AC</div>
                </div>


            </div>

        </main>
    )
}
