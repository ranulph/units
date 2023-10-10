'use client'

import React from 'react';
import Header from '@/components/Header';
import { DatePicker } from '@/components/DatePicker';
import AddEntry from '@/components/AddEntry';
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { countCal1Atom } from '@/app/Atoms';
import { countCal1MonthAtom } from '@/app/Atoms';
import { countCal2Atom } from '@/app/Atoms';
import { countCal2MonthAtom } from '@/app/Atoms';
import { dayDifferenceAtom } from '@/app/Atoms';
import { differenceAtom } from '@/app/Atoms';

import { addCalAtom } from '@/app/Atoms';
import { addCalMonthAtom } from '@/app/Atoms';
import { additionAtom } from '@/app/Atoms';
import { addDaysAtom } from '@/app/Atoms';
import { addMonthsAtom } from '@/app/Atoms';
import { addWeeksAtom } from '@/app/Atoms';
import { addYearsAtom } from '@/app/Atoms';

export default function DateTools() {

    const [countCal1, setCountCal1] = useAtom(countCal1Atom);
    const [countCal2, setCountCal2] = useAtom(countCal2Atom);
    const setCountCal1Month = useSetAtom(countCal1MonthAtom);
    const setCountCal2Month = useSetAtom(countCal2MonthAtom);
    const difference = useAtomValue(differenceAtom);
    const dayDifference = useAtomValue(dayDifferenceAtom);

    const setAddCal = useSetAtom(addCalAtom);
    const setAddCalMonth = useSetAtom(addCalMonthAtom);
    const additionResult = useAtomValue(additionAtom)
    const setDays = useSetAtom(addDaysAtom);
    const setMonths = useSetAtom(addMonthsAtom);
    const setWeeks = useSetAtom(addWeeksAtom);
    const setYears = useSetAtom(addYearsAtom);

    const clear = () => {
        setCountCal1(undefined)
        setCountCal2(undefined)
        setCountCal1Month(new Date())
        setCountCal2Month(new Date())
        setAddCal(undefined)
        setAddCalMonth(new Date())
        setDays(0)
        setMonths(0)
        setWeeks(0)
        setYears(0)
    };

  return (
    <main className="flex flex-col max-w-lg mx-auto px-2 mt-24">
        <Header title='Date' date={true} clear={clear} />
        <div className='px-1 flex flex-col'>

            <Card className='mt-3 dark:active:scale-100 w-full hover:cursor-default hover:bg-inherit shadow active:shadow'>
                <CardContent className='flex flex-col mt-2'>
                    <div className='flex flex-col justify-center text-center'>
                        <div className='mt-5 mb-3 md:text-lg text-base text-accent-foreground font-medium text-center'>Count Days</div>

                        <DatePicker atom={countCal1Atom} monthAtom={countCal1MonthAtom} title='Start Date' />
                        <DatePicker atom={countCal2Atom} monthAtom={countCal2MonthAtom} title='End Date' disabled={countCal1 === undefined}/>

                        <div className='mt-5 h-8 md:text-lg text-base text-accent-foreground font-medium text-center underline decoration-[#506247] underline-offset-8'>{countCal2 !== undefined && difference}{countCal2 !== undefined && dayDifference}</div>
                    </div>
                </CardContent>
            </Card>

            <div className='mx-10 py-10 my-2 border-x'></div>

            <Card className='mb-32 dark:active:scale-100 w-full hover:cursor-default hover:bg-inherit shadow active:shadow'>
                <CardContent className='flex flex-col mt-2'>
                    <div className='flex flex-col justify-center text-center'>
                        <div className='mt-5 mb-3 md:text-lg text-base text-accent-foreground font-medium text-center'>Add Days</div>

                        <DatePicker atom={addCalAtom} monthAtom={addCalMonthAtom} title='Start Date' />

                        <div className='flex justify-center mt-1'>
                            <AddEntry name='Days' atom={addDaysAtom} />
                            <AddEntry name='Months' atom={addMonthsAtom} />
                        </div>
                        <div className='flex justify-center'>
                            <AddEntry name='Weeks' atom={addWeeksAtom} />
                            <AddEntry name='Years' atom={addYearsAtom} />
                        </div>

                        <div className='mt-5 h-8 md:text-lg text-base text-accent-foreground font-medium text-center underline decoration-[#506247] underline-offset-8'>{additionResult ? format(additionResult, "PPP") : "" }</div>

                    </div>
                </CardContent>  
            </Card>
           
        </div>
    </main>
  )
}
