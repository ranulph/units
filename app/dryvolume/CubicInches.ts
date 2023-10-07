import { atom } from 'jotai';
import { cubicMetresAtom } from './CubicMetres';

export const cubicInchesAtom = atom(0);

export const cubicInchesWorkerAtom = atom(
    get => Number((get(cubicMetresAtom) / 0.000016387064).toFixed(3)), 
    (get, set) => set(cubicMetresAtom, () => Number((get(cubicInchesAtom) * 0.000016387064).toFixed(4)))
);

export const cubicInchesDetails = {
    name: 'Cubic Inches',
    unit: 'in³',
    atom: cubicInchesAtom,
    workerAtom: cubicInchesWorkerAtom,
    isBaseUnit: false
};