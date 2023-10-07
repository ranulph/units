import { atom } from 'jotai';

export const cubicMetresAtom = atom(0);

export const cubicMetresWorkerAtom = atom(
    get => get(cubicMetresAtom), 
    (get, set) => set(cubicMetresAtom, get(cubicMetresAtom))
);

export const cubicMetresDetails = {
    name: 'Cubic Metres',
    unit: 'm³',
    atom: cubicMetresAtom,
    workerAtom: cubicMetresWorkerAtom,
    isBaseUnit: true
};