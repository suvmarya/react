import React, { useState } from "react";
import "../css/availablestock.css";

const array = [];
const AvailableStock = () => {
    const [productid, setProductid] = useState("");
    const [productid1, setProductid1] = useState("");

    const [productname, setProductname] = useState("");
    const [productname1, setProductname1] = useState("");

    const [manufacturer, setManufacturer] = useState("");
    const [manufacturer1, setManufacturer1] = useState("");

    const [orderedQuantity, setOrderedQuantity] = useState("");
    const [orderedQuantity1, setOrderedQuantity1] = useState("");

    const [qtySold, setQtySold] = useState("");
    const [qtySold1, setQtySold1] = useState("");

    const [balanceQty, setBalanceQty] = useState("");
    const [balanceQty1, setBalanceQty1] = useState("");




    const onSubmits = (event) => {
        event.preventDefault();
        setProductid1(productid);
        setProductname1(productname);
        setManufacturer1(manufacturer);
        setOrderedQuantity1(orderedQuantity);
        setQtySold1(qtySold);
        setBalanceQty1(balanceQty);
        array.push({ productid, productname, manufacturer, orderedQuantity, qtySold, balanceQty });
        console.log(array);
    }

    const inputEvent = (event) => {

        console.log(event.target.value);
        setProductid(event.target.value);
    };
    const inputEventtwo = (event) => {
        console.log(event.target.value);
        setProductname(event.target.value);
    };
    const inputEventthree = (event) => {
        console.log(event.target.value);
        setManufacturer(event.target.value);
    };
    const inputEventfour = (event) => {
        console.log(event.target.value);
        setOrderedQuantity(event.target.value);
    };
    const inputEventfive = (event) => {
        console.log(event.target.value);
        setQtySold(event.target.value);
    };
    const inputEventsix = (event) => {
        console.log(event.target.value);
        setBalanceQty(event.target.value);
    };



    function balanceQty2(orderedQuantity, qtySold) {
        console.log("onBalQty -> id", orderedQuantity)
        console.log("onBalQty -> id", qtySold)
        const a = orderedQuantity - qtySold;
        

        console.log(a);
    };


    const onSubmit = (event) => {
       
        alert("Data Submited");
    };
    const onDelete = (event) => {
       
        window.confirm("Do You Want TO Delete This List !!!!");
    };
    return (
        <>

            <div className="stock_center" >

                <form onSubmit={onSubmits} >

                    <div className='stockform' >
                        <input type='text'
                            placeholder="Product Id:"
                            name=" productid"
                            onChange={inputEvent}
                            value={productid} />

                        <br />
                        <input type='text'
                            placeholder="Product Name:"
                            name=" productname"
                            onChange={inputEventtwo}
                            value={productname} />
                        <br />
                        <input type='text'
                            placeholder="Manufacturer:"
                            name=" manufacturer"
                            onChange={inputEventthree}
                            value={manufacturer} />
                        <br />
                        <input type='text'
                            placeholder="OrderedQuantity:"
                            name="orderedQuantity"
                            onChange={inputEventfour}
                            value={orderedQuantity} />
                        <br />
                        <input type='text'
                            placeholder="Qty Sold:"
                            name="qtySold"
                            onChange={inputEventfive}
                            value={qtySold} /> 
                        <br />
                        <input type='text'
                            placeholder="Balance Qty:"
                            name="balanceQty"
                            onChange={inputEventsix}
                            value={balanceQty} />
                        <br />

                        <button type='submit' onClick={  () => balanceQty2(orderedQuantity,qtySold)}>
                           Update
                    </button>

                    </div>
                </form>
                <div className='stock_list' >

                    <h1>Product Id : {productid1}</h1>
                    <h1>Product Name : {productname1}</h1>
                    <h1>Manufacturer : {manufacturer1}</h1>
                    <h1>OrderedQuantity : {orderedQuantity1}</h1>
                    <h1>Qty Sold : {qtySold1}</h1>
                    <h1>Balance Qty : {balanceQty2(orderedQuantity, qtySold)}</h1>


                </div>



            </div>

            <div className="stock_data" >
                <h1>Product Id : 001</h1>
                <h1> Product Name : Targus</h1>
                <h1> Manufacturer : Targus India Pvt. Ltd</h1>
                <h1> OrderedQuantity : 50</h1>
                <h1> Qty Sold : 25 </h1>
                <h1> Balance Qty : 25 </h1>

                <button className="btn-stock-del" onClick={onDelete}>  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 002</h1>
                <h1> Product Name : Apple</h1>
                <h1> Manufacturer : Apple Pvt. Ltd</h1>
                <h1> OrderedQuantity : 60</h1>
                <h1> Qty Sold : 30 </h1>
                <h1> Balance Qty : 30 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 003</h1>
                <h1> Product Name : Samsung</h1>
                <h1> Manufacturer : samsung Pvt. Ltd</h1>
                <h1> OrderedQuantity : 70</h1>
                <h1> Qty Sold : 30 </h1>
                <h1> Balance Qty : 40 </h1>
                <button className="btn-stock-del" onClick={onDelete}>  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 004</h1>
                <h1> Product Name : Honor</h1>
                <h1> Manufacturer : Honor Ptv. Ltd</h1>
                <h1> OrderedQuantity : 80</h1>
                <h1> Qty Sold : 40 </h1>
                <h1> Balance Qty : 40 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 005</h1>
                <h1> Product Name : Detool</h1>
                <h1> Manufacturer : H.U.L</h1>
                <h1> OrderedQuantity :50</h1>
                <h1> Qty Sold : 25 </h1>
                <h1> Balance Qty : 25 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 006</h1>
                <h1> Product Name : Allen Solly</h1>
                <h1> Manufacturer : Madura Fashion & Lifestyle</h1>
                <h1> OrderedQuantity :50</h1>
                <h1> Qty Sold : 25 </h1>
                <h1> Balance Qty : 25 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 007</h1>
                <h1> Product Name : Levis</h1>
                <h1> Manufacturer : Levi Strauss India Pvt. Ltd.</h1>
                <h1> OrderedQuantity :50</h1>
                <h1> Qty Sold : 25 </h1>
                <h1> Balance Qty : 25 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
            <div className="stock_data" >
                <h1>Product Id : 008</h1>
                <h1> Product Name : Godrej</h1>
                <h1> Manufacturer : Godrej India Pvt.Ltd</h1>
                <h1> OrderedQuantity : 50</h1>
                <h1> Qty Sold : 25 </h1>
                <h1> Balance Qty : 25 </h1>
                <button className="btn-stock-del" onClick={onDelete} >  Delete </button>
                <button className="btn-stock-edit" > Edit </button>
            </div>
            <hr />
           
            
           
           



        </>












    );

};
export default AvailableStock; 