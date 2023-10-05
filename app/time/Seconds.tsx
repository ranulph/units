import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const secondsAtom = atom(0);

export const secondsWorkerAtom = atom(
    get => Number((get(minutesAtom) * 60).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(secondsAtom) / 60).toFixed(2)))
);

export const secondsDetails = {
    name: 'Seconds',
    unit: 's',
    atom: secondsAtom,
    workerAtom: secondsWorkerAtom,
    isCentralUnit: false
};