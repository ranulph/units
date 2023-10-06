import { atom } from 'jotai';
import { kilogramsAtom } from './Kilograms';

export const ouncesAtom = atom(0);

export const ouncesWorkerAtom = atom(
    get => Number((get(kilogramsAtom) * 35.274).toFixed(1)), 
    (get, set) => set(kilogramsAtom, () => Number((get(ouncesAtom) / 35.274).toFixed(3)))
);

export const ouncesDetails = {
    name: 'Ounces',
    unit: 'oz',
    atom: ouncesAtom,
    workerAtom: ouncesWorkerAtom,
    isBaseUnit: false
};