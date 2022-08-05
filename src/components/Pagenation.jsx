import React from 'react'
import IconBox from './PageIconbox'
import styled from 'styled-components';


const PageNumber = styled(IconBox)`
  width: 30px;
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
  border-radius:50%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 8px;
  transition: all 0.3s;
  color: #fff;
  margin: 0 auto;
  &:hover{
    background: #ccc;
    color:#999;
  }
`

export const Pagenation = () => {
  return (
    <div>
      <PageNumber>1</PageNumber>
    </div>
  )
}
