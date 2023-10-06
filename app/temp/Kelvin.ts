import { atom } from 'jotai';
import { celsiusAtom } from './Celsius';

export const kelvinAtom = atom(0);

export const kelvinWorkerAtom = atom(
    get => Number((get(celsiusAtom) + 273.15).toFixed(3)), 
    (get, set) => set(celsiusAtom, () => Number((get(kelvinAtom) - 273.15).toFixed(3)))
);

export const kelvinDetails = {
    name: 'Kelvin',
    unit: 'K',
    atom: kelvinAtom,
    workerAtom: kelvinWorkerAtom,
    isBaseUnit: false
};