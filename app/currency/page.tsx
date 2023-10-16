'use client'

import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import CurrencyEntry from '@/components/CurrencyEntry';
import { LoopIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import useSWR from 'swr';
import { token } from "@/app/token";

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { currenciesAtom, currencyRatesAtom, focusedAtom, swapViewAtom } from '../Atoms';
import { currency0ValueAtom, currency1ValueAtom, currency2ValueAtom, currency3ValueAtom, currency4ValueAtom, currency5ValueAtom } from '../Atoms';
import { currency0WorkerAtom, currency1WorkerAtom, currency2WorkerAtom, currency3WorkerAtom, currency4WorkerAtom, currency5WorkerAtom  } from '../Atoms';
import { currency0FlagAtom, currency1FlagAtom, currency2FlagAtom, currency3FlagAtom, currency4FlagAtom, currency5FlagAtom  } from '../Atoms';

const getRates = async () => {
  const ratesFile = await fetch('/api/rates/', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + token,
    }
  }).then(res => res.json())
  return ratesFile
};


export default function Currency() {

  const { data } = useSWR('rates', getRates);

  const setCurrencyRates = useSetAtom(currencyRatesAtom);
  const setFocused = useSetAtom(focusedAtom);
  const [swapView, setSwapView] = useAtom(swapViewAtom)

  const currencies = useAtomValue(currenciesAtom);
  
  const setCurrency0Value = useSetAtom(currency0ValueAtom);

  
  const clear = () => {
    setFocused('');
    setCurrency0Value(0);
  };

  if (data) {
    setCurrencyRates(data.rates)
  }

  return (  
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Currency' clear={clear} currency={true} />
        <div className='mt-1 px-1'>

            <CurrencyEntry currencyObj={currencies[0]} valueAtom={currency0ValueAtom} workerAtom={currency0WorkerAtom} flagAtom={currency0FlagAtom} />
            <CurrencyEntry currencyObj={currencies[1]} valueAtom={currency1ValueAtom} workerAtom={currency1WorkerAtom} flagAtom={currency1FlagAtom} />
            <CurrencyEntry currencyObj={currencies[2]} valueAtom={currency2ValueAtom} workerAtom={currency2WorkerAtom} flagAtom={currency2FlagAtom} />
            <CurrencyEntry currencyObj={currencies[3]} valueAtom={currency3ValueAtom} workerAtom={currency3WorkerAtom} flagAtom={currency3FlagAtom} />
            <CurrencyEntry currencyObj={currencies[4]} valueAtom={currency4ValueAtom} workerAtom={currency4WorkerAtom} flagAtom={currency4FlagAtom} />
            <CurrencyEntry currencyObj={currencies[5]} valueAtom={currency5ValueAtom} workerAtom={currency5WorkerAtom} flagAtom={currency5FlagAtom} />

            <div className='flex justify-center my-16'>
              <Button onClick={() => setSwapView(!swapView)} variant='ghost2'>
                {swapView ? 
                <><ArrowLeftIcon className='animate-pulse text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Go Back</>
                :                
                <><LoopIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Swap Currency</>
                }
              </Button>
            </div>
        </div>
    </main>
  )
}

