'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function UnitCard({ name, icon }: { name: string; icon: string }) {

    const linkPath = '/' + name.toLowerCase().replace(/ /g, '');
    const iconPath = 'icons/' + icon + '.svg'

    return (
                <Card className='m-1 grow w-1/4'>
                    <Link href={linkPath}>
                        <CardHeader>
                            <div className='flex justify-center'>
                                <img src={iconPath} className='h-16 md:h-20' alt='weight' />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center'>{name}</p>
                        </CardContent>
                    </Link>
                </Card>
    )
}