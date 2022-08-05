import React from 'react'
import styled from"styled-components";

const DetailButton = styled.button`
color:#fff;
background:${(props)=> props.bg || '#ff6c57'}; 
border: ${(props)=> props.border || 'none'};
box-sizing: border-box;
width:200px;
height:50px;
line-height:50px;
border-radius:5px;
font-size: 20px;
font-weight:700;
transition: all 0.3s;
&:hover{
   background:#fff;
   border:1px solid #ff6c57;
   color:#ff6c57;
  }
`

export const Button = (props) => {
  return (
    <DetailButton className='btn_detail'>{props.text}</DetailButton>
  )
}
