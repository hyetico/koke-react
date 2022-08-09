import React, { useState } from 'react'
import { BsHeart,BsFillCartPlusFill } from "react-icons/bs";
import IconBox from '../components/PageIconbox';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo'
import { SubTitle } from '../components/Subtitle'
import { Pagenation } from '../components/Pagenation';
import { addItem } from './Store';
import { useDispatch } from 'react-redux';
import data from '../components/data';


export const Allcoffee = () => {

  const [count, setCount] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  let dispatch = useDispatch()
 
  return (
    <section className='allcoffee_outer sub_outer'>
      <div className="allcoffee_inner inner">
        <SubTitle title='모든커피' numtitle='16개'></SubTitle>
        <div className="allcoffee_container_outer">
          <ul className='category'>
            <li>추천순</li>
            <li>판매인기순</li>
            <li>낮은가격순</li>
            <li>높은가격순</li>
            <li>상품평순</li>
            <li>등록일순</li>
          </ul>
          <div className='allcoffee_container container sub_container'>
            {
              data.map((value, i) => {
                if(value.id ==='coffee01')
                return (
                    <>
                      <div className='col-md-3 link' key={value.id}>
                        <div className="allcoffee_box hover_box">
                          <Logo img={value.logo}></Logo>
                          <div className="img_box">
                          <Link to='./detail' target='_blank'>
                           <img src={value.image} alt="allcoffee_image" style={{width:'100%'}} />
                          </Link>
                           <div className='hover_items'>
                            <IconBox className='hover_item'>
                              <BsHeart className='bsHeart' size='14' onClick={()=>{
                                let countCopy=[...count]
                                countCopy[i] +=1
                                setCount(countCopy)
                              }}/>
                                {
                                count[i]==false ? '' : <div className='heart_state'>+{count[i]}</div>
                                }
                            </IconBox>
                            <IconBox className='hover_item'>
                              <BsFillCartPlusFill onClick={()=>{
                                  dispatch(addItem({id:value.id,image:value.image, desc:value.desc, title: value.title, price:value.price, pricevalue:value.pricevalue, count:1}))
                                }} />
                            </IconBox>
                           </div>
                          </div>
                          <Link to='./detail' target='_blank' className='link'>
                            <h3 className='product_title product_title01'>{value.title}</h3>
                            <p className='product_desc'>{value.desc}</p>
                            <p className='product_price'>{value.price}</p>
                          </Link> 
                        </div>
                      </div>
                    </>
                  )
                  else {
                    if(value.id.includes('coffee'))
                    return(
                     <div className='col-md-3' key={value.id}>
                      <div className="allcoffee_box hover_box">
                        <Logo img={value.logo}></Logo>
                        <div className="img_box">
                          <img src={value.image} alt="allcoffee_image" style={{width:'100%'}} />
                          <div className='hover_items'>
                            <IconBox className='hover_item'>
                              <BsHeart className='bsHeart' onClick={()=>{
                                let countCopy=[...count]
                                countCopy[i] +=1
                                setCount(countCopy)
                              }} />{
                                count[i]==false ? '' : <div className='heart_state'>+{count[i]}</div>
                                }
                              {/* <div className='heart_state'>+{count[i]}</div> */}
                            </IconBox>
                            <IconBox className='hover_item'>
                              <BsFillCartPlusFill onClick={()=>{
                                  dispatch(addItem({id:value.id,image:value.image, desc:value.desc, title: value.title, price:value.price, pricevalue:value.pricevalue, count:1}))
                                }} />
                            </IconBox>
                          </div>
                        </div>
                        <h3 className='product_title'>{value.title}</h3>
                        <p className='product_desc'>{value.desc}</p>
                        <p className='product_price'>{value.price}</p>
                      </div>
                    </div>
                    )
                  }
                })
             } 
          </div>
        </div>
        <Pagenation></Pagenation>
      </div>
    </section>
  )
}
