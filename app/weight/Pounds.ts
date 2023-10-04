import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const poundsAtom = atom(0);

export const poundsWorkerAtom = atom(
    get => Number((get(kilogramsAtom) * 2.2046).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(poundsAtom) / 2.2046).toFixed(3)))
);

export const poundsDetails = {
    name: 'Pounds',
    unit: 'lb',
    atom: poundsAtom,
    workerAtom: poundsWorkerAtom,
    isCentralUnit: false
};