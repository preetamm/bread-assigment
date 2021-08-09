import React from 'react';

const NavItem = ({className, children}) => {
    return (
        <div className={`nav-item fs-6 px-3 py-1 ${className}`}>
            {children}
        </div>
    );
}

export default NavItem;
