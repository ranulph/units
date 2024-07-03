## Units
  
Unit and currency converter.  
  
https://units.run  
  
Can be installed as a Progressive Web Application on mobile. Go to https://units.run in a browser(only Safari on iOS), then select Menu(browser button) and then select Install App/Add to Home Screen.  
  
Uses Jotai for state management, see Atom.ts file.  
Cloudflare Pages, Cloudfare KVStore, Next.js. SWR, TailwindCSS, shadcn/ui, Radix-UI, date-fns, Framer Motion.  
  
On Currency section, saves selected currencies list and current currency rates in browsers localStorage.
Also stores selected currencies flags in localStorage as Base64 encoded strings converted from SVG files.
  
Currency rates update every hour.  
See https://api.currencies.worlddata.run/ui for currency api information.   
  
Serverless, highly-available, globally distributed, auto-scaling.   
