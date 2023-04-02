import './ProductsList.scss'
import { useAppSelector } from 'redux/hooks'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
  const currentCurrency = useAppSelector(
    (state) => state.currencyReducer.currency
  )

  const exchangeRates = useAppSelector(
    (state) => state.currencyReducer.exchangeRates
  )

  return (
    <>
      <section className="products">
        {productsArray.map((el) => (
          <div key={el.id} className="products-list">
            <h2 className="products-list-title">{el.title}</h2>
            <p className="products-list-description">{el.description}</p>
            <span className="products-list-price">
              {el.price.amount * exchangeRates[currentCurrency]}{' '}
              {currentCurrency}
            </span>
            <br />
            <button type="submit">Buy</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default ProductsList
