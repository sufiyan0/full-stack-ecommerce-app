'use client'
import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineShopping } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlForImage } from '../../../sanity/lib/image'

const Cart = () => {
  const useref = useRef()
  const {totalPrice,totalQuantities,cartItem,setShowCart} = useStateContext()
  return (
    <div>Cart</div>
  )
}

export default Cart