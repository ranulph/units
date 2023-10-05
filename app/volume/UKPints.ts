import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const ukPintsAtom = atom(0);

export const ukPintsWorkerAtom = atom(
    get => Number((get(litresAtom) * 1.7598).toFixed(2)), 
    (get, set) => set(litresAtom, () => Number((get(ukPintsAtom) / 1.7598).toFixed(3)))
);

export const ukPintsDetails = {
    name: 'UK Pints',
    unit: 'pt',
    atom: ukPintsAtom,
    workerAtom: ukPintsWorkerAtom,
    isCentralUnit: false
};  