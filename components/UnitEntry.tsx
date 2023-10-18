'use client'

import { useAtom, PrimitiveAtom, WritableAtom } from "jotai";
import { focusedAtom, activeAtom } from "@/app/Atoms";
import { motion, AnimatePresence } from "framer-motion";

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

    const focus = () => {
        if (!unitDetails.isBaseUnit) {
            setUnitInput(Number(unitFromBaseUnit.toFixed(2)))
        }
    };

    const change = (unitInput: string) => {
        if (unitInput === '') {
            setFocused('')
        } else {
            setFocused(unitDetails.name)
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
  
    return (
            <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            whileHover={{ scale: 1.01 }} 
            data-norightborder={noRightBorder} className="transition-transform ease-out data-[norightborder=true]:border-r-0 flex items-center text-lg md:text-xl my-2 justify-between h-12 p-4 rounded-xl border hover:bg-accent hover:border-neutral-300 dark:hover:border-neutral-800 dark:hover:bg-card/90 hover:text-card-foreground hover:shadow-sm active:shadow-inner">
                <div className="flex-1 max-w-fit" onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
                    {unitDetails.name}
                </div>
                <div className='flex items-center'>
                    <div>
                        {active ?
                        <input value={focused === '' ? '' : focused === unitDetails.name ? unitInput.toLocaleString() : unitFromBaseUnit.toLocaleString()} onFocus={() => setActive(false)} className='text-right w-32 md:w-64 bg-transparent focus-visible:outline-none' />
                        :
                        <input autoFocus={unitDetails.isBaseUnit} value={focused === '' ? '' : focused === unitDetails.name ? unitInput : unitFromBaseUnit} onFocus={() => focus()} onChange={(e) => change(e.currentTarget.value)}  type="number" inputMode="decimal" className='text-right w-32 md:w-64 bg-transparent focus-visible:outline-none' />
                        }
                    </div>
                    <div className='ml-1 text-md md:text-lg text-left w-6 text-muted-foreground' onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
                        {unitDetails.unit}
                    </div>
                </div>
            </motion.div>
    )
}