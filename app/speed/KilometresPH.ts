import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const kilometresPHAtom = atom(0);

export const kilometresPHWorkerAtom = atom(
    get => Number((get(metresPSAtom) * 3.6).toFixed(1)), 
    (get, set) => set(metresPSAtom, () => Number((get(kilometresPHAtom) / 3.6).toFixed(1)))
);

export const kilometresPHDetails = {
    name: 'Kilometres/hr',
    unit: 'km/h',
    atom: kilometresPHAtom,
    workerAtom: kilometresPHWorkerAtom,
    isBaseUnit: false
};