import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const micronsAtom = atom(0);

export const micronsWorkerAtom = atom(
    get => Number((get(metresAtom) / 0.0000010000).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(micronsAtom) / 1000000).toFixed(99)))
);

export const micronsDetails = {
    name: 'Microns',
    unit: 'µm',
    atom: micronsAtom,
    workerAtom: micronsWorkerAtom,
    isCentralUnit: false
};