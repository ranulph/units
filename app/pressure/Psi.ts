import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const psiAtom = atom(0);

export const psiWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 6894.75729).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(psiAtom) * 6894.75729).toFixed(3)))
);

export const psiDetails = {
    name: 'Pounds/inch²',
    unit: 'psi',
    atom: psiAtom,
    workerAtom: psiWorkerAtom,
    isBaseUnit: false
};