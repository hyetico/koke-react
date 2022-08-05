import React from 'react'
import styled from"styled-components";

const Title = styled.h2`
  font-size: 39px;
  margin-bottom: 30px;
  font-family: 'NotoSansKR';
  padding-top: 50px;
  box-sizing: border-box;
`
const NumTitle = styled.p`
  font-size: 18px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding-bottom: 30px;
  font-family: 'NotoSansKR';
`

export const SubTitle = (props) => {
  return (
   <div>
      <Title className='sub_title'>{props.title}</Title>
      <NumTitle className='sub_num_title'>{props.numtitle}</NumTitle>
   </div>
  )
}

SubTitle.defaultProps = {
  title:'',
  numtitle:''
}
