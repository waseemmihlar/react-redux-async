import React,{useEffect} from 'react'
import {fetchpost} from './action'
import {useDispatch,useSelector} from 'react-redux'


function Posts() {

    const dispatch=useDispatch();
    const data=useSelector(state=>state)  // Conatin only one Reducer's data

    useEffect(()=>{
        dispatch(fetchpost())

    },[])

    const post_state=()=>{
        if(data.loading)
        {
            return(
                <h2>Loading Data</h2>
            )
        }
        
        return data.items.map(posts=>{
            return <h3>{posts.title}</h3>
        })
    }

    return (
        <div>
           {post_state()}
        </div>
        
    )
}

export default Posts
