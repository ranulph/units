import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const acresAtom = atom(0);

export const acresWorkerAtom = atom(
    get => Number((get(squareMetresAtom) / 4046.85642).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(acresAtom) * 4046.85642).toFixed(1)))
);

export const acresDetails = {
    name: 'Acres',
    unit: 'ac',
    atom: acresAtom,
    workerAtom: acresWorkerAtom,
    isBaseUnit: false
};