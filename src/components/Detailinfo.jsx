import React from 'react'
import styled from 'styled-components'
import { BsChevronDown } from "react-icons/bs";

const DetailSection = styled.section`
width: 100%;
background-color: #FAF7E8;
border-radius: 20px;
padding: 30px 0;
box-sizing: border-box;
`
export const Detailinfo = () => {
  return (
    <DetailSection>
     <ul className='detail_conts'>
      <li>3일 내 볶은 원두만 배송</li>
      <li>산미가없어요.
      <p>신맛이 없어서 고소해요.</p>
      </li>
      <li>
      블렌드
      <p>콜롬비아 수프리모 워시드, 코스타리카 따라주 SHB 워시드, 브라질 세하도 NY2 내추럴</p>
      </li>
      <li>미디엄 다크 로스팅</li>
      <li>상품 필수 표기 정보
        <BsChevronDown className='btn_down'/>
        <ul>
          <li></li>
        </ul>
      </li>
      <li>배송안내
        <BsChevronDown className='btn_down'/>
        <ul>
          <li></li>
        </ul>
      </li>
     </ul>
    </DetailSection>
  )
}
