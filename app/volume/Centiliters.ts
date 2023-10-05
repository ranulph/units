import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const centilitersAtom = atom(0);

export const centilitersWorkerAtom = atom(
    get => Number((get(litresAtom) / 0.010000).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(centilitersAtom) / 100).toFixed(3)))
);

export const centilitersDetails = {
    name: 'Centiliters',
    unit: 'cl',
    atom: centilitersAtom,
    workerAtom: centilitersWorkerAtom,
    isCentralUnit: false
};