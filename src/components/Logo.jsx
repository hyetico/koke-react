import React from 'react'
import styled from"styled-components";

const Logobox = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
`

const LogoTitle = styled.h3`
  text-align: center;
  font-size: 20px;
`
export const Logo = (props) => {
  return (
    <div className='logo' style={{display:props.display}} >
      <Logobox className="allcoffee_logo_box" style={{width:props.width,height:props.height,border:props.border}}>
        <img src={props.img} width='90px' style={{width:props.width}} alt='로고이미지' />
      </Logobox>
      <LogoTitle className="allcoffee_logo_title" style={{fontSize:props.fontSize}}>{props.title}</LogoTitle>
    </div>
  )
}

Logo.defaultProps = {
  img:'',
  title:'',
}
