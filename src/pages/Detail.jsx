import React from 'react'
import styled from 'styled-components'
import brandproductdata, { Brandsitem } from '../components/Brandsitem';
import { Logo } from '../components/Logo'
import { BsHeart } from "react-icons/bs";
import { Detailinfo } from '../components/Detailinfo';

const StyleButton = styled.button`
color:#fff;
background: #ff6c57;
box-sizing: border-box;
border: none;
width: 40%;
height:50px;
line-height:50px;
border-radius:5px;
font-size: 20px;
font-weight:700;
transition: all 0.3s;
&:hover{
   background:${(props) => (props.cart ?'#ff6c57;':'#fff;')};
   border:${(props)=>(props.cart ?'1px solid #ff6c57;':'1px solid #ff6c57;')};
   box-sizing: border-box;
   color:${(props) => (props.cart?'#fff':'#ff6c57')};
  }

  ${(props)=>
  props.cart &&
  `
  background:#fff;
  color:#ff6c57;
  border:1px solid #ff6c57;
  box-sizing: border-box;
  `
  }

${(props)=>
  props.option &&
  `
  background:#fff;
  color:#999;
  border:1px solid #999;
  box-sizing: border-box;
  width:150px;
  height:45px;
  line-height:45px;
  font-size:16px;
  `
  }

${(props)=>
  props.heart &&
  `
  background:#fff;
  border:1px solid #ff6c57;
  box-sizing: border-box;
  width:56px;
  font-size:16px;
  `
  }
`

export const Detail = () => {
  return (
    <>
      <section className='detail_outer'>
        <div className="inner">
          <div className="container product_container">
            {
            brandproductdata.map((value)=>{
              if(value.id ==='brand01')
              return(
                <div className='container'>
                    <div className="detail_box">
                      <div className="detail_l">
                      <img src={value.image} alt="product_image" style={{width:'100%'}} />
                      <div className="detail_l_txt">
                      <p>견과류의 고소함을 베이스로<br></br>
                        깊은 바디감이 잘 어울리는 균형감이 좋은 블렌드입니다.</p>
                      <Logo img={`/image/roa_01.png`} title='커넥츠커피' width='40px' height='40px' fontSize='13px' display='flex'></Logo>
                      </div>
                      </div>
                      <div className="detail_r">
                        <div className="detail_txt">
                          <h3 className='product_title'>{value.title}</h3>
                          <p className='product_desc'>{value.desc}</p>
                          <p className='product_price'>{value.price}</p>
                        </div>
                        <div className="detail_options">
                          <p className='detail_option'>
                          <span className='option_name'>원두 용량</span>
                          <div>
                            <StyleButton className='ssbtn on' option>200g</StyleButton><StyleButton className='ssbtn' option>400g</StyleButton><StyleButton className='ssbtn' option>1kg</StyleButton>
                          </div>
                          </p>
                          <p className='detail_option'>
                          <span className='option_name'>분쇄 선택</span>
                          <div>
                          <StyleButton className='sbtn on' option>홀빈(분쇄안함)</StyleButton><StyleButton className='sbtn' option>커피메이커</StyleButton>
                          <StyleButton className='sbtn' option>에스프레소머신</StyleButton>
                          <StyleButton className='sbtn' option>프렌치 프레스</StyleButton><StyleButton className='sbtn' option>핸드드립</StyleButton><StyleButton className='sbtn' option>모카포트</StyleButton>
                          </div>
                          </p>
                        </div>
                        <div className="btn_cart_buy">
                        <StyleButton heart><BsHeart size='24' color='#ff6c57'></BsHeart></StyleButton>
                        <StyleButton cart className='btn_cart'>장바구니</StyleButton>
                        <StyleButton className='btn_buy'>구매하기</StyleButton>
                      </div>
                      </div>
                    </div>
                </div>
              )
            })
          }
          </div>
          <Detailinfo></Detailinfo>
          <Brandsitem></Brandsitem>
        </div>
      </section>
    </>
  )
}
