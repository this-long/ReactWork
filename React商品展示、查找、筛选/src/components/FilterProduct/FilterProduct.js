import { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
class FilterProduct extends Component {
    state = {
        filterText: '',
        //是否仅查询有库存的商品
        isStocked: false,
        //商品列表
        ProductLists: [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ]
    }
    render() {
        const { filterText, isStocked, ProductLists } = this.state

        const isStockedArr = isStocked ? ProductLists.filter(ele => ele.stocked) : ProductLists
        const nowArr = filterText === '' ? isStockedArr : isStockedArr.filter(ele => {
            console.log(ele);
            return ele.name.includes(filterText)
        })
        return (<div className='filter_product'>
            <SearchBar filterText={filterText} isStocked={isStocked} onChangeText={this.onChangeText} onChangeStocked={this.onChangeStocked} />
            <ProductTable nowArr={nowArr} />
        </div>);
    }
    onChangeText = (val) => {
        this.setState({
            filterText: val
        })
        console.log(this.state.filterText);
    }
    onChangeStocked = (val) => {
        this.setState({
            isStocked: val
        })
        console.log(this.state.isStocked);
    }
}
export default FilterProduct;