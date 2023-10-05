import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const cupsAtom = atom(0);

export const cupsWorkerAtom = atom(
    get => Number((get(litresAtom) * 4).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(cupsAtom) / 4).toFixed(3)))
);

export const cupsDetails = {
    name: 'Cups',
    unit: 'cup',
    atom: cupsAtom,
    workerAtom: cupsWorkerAtom,
    isCentralUnit: false
};