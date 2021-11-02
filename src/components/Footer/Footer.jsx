import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PersonIcon from '@material-ui/icons/Person';

function Footer() {
    return (
        
        <Wrapper>
            
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton>
                    <TextsmsIcon />
            </IconButton>
            <IconButton>
                    <PersonIcon />
            </IconButton>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    display: flex;
    background-color: #e1e1e1;
    border: 0;
    border-width: 0;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 500px;
    
    width: 55%; 
	left: 85px;
	bottom: 50px;
	position: fixed; 
`
