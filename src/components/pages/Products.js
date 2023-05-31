import React, { useState , useEffect }  from "react";
import {TabView,TabPanel} from "primereact/tabview";
import ProductsProcess from "../views/ProductsProcess";


const Products = () => {



    return (

        <div className="card">
            <TabView>

                <TabPanel header="Ürün Ekle">
                    <ProductsProcess></ProductsProcess>
                </TabPanel>

            </TabView>
        </div>
    )
}

export default Products;