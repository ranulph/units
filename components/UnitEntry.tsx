'use client'

import { atom, useAtom, PrimitiveAtom, WritableAtom } from "jotai";

import { focusedAtom } from "@/components/Focused";

const activeAtom = atom(false)

export default function UnitEntry(
{ 
    unitDetails,
}: 
{ 
    unitDetails: {
        name: string;
        unit: string;
        atom: PrimitiveAtom<number>;
        workerAtom: WritableAtom<number, [], void>;
        isBaseUnit: boolean;
    };
}) {

    const [focused, setFocused] = useAtom(focusedAtom);
    const [active, setActive] = useAtom(activeAtom);

    const [unitInput, setUnitInput] = useAtom(unitDetails.atom);
    const [unitFromBaseUnit, setBaseUnitFromUnit] = useAtom(unitDetails.workerAtom);

    const focus = (setUnitInput: (value: number) => void, unitFromCentralUnit: number) => {
        if (!unitDetails.isBaseUnit) {
            setUnitInput(Number(unitFromCentralUnit.toFixed(2)))
        }
    };

    const change = (unitInput: string, name: string, setUnitInput: (value: number) => void, setBaseUnitFromUnit: () => void) => {
        if (unitInput === '') {
            setFocused('')
        } else {
            setFocused(name)
        }
        setUnitInput(Number(unitInput))
        if (!unitDetails.isBaseUnit) {
            setBaseUnitFromUnit()
        }
    };

    let noRightBorder = false;
    if (unitDetails.unit.length > 3) {
        noRightBorder = true;
    }
    
    const unitInputFormatted = unitInput.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const unitFromBaseUnitFormatted = unitFromBaseUnit.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return (
            <div data-norightborder={noRightBorder} className="data-[norightborder=true]:border-r-0 flex items-center text-lg md:text-xl my-2 justify-between h-12 p-4 rounded-xl border hover:bg-card hover:text-card-foreground hover:shadow active:shadow-inner transition-colors">
                <div className="flex-1 max-w-fit" onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
                    {unitDetails.name}
                </div>
                <div className='flex items-center'>
                    <div>
                        {active ?
                        <input value={focused === '' ? '' : focused === unitDetails.name ? unitInputFormatted : unitFromBaseUnitFormatted} className='text-right w-36 md:w-64 bg-transparent focus-visible:outline-none' />
                        :
                        <input autoFocus={unitDetails.isBaseUnit} value={focused === '' ? '' : focused === unitDetails.name ? unitInput : unitFromBaseUnit} onFocus={() => focus(setUnitInput, unitFromBaseUnit)} onChange={(e) => change(e.currentTarget.value, unitDetails.name, setUnitInput, setBaseUnitFromUnit)} className='text-right w-36 md:w-64 bg-transparent focus-visible:outline-none' />
                        }
                    </div>
                    <div className='ml-1 text-md md:text-lg text-left w-6 text-muted-foreground'>
                        {unitDetails.unit}
                    </div>
                </div>
            </div>


    )
}