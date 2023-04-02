import './Currency.scss'
import { changeCurrency } from 'redux/currencyReducer'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {}

export const currency = ['USD', 'EUR', 'UAH', 'PLN', 'GBP']

const Currency = (props: Props) => {
  const currentCurrency = useAppSelector(
    (state) => state.currencyReducer.currency
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <section className="currency">
        <ul className="currency-list">
          {currency.map((el) => (
            <li
              className={`currency-list-item ${
                el === currentCurrency ? 'currency-list-item-active' : ''
              }`}
              key={el}
            >
              <button
                type="submit"
                disabled={el === currentCurrency}
                onClick={() => dispatch(changeCurrency(el))}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Currency
