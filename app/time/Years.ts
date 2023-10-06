import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const yearsAtom = atom(0);

export const yearsWorkerAtom = atom(
    get => Number((get(minutesAtom) / 525600).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(yearsAtom) * 525600).toFixed(2)))
);

export const yearsDetails = {
    name: 'Years',
    unit: 'yr',
    atom: yearsAtom,
    workerAtom: yearsWorkerAtom,
    isBaseUnit: false
};