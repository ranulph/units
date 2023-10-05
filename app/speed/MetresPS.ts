import { atom } from 'jotai';

export const metresPSAtom = atom(0);

export const metresPSWorkerAtom = atom(
    get => get(metresPSAtom), 
    (get, set) => set(metresPSAtom, get(metresPSAtom))
);

export const metresPSDetails = {
    name: 'Metres/sec',
    unit: 'm/s',
    atom: metresPSAtom,
    workerAtom: metresPSWorkerAtom,
    isCentralUnit: true
};