import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Filtered_res_page = () => {

    const {category} = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])

    const cleanCategory = category.replace("-restaurant-near-me", "")

    const categoryFilteredres = data?.filter((item)=> item.category.includes(cleanCategory) )
    console.log(categoryFilteredres, "inside filtered res page and got the filtered res data")
  return (
    <div>
        <p>Filtered_res_page</p>
        {category}
    </div>
  )
}

export default Filtered_res_page