import { atom } from 'jotai';

export const kilogramsAtom = atom(0);

export const kilogramsWorkerAtom = atom(
    get => get(kilogramsAtom), 
    (get, set) => set(kilogramsAtom, get(kilogramsAtom))
);

export const kilogramsDetails = {
    name: 'Kilograms',
    unit: 'kg',
    atom: kilogramsAtom,
    workerAtom: kilogramsWorkerAtom,
    isBaseUnit: true
};