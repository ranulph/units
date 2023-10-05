import { atom } from 'jotai';

export const litresAtom = atom(0);

export const litresWorkerAtom = atom(
    get => get(litresAtom), 
    (get, set) => set(litresAtom, get(litresAtom))
);

export const litresDetails = {
    name: 'Litres',
    unit: 'L',
    atom: litresAtom,
    workerAtom: litresWorkerAtom,
    isCentralUnit: true
};