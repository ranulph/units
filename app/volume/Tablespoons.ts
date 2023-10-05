import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const tablespoonsAtom = atom(0);

export const tablespoonsWorkerAtom = atom(
    get => Number((get(litresAtom) * 66.667).toFixed(1)), 
    (get, set) => set(litresAtom, () => Number((get(tablespoonsAtom) / 66.667).toFixed(3)))
);

export const tablespoonsDetails = {
    name: 'Tablespoons',
    unit: 'tblsp',
    atom: tablespoonsAtom,
    workerAtom: tablespoonsWorkerAtom,
    isCentralUnit: false
};