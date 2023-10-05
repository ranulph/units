import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const hoursAtom = atom(0);

export const hoursWorkerAtom = atom(
    get => Number((get(minutesAtom) / 60).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(hoursAtom) * 60).toFixed(2)))
);

export const hoursDetails = {
    name: 'Hours',
    unit: 'hr',
    atom: hoursAtom,
    workerAtom: hoursWorkerAtom,
    isCentralUnit: false
};