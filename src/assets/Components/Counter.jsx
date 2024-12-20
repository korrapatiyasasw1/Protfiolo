import {countReducer} from './CountReducer';

function Counter() {
    const [state,dispatch] = useReducer(countReducer,{count:0})
  return (
<>
<div>
    <button onClick={()=>{
       dispatch({type:"INC"});
    }}>
 Increment : {state.count}
    </button>
    <button onClick={()=>
    {
       dispatch({type:"DEC"});
    }}>
 Decrement : {state.count}
    </button>
    <button>
        onClick = {()=>
        {

        }}
    </button>
</div>
</>
)
}

export default Counter;



