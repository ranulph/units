import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import intervalToDuration from 'date-fns/intervalToDuration';
import formatDuration from 'date-fns/formatDuration';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import add from 'date-fns/add';
import fx from 'money';
import accounting from "accounting";
import { oldRates } from "./oldRates";
import { currencySearchList } from "./currencySearchList";
import { currencySearchItem } from "./types";
import { currencyEntryItem } from "@/app/types";

export const cardsExpandedAtom = atom(false);
export const expandedAtom = atom(false);

export const focusedAtom = atom('');
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
            const newDate = add(get(addCalAtom) ?? new Date(1), get(addDurationAtom))
            if (get(addCalAtom) === undefined) {
                return undefined
            }
            return newDate
    }
);
export const addDaysAtom = atom<number>(0);
export const addMonthsAtom = atom<number>(0);
export const addWeeksAtom = atom<number>(0);
export const addYearsAtom = atom<number>(0);




const initialCurrencies = [
    { id: 0, currency: 'USD' },
    { id: 1, currency: 'EUR' },
    { id: 2, currency: 'GBP' },
    { id: 3, currency: 'NZD' },
    { id: 4, currency: 'AUD' },
    { id: 5, currency: 'CNY' }
];

export const currenciesAtom = atomWithStorage('selectedCurrencies', initialCurrencies);

export const currencyRatesAtom = atomWithStorage('currencyRates', oldRates);

export const currency0ValueAtom = atom<number>(0);
export const currency1ValueAtom = atom<number>(0);
export const currency2ValueAtom = atom<number>(0);
export const currency3ValueAtom = atom<number>(0);
export const currency4ValueAtom = atom<number>(0);
export const currency5ValueAtom = atom<number>(0);

