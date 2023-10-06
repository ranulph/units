import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const squareFeetAtom = atom(0);

export const squareFeetWorkerAtom = atom(
    get => Number((get(squareMetresAtom) / 0.09290304).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(squareFeetAtom) * 0.09290304).toFixed(1)))
);

export const squareFeetDetails = {
    name: 'Square Feet',
    unit: 'ft²',
    atom: squareFeetAtom,
    workerAtom: squareFeetWorkerAtom,
    isBaseUnit: false
};