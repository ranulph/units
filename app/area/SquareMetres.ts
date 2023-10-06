import { atom } from 'jotai';

export const squareMetresAtom = atom(0);

export const squareMetresWorkerAtom = atom(
    get => get(squareMetresAtom), 
    (get, set) => set(squareMetresAtom, get(squareMetresAtom))
);

export const squareMetresDetails = {
    name: 'Square Metres',
    unit: 'm²',
    atom: squareMetresAtom,
    workerAtom: squareMetresWorkerAtom,
    isBaseUnit: true
};