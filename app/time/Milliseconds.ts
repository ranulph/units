import { atom } from 'jotai';
import { minutesAtom } from './Minutes';

export const millisecondsAtom = atom(0);

export const millisecondsWorkerAtom = atom(
    get => Number((get(minutesAtom) * 60000).toFixed(2)), 
    (get, set) => set(minutesAtom, () => Number((get(millisecondsAtom) / 60000).toFixed(2)))
);

export const millisecondsDetails = {
    name: 'Milliseconds',
    unit: 'ms',
    atom: millisecondsAtom,
    workerAtom: millisecondsWorkerAtom,
    isBaseUnit: false
};