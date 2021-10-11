import React from 'react'
import styled from 'styled-components'
function NavBar() {
    return (
        <NavBarContainer >
            UpCloud Quize
        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 color:red;
   padding:0;
    margin:0;
    background-color:#3D56B2;
    height:7vh;
    color:#E6E6E6;
`;