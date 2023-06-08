import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.png' : 'assets/layout/images/logo-white.png'} alt="Logo" height="20" className="mr-2" />
        </div>
    );
}
