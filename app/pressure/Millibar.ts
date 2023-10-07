import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const millibarAtom = atom(0);

export const millibarWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 100).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(millibarAtom) * 100).toFixed(3)))
);

export const millibarDetails = {
    name: 'Millibar',
    unit: 'mbar',
    atom: millibarAtom,
    workerAtom: millibarWorkerAtom,
    isBaseUnit: false
};