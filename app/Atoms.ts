import { atom } from "jotai";
import intervalToDuration from 'date-fns/intervalToDuration';
import formatDuration from 'date-fns/formatDuration';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import add from 'date-fns/add';
import compareAsc from 'date-fns/compareAsc'


export const focusedAtom = atom('');

export const cardsExpandedAtom = atom(false);

export const expandedAtom = atom(false);

export const activeAtom = atom(false)



export const countCal1Atom = atom<Date | undefined>(undefined);
export const countCal1MonthAtom = atom<Date>(new Date());
export const countCal2Atom = atom<Date | undefined>(undefined);
export const countCal2MonthAtom = atom<Date>(new Date());

export const durationAtom = atom<Duration>(
    get => intervalToDuration({
        start: get(countCal1Atom) ?? 0,
        end: get(countCal2Atom) ?? 0
    })
);
export const differenceAtom = atom(
    get => {
            return formatDuration(get(durationAtom), { format: ['years', 'months', 'weeks', 'days'] });
    }
);
export const dayDifferenceAtom = atom(
    get => {
            const daysString = formatDistanceStrict(get(countCal2Atom) ?? 0, get(countCal1Atom) ?? 0, { unit: 'day', roundingMethod: 'floor' })
            const daysNumber = Number(daysString.replace(/[^0-9]/g, ""))
            if (daysNumber < 31)
                return ''
            return ' (' + daysString + ')'
    }
);



export const addCalAtom = atom<Date | undefined>(undefined);
export const addCalMonthAtom = atom<Date>(new Date());
export const addDurationAtom = atom<Duration>(
    get => {
            return {
                years: get(addYearsAtom),
                months: get(addMonthsAtom),
                weeks: get(addWeeksAtom),
                days: get(addDaysAtom),
            }
    }
);
export const additionAtom = atom<Date | undefined>(
    get => {
            const newDate = add(get(addCalAtom) ?? new Date(), get(addDurationAtom))
            const checkEqual = compareAsc(newDate, new Date())
            if (checkEqual === 0) {
                return undefined
            }
            return newDate
    }
);
export const addDaysAtom = atom<number>(0);
export const addMonthsAtom = atom<number>(0);
export const addWeeksAtom = atom<number>(0);
export const addYearsAtom = atom<number>(0);