import { atom } from 'jotai';
import { metresAtom } from './Metres';

export const nauticalMilesAtom = atom(0);

export const nauticalMilesWorkerAtom = atom(
    get => Number((get(metresAtom) / 1852).toFixed(3)), 
    (get, set) => set(metresAtom, () => Number((get(nauticalMilesAtom) * 1852).toFixed(3)))
);

export const nauticalMilesDetails = {
    name: 'Nautical Miles',
    unit: 'NM',
    atom: nauticalMilesAtom,
    workerAtom: nauticalMilesWorkerAtom,
    isCentralUnit: false
};