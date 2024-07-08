import React from 'react';

interface NavbarProps {
    // Define your props here
    children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
    // Implement your Navbar component here
    return (
        <nav>
            {children}
        </nav>
    );
};

export default Navbar;