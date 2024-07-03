'use client'

import useSWR from "swr";
import { useAtom, useSetAtom, PrimitiveAtom, WritableAtom, useAtomValue } from "jotai";
import { focusedAtom, swapViewAtom, searchAtom } from "@/app/Atoms";
import accounting from "accounting";
import { LoopIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { currencyEntryItem } from "@/app/types";
import { motion } from "framer-motion";
import { fetchCurrency } from "@/app/currency/functions";


export default function CurrencyEntry({ 
    currencyObj, 
    valueAtom, 
    workerAtom,
    currencyDataAtom 
} : { 
    currencyObj: { id: number, currency: string };
    valueAtom: PrimitiveAtom<number>;
    workerAtom: WritableAtom<string, [], void>;
    currencyDataAtom: PrimitiveAtom<currencyEntryItem>;
}) {
    
    const { id, currency } = currencyObj;

    const [focused, setFocused] = useAtom(focusedAtom);
    const isFocused = focused === currency;
    const setSearch = useSetAtom(searchAtom);
    const swapView = useAtomValue(swapViewAtom);

    const [currencyInput, setCurrencyInput] = useAtom(valueAtom);
    const [currencyFromBaseCurrency, setBaseCurrencyFromCurrency] = useAtom(workerAtom);
    const [currencyData, setCurrencyData] = useAtom(currencyDataAtom);

    const updateCheck = () => {
        if (currency !== currencyData.code || currencyData.updatedAt === 0) return true
        return false
    };
    
    const { data } = useSWR(() => updateCheck() ? currency : null, fetchCurrency);

    if (data) {
        setCurrencyData(data)
    }

    const isBaseCurrency = (currency === 'USD');
    const swapLink = '/currency/swap/' + id;

    const focus = () => {
        setCurrencyInput(accounting.unformat(currencyFromBaseCurrency));
        setFocused(currency);
    };

    const change = (currencyInput: string) => {
        if (currencyInput === '') {
            setFocused('');
        } else {
            setFocused(currency);
        }
        setCurrencyInput(Number(currencyInput))
        if (!isBaseCurrency) {
            setBaseCurrencyFromCurrency();
        }
    };

   
    return (
            <motion.div layout
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}  
            whileHover={{ scale: 1.01 }} 
            onClick={() => document.getElementById(currency)?.focus()}
            data-isfocused={isFocused} className="flex flex-col text-lg justify-between items-center md:text-xl my-2 h-16 md:h-20 p-4 rounded-xl border hover:text-card-foreground transition-transform ease-out md:hover:bg-accent md:hover:border-neutral-300 md:dark:hover:border-neutral-800 md:dark:hover:bg-card/90 md:hover:shadow-sm md:active:shadow-inner data-[isfocused=true]:bg-accent data-[isfocused=true]:border-neutral-300 data-[isfocused=true]:text-card-foreground data-[isfocused=true]:dark:border-neutral-800 data-[isfocused=true]:dark:bg-card/90 data-[isfocused=true]:shadow-sm data-[isfocused=true]:[transform:scale(1.01)]">
                <div className="flex w-full justify-between md:mt-2 items-center">
                    <div className="flex items-center">
                            <div className="h-8 w-12">
                                <img src={currencyData.flag} className="w-full h-full object-cover" alt={currency} />
                            </div>
                        <div className="flex-1 max-w-fit ml-4 cursor-default" >
                            {currencyData.code}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            {swapView ?
                                isBaseCurrency ? null
                            :
                                <Link href={swapLink}><div onClick={() => setSearch('')} className="flex items-center cursor-pointer text-base mr-2 hover:text-accent-foreground active:scale-95 transition-all"><LoopIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Swap</div></Link>
                            : focused === currency || focused === '' ?
                                <input id={currency} type="number" inputMode="decimal" value={focused === '' ? '' : currencyInput === 0 ? '' : currencyInput} onFocus={() => focus()} onChange={(e) => change(e.currentTarget.value)} placeholder={accounting.formatNumber(currencyData.rateUSD ?? 0, 2, ",", ".")} autoComplete="off" className='text-right bg-transparent w-40 md:w-auto focus-visible:outline-none' />
                            :
                                <input id={currency} value={currencyFromBaseCurrency === '0.00' ? '' : currencyFromBaseCurrency} onFocus={() => focus()} onChange={(e) => change(e.currentTarget.value)} placeholder={accounting.formatNumber(currencyData.rateUSD ?? 0, 2, ",", ".")} autoComplete="off" className='text-right bg-transparent w-40 md:w-auto focus-visible:outline-none' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full -mt-1 md:mt-0">
                    {swapView ?
                        null
                    :
                        <div className="text-xs text-muted-foreground">{currencyData.name}{" "}{currencyData.symbol_native}</div>
                    }
                </div>
            </motion.div>
    )
}

