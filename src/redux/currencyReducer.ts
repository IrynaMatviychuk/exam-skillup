import { createSlice } from '@reduxjs/toolkit'
import { currency } from 'components/Currency/Currency'

type State = {
  currency: string
  exchangeRates: {
    [key: string]: number
  }
}

export const initialState: State = {
  currency: currency[0],
  exchangeRates: {
    USD: 1,
    EUR: 0.94,
    UAH: 37.76,
    PLN: 4.34,
    GBP: 0.82,
  },
}

export const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => ({
      ...state,
      currency: action.payload,
    }),
  },
})

export const { changeCurrency } = currencyReducer.actions

export default currencyReducer.reducer
