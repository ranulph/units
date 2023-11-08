import { atom } from 'jotai';
import { cubicMetresAtom } from './CubicMetres';

export const cubicYardsAtom = atom(0);

export const cubicYardsWorkerAtom = atom(
    get => Number((get(cubicMetresAtom) * 1.3080).toFixed(3)), 
    (get, set) => set(cubicMetresAtom, () => Number((get(cubicYardsAtom) / 1.3080).toFixed(3)))
);

export const cubicYardsDetails = {
    name: 'Cubic Yards',
    unit: 'yd³',
    atom: cubicYardsAtom,
    workerAtom: cubicYardsWorkerAtom,
    isBaseUnit: false
};