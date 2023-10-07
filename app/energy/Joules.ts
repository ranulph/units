import { atom } from 'jotai';
import { caloriesAtom } from './Calories';

export const JoulesAtom = atom(0);

export const JoulesWorkerAtom = atom(
    get => Number((get(caloriesAtom) * 4184).toFixed(3)), 
    (get, set) => set(caloriesAtom, () => Number((get(JoulesAtom) / 4184).toFixed(3)))
);

export const JoulesDetails = {
    name: 'Joules',
    unit: 'J',
    atom: JoulesAtom,
    workerAtom: JoulesWorkerAtom,
    isBaseUnit: false
};