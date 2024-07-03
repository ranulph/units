'use server'

import { token } from "@/app/token";
import { currencyEntryItem } from "@/app/types";

export const fetchRates = async () => {
    const ratesFile = await fetch('https://units.run/api/rates/', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer ' + token,
      }
    }).then(res => res.json())
    return ratesFile
};

export const fetchCurrency = async (currency: string) => {
    const currencyEntryItem: currencyEntryItem = await fetch('https://units.run/api/currency/', {
        method: 'POST',
        body: JSON.stringify({ currency: currency }),
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    return currencyEntryItem;
};
