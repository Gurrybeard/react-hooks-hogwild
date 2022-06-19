import {React,useRef} from 'react'
import Description from './Description';
import arraySort from 'array-sort';



export default function Pigs({hogs,desc,isFilter}) {

       const childFunctionRef= useRef(null);
      function onClickRef(){
          childFunctionRef.current();  
      }
      
      //greased pigs
      const greassedPigs = hogs.filter(e=>{ return  e.greased === true; }).map(e => {
         return(
             
             <div className='ui grid container'>
             <div className='ui eight wide column card content'>
                 <h1 onClick={onClickRef}>{e.name}</h1>
                 <div className='image'>
                 <img src={e.image} alt={e.image} />
                 <div className='description'>{desc? <div>Specialty: {e.specialty} <br /> Weight: {e.weight} lbs</div>:''}</div>
                 {/* e is the data and desc is the original state held in app */}
                 
                 <Description key={e} cbRef={childFunctionRef}e={e} desc={desc}></Description>
                 </div>
                 
             </div>
         </div>
         )
         
     });

     
//pigs sorted by name
    const nameSortedPigs = arraySort(hogs,'name').map(e => {
        return(
            
            <div className='ui grid container'>
            <div className='ui eight wide column card content'>
                <h1 onClick={onClickRef}>{e.name}</h1>
                <div className='image'>
                <img src={e.image} alt={e.image} />
                <div className='description'>{desc? <div>Specialty: {e.specialty} <br /> Weight: {e.weight} lbs</div>:''}</div>
                {/* e is the data and desc is the original state held in app */}
                
                <Description key={e} cbRef={childFunctionRef}e={e} desc={desc}></Description>
                </div>
                
            </div>
        </div>
        )
        
    });
// pigs sorted by weight
    const weightSortedPigs = arraySort(hogs,'weight').map(e => {
       return(
           
           <div className='ui grid container'>
           <div className='ui eight wide column card content'>
               <h1 onClick={onClickRef}>{e.name}</h1>
               <div className='image'>
               <img src={e.image} alt={e.image} />
               <div className='description'>{desc? <div>Specialty: {e.specialty} <br /> Weight: {e.weight} lbs</div>:''}</div>
               {/* e is the data and desc is the original state held in app */}
               
               <Description key={e} cbRef={childFunctionRef}e={e} desc={desc}></Description>
               </div>
               
           </div>
       </div>
       )
       
   });
   
    
   
  
    switch(isFilter){
    default: return null;
      case 'greased':
      return <div>{greassedPigs}</div>;
      case 'name':
        return <div>{nameSortedPigs}</div>; 
       case 'weight':
         return <div>{weightSortedPigs}</div>;
         
            

}
}
