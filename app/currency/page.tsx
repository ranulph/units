'use client'

import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import CurrencyEntry from '@/components/CurrencyEntry';
import { LoopIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { fetchRates } from './functions';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { currenciesAtom, currencyRatesAtom, focusedAtom, swapViewAtom } from '../Atoms';
import { currency0ValueAtom, currency1ValueAtom, currency2ValueAtom, currency3ValueAtom, currency4ValueAtom, currency5ValueAtom } from '../Atoms';
import { currency0WorkerAtom, currency1WorkerAtom, currency2WorkerAtom, currency3WorkerAtom, currency4WorkerAtom, currency5WorkerAtom  } from '../Atoms';
import { currency0DataAtom, currency1DataAtom, currency2DataAtom, currency3DataAtom, currency4DataAtom, currency5DataAtom  } from '../Atoms';


export default function Currency() {

  const setCurrencyRates = useSetAtom(currencyRatesAtom);
  const setFocused = useSetAtom(focusedAtom);
  const [swapView, setSwapView] = useAtom(swapViewAtom)

  const currencies = useAtomValue(currenciesAtom);
  
  const setCurrency0Value = useSetAtom(currency0ValueAtom);

  const { data } = useSWR('rates', fetchRates);

  if (data) {
    setCurrencyRates(data.rates)
  }
  
  const clear = () => {
    setFocused('');
    setCurrency0Value(0);
  };



  return (  
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Currency' clear={clear} currency={true} />
        <motion.div layout
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }} 
        className='mt-1 px-1'>

            <CurrencyEntry currencyObj={currencies[0]} valueAtom={currency0ValueAtom} workerAtom={currency0WorkerAtom} currencyDataAtom={currency0DataAtom} />
            <CurrencyEntry currencyObj={currencies[1]} valueAtom={currency1ValueAtom} workerAtom={currency1WorkerAtom} currencyDataAtom={currency1DataAtom} />
            <CurrencyEntry currencyObj={currencies[2]} valueAtom={currency2ValueAtom} workerAtom={currency2WorkerAtom} currencyDataAtom={currency2DataAtom} />
            <CurrencyEntry currencyObj={currencies[3]} valueAtom={currency3ValueAtom} workerAtom={currency3WorkerAtom} currencyDataAtom={currency3DataAtom} />
            <CurrencyEntry currencyObj={currencies[4]} valueAtom={currency4ValueAtom} workerAtom={currency4WorkerAtom} currencyDataAtom={currency4DataAtom} />
            <CurrencyEntry currencyObj={currencies[5]} valueAtom={currency5ValueAtom} workerAtom={currency5WorkerAtom} currencyDataAtom={currency5DataAtom} />

            <div 
            className='flex justify-center my-16'>
              <Button onClick={() => setSwapView(!swapView)} variant='ghost2'>
                {swapView ? 
                <><ArrowLeftIcon className='animate-pulse text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Rates</>
                :                
                <><LoopIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Swap Currency</>
                }
              </Button>
            </div>
        </motion.div>
    </main>
  )
}

