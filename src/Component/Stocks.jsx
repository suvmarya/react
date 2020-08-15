import React, { useState } from "react";
import "../css/stocks.css";

let array = [];
const Stocks = () => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [category, setCategory] = useState("");
    const [reorderQuantity, setReorderQuantity] = useState("");

    const [editProductId, setEditProductId] = useState("");
    const [editProductName, setEditProductName] = useState("");
    const [editManufacturer, setEditManufacturer] = useState("");
    const [editCategory, setEditCategory] = useState("");
    const [editReorderQuantity, setEditReorderQuantity] = useState("");

    const onSubmit = () => {
        const result = { productId, productName, manufacturer, category, reorderQuantity }
        array.push(result)
        setProductId('')
        setProductName('')
        setManufacturer('')
        setCategory('')
        setReorderQuantity('')
        if (reorderQuantity >= 25) {
            setReorderQuantity(reorderQuantity);
            alert("Data Submited");
        } else {
            alert("Your Inventory level is goes below Re-Ordered Qty !!!");
            setReorderQuantity(25);
        };
    };

    function onDelete(id) {
        console.log("onDelete -> id", id)
        array = array.filter(res => res.productId !== id)
        alert(`Stock with productId ${id} deleted successfully`)
    };

    function onEdit(productId, productName, manufacturer, category, reorderQuantity) {
        setEditProductId(productId)
        setEditProductName(productName)
        setEditManufacturer(manufacturer)
        setEditCategory(category)
        setEditReorderQuantity(reorderQuantity)
    };

    const handleUpdate = () => {
        array.map(res => {
            if (res.productId === editProductId) {
                res.productName = editProductName
                res.manufacturer = editManufacturer
                res.category = editCategory
                res.reorderQuantity = editReorderQuantity
            }
        })
        setEditProductId('')
        setEditProductName('')
        setEditManufacturer('')
        setEditCategory('')
        setEditReorderQuantity('')
    };

    return (
        <>
            <div className="stock_center" >

                <div className='stockform' >
                    <input type='text'
                        placeholder="Product Id:"
                        name=" productid"
                        onChange={e => setProductId(e.target.value)}
                        value={productId} />

                    <br />

                    <input type='text'
                        placeholder="Product Name:"
                        name=" productname"
                        onChange={e => setProductName(e.target.value)}
                        value={productName} />

                    <br />

                    <input type='text'
                        placeholder="Manufacturer:"
                        name=" manufacturer"
                        onChange={e => setManufacturer(e.target.value)}
                        value={manufacturer} />

                    <br />

                    <input type='text'
                        placeholder="Category:"
                        name="category"
                        onChange={e => setCategory(e.target.value)}
                        value={category} />

                    <br />

                    <input type='number'
                        placeholder="reorderquantity:"
                        name="reorderquantity"
                        onChange={e => setReorderQuantity(e.target.value)}
                        value={reorderQuantity} />

                    <br />

                    <button type='submit' onClick={onSubmit}>Add +</button>
                </div>

                <div className='stock_list' >
                    <div className="stock_list_details" >
                        <h1>Product Id : <input type='text' className='first' value={editProductId} /></h1>
                        <h1>Product Name : <input type='text' className='second' value={editProductName} onChange={e => setEditProductName(e.target.value)} /></h1>
                        <h1>Manufacturer : <input type='text' className='third' value={editManufacturer} onChange={e => setEditManufacturer(e.target.value)} /></h1>
                        <h1>Category : <input type='text' className='fourth' value={editCategory} onChange={e => setEditCategory(e.target.value)} /></h1>
                        <h1>ReorderQty : <input type='text' className='third' value={editReorderQuantity} onChange={e => setEditReorderQuantity(e.target.value)} /></h1>
                        <button className="btn-stock-upd" onClick={handleUpdate}>  Update </button>
                    </div>
                </div>

            </div>
            <div>
                {
                    array.map((data, index) => (
                        <div key={index} className="stock_data">
                            <h1>Product Id : {data.productId}</h1>
                            <h1> Product Name : {data.productName}</h1>
                            <h1> Manufacturer : {data.manufacturer}</h1>
                            <h1> Category : {data.category}</h1>
                            <h1> ReOrderQuantity : {data.reorderQuantity} </h1>
                            <button className="btn-stock-del" onClick={() => onDelete(data.productId)}>  Delete </button>
                            <button className="btn-stock-edit" onClick={() => onEdit(data.productId, data.productName, data.manufacturer, data.category, data.reorderQuantity)}> Edit </button>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
export default Stocks;