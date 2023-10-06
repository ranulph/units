import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const hectareAtom = atom(0);

export const hectareWorkerAtom = atom(
    get => Number((get(squareMetresAtom) / 10000).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(hectareAtom) * 10000).toFixed(1)))
);

export const hectareDetails = {
    name: 'Hectare',
    unit: 'ha',
    atom: hectareAtom,
    workerAtom: hectareWorkerAtom,
    isBaseUnit: false
};