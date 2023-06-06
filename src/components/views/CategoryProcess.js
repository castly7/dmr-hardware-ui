import React, {useState,useEffect,useRef} from "react";
import {CategoryService} from "../service/CategoryService";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";
import closetPng from "../icons/closet.png"
import paintPng from "../icons/paint.png"
import valvePng from "../icons/valve.png"
import showerPng from "../icons/shower.png"
import toolPng from  "../icons/tools.png"
import electiricPng from  "../icons/electric.png"
import vitrifiyePng from  "../icons/vitrifiye.png"
import siphonPng from  "../icons/siphon.png"
import faucetPng from  "../icons/faucet.png"
import hosePng from  "../icons/hose.png"
import fittingsPng from "../icons/fittings.png"
import contaPng from "../icons/conta.png"
import accessoryPng from "../icons/accessory.png"
import otherPng from "../icons/other.png"


const CategoryProcess = () => {

    const toast = useRef(null)

    const [category, setCategory] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    //const [categoryList, setCategoryList] = useState([])
    const categoryService = new CategoryService();

    /*useEffect(() => {
        getAllCategory();
    }, []);*/

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
                <div className="m-2">
                    <Button>
                       <img src={closetPng} title="Klozet Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={paintPng} title="Boya Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={valvePng} title="Vana Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={showerPng} title="Duş Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={toolPng} title="Hırdavat Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={electiricPng} title="Elektirik Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={vitrifiyePng} title="Vitrifiye Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={siphonPng} title="Sifon Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={faucetPng} title="Batarya Musluk Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={hosePng} title="Hortum Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={fittingsPng} title="Fittings Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={contaPng} title="Flex ve Conta Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={accessoryPng} title="Aksesuar ve Yedek Parça Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button>
                        <img src={otherPng} title="Diğer Ürünler" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default CategoryProcess