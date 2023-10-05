import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const milesPHAtom = atom(0);

export const milesPHWorkerAtom = atom(
    get => Number((get(metresPSAtom) / 0.44704).toFixed(3)), 
    (get, set) => set(metresPSAtom, () => Number((get(milesPHAtom) * 0.44704).toFixed(3)))
);

export const milesPHDetails = {
    name: 'Miles/hour',
    unit: 'mph',
    atom: milesPHAtom,
    workerAtom: milesPHWorkerAtom,
    isCentralUnit: false
};