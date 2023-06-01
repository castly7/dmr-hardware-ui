import React, {useState,useEffect,useRef} from "react";
import {CategoryService} from "../service/CategoryService";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";

const CategoryProcess = () => {

    const toast = useRef(null)

    const [category, setCategory] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    //const [categoryList, setCategoryList] = useState([])
    const categoryService = new CategoryService();

    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        const res = await categoryService.getAll();
        console.log(res.object)
        if (res.succes) {
            //setCategoryList(res.object)
        }
    }

    const categoryList = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
    ];


    return(

        <div className="formgroup-inline">

            <div className="flex flex-wrap align-items-start">
                <Button>

                </Button>
            </div>

        </div>
    )
}

export default CategoryProcess