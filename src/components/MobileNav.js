import React from 'react'
import styled from 'styled-components'


const MobileNav = () => {
    return (
        <MobileNavStyled>
           <nav classNameName="navbar navbar-expand-md bg-dark navbar-dark">
    
                <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" href="#">Link</a>
                    </li>
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" href="#">Link</a>
                    </li>
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" href="#">Link</a>
                    </li>
                    </ul>
                </div>
            </nav> 
        </MobileNavStyled>
    )
}


const MobileNavStyled= styled.div`
    display:none;
    @media (max-width:800px){
        display:block;
    }
`;

export default MobileNav
