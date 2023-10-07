import { atom } from 'jotai';
import { cubicMetresAtom } from './CubicMetres';

export const litresAtom = atom(0);

export const litresWorkerAtom = atom(
    get => Number((get(cubicMetresAtom) * 1000).toFixed(3)), 
    (get, set) => set(cubicMetresAtom, () => Number((get(litresAtom) / 1000).toFixed(3)))
);

export const litresDetails = {
    name: 'Litres',
    unit: 'L',
    atom: litresAtom,
    workerAtom: litresWorkerAtom,
    isBaseUnit: false
};