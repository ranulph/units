import { atom } from 'jotai';
import { caloriesAtom } from './Calories';

export const kilojoulesAtom = atom(0);

export const kilojoulesWorkerAtom = atom(
    get => Number((get(caloriesAtom) * 4.184).toFixed(3)), 
    (get, set) => set(caloriesAtom, () => Number((get(kilojoulesAtom) / 4.184).toFixed(3)))
);

export const kilojoulesDetails = {
    name: 'Kilojoules',
    unit: 'kJ',
    atom: kilojoulesAtom,
    workerAtom: kilojoulesWorkerAtom,
    isBaseUnit: false
};