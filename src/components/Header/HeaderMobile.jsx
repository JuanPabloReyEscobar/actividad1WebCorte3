import React from 'react'
import styled from 'styled-components'

function HeaderMobile() {
    return (
       <Wrapper>
           <HomePageButton>
                <a href="/">Inicio</a>
            </HomePageButton>
            <TodayButton>
                <a href="/">Hoy</a>
            </TodayButton>
            <IllustrationButton>
                <a href="/">Ilustracion...</a>
            </IllustrationButton>
       </Wrapper>
    )
}

export default HeaderMobile

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color:white;
    color: black;

`
const HomePageButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 83px;
    align-items: center;
    justify-content: center;
    border-radius:24px;
    cursor: pointer;
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    :hover {
        background-color: #e1e1e1;
    }
`

const TodayButton = styled.div`
    margin-left: 10px;
    display: flex;
    height: 48px;
    min-width: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer; 
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    :hover {
        background-color: #e1e1e1;
    }
    
`
const IllustrationButton = styled.div`
    margin-left: 10px;
    display: flex;
    height: 48px;
    min-width: 70px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer; 
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    :hover {
        background-color: #e1e1e1;
    }
    
`