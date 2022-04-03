import { useEffect, useState } from "react"

const useComments=()=>{
    const[comments,setComments] = useState([]);
    useEffect(()=>{
        fetch('Comments.json')
        .then(response=>response.json())
        .then(data=>setComments(data))
    }
        ,[]);
        return[comments,setComments]
}
  export{useComments};