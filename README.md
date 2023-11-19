## Units
  
Unit and currency converter.  
  
https://units.run  
  
Can be installed as a Progressive Web Application on mobile. Go to units.run on browser(only Safari on iOS), then select Options/Share/Menu and then select Install/Add to Home Screen.  
  
Uses Jotai for state management, see Atom.ts file.  
Cloudflare Pages, Cloudlfare KVStore, Next.js. SWR, TailwindCSS, shadcn/ui, Radix-UI, date-fns, Framer Motion.  
  
On Currency section, saves selected currencies list and current currency rates in browsers Local Storage.
Also stores selected currencies flags in Local Storage as a SVG file converted into Base64 encoded strings.
  
Currency rates update every hour.  
See https://api.currencies.worlddata.run/ui for currency api information.   
  
Serverless, highly-available, globally distributed, auto-scaling.   
