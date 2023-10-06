import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const quartsAtom = atom(0);

export const quartsWorkerAtom = atom(
    get => Number((get(litresAtom) * 1.0567).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(quartsAtom) / 1.0567).toFixed(3)))
);

export const quartsDetails = {
    name: 'Quarts',
    unit: 'qt',
    atom: quartsAtom,
    workerAtom: quartsWorkerAtom,
    isBaseUnit: false
};