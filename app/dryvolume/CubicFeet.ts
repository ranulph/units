import { atom } from 'jotai';
import { cubicMetresAtom } from './CubicMetres';

export const cubicFeetAtom = atom(0);

export const cubicFeetWorkerAtom = atom(
    get => Number((get(cubicMetresAtom) / 0.0283168466).toFixed(3)), 
    (get, set) => set(cubicMetresAtom, () => Number((get(cubicFeetAtom) * 0.0283168466).toFixed(3)))
);

export const cubicFeetDetails = {
    name: 'Cubic Feet',
    unit: 'ft³',
    atom: cubicFeetAtom,
    workerAtom: cubicFeetWorkerAtom,
    isBaseUnit: false
};