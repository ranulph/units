import { atom } from 'jotai';

export const pascalsAtom = atom(0);

export const pascalsWorkerAtom = atom(
    get => get(pascalsAtom), 
    (get, set) => set(pascalsAtom, get(pascalsAtom))
);

export const pascalsDetails = {
    name: 'Pascals',
    unit: 'Pa',
    atom: pascalsAtom,
    workerAtom: pascalsWorkerAtom,
    isBaseUnit: true
};