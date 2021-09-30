import Info from '../Info'
import { useEffect, useState } from 'react'
import Card from '../Card'
import GetCardsData from './GetCardsData'

const Cards = () => { 
    const [state,setState]=useState(Info)

    const getusers= async()=>{
        const fetchapi=await fetch("https://4917ouizol.execute-api.ap-south-1.amazonaws.com/default/projectAPIs")
        console.log(fetchapi)
    }

    useEffect( ()=>{
    },[])
    return (
        <>
        <Card states={state}/>            
        <GetCardsData states={state}/>
        </>
    )
}
export default Cards
