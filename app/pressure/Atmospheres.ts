import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const atomspheresAtom = atom(0);

export const atomspheresWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 101325).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(atomspheresAtom) * 101325).toFixed(3)))
);

export const atomspheresDetails = {
    name: 'Atmospheres',
    unit: 'atm',
    atom: atomspheresAtom,
    workerAtom: atomspheresWorkerAtom,
    isBaseUnit: false
};