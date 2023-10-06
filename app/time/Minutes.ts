import { atom } from 'jotai';

export const minutesAtom = atom(0);

export const minutesWorkerAtom = atom(
    get => get(minutesAtom), 
    (get, set) => set(minutesAtom, get(minutesAtom))
);

export const minutesDetails = {
    name: 'Minutes',
    unit: 'min',
    atom: minutesAtom,
    workerAtom: minutesWorkerAtom,
    isBaseUnit: true
};

