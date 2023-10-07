import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const milligramsAtom = atom(0);

export const milligramsWorkerAtom = atom(
    get => Number((get(kilogramsAtom) * 1000000).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(milligramsAtom) / 1000000).toFixed(9)))
);

export const milligramsDetails = {
    name: 'Milligrams',
    unit: 'mg',
    atom: milligramsAtom,
    workerAtom: milligramsWorkerAtom,
    isBaseUnit: false
};