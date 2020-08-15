import React, { useState } from "react";
import "../css/supplier.css";

let array = [];
const Supplier = () => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [supplier, setSupplier] = useState("");
    const [moq, setMOQ] = useState("");
    const [leadTime, setLeadTime] = useState("");

    const [editProductId, setEditProductId] = useState("");
    const [editProductName, setEditProductName] = useState("");
    const [editManufacturer, setEditManufacturer] = useState("");
    const [editSupplier, setEditSupplier] = useState("");
    const [editMOQ, setEditMOQ] = useState("");
    const [editLeadTime, setEditLeadTime] = useState("");

    const onSubmit = () => {
        const result = { productId, productName, manufacturer, supplier, moq , leadTime }
        array.push(result)
        setProductId('')
        setProductName('')
        setManufacturer('')
        setSupplier('')
        setMOQ('')
        setLeadTime('')
        if (moq >= 25) {
            setMOQ(moq);
            alert("Data Submited");
        } else {
            alert("Your Inventory level is goes below Re-Ordered Qty !!!");
            setMOQ(25);
        };
    };

    function onDelete(id) {
        console.log("onDelete -> id", id)
        array = array.filter(res => res.productId !== id)
        alert(`Stock with productId ${id} deleted successfully`)
    };

    function onEdit(productId, productName, manufacturer, supplier, moq) {
        setEditProductId(productId)
        setEditProductName(productName)
        setEditManufacturer(manufacturer)
        setEditSupplier(supplier)
        setEditMOQ(moq)
        setEditLeadTime(leadTime)
    };

    const handleUpdate = () => {
        array.map(res => {
            if (res.productId === editProductId) {
                res.productName = editProductName
                res.manufacturer = editManufacturer
                res.supplier = editSupplier
                res.moq = editMOQ
                res.leadTime = editLeadTime
            }
        })
        setEditProductId('')
        setEditProductName('')
        setEditManufacturer('')
        setEditSupplier('')
        setEditMOQ('')
        setEditLeadTime('')
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
                        placeholder="Supplier:"
                        name="supplier"
                        onChange={e => setSupplier(e.target.value)}
                        value={supplier} />

                    <br />

                    <input type='number'
                        placeholder="MOQ:"
                        name="moq"
                        onChange={e => setMOQ(e.target.value)}
                        value={moq} />

                    <br />

                    <input type='text'
                        placeholder="LeadTime:"
                        name="leadTime"
                        onChange={e => setLeadTime(e.target.value)}
                        value={leadTime} />

                    <br />

                    <button type='submit' onClick={onSubmit}>Add +</button>
                </div>

                <div className='stock_list' >
                    <div className="stock_list_details" >
                        <h1>Product Id : <input type='text' className='first' value={editProductId} /></h1>
                        <h1>Product Name : <input type='text' className='second' value={editProductName} onChange={e => setEditProductName(e.target.value)} /></h1>
                        <h1>Manufacturer : <input type='text' className='third' value={editManufacturer} onChange={e => setEditManufacturer(e.target.value)} /></h1>
                        <h1>Supplier : <input type='text' className='fourth' value={editSupplier} onChange={e => setEditSupplier(e.target.value)} /></h1>
                        <h1>MOQ : <input type='text' className='fifth' value={editMOQ} onChange={e => setEditMOQ(e.target.value)} /></h1>
                        <h1>Lead Time : <input type='text' className='sixth' value={editLeadTime} onChange={e => setEditLeadTime(e.target.value)} /></h1>
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
                            <h1> Supplier : {data.supplier}</h1>
                            <h1> MOQ : {data.moq} </h1>
                            <h1> LeadTime : {data.leadTime} </h1>
                            <button className="btn-stock-del" onClick={() => onDelete(data.productId)}>  Delete </button>
                            <button className="btn-stock-edit" onClick={() => onEdit(data.productId, data.productName, data.manufacturer, data.supplier, data.moq , data.leadTime)}> Edit </button>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
export default Supplier;