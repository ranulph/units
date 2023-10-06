import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const milesAtom = atom(0);

export const milesWorkerAtom = atom(
    get => Number((get(metresAtom) * 0.00062137).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(milesAtom) / 0.00062137).toFixed(3)))
);

export const milesDetails = {
    name: 'Miles',
    unit: 'mi',
    atom: milesAtom,
    workerAtom: milesWorkerAtom,
    isBaseUnit: false
};