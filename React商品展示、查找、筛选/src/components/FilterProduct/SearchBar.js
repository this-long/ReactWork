
const SearchBar = (props) => {
    console.log(props);
    //函数组件创建的方法是变量，需要先声明
    const onChangeInput = (e) => {
        let val = e.target.value;
        props.onChangeText(val)
    }
    const onChangeCheck = (e) => {
        let val = e.target.checked;
        props.onChangeStocked(val)
    }
    return (<div className="search_bar">
        <input value={props.filter} onChange={
            onChangeInput
        } type="text" />
        <p>
            <input id='stock' type="checkbox" checked={props.isStocked} onChange={onChangeCheck} />
            <label htmlFor="stock">Only show products in stock</label>
        </p>
    </div>)


}


export default SearchBar;