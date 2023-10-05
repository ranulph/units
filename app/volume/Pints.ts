import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const pintsAtom = atom(0);

export const pintsWorkerAtom = atom(
    get => Number((get(litresAtom) * 2.1134).toFixed(2)), 
    (get, set) => set(litresAtom, () => Number((get(pintsAtom) / 2.1134).toFixed(3)))
);

export const pintsDetails = {
    name: 'Pints',
    unit: 'pt',
    atom: pintsAtom,
    workerAtom: pintsWorkerAtom,
    isCentralUnit: false
};