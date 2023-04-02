import Currency from 'components/Currency/Currency'
import ProductsList from 'components/ProductsList/ProductsList'
import Total from 'components/Total/Total'
import './ShopPage.scss'

type Props = {}

const ShopPage = (props: Props) => {
  return (
    <>
      <section className="shop">
        <div className="shop-content">
          <h1 className="shop-content-title">Our shop page</h1>
          <Currency />
          <ProductsList />
          <Total />
        </div>
      </section>
    </>
  )
}

export default ShopPage
