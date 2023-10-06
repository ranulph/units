import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const squareMilesAtom = atom(0);

export const squareMilesWorkerAtom = atom(
    get => Number((get(squareMetresAtom) / 2589988.11).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(squareMilesAtom) * 2589988.11).toFixed(1)))
);

export const squareMilesDetails = {
    name: 'Square Miles',
    unit: 'mi²',
    atom: squareMilesAtom,
    workerAtom: squareMilesWorkerAtom,
    isBaseUnit: false
};