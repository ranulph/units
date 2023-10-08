import { useAtom, PrimitiveAtom } from 'jotai';
import { CalendarIcon } from '@radix-ui/react-icons';

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ atom, monthAtom, title, disabled }: { atom: PrimitiveAtom<Date | undefined>; monthAtom: PrimitiveAtom<Date>; title: string; disabled?: boolean }) {

    const [date, setDate] = useAtom(atom);
    const [month, setMonth] = useAtom(monthAtom);

    return (
        <div className='mt-4'>
            <Popover key={date?.getDate()}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[260px] justify-center text-center mx-3 h-12 active:scale-95",
                            !date && "text-muted-foreground"
                        )}
                        disabled={disabled}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{title}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[260px] p-0 flex justify-center" align="start">
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    month={month}
                    onMonthChange={setMonth}
                    />
                </PopoverContent>
            </Popover>
            <div className='flex justify-center'>
                <Button variant={"link"} className='w-fit' onClick={() => setDate(new Date())} disabled={disabled}>Today</Button>
            </div>
        </div>
    )
}