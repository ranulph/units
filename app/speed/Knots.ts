import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const knotsAtom = atom(0);

export const knotsWorkerAtom = atom(
    get => Number((get(metresPSAtom) / 0.514444).toFixed(1)), 
    (get, set) => set(metresPSAtom, () => Number((get(knotsAtom) * 0.514444).toFixed(1)))
);

export const knotsDetails = {
    name: 'Knots',
    unit: 'kn',
    atom: knotsAtom,
    workerAtom: knotsWorkerAtom,
    isBaseUnit: false
};