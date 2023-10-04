"use client"

import * as React from "react"
import { PersonIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserToggle({ username, isLoggedIn }: { username: string; isLoggedIn: boolean }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={isLoggedIn ? "" : "border border-red-900/70"}>
          <PersonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">SignIn</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">

        {isLoggedIn ? 
          <a href="/logout">
            <DropdownMenuItem className='flex flex-col p-12 max-h-48 max-w-48 cursor-pointer'>
              <div className="font-medium">Logout</div>
              <div className="text-neutral-500 dark:text-white/30 mt-1">Signed in as {username}</div>
            </DropdownMenuItem>
          </a>
        : 
          <a href="/login/github">
            <DropdownMenuItem className='p-12 max-h-48 max-w-48 cursor-pointer'>
              Sign-in with Github
            </DropdownMenuItem>
          </a>
        }

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
