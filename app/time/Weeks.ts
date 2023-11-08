import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const weeksAtom = atom(0);

export const weeksWorkerAtom = atom(
    get => Number((get(minutesAtom) / 10080).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(weeksAtom) * 10080).toFixed(2)))
);

export const weeksDetails = {
    name: 'Weeks',
    unit: 'wks',
    atom: weeksAtom,
    workerAtom: weeksWorkerAtom,
    isBaseUnit: false
};