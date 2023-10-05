import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const kilometresPHAtom = atom(0);

export const kilometresPHWorkerAtom = atom(
    get => Number((get(metresPSAtom) * 3.6).toFixed(3)), 
    (get, set) => set(metresPSAtom, () => Number((get(kilometresPHAtom) / 3.6).toFixed(3)))
);

export const kilometresPHDetails = {
    name: 'Kilometres/hour',
    unit: 'km/h',
    atom: kilometresPHAtom,
    workerAtom: kilometresPHWorkerAtom,
    isCentralUnit: false
};