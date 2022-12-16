
const intialstate={
    items:[],
    error:null,
    loading:false
};


const postreducer=(state=intialstate,action)=>{
    switch(action.type){
        case 'FETCH_POST_REQUEST':
            return{
                ...state,
                loading:true,
                error:null
            }
            break;
        case 'FETCH_POST_SUCCESS':    
            return{
                ...state,
                items:action.payload,
                loading:false
            }
            break;
        case 'FETCH_POST_ERROR':    
            return{
                ...state,
                error:action.error,
                loading:false
            }    
        default:
            return state
    }    
    
}

export default postreducer;

