import { atom } from 'jotai';
import { metresPSAtom } from './MetresPS';

export const feetPSAtom = atom(0);

export const feetPSWorkerAtom = atom(
    get => Number((get(metresPSAtom) / 0.3048).toFixed(3)), 
    (get, set) => set(metresPSAtom, () => Number((get(feetPSAtom) * 0.3048).toFixed(3)))
);

export const feetPSDetails = {
    name: 'Feet/sec',
    unit: 'ft/s',
    atom: feetPSAtom,
    workerAtom: feetPSWorkerAtom,
    isCentralUnit: false
};