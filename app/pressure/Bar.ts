import { atom } from 'jotai';
import { pascalsAtom } from './Pascals';

export const barAtom = atom(0);

export const barWorkerAtom = atom(
    get => Number((get(pascalsAtom) / 100000).toFixed(3)), 
    (get, set) => set(pascalsAtom, () => Number((get(barAtom) * 100000).toFixed(3)))
);

export const barDetails = {
    name: 'Bar',
    unit: 'bar',
    atom: barAtom,
    workerAtom: barWorkerAtom,
    isBaseUnit: false
};