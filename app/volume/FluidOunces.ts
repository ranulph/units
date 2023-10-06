import { atom } from 'jotai';
import { litresAtom } from './Litres';

export const fluidOuncesAtom = atom(0);

export const fluidOuncesWorkerAtom = atom(
    get => Number((get(litresAtom) * 33.814).toFixed(3)), 
    (get, set) => set(litresAtom, () => Number((get(fluidOuncesAtom) / 33.814).toFixed(3)))
);

export const fluidOuncesDetails = {
    name: 'Fluid Ounces',
    unit: 'fl.oz',
    atom: fluidOuncesAtom,
    workerAtom: fluidOuncesWorkerAtom,
    isBaseUnit: false
};