'use client'

import React, { useState } from 'react';
import Header from '@/components/Header';
import { atom, useAtom } from 'jotai';
import { CalendarIcon } from '@radix-ui/react-icons';

import intervalToDuration from 'date-fns/intervalToDuration'
import formatDuration from 'date-fns/formatDuration'


import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



import { focusedAtom } from '@/app/Atoms';

const countCal1Atom = atom<Date | undefined>(undefined)
const countCal2Atom = atom<Date | undefined>(undefined)
const durationAtom = atom<Duration>(
    get => intervalToDuration({
        start: get(countCal1Atom) ?? 0,
        end: get(countCal2Atom) ?? 0
    })
);
const differenceAtom = atom(
    get => formatDuration(get(durationAtom))
);
const dayDifferenceAtom = atom(
    get => {
            const daysString = formatDistanceStrict(get(countCal2Atom) ?? 0, get(countCal1Atom) ?? 0, { unit: 'day' })
            const daysNumber = Number(daysString.replace(/[^0-9]/g, ""))
            if (daysNumber < 31)
                return ''
            return ' (' + daysString + ')'
    }
);

export default function Length() {

    const [countCal1, setCountCal1] = useAtom(countCal1Atom);
    const [countCal2, setCountCal2] = useAtom(countCal2Atom);
    
    const [difference, ] = useAtom(differenceAtom);
    const [dayDifference, ] = useAtom(dayDifferenceAtom);



    const [, setFocused] = useAtom(focusedAtom);


    const clear = () => {
        setCountCal1(undefined)
        setCountCal2(undefined)
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Date' date={true} clear={clear} />
        <div className='mt-3 px-1 flex'>

            <Card className='dark:active:scale-100 w-full hover:cursor-default hover:bg-inherit'>
                <CardHeader>
                    <CardTitle className='text-lg md:text-xl font-normal'>Count Days</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col mt-2'>
                    <div className='flex flex-col justify-center text-center'>

                        <div>
                            <Popover key={countCal1?.getDate()}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[250px] justify-center text-center mx-3 h-12 active:scale-90",
                                            !countCal1 && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {countCal1 ? format(countCal1, "PPP") : <span>Start Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={countCal1}
                                    onSelect={setCountCal1}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <div className='flex justify-center'>
                                <Button variant={"link"} className='w-fit' onClick={() => setCountCal1(new Date())}>Today</Button>
                            </div>
                        </div>

                        <div className='my-4' />

                        <div>
                            <Popover key={countCal2?.getDate()}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[250px] justify-center text-center mx-3 h-12 active:scale-90",
                                            !countCal2 && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {countCal2 ? format(countCal2, "PPP") : <span>End Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={countCal2}
                                    onSelect={setCountCal2}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <div className='flex justify-center'>
                                <Button variant={"link"} className='w-fit' onClick={() => setCountCal2(new Date())}>Today</Button>
                            </div>
                            <div className='mt-6 md:text-lg text-base border'>{countCal2 !== undefined && difference}{countCal2 !== undefined && dayDifference}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    </main>
  )
}
