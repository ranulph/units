import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const millilitresAtom = atom(0);

export const millilitresWorkerAtom = atom(
    get => Number((get(litresAtom) / 0.0010000).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(millilitresAtom) / 1000).toFixed(3)))
);

export const millilitresDetails = {
    name: 'Millilitres',
    unit: 'ml',
    atom: millilitresAtom,
    workerAtom: millilitresWorkerAtom,
    isCentralUnit: false
};