import React from 'react'

import {configureStore, createSlice} from "@reduxjs/toolkit";

let cart = createSlice({
  name:'cart',
  initialState : [

  ],
  reducers : {
    addCount(state, action){
      let number = state.findIndex((findId)=>{return findId.id===action.payload})
      state[number].count++
    },
    minusCount(state, action){
      let number = state.findIndex((findId)=>{return findId.id===action.payload})
      if(state[number].count > 1) state[number].count--
    },
    addItem(state, action){
      if(window.confirm('장바구니에 추가하시겠습니까?')){
        state.push(action.payload)
      }else{
        //아니요
      }
    },
    deleteCount(state, action) {
     action.payload.remove();
    },
  }
})

export let { addCount , minusCount ,addItem ,deleteCount } = cart.actions


export default configureStore({
  reducer : {
    cart: cart.reducer
  }
})