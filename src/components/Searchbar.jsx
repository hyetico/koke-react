import React from 'react'
import styled from"styled-components";
import {BsSearch} from "react-icons/bs";


const SearchBox = styled.div`
position: relative; 
`

const SearchBar = styled.input`
width: 430px;
height: 40px;
border-radius:40px;
border: none;
outline: none;
border: 1px solid #ccc;
box-sizing: border-box;
padding-left:38px;
margin-right: 18px;
`

const SearchIcon = styled.div`
position: absolute;
left: 10px;
top: 8px;
`

export const Searchbar = () => {
  return (
    <SearchBox>
      <SearchBar type="text" placeholder={'검색'}/>
      <SearchIcon><BsSearch size='22'/></SearchIcon>
    </SearchBox>
  )
}
