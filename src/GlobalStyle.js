import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    list-style-type:none;
    border-box:0;
}

body{
    background-color:unset;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color:white;
}

a{ 
    color:inherit;
    font-family:inherit;
    text-decoration:none;
}

p{
    line-height:2rem;
}

.Before{
    position:relative;
    padding-left:3rem;
    &::before{
        content:'';
        position:absolute;
        left:0px;
        top:50%;
        width:30px;
        height:2px;
        background-color:white;
    }
}

.GradientText{
    background:linear-gradient(120deg, rgb(208,188,28), rgb(116,80,52));
}

.title-con{
    text-align:center;
    width:80%;
    margin:0 auto;
}

.gradient-cards-con{
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    grid-gap:2rem;
}

`;

export default GlobalStyle;