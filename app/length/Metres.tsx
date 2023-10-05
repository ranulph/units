import { atom } from 'jotai';

export const metresAtom = atom(0);

export const metresWorkerAtom = atom(
    get => get(metresAtom), 
    (get, set) => set(metresAtom, get(metresAtom))
);

export const metresDetails = {
    name: 'Metres',
    unit: 'm',
    atom: metresAtom,
    workerAtom: metresWorkerAtom,
    isCentralUnit: true
};