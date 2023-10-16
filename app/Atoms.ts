import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import intervalToDuration from 'date-fns/intervalToDuration';
import formatDuration from 'date-fns/formatDuration';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import add from 'date-fns/add';
import compareAsc from 'date-fns/compareAsc';
import fx from 'money';
import accounting from "accounting";
import { oldRates } from "./oldRates";
import { currencySearchList } from "./currencySearchList";
import { currencySearchItem } from "./types";


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
            const checkEqual = compareAsc(newDate, new Date(1))
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




const initialCurrencies = [
    { id: 0, currency: 'USD' },
    { id: 1, currency: 'EUR' },
    { id: 2, currency: 'GBP' },
    { id: 3, currency: 'NZD' },
    { id: 4, currency: 'AUD' },
    { id: 5, currency: 'EGP' }
];

export const currenciesAtom = atomWithStorage('selectedCurrencies', initialCurrencies);

export const currencyRatesAtom = atomWithStorage('currencyRates', oldRates);

export const currency0ValueAtom = atom<number>(0);
export const currency1ValueAtom = atom<number>(0);
export const currency2ValueAtom = atom<number>(0);
export const currency3ValueAtom = atom<number>(0);
export const currency4ValueAtom = atom<number>(0);
export const currency5ValueAtom = atom<number>(0);

export const currency0FlagAtom = atomWithStorage<string>('currency0Flag', '');
export const currency1FlagAtom = atomWithStorage<string>('currency1Flag', '');
export const currency2FlagAtom = atomWithStorage<string>('currency2Flag', '');
export const currency3FlagAtom = atomWithStorage<string>('currency3Flag', '');
export const currency4FlagAtom = atomWithStorage<string>('currency4Flag', '');
export const currency5FlagAtom = atomWithStorage<string>('currency5Flag', '');

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
