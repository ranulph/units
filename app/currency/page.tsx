'use client'

import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
// import CurrencyEntry from '@/components/CurrencyEntry';


export default function Currency() {


    const clear = () => {

    };

    const handleClick = () => {

    }

    
  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Currency' clear={clear} />
        <div className='mt-1 px-1'>

            {/* <CurrencyEntry currencyDetails={} /> */}

            <Button onClick={() => handleClick()} variant='outline'>Input Data</Button>

        </div>
    </main>
  )
}
