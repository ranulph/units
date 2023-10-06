import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const feetAtom = atom(0);

export const feetWorkerAtom = atom(
    get => Number((get(metresAtom) * 3.2808).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(feetAtom) / 3.28084).toFixed(3)))
);

export const feetDetails = {
    name: 'Feet',
    unit: 'ft',
    atom: feetAtom,
    workerAtom: feetWorkerAtom,
    isBaseUnit: false
};