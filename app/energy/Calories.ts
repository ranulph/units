import { atom } from 'jotai';

export const caloriesAtom = atom(0);

export const caloriesWorkerAtom = atom(
    get => get(caloriesAtom), 
    (get, set) => set(caloriesAtom, get(caloriesAtom))
);

export const caloriesDetails = {
    name: 'Calories',
    unit: 'kcal',
    atom: caloriesAtom,
    workerAtom: caloriesWorkerAtom,
    isBaseUnit: true
};