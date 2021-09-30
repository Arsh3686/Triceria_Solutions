import React,{useEffect, useState} from 'react'
import axios from 'axios'

const AxiosApi = () => {
    const getdata=async ()=>{
        const url=`https://4917ouizol.execute-api.ap-south-1.amazonaws.com/default/projectAPIs`
        const res =await fetch(url, {
            method: "GET",
            headers: {
                          'Content-Type': ' application/json',
                          'x-api-key': 'tVgyl8QS8T3SVxD9XPsWs7xE5Y68YVovaIUxyY41'
                      },
          })
            console.log(res)
    }
    useEffect( ()=>{
        getdata()
    },[])
    

    /*
fetch(api-url, {
        mode: 'no-cors',
        method: "POST",
        headers: {
            'Accept': 'application/json',
                      'Content-Type': ' application/json',
                      'X-API-SERVER': '85499f9f'
                  },
      }).then(res => res.json())
        .then(res => {
          if (res.status === 200){
            console.log("accepted");
          }else {
            console.log(res.error);
          }

           console.log(res.error)
        }).catch(err => console.log(err))
    */

    const [num, setNum] = useState('1')
    return (
        <>
        <h1>You selected {num}</h1>
         <select onChange={(elem)=>setNum(elem.target.value)}>
             <option value="1" >1</option>
             <option value="25">25</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
         </select>
        </>
    )
}

export default AxiosApi
