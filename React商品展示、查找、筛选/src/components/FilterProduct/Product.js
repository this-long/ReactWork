const Product = (props) => {
    const { name, price, stocked } = props.che
    return (<div className="product">
        <span className={stocked ? '' : 'active'}>{name}</span><span>{price}</span>
    </div>);
}

export default Product;