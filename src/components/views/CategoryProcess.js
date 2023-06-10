import React, {useState,useEffect,useRef} from "react";
import {CategoryService} from "../service/CategoryService";
import { useHistory , useLocation } from "react-router-dom";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";
import closetPng from "../icons/closet.png"
import paintPng from "../icons/paint.png"
import valvePng from "../icons/valve.png"
import showerPng from "../icons/shower.png"
import toolPng from  "../icons/tools.png"
import electricPng from  "../icons/electric.png"
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


    const history = useHistory();
    const [categoryList, setCategoryList] = useState([])


    const categoryService = new CategoryService();

    useEffect(() => {
        all();
    }, []);


    const all = async () => {
        const res = await categoryService.all();
        console.log(res.object)
        if (res.succes) {
            setCategoryList(res.object)
        }
    }

    const handleButtonClick = (categoryId) => {
        debugger
        history.push({
            pathname: '/products', state : {categoryId}
        });
    };

    return(

        <div className="formgroup-inline">

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(1)}>
                        <img src={closetPng} title="Klozet Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(2)}>
                        <img src={paintPng} title="Boya Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(3)}>
                        <img src={valvePng} title="Vana Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(4)}>
                        <img src={showerPng} title="Duş Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(5)}>
                        <img src={toolPng} title="Hırdavat Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(6)}>
                        <img src={electricPng} title="Elektirik Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(7)}>
                        <img src={vitrifiyePng} title="Vitrifiye Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(8)}>
                        <img src={siphonPng} title="Sifon Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(9)}>
                        <img src={faucetPng} title="Batarya Musluk Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(10)}>
                        <img src={hosePng} title="Hortum Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(11)}>
                        <img src={fittingsPng} title="Fittings Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(12)}>
                        <img src={contaPng} title="Flex ve Conta Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(13)}>
                        <img src={accessoryPng} title="Aksesuar ve Yedek Parça Grubu" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap align-items-start">
                <div className="m-2">
                    <Button onClick={() => handleButtonClick(14)}>
                        <img src={otherPng} title="Diğer Ürünler" width="150px" height="150px"/>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CategoryProcess