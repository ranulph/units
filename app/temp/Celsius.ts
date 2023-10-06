import { atom } from 'jotai';

export const celsiusAtom = atom(0);

export const celsiusWorkerAtom = atom(
    get => get(celsiusAtom), 
    (get, set) => set(celsiusAtom, get(celsiusAtom))
);

export const celsiusDetails = {
    name: 'Celsius',
    unit: '°C',
    atom: celsiusAtom,
    workerAtom: celsiusWorkerAtom,
    isBaseUnit: true
};