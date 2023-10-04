import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const gramsAtom = atom(0);

export const gramsWorkerAtom = atom(
    get => Number((get(kilogramsAtom) / 0.0010000).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(gramsAtom) / 1000.0).toFixed(3)))
);

export const gramsDetails = {
    name: 'Grams',
    unit: 'g',
    atom: gramsAtom,
    workerAtom: gramsWorkerAtom,
    isCentralUnit: false
};