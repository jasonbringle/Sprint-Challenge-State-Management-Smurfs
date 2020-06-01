import React from 'react';
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    color: rgba(0,0,0,1);
    font-size: 2rem;
    background-color: white;
`

const Header = () => {
return <HeaderDiv>
        <h1>CREATE A VILLAGE OF SMURFS!</h1>
    </HeaderDiv>
}
export default Header;


