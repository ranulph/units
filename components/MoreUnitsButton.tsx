'use client'

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import { expandedAtom } from '@/app/Atoms';


export default function MoreUnitsButton() {

    const setExpanded = useSetAtom(expandedAtom);

    return (
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }} 
        className='flex justify-center my-16'>
                        <Button variant='ghost2' onClick={() => setExpanded(true)}>+ More Units</Button>
        </motion.div>
    )
}