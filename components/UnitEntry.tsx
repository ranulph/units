'use client'

import { useAtom, PrimitiveAtom, WritableAtom } from "jotai";

import { focusedAtom } from "@/components/Focused";

export default function UnitEntry(
{ 
    unitDetails,
    autoFocus,
}: 
{ 
    unitDetails: {
        name: string;
        unit: string;
        atom: PrimitiveAtom<number>;
        workerAtom: WritableAtom<number, [], void>;
        isCentralUnit: boolean;
    };
    autoFocus?: boolean 
}) {

    const [focused, setFocused] = useAtom(focusedAtom);

    const [unitInput, setUnitInput] = useAtom(unitDetails.atom);
    const [unitFromCentralUnit, setCentralUnitFromUnit] = useAtom(unitDetails.workerAtom);

    const focus = (setFunc: (value: number) => void, unitFromCentralUnit: number) => {
        if (!unitDetails.isCentralUnit) {
            setFunc(Number(unitFromCentralUnit.toFixed(2)))
        }
    };

    const change = (unitInput: string, name: string, setUnitInput: (value: number) => void, setCentralUnitFromUnit: () => void) => {
        if (unitInput === '') {
            setFocused('')
        } else {
            setFocused(name)
        }
        setUnitInput(Number(unitInput))
        if (!unitDetails.isCentralUnit) {
            setCentralUnitFromUnit()
        }
    };

    return (
            <div className="flex items-center text-lg md:text-xl my-2 justify-between w-full h-12 p-4 rounded-xl border hover:bg-card hover:text-card-foreground hover:shadow active:shadow-inner transition-colors">
                <div>
                    {unitDetails.name}
                </div>
                <div className='flex items-center'>
                    <div>
                        <input autoFocus={autoFocus} value={focused === '' ? '' : focused === unitDetails.name ? unitInput : unitFromCentralUnit} type='number' onFocus={() => focus(setUnitInput, unitFromCentralUnit)} onChange={(e) => change(e.currentTarget.value, unitDetails.name, setUnitInput, setCentralUnitFromUnit)} className='text-right w-full bg-transparent focus-visible:outline-none' />
                    </div>
                    <div className='ml-1 text-md md:text-lg text-muted-foreground'>
                        {unitDetails.unit}
                    </div>
                </div>
            </div>


    )
}