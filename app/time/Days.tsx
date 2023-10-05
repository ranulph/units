import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const daysAtom = atom(0);

export const daysWorkerAtom = atom(
    get => Number((get(minutesAtom) / 1440).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(daysAtom) * 1440).toFixed(2)))
);

export const daysDetails = {
    name: 'Days',
    unit: 'd',
    atom: daysAtom,
    workerAtom: daysWorkerAtom,
    isCentralUnit: false
};