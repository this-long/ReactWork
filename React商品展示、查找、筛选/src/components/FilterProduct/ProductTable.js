import CategoryTitle from './CategoryTitle'
import ProductMain from './ProductMain'
const ProductTable = (props) => {
    const { nowArr } = props
    const categoryArr = nowArr.reduce((res, ele) => {
        !res.includes(ele.category) && res.push(ele.category)
        return res
    }, [])
    const list = categoryArr.length ? categoryArr.map(ele => <ProductMain key={ele} cheArr={nowArr.filter(item => item.category === ele)} title={ele}></ProductMain >) : '暂无数据'
    //循环生成了下面的代码。
    //这两个数组理应循环获得
    // const sportGoods = props.nowArr.filter(ele => ele.category === 'Sporting Goods')
    // const electronics = props.nowArr.filter(ele => ele.category === 'Electronics')
    // console.log(sportGoods);
    return (<div className="product_table">
        <CategoryTitle />
        {/* <ProductMain cheArr={sportGoods} title='Sporting Goods' />
        <ProductMain cheArr={electronics} title='electronics' /> */}
        {list}
    </div>);
}

export default ProductTable;