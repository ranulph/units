import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const inchesAtom = atom(0);

export const inchesWorkerAtom = atom(
    get => Number((get(metresAtom) * 39.370).toFixed(2)), 
    (get, set) => set(metresAtom, () => Number((get(inchesAtom) / 39.370).toFixed(4)))
);

export const inchesDetails = {
    name: 'Inches',
    unit: 'in',
    atom: inchesAtom,
    workerAtom: inchesWorkerAtom,
    isBaseUnit: false
};