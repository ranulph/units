import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const kilopascalsAtom = atom(0);

export const kilopascalsWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 1000).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(kilopascalsAtom) * 1000).toFixed(3)))
);

export const kilopascalsDetails = {
    name: 'Kilopascals',
    unit: 'kPa',
    atom: kilopascalsAtom,
    workerAtom: kilopascalsWorkerAtom,
    isBaseUnit: false
};