export const currency0DataAtom = atomWithStorage<currencyEntryItem>('currency0Data', { code: "USD", name: "United States Dollar", country: "United States", countryCode: "US", symbol: "$", symbol_native: "$", rateUSD: 1, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIzNSIgaGVpZ2h0PSI2NTAiIHZpZXdCb3g9IjAgMCA3NDEwIDM5MDAiPjxwYXRoIGZpbGw9IiNiMjIyMzQiIGQ9Ik0wIDBoNzQxMHYzOTAwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMwMCIgZD0iTTAgNDUwaDc0MTBtMCA2MDBIMG0wIDYwMGg3NDEwbTAgNjAwSDBtMCA2MDBoNzQxMG0wIDYwMEgwIi8+PHBhdGggZmlsbD0iIzNjM2I2ZSIgZD0iTTAgMGgyOTY0djIxMDBIMHoiLz48ZyBmaWxsPSIjZmZmIj48ZyBpZD0iZCI+PGcgaWQ9ImMiPjxnIGlkPSJlIj48ZyBpZD0iYiI+PHBhdGggaWQ9ImEiIGQ9Im0yNDcgOTAgNzAuNTM0IDIxNy4wODItMTg0LjY2LTEzNC4xNjRoMjI4LjI1M0wxNzYuNDY2IDMwNy4wODJ6Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iNDIwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iODQwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iMTI2MCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNhIiB5PSIxNjgwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2IiIHg9IjI0NyIgeT0iMjEwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2MiIHg9IjQ5NCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNkIiB4PSI5ODgiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSIxOTc2Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgeD0iMjQ3MCIvPjwvZz48L3N2Zz4="});
export const currency1DataAtom = atomWithStorage<currencyEntryItem>('currency1Data', { code: "EUR", name: "Euro", country: "European Union", countryCode: "eu", symbol: "€", symbol_native: "€", rateUSD: 0.929305, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEwIiBoZWlnaHQ9IjU0MCI+PGRlZnM+PGcgaWQ9ImQiPjxnIGlkPSJiIj48cGF0aCBpZD0iYSIgZD0iTTAgMHYxaC41eiIgdHJhbnNmb3JtPSJyb3RhdGUoMTggMy4xNTcgLS41KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkiLz48L2c+PGcgaWQ9ImMiPjx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0icm90YXRlKDcyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2IiIHRyYW5zZm9ybT0icm90YXRlKDE0NCkiLz48L2c+PHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPjwvZz48L2RlZnM+PHBhdGggZmlsbD0iIzAzOSIgZD0iTTAgMGg4MTB2NTQwSDB6Ii8+PGcgZmlsbD0iI2ZjMCIgdHJhbnNmb3JtPSJtYXRyaXgoMzAgMCAwIDMwIDQwNSAyNzApIj48dXNlIHhsaW5rOmhyZWY9IiNkIiB5PSItNiIvPjx1c2UgeGxpbms6aHJlZj0iI2QiIHk9IjYiLz48ZyBpZD0iZSI+PHVzZSB4bGluazpocmVmPSIjZCIgeD0iLTYiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTQ0IC0yLjM0NCAtMi4xMSkiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiB0cmFuc2Zvcm09InJvdGF0ZSgxNDQgLTIuMTEgLTIuMzQ0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2QiIHRyYW5zZm9ybT0icm90YXRlKDcyIC00LjY2MyAtMi4wNzYpIi8+PHVzZSB4bGluazpocmVmPSIjZCIgdHJhbnNmb3JtPSJyb3RhdGUoNzIgLTUuMDc2IC41MzQpIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2UiIHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkiLz48L2c+PC9zdmc+"});
export const currency2DataAtom = atomWithStorage<currencyEntryItem>('currency2Data', { code: "GBP", name: "Pound Sterling", country: "United Kingdom", countryCode: "GB", symbol: "£", symbol_native: "£", rateUSD: 0.787619, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwIDMwIj48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Ik0wIDB2MzBoNjBWMHoiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYiI+PHBhdGggZD0iTTMwIDE1aDMwdjE1enYxNUgwekgwVjB6VjBoMzB6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMTIxNjkiIGQ9Ik0wIDB2MzBoNjBWMHoiLz48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIgZD0ibTAgMCA2MCAzMG0wLTMwTDAgMzAiLz48cGF0aCBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNCIgZD0ibTAgMCA2MCAzMG0wLTMwTDAgMzAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPjxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIgZD0iTTMwIDB2MzBNMCAxNWg2MCIvPjxwYXRoIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNMzAgMHYzME0wIDE1aDYwIi8+PC9nPjwvc3ZnPg=="});
export const currency3DataAtom = atomWithStorage<currencyEntryItem>('currency3Data', { code: "NZD", name: "New Zealand Dollar", country: "New Zealand", countryCode: "NZ", symbol: "NZ$", symbol_native: "$", rateUSD: 1.6444, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHBhdGggZD0iTTAgMGg2MDB2MzAwSDB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImMiPjxwYXRoIGQ9Im0wIDAgMzAwIDE1MEgwem0zMDAgMGgzMDBMMzAwIDE1MHptMCAxNTBoMzAwdjE1MHptMCAwdjE1MEgweiIvPjwvY2xpcFBhdGg+PGcgaWQ9ImQiPjxnIGlkPSJhIj48cGF0aCBkPSJNMC0uMzI1di41bDEtLjV6Ii8+PHBhdGggZD0ibS4xOS4yNjMtLjI5My0uNDA1TDEtLjMyNXoiLz48L2c+PHVzZSB4bGluazpocmVmPSIjYSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDcyIDAgMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InJvdGF0ZSgtNzIgMCAwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkgcm90YXRlKDcyKSIvPjwvZz48L2RlZnM+PHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTTAgMGgxMjAwdjYwMEgweiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2MCIgZD0ibTAgMCA2MDAgMzAwTTAgMzAwIDYwMCAwIiBjbGlwLXBhdGg9InVybCgjYikiLz48cGF0aCBzdHJva2U9IiNDODEwMkUiIHN0cm9rZS13aWR0aD0iNDAiIGQ9Im0wIDAgNjAwIDMwME0wIDMwMCA2MDAgMCIgY2xpcC1wYXRoPSJ1cmwoI2MpIi8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEwMCIgZD0iTTMwMCAwdjMwME0wIDE1MGg2MDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPjxwYXRoIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSI2MCIgZD0iTTMwMCAwdjMwME0wIDE1MGg2MDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPjx1c2UgeGxpbms6aHJlZj0iI2QiIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0ibWF0cml4KDQ1LjQgMCAwIDQ1LjQgOTAwIDEyMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBmaWxsPSIjQzgxMDJFIiB0cmFuc2Zvcm09Im1hdHJpeCgzMCAwIDAgMzAgOTAwIDEyMCkiLz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg4MiA5MDAgMjQwKSI+PHVzZSB4bGluazpocmVmPSIjZCIgZmlsbD0iI0ZGRiIgdHJhbnNmb3JtPSJyb3RhdGUoLTgyIDUxOS4wMjIgLTQ1Ny42NjYpIHNjYWxlKDQwLjQpIi8+PHVzZSB4bGluazpocmVmPSIjZCIgZmlsbD0iI0M4MTAyRSIgdHJhbnNmb3JtPSJyb3RhdGUoLTgyIDUxOS4wMjIgLTQ1Ny42NjYpIHNjYWxlKDI1KSIvPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg4MiA5MDAgMjQwKSI+PHVzZSB4bGluazpocmVmPSIjZCIgZmlsbD0iI0ZGRiIgdHJhbnNmb3JtPSJyb3RhdGUoLTgyIDY2OC41NyAtMzI3LjY2Nikgc2NhbGUoNDUuNCkiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBmaWxsPSIjQzgxMDJFIiB0cmFuc2Zvcm09InJvdGF0ZSgtODIgNjY4LjU3IC0zMjcuNjY2KSBzY2FsZSgzMCkiLz48L2c+PHVzZSB4bGluazpocmVmPSIjZCIgZmlsbD0iI0ZGRiIgdHJhbnNmb3JtPSJtYXRyaXgoNTAuNCAwIDAgNTAuNCA5MDAgNDgwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2QiIGZpbGw9IiNDODEwMkUiIHRyYW5zZm9ybT0ibWF0cml4KDM1IDAgMCAzNSA5MDAgNDgwKSIvPjwvc3ZnPg=="});
export const currency4DataAtom = atomWithStorage<currencyEntryItem>('currency4Data', { code: "AUD", name: "Australian Dollar", country: "Australia", countryCode: "AU", symbol: "AU$", symbol_native: "$", rateUSD: 1.497208, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4MCIgaGVpZ2h0PSI2NDAiIHZpZXdCb3g9IjAgMCAxMDA4MCA1MDQwIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Ik0wIDBoNnYzSDB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGQ9Ik0wIDB2MS41aDZWM3ptNiAwSDN2M0gweiIvPjwvY2xpcFBhdGg+PHBhdGggaWQ9ImMiIGQ9Im0wLTM2MCA2OS40MjEgMjE1Ljg0NSAyMTIuMDM4LTgwLjMwMUwxNTUuOTktMzUuNjAzbDE5NC45ODUgMTE1LjcxLTIyNS44ODEgMTkuNjUxIDMxLjEwNSAyMjQuNTlMMCAxNjBsLTE1Ni4xOTggMTY0LjM0OSAzMS4xMDUtMjI0LjU5LTIyNS44ODEtMTkuNjUxIDE5NC45ODYtMTE1LjcxMS0xMjUuNDcxLTE4OC44NTMgMjEyLjAzOCA4MC4zMDF6Ii8+PHBhdGggaWQ9ImQiIGQ9Ik0wLTIxMCA1NC44Ni03NS41MDhsMTQ0Ljg2MiAxMC42MTRMODguNzY1IDI4Ljg0MmwzNC42NyAxNDEuMDUyTDAgOTMuMzM0bC0xMjMuNDM1IDc2LjU2IDM0LjY3LTE0MS4wNTItMTEwLjk1Ny05My43MzZMLTU0Ljg2LTc1LjUwOHoiLz48L2RlZnM+PHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTTAgMGgxMDA4MHY1MDQwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii42IiBkPSJtMCAwIDYgM20wLTNMMCAzIiBjbGlwLXBhdGg9InVybCgjYSkiIHRyYW5zZm9ybT0ic2NhbGUoODQwKSIvPjxwYXRoIHN0cm9rZT0iI2U0MDAyYiIgc3Ryb2tlLXdpZHRoPSIuNCIgZD0ibTAgMCA2IDNtMC0zTDAgMyIgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InNjYWxlKDg0MCkiLz48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iODQwIiBkPSJNMjUyMCAwdjI1MjBNMCAxMjYwaDUwNDAiLz48cGF0aCBzdHJva2U9IiNlNDAwMmIiIHN0cm9rZS13aWR0aD0iNTA0IiBkPSJNMjUyMCAwdjI1MjBNMCAxMjYwaDUwNDAiLz48ZyBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNjIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjEgMCAwIDIuMSAyNTIwIDM3ODApIi8+PHVzZSB4bGluazpocmVmPSIjYyIgeD0iNzU2MCIgeT0iNDIwMCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHg9IjYzMDAiIHk9IjIyMDUiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSI3NTYwIiB5PSI4NDAiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSI4NjgwIiB5PSIxODY5Ii8+PHVzZSB4bGluazpocmVmPSIjZCIgeD0iODA2NCIgeT0iMjczMCIvPjwvZz48L3N2Zz4="});
export const currency5DataAtom = atomWithStorage<currencyEntryItem>('currency5Data', { code: "CNY", name: "Chinese Renminbi", country: "China", countryCode: "CN", symbol: "CN¥", symbol_native: "CN¥", rateUSD: 7.2735, updatedAt: 0, flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCI+PHBhdGggZmlsbD0iI0VFMUMyNSIgZD0iTTAgMGg5MDB2NjAwSDB6Ii8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMyAwIDAgMyAxNTAgMTUwKSI+PHBhdGggaWQ9ImEiIGZpbGw9IiNGRjAiIGQ9Im0wLTMwIDE3LjYzNCA1NC4yNy00Ni4xNjYtMzMuNTRoNTcuMDY0bC00Ni4xNjYgMzMuNTR6Ii8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDIzLjAzNiAyLjc4NCA3NjYuMDgyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDQ1Ljg3IDM4LjIwMSA0ODUuMzk2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDY5Ljk0NSAyOS44OTIgMzYyLjMyOCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InJvdGF0ZSgyMC42NiAtNTkwLjY2IDk1Ny45NTUpIi8+PC9zdmc+"});

export const currency0WorkerAtom = atom(
    (get) => accounting.formatNumber(get(currency0ValueAtom), 2, ",", "."),
    (get, set) => set(currency0ValueAtom, get(currency0ValueAtom))
);

export const currency1WorkerAtom = atom(
    (get) => {
        fx.base = 'USD',
        fx.rates = get(currencyRatesAtom);
        return accounting.formatNumber(fx.convert(get(currency0ValueAtom), { from: "USD", to: get(currenciesAtom)[1].currency}), 2, ",", ".")
    }, 
    (get, set) => set(currency0ValueAtom, Number(accounting.toFixed(fx.convert(get(currency1ValueAtom), {from: get(currenciesAtom)[1].currency, to: "USD"}), 6)))
);

export const currency2WorkerAtom = atom(
    (get) => {
        fx.base = 'USD',
        fx.rates = get(currencyRatesAtom);
        return accounting.formatNumber(fx.convert(get(currency0ValueAtom), { from: "USD", to: get(currenciesAtom)[2].currency}), 2, ",", ".")
    }, 
    (get, set) => set(currency0ValueAtom, Number(accounting.toFixed(fx.convert(get(currency2ValueAtom), {from: get(currenciesAtom)[2].currency, to: "USD"}), 6)))
);

export const currency3WorkerAtom = atom(
    (get) => {
        fx.base = 'USD',
        fx.rates = get(currencyRatesAtom);
        return accounting.formatNumber(fx.convert(get(currency0ValueAtom), { from: "USD", to: get(currenciesAtom)[3].currency}), 2, ",", ".")
    }, 
    (get, set) => set(currency0ValueAtom, Number(accounting.toFixed(fx.convert(get(currency3ValueAtom), {from: get(currenciesAtom)[3].currency, to: "USD"}), 6)))
);

export const currency4WorkerAtom = atom(
    (get) => {
        fx.base = 'USD',
        fx.rates = get(currencyRatesAtom);
        return accounting.formatNumber(fx.convert(get(currency0ValueAtom), { from: "USD", to: get(currenciesAtom)[4].currency}), 2, ",", ".")
    }, 
    (get, set) => set(currency0ValueAtom, Number(accounting.toFixed(fx.convert(get(currency4ValueAtom), {from: get(currenciesAtom)[4].currency, to: "USD"}), 6)))
);

export const currency5WorkerAtom = atom(
    (get) => {
        fx.base = 'USD',
        fx.rates = get(currencyRatesAtom);
        return accounting.formatNumber(fx.convert(get(currency0ValueAtom), { from: "USD", to: get(currenciesAtom)[5].currency}), 2, ",", ".")
    }, 
    (get, set) => set(currency0ValueAtom, Number(accounting.toFixed(fx.convert(get(currency5ValueAtom), {from: get(currenciesAtom)[5].currency, to: "USD"}), 6)))
);



export const swapViewAtom = atom(false);
export const swapCurrencyAtom = atom({ id: 5, currency: 'EGP' });
export const currencySwapAtom = atom(
    null,
    (get, set) => {
        const currencies = get(currenciesAtom);
        const swapCurrency = get(swapCurrencyAtom);
        set(currenciesAtom, currencies.with(swapCurrency.id, swapCurrency));
    }
);

export const searchAtom = atom('');
export const currencySearchListAtom = atom<currencySearchItem[]>(
    get => {
        let list: currencySearchItem[] = [];
        if (get(searchAtom) === '') {
            currencySearchList.forEach(currency => list.push(currency))
            return list
        }
        currencySearchList.filter(currency => {
            if (currency.key.includes(get(searchAtom).toUpperCase())) {
                list.push(currency)
            }
        })
        currencySearchList.filter(currency => {
            if (currency.value.name.toLowerCase().includes(get(searchAtom).toLowerCase())) {
                if (!list.includes(currency)) {
                    list.push(currency)
                }
            }
        })
        return list;
    },
);
