import styled from 'styled-components';

export const NavElement = styled.a`
    color: white;
    margin: auto;
    cursor: pointer;
    font-size: large;
    margin-right: 2rem;
    text-decoration: none;
    display: flex;
    :hover{
        color: #C77037;
    }
`

export const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
    margin-top: auto;
    margin-bottom: auto;
`
export const NavContainer = styled.div`
    background: #121212;
    display: flex;
    width: 100%;
    height: 5rem;
    padding: 10px;
    align-items: center;
    margin: auto;
`

export const ImageContainer = styled.div`
margin-top: auto;
margin-bottom: auto;
:hover{
        fill: #C77037;
    }
`