import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const megapascalsAtom = atom(0);

export const megapascalsWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 1000000).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(megapascalsAtom) * 1000000).toFixed(3)))
);

export const megapascalsDetails = {
    name: 'Megapascals',
    unit: 'mPa',
    atom: megapascalsAtom,
    workerAtom: megapascalsWorkerAtom,
    isBaseUnit: false
};