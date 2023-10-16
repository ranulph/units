


export type currencyEntryItem = {
    code: string;
    name: string;
    country: string;
    countryCode: string;
    flag: string;
    symbol: string;
    symbol_native: string;
    rateUSD: number;
    updatedAt: number;
};

export type currencySearchItem = {
    key: string;
    value: {
      code: string;
      name: string;
      countryCode: string;
      flag: string;
    }
}