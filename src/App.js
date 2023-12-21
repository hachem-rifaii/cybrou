
import './App.css'
import { useCallback , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const dispatch = useDispatch();
  const storeState = useSelector((state) =>state);

  const globalCounter=(value)=> {
    if (value < 1) {
      return 'no number';
    }
    return value;
  }
  
  
  const counterMethod = useCallback((type,payload) => {
    dispatch({type,payload})
  },[dispatch])

 useEffect(()=>
  counterMethod('increase',1)
 ,[counterMethod])

  const toogle=()=> {
  dispatch({ type: 'toogleCounter' });
}
  return (
<div    style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              
            }}>
{storeState.showCounter && 
  <div
  style={{
    marginLeft:'35px'
  }}
          >
            <h1>hello redux</h1>
            <div className='counter' style={{ fontSize: '2rem' }}>
              counter : {globalCounter(storeState.value)}
            </div>
            <div>
              <button
                onClick={()=>counterMethod("increase",5)}
                className='button btn-primary'
                style={{ margin: '20px' }}
              >
                increase +
              </button>
              <button onClick={()=>counterMethod("decrease",2)} className='button btn-primary'>
                decrease -
              </button>
            </div>
    </div>

}
{/* end of toggle  */}
<div>
              <button 
                
              onClick={()=>{toogle()}} className='btn-danger'>
                Hide/show counter number
              </button>
            </div> 
         
      
   </div>
       
      

  )}


export default App
