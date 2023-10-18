'use client'

import useSWR from "swr";
import { token } from "@/app/token";
import { useAtom, useSetAtom, PrimitiveAtom, WritableAtom, useAtomValue } from "jotai";
import { focusedAtom, swapViewAtom, searchAtom } from "@/app/Atoms";
import accounting from "accounting";
import { LoopIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { currencyEntryItem } from "@/app/types";

const fetchCurrency = async (currency: string) => {
    const currencyEntryItem: currencyEntryItem = await fetch('/api/currency/', {
        method: 'POST',
        body: JSON.stringify({ currency: currency }),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    return currencyEntryItem;
};

export default function CurrencyEntry({ 
    currencyObj, 
    valueAtom, 
    workerAtom,
    flagAtom 
} : { 
    currencyObj: { id: number, currency: string };
    valueAtom: PrimitiveAtom<number>;
    workerAtom: WritableAtom<string, [], void>;
    flagAtom: PrimitiveAtom<string>;
}) {
    
    const currency = currencyObj.currency;
    const id = currencyObj.id;

    const [focused, setFocused] = useAtom(focusedAtom);
    const setSearch = useSetAtom(searchAtom);
    const swapView = useAtomValue(swapViewAtom);

    const [currencyInput, setCurrencyInput] = useAtom(valueAtom);
    const [currencyFromBaseCurrency, setBaseCurrencyFromCurrency] = useAtom(workerAtom);
    const [flag, setFlag] = useAtom(flagAtom);
    
    const { data } = useSWR(currency, fetchCurrency);  

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

    if (data) {
        if (flag !== data?.flag) {
            setFlag(data?.flag)
        }
    }
   
    return (
            <div className="flex flex-col text-lg justify-between items-center md:text-xl my-2 h-16 md:h-20 p-4 rounded-xl border hover:text-card-foreground transition-transform ease-out hover:[transform:scale(1.01)] hover:bg-accent hover:border-neutral-300 dark:hover:border-neutral-800 dark:hover:bg-card/90 hover:shadow-sm active:shadow-inner">
                <div className="flex w-full justify-between md:mt-2 items-center">
                    <div className="flex items-center">
                            <div className="h-8 w-12">
                                <img src={flag} className="w-full h-full object-cover" alt={currency} />
                            </div>
                        <div className="flex-1 max-w-fit ml-4" >
                            {data?.code}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            {swapView ?
                                isBaseCurrency ? null
                            :
                                <Link href={swapLink}><div onClick={() => setSearch('')} className="flex items-center cursor-pointer text-base mr-2 hover:text-accent-foreground active:scale-95 transition-all"><LoopIcon className='text-muted-foreground h-[1.2rem] w-[1.2rem] mr-1'/>Swap</div></Link>
                            : focused === currency || focused === '' ?
                                <input type="number" inputMode="decimal" value={focused === '' ? '' : currencyInput === 0 ? '' : currencyInput} onFocus={() => focus()} onChange={(e) => change(e.currentTarget.value)} placeholder={accounting.formatNumber(data?.rateUSD ?? 0, 2, ",", ".")} className='text-right bg-transparent w-40 md:w-auto focus-visible:outline-none' />
                            :
                                <input value={currencyFromBaseCurrency === '0.00' ? '' : currencyFromBaseCurrency} onFocus={() => focus()} onChange={(e) => change(e.currentTarget.value)} placeholder={accounting.formatNumber(data?.rateUSD ?? 0, 2, ",", ".")} className='text-right bg-transparent w-40 md:w-auto focus-visible:outline-none' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full -mt-1 md:mt-0">
                    {swapView ?
                        null
                    :
                        <div className="text-xs text-muted-foreground">{data?.name}{" "}{data?.symbol_native}</div>
                    }
                </div>
            </div>
    )
}

