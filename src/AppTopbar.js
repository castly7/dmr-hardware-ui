import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.png' : 'assets/layout/images/logo-white.png'} alt="logo"/>
            </Link>

            

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v"/>
            </button>

            <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                <li className='flex flex-row align-items-center'>
                    <p className='font-bold text-base'>{"auth.auth.user.username"}</p>
                </li>

                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-sign-out"></i>
                        <span>Çıkış</span>
                    </button>
                </li>
            </ul>


        </div>
    );
}
