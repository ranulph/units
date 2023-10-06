import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const centimetresAtom = atom(0);

export const centimetresWorkerAtom = atom(
    get => Number((get(metresAtom) / 0.010000).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(centimetresAtom) / 100).toFixed(3)))
);

export const centimetresDetails = {
    name: 'Centimetres',
    unit: 'cm',
    atom: centimetresAtom,
    workerAtom: centimetresWorkerAtom,
    isBaseUnit: false
};