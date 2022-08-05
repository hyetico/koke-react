import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCount ,minusCount , deleteCount } from './Store';
import styled from 'styled-components';

const Stylebtn = styled.button`
  display: block;
  width: 70px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  font-size: 12px;

  ${(props)=>
  props.allBtn &&
  `
  width: 180px;
  height: 48px;
  background:#000;
  color:#fff;
  border:1px solid #000;
  box-sizing: border-box;
  font-size:14px;
  `
  }
    ${(props)=>
  props.selectBtn &&
  `
  width: 180px;
  height: 48px;
  background:#fff;
  border:1px solid #e0e0e0;
  box-sizing: border-box;
  font-size:14px;
  `
  }
`

export const Cart = () => {
  let state = useSelector((state)=>{return state})

  let dispatch = useDispatch()

  return (
    <section className='cart_outer sub_outer'>
      <div className="inner">
        {
          state.cart.length ===0 ?
          <Table>
            <tbody>
              <tr>
                <div className="cart_empty">
                  <h2>CART</h2>
                    <p>장바구니가 비었습니다.</p>
                  </div>
              </tr>
            </tbody>
          </Table>:
          <Table>
            <thead>
              <tr className='cart_title'>
                <th><input type="checkbox" /></th>
                <th>상품정보</th>
                <th><span className='cart_img_title'>이미지</span></th>
                <th>상품구매금액</th>
                <th>수량</th>
                <th>주문</th>
              </tr>
            </thead>
            <tbody className='cart_in'>
              {
                state.cart.map((value,i)=>{
                  return(
                    <tr key={i}>
                      <td>
                        <div>
                         <input type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <strong>{state.cart[i].title}</strong>
                          <span>{state.cart[i].desc}</span>
                        </div>
                      </td>
                      <td>
                        <div className='cart_img_container'>
                         <img className='cart_img' src={state.cart[i].image} alt="원두이미지" />
                        </div>
                      </td>
                      <td>
                        <div className='cart_price_container'>
                          {state.cart[i].pricevalue * state.cart[i].count}<span>원</span>
                          <p>{state.cart[i].count}개</p> 
                        </div>
                      </td>
                      <td>
                        <div className="qty_button_container">
                          <button className='btn_minus_plus' onClick={()=>{
                            dispatch(minusCount(state.cart[i].id))
                          }}>
                          -</button>
                          <input className="qty_input_box" value={state.cart[i].count} />
                          <button className='btn_minus_plus' onClick={()=>{
                            dispatch(addCount(state.cart[i].id))
                          }}>+</button>
                        </div>
                      </td>
                      <td>
                        <div className='order_remove_btn'>
                          <Stylebtn className='order_btn'>주문하기</Stylebtn>
                          <Stylebtn className='remove_btn' onClick={(e)=>{
                            return(
                              dispatch(deleteCount(e.target.parentElement.parentElement.parentElement))
                            )
                            }}
                         >상품삭제</Stylebtn>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        }
          <div className='all_select_btn'>
            <Stylebtn allBtn className='all_order_btn'>전체상품주문</Stylebtn>
            <Stylebtn selectBtn className='select_order_btn'>선택상품주문</Stylebtn>
          </div>
      </div>
    </section>
  )
}
