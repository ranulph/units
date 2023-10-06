import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const millimetresAtom = atom(0);

export const millimetresWorkerAtom = atom(
    get => Number((get(metresAtom) / 0.0010000).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(millimetresAtom) / 1000).toFixed(3)))
);

export const millimetresDetails = {
    name: 'Millimetres',
    unit: 'mm',
    atom: millimetresAtom,
    workerAtom: millimetresWorkerAtom,
    isBaseUnit: false
};