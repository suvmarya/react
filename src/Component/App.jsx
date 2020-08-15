import React from "react";
import Stocks from "./Stocks";
import Supplier from "./Supplier";
import AvailableStock from "./AvailableStock";
import PurchageOrderReport from "./PurchageOrderReport";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import view1 from "./view1";
import view2 from "./view2";
import view3 from "./view3";


const App = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Stocks} />
                <Route exact path="/supplier" component={Supplier} />
                <Route exact path="/availablestock" component={AvailableStock} />
                <Route exact path="/purchageorderreport" component={PurchageOrderReport} />
                <Route exact path="/view1.js" component={view1} />
                <Route exact path="/view2.js" component={view2} />
                <Route exact path="/view3.js" component={view3} />
                
                
            </Switch>

         



               
            
        </>);
};
export default App;