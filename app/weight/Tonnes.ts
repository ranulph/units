import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const tonnesAtom = atom(0);

export const tonnesWorkerAtom = atom(
    get => Number((get(kilogramsAtom) / 1000).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(tonnesAtom) / 0.0010000).toFixed(3)))
);

export const tonnesDetails = {
    name: 'Tonnes',
    unit: 't',
    atom: tonnesAtom,
    workerAtom: tonnesWorkerAtom,
    isBaseUnit: false
};