import React from "react";
import "../css/purchageorderreport.css";


const PurchageOrderReport = () => {
    const report = "Purchage-Order-Report";
    const view1 = "./view1.js";
    const view2 = "./view2.js";
    const view3 = "./view3.js";

    return (
        <>
            <div className="p-center" >
                <h1 className="p-order-heading" > {report} </h1>
                <div className="p-report" >

                    <div className="p-list" >
                        <p>Product Id : 001</p>
                        <p>Product Product : Targus</p>
                        <p>Manufacturer : Targus Pvt. Ltd</p>
                        <p>Reorder Qty : 25</p>
                        <p>Balance Qty : 15</p>
                        <a href={view1} target="">View</a>
                    </div>
                    <hr/>
                    <div className="p-list" >
                        <p>Product Id : 002</p>
                        <p>Product Product : Apple</p>
                        <p>Manufacturer : Apple Pvt. Ltd</p>
                        <p>Reorder Qty : 25</p>
                        <p>Balance Qty : 20</p>
                        <a href={view2} target="">View</a>
                    </div>
                    <hr/>
                    <div className="p-list" >
                        <p>Product Id : 003</p>
                        <p>Product Product : Samsung</p>
                        <p>Manufacturer : Samsung Pvt. Ltd</p>
                        <p>Reorder Qty : 25</p>
                        <p>Balance Qty : 20</p>
                        <a href={view3} target="">View</a>
                    </div>







                </div>
            </div>
        </>
    );


};
export default PurchageOrderReport;

