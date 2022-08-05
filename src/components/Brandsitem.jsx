import React from 'react'
import { Logo } from './Logo'
import { BsInstagram ,BsFillGeoAltFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const brandproductdata =[
  {
    id:'brand01',
    image : './image/connectsproduct_01.png',
    title: '[커넥츠커피] 뉴커먼',
    desc:'고소 & 묵직한',
    price:'12,000원'
  },
  {
    id:'brand02',
    image : './image/connectsproduct_02.png',
    title: '[커넥츠커피] 발렌타인',
    desc:'쌉쌀 & 묵직한',
    price:'13,000원'
  },
  {
    id:'brand03',
    image : './image/connectsproduct_03.png',
    title: '[커넥츠커피] 커넥츠 블렌드',
    desc:'밸런스 & 부드러운',
    price:'14,000원'
  },
  {
    id:'brand04',
    image : './image/connectsproduct_04.png',
    title: '[커넥츠커피] 브라이트',
    desc:'상큼 & 부드러운 ',
    price:'14,000원'
  }
]

export default brandproductdata;

export const Brandsitem = () => {
  return (
      <div className="brands_container_outer">
          <div className="brands_container sub_outer">
            <div className="brands_l">
              <div className="img_box">
                <img src={`./image/connectsstore.jpeg`} alt="store" />
              </div>
            </div>
            <div className="brands_r">
              <div className="brands_r_top">
                <div className="logo_box">
                  <Logo img={`./image/roa_01.png`} width='110px' height='110px' border='1px solid #ccc'></Logo>
                </div>
                <div className="logo_txt">
                  <h3>커넥츠커피</h3>
                  <p>
                    2021 KTBC 챔피언
                    2021 이카와코리아
                    로스팅챔피언십 챔피언
                  </p>
                  <p>
                  2021 MOC 개인전 2위
                  2019 KTBC 챔피언
                  2018 호주 로스팅대회 동상
                  </p>
                </div>
              </div>
              <div className='brands_center_bottom'>
                <div className="brands_r_center">
                '' 커피는 우리 일상에서 많은 것들을 이어주는 연결고리 역할을 합니다.<br></br>
                커넥츠커피도 이러한 '연결'을 모토로 삼아 다양한 연결고리로서의 역할을 하려고 합니다. "
                </div>
                <div className="brands_r_bottom">
                we & customers : 우리가 먼저 고객과 연결되어 소통하려고 합니다.<br></br>
                farmers & customers : 여러 나라에서 생산된 다양한 커피 생두를 고객에게 선보이고 알리고 싶습니다.<br></br>
                roasters & customers :국내외 로스터리 카페의 개성있는 원두를 게스트빈으로 소개합니다.<br></br>
                people : 궁극적으로 커피를 통해 많은 사람들이 행복해지는 문화를 만들겠습니다.
                </div>
              </div>
              </div>
          </div>
          <div className="brands_location_insta">
            <div className="brands_location">
            <BsFillGeoAltFill size='26' color='#ccc' />
            <strong>Location</strong>
             <p className='brands_txt'>서울 마포구 성지길 60</p>
            </div>
            <div className="brands_insta">
            <BsInstagram size='26' color='#ccc' />
            <strong>Instagram</strong>
              <p className='brands_txt'>connectscoffee</p>
            </div>
          </div>
          <p className='product_num'>4개</p>
          <div className="container product_container">
          {
          brandproductdata.map((value)=>{
            if(value.id==='brand01')
            return(
               <Link to='/detail' target='_blank' className='col-md-3 link'>
                  <div className="product_box">
                  <img src={value.image} alt="product_image" style={{width:'100%'}} />
                    <h3 className='product_title'>{value.title}</h3>
                    <p className='product_desc'>{value.desc}</p>
                      <Logo img={`./image/roa_01.png`} title='커넥츠커피' width='30px' height='30px' fontSize='13px' display='flex'></Logo>
                    <p className='product_price'>{value.price}</p>
                  </div>
               </Link>
            )
            else {
              return(
                <>
                 <div className='col-md-3 link'>
                  <div className="product_box">
                  <img src={value.image} alt="product_image" style={{width:'100%'}} />
                    <h3 className='product_title'>{value.title}</h3>
                    <p className='product_desc'>{value.desc}</p>
                      <Logo img={`./image/roa_01.png`} title='커넥츠커피' width='30px' height='30px' fontSize='13px' display='flex'></Logo>
                    <p className='product_price'>{value.price}</p>
                  </div>
                </div>
                </>
              )}
           })
          }
          </div>
      </div>
  )
}
