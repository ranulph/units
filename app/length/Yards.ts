import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const yardsAtom = atom(0);

export const yardsWorkerAtom = atom(
    get => Number((get(metresAtom) * 1.0936).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(yardsAtom) / 1.09361).toFixed(4)))
);

export const yardsDetails = {
    name: 'Yards',
    unit: 'yd',
    atom: yardsAtom,
    workerAtom: yardsWorkerAtom,
    isCentralUnit: false
};