import {useEffect} from 'react'
import axios from 'axios'


export const fetchpost=()=>async (dispatch,getState)=>{
    dispatch({type:'FETCH_POST_REQUEST'})
    try {
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');

         dispatch({type:'FETCH_POST_SUCCESS',payload:response.data})
        
    } catch (error) {
        dispatch({type:'FETCH_POST_ERROR',error})
    }

}



// export const fetchpost=()=>async (dispatch,getState)=>{
//     const response=await axios.get('https://jsonplaceholder.typicode.com/posts');

//     dispatch({type:'FETCH_POST',payload:response.data})
// }






// export const fetchpost=async ()=>{
//     const response=await axios.get('https://jsonplaceholder.typicode.com/posts');

//     console.log(response.data)
//     return{
//         type:'FETCH_POST',
//         payload:response.data
//     }
// }








