import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const gallonsAtom = atom(0);

export const gallonsWorkerAtom = atom(
    get => Number((get(litresAtom) * 0.26417).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(gallonsAtom) / 0.26417).toFixed(3)))
);

export const gallonsDetails = {
    name: 'Gallons',
    unit: 'gal',
    atom: gallonsAtom,
    workerAtom: gallonsWorkerAtom,
    isCentralUnit: false
};