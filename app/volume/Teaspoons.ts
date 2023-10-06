import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const teaspoonsAtom = atom(0);

export const teaspoonsWorkerAtom = atom(
    get => Number((get(litresAtom) * 200).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(teaspoonsAtom) / 200).toFixed(3)))
);

export const teaspoonsDetails = {
    name: 'Teaspoons',
    unit: 'tsp',
    atom: teaspoonsAtom,
    workerAtom: teaspoonsWorkerAtom,
    isBaseUnit: false
};