import './Total.scss'
import { useAppSelector } from 'redux/hooks'
import productsArray from 'utils/productsArray'

type Props = {}

const Total = (props: Props) => {
  const currentCurrency = useAppSelector(
    (state) => state.currencyReducer.currency
  )

  const exchangeRates = useAppSelector(
    (state) => state.currencyReducer.exchangeRates
  )

  return (
    <section className="total">
      <h3>
        Total:{' '}
        {productsArray.reduce(
          (total, product) =>
            total + product.price.amount * exchangeRates[currentCurrency],
          0
        )}{' '}
        {currentCurrency}
      </h3>
    </section>
  )
}

export default Total
