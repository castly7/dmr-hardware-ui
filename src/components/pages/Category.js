import React ,{ useState, useEffect , useRef } from "react";
import {TabPanel, TabView} from "primereact/tabview";
import CategoryProcess from "../views/CategoryProcess";

const Category = () => {


    return(
        <div className="card">
            <TabView>

                <TabPanel header="Kategori İşlemleri">
                    <CategoryProcess></CategoryProcess>
                </TabPanel>

            </TabView>
        </div>
    )
}

export default Category