import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const squareKilometeresAtom = atom(0);

export const squareKilometeresWorkerAtom = atom(
    get => Number((get(squareMetresAtom) / 1000000).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(squareKilometeresAtom) * 1000000).toFixed(1)))
);

export const squareKilometeresDetails = {
    name: 'Sq Kilometres',
    unit: 'km²',
    atom: squareKilometeresAtom,
    workerAtom: squareKilometeresWorkerAtom,
    isBaseUnit: false
};