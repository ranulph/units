import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const microgramsAtom = atom(0);

export const microgramsWorkerAtom = atom(
    get => Number((get(kilogramsAtom) / 0.0000000010000).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(microgramsAtom) / 1000000000).toFixed(99)))
);

export const microgramsDetails = {
    name: 'Micrograms',
    unit: 'µg',
    atom: microgramsAtom,
    workerAtom: microgramsWorkerAtom,
    isCentralUnit: false
};