import { atom } from 'jotai';
import { celsiusAtom } from './Celsius';

export const fahrenheitAtom = atom(0);

export const fahrenheitWorkerAtom = atom(
    get => Number(((get(celsiusAtom) * 1.8000) + 32).toFixed(3)), 
    (get, set) => set(celsiusAtom, () => Number(((get(fahrenheitAtom) - 32) / 1.8000).toFixed(3)))
);

export const fahrenheitDetails = {
    name: 'Fahrenheit',
    unit: '°F',
    atom: fahrenheitAtom,
    workerAtom: fahrenheitWorkerAtom,
    isCentralUnit: false
};