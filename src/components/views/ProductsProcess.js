import React, {useEffect, useRef, useState} from "react";
import {Toast} from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { InputText } from 'primereact/inputtext';
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {ProductsService} from "../service/ProductsService";
import {useLocation} from "react-router-dom";


const ProductsProcess = () => {

    const toast = useRef(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [globalFilter, setGlobalFilter] = useState("");

    const productService = new ProductsService();

    const [selectedValue, setSelectedValue] = useState("");
    const [productsName, setProductsName] = useState(null);
    const [productsModel, setProductsModel] = useState(null);
    const [productsPrice, setProductsPrice] = useState(null);
    const [productsDetail, setProductsDetail] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [handleDropdownChange, setHandleDropdownChange] = useState(null);

    const location = useLocation();
    const categoryIdd = location.state?.categoryId;

    const [productsList, setProductsList] = useState([]);

    /*useEffect(() => {
        getAllProducts()
    }, []);

    const getAllProducts = async () => {
        const response = await productsService.getAll();  //getById
        if (response.success) {
            setProductsList(response.object)
        }
    }*/

    const categories = [
        { id: 1, label: 'Klozet Grubu' , value:'closet' },
        { id: 2, label: 'Boya Grubu' , value:'paint' },
        { id: 3, label: 'Vana Grubu' , value:'valve' },
        { id: 4, label: 'Duş Grubu' , value:'shower' },
        { id: 5, label: 'Hırdavat Grubu' , value:'tools' },
        { id: 6, label: 'Elektirik Grubu' , value:'electric' },
        { id: 7, label: 'Vitrifiye Grubu' , value:'vitrifiye' },
        { id: 8, label: 'Sifon Grubu' , value:'siphon' },
        { id: 9, label: 'Batarya Musluk Grubu' , value:'faucet' },
        { id: 10, label: 'Hortum Grubu' , value:'hose' },
        { id: 11, label: 'Fittings Sarı Grubu' , value:'fittings' },
        { id: 12, label: 'Flex Conta Grubu' , value:'conta' },
        { id: 13, label: 'Aksesuar ve Yedek Parça Grubu' , value:'accessory' },
        { id: 14, label: 'Diğer' , value:'other' },
    ];

    const clearAll = () => {

        setProductsName("")
        setProductsModel("")
        setProductsPrice("")
        setProductsDetail("")
    }

    const saveProducts = async () => {

        const data = {
            category: {
                id: categoryId
            },
            productsName,
            productsModel,
            productsPrice,
            productsDetail
        };
        console.log(data)

        // const res = await productService.save(data);
        // if (res.success) if (res.success) {
        //     await getAllProducts();
        //     clearAll();
        //     toast.current.show({
        //         severity: 'success',
        //         summary: 'Ürün  Kaydedildi.',
        //         detail: 'Ürün Başarıyla Kaydedildi',
        //         life: 3000
        //     });
        // } else {
        //     toast.current.show({severity: 'warn', summary: 'Hata!', detail: res.message, life: 3000});
        // }

    }
    const updateProducts = () => {

    }

    const header = (
        <div className="table-header">
                <h5 className="p-mx-0 p-my-1">Ürün Listesi</h5>
                <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Ürün Ara..." />
            </span>
        </div>
    );


    return (

        <div className="cold-12">
            <Toast ref={toast} />
            <div className="text-left p-text-normal text-xl mt-3">
                <h6>
                    Ürün Ekleme Ekranı
                </h6>
            </div>
        <div className="formgroup-inline">

            <div className="col-md-4 p-md-4 m-3">
                <label htmlFor="name" className="p-d-block ml-3">Kategori</label>
                <span className="p-float-label">
                    <Dropdown
                        className="m-2 w-16rem"
                        onChange={handleDropdownChange} options={categories}
                        optionLabel="label" optionValue='id'
                        onChange={(e) => setCategoryId(e.target.value)}
                        placeholder='Kategori Seçiniz'  disabled={isUpdate}
                    />
                </span>
            </div>

            <div className="col-md-4 p-md-4 m-3">
                <label htmlFor="name" className="p-d-block ml-3">Ürün İsmi</label>
                <span className="p-float-label">
                    <InputText id="username" className="m-2 w-16rem"
                               value={productsName} placeholder="Ürün İsmi Giriniz..."
                               onChange={(e) => setProductsName(e.target.value)}
                    />
                </span>
            </div>

            <div className="col-md-4 p-md-4 m-3">
                <label htmlFor="name" className="p-d-block ml-3">Ürün Marka</label>
                <span className="p-float-label">
                    <InputText id="username" className="m-2 w-16rem"
                               value={productsModel} placeholder="Ürün Markası Giriniz..."
                               onChange={(e) => setProductsModel(e.target.value)}
                    />
                </span>
            </div>

            <div className="col-md-4 p-md-4 m-3">
                <label htmlFor="name" className="p-d-block ml-3">Ürün Fiyat</label>
                <span className="p-float-label">
                    <InputText id="username" className="m-2 w-16rem" placeholder="Ürün Fiyatı Giriniz..."
                               value={productsPrice} placeHolder="Ürün Fiyatı"
                               onChange={(e) => setProductsPrice(e.target.value)}
                    />
                </span>
            </div>

            </div>

            <div className="col-md-4 p-md-4 m-3">
                <label htmlFor="name" className="p-d-block ml-3">Ürün Açıklaması</label>
                <span className="p-float-label">
                    <InputTextarea id="username" className="m-2 w-16rem" placeholder="Ürün Açıklaması Giriniz..."
                               value={productsDetail} placeHolder="Ürün Açıklaması Giriniz" rows={3}
                               onChange={(e) => setProductsDetail(e.target.value)}
                    />
                </span>
            </div>

            <div className="formgroup-inline ml-3 mt-4">

                {!isUpdate &&<Button
                    title="Kaydet" label="Kaydet"
                    className="p-button-raised p-button-success m-2"
                    onClick={saveProducts}
                />}

                {!isUpdate &&<Button
                    title="Alanları Temizle" label="Temizle"
                    className="p-button-raised p-button-warning m-2"
                    onClick={clearAll}
                />}

                {isUpdate &&<Button
                    title="Güncelle" label="Güncelle"
                    className="p-button-raised p-button-success m-2"
                    onClick={updateProducts}
                />}
            </div>

            <div className="datatable-templating-demo mt-5 ml-3">
                    <DataTable value={productsList} header={header}  responsiveLayout="scroll"
                    emptyMessage="Ürün Bulunamadı.">
                        <Column field="id" header="ID"></Column>
                        <Column field="category.categoryName" header="Kategori"></Column>
                        <Column field="productsName" header="Ürün Adı"></Column>
                        <Column field="productsModel" header="Ürün Modeli"></Column>
                        <Column field="productsPrice" header="Ürün Fiyatı"></Column>
                        <Column field="productsDetail" header="Ürün Açıklaması"></Column>
                    </DataTable>
            </div>

            </div>
)
}

export default ProductsProcess;