import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const stoneAtom = atom(0);

export const stoneWorkerAtom = atom(
    get => Number((get(kilogramsAtom) / 6.35029318).toFixed(3)), 
    (get, set) => set(kilogramsAtom, () => Number((get(stoneAtom) * 6.35029318).toFixed(3)))
);

export const stoneDetails = {
    name: 'Stone',  
    unit: 'st',
    atom: stoneAtom,
    workerAtom: stoneWorkerAtom,
    isBaseUnit: false
};