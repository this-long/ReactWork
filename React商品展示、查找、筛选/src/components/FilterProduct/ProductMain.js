import ProductTitle from './ProductTitle'
import Product from './Product'
const ProductMain = (props) => {
    const goodList = props.cheArr.map(ele => <Product key={ele.name} che={ele} />)
    return (<div className="product-main">
        <ProductTitle title={props.title} />
        {goodList}

    </div>);
}

export default ProductMain;