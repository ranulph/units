import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const kilometresAtom = atom(0);

export const kilometresWorkerAtom = atom(
    get => Number((get(metresAtom) / 1000).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(kilometresAtom) / 0.0010000).toFixed(3)))
);

export const kilometresDetails = {
    name: 'Kilometres',
    unit: 'km',
    atom: kilometresAtom,
    workerAtom: kilometresWorkerAtom,
    isBaseUnit: false
};