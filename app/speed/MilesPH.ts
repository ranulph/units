import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const milesPHAtom = atom(0);

export const milesPHWorkerAtom = atom(
    get => Number((get(metresPSAtom) / 0.44704).toFixed(1)), 
    (get, set) => set(metresPSAtom, () => Number((get(milesPHAtom) * 0.44704).toFixed(1)))
);

export const milesPHDetails = {
    name: 'Miles/hr',
    unit: 'mph',
    atom: milesPHAtom,
    workerAtom: milesPHWorkerAtom,
    isBaseUnit: false
};