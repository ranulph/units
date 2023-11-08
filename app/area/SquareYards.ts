import { atom } from 'jotai';
import { squareMetresAtom } from './SquareMetres';

export const squareYardsAtom = atom(0);

export const squareYardsWorkerAtom = atom(
    get => Number((get(squareMetresAtom) * 1.1960).toFixed(1)), 
    (get, set) => set(squareMetresAtom, () => Number((get(squareYardsAtom) / 1.1960).toFixed(1)))
);

export const squareYardsDetails = {
    name: 'Square Yards',
    unit: 'yd²',
    atom: squareYardsAtom,
    workerAtom: squareYardsWorkerAtom,
    isBaseUnit: false
};