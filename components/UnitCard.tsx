'use client'

import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";


export default function UnitCard({ name, icon }: { name: string; icon: string }) {

    const linkPath = '/' + name.toLowerCase().replace(/ /g, '');
    const iconPath = 'icons/' + icon + '.svg';

    const boundingRef = useRef<DOMRect | null>(null);

    return (
                <Card
                    onMouseEnter={(e) => {
                        boundingRef.current = e.currentTarget.getBoundingClientRect()
                    }}
                    onMouseLeave={() => boundingRef.current = null}
                    onMouseMove={(e) => {
                        if (!boundingRef.current) return
                        const x = e.clientX - boundingRef.current.left;
                        const y = e.clientY - boundingRef.current.top;
                        const xPercentage = x / boundingRef.current.width;
                        const yPercentage = y / boundingRef.current.height;
                        const xRotation = (xPercentage - 0.5) * 20;
                        const yRotation = (0.5 - yPercentage) * 20;

                        e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`)
                        e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`)
                    }}
                    className='group relative m-1 transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.03)] grow w-1/4'>
                        <Link href={linkPath}>
                            <CardHeader>
                                <div className='flex justify-center'>
                                    <img src={iconPath} className='h-16 md:h-20' alt={name} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className='text-center text-foreground/30'>{name}</p>
                            </CardContent>
                        </Link>
                </Card>
    )
}