import react from 'react'


/* PERSONAL INFO COMPONENT */

const PersonalInfo = () =>{


  return (
    
    <main className='w-full h-3/4 sm:w-3/4'>

      {/* next step (desktop) */}
      <div className='hidden justify-end px-6 sm:flex'>
        <button className='nextStep text-xs text-slate-50'>Next Step</button>
      </div>

      {/* next step (mobile) */}
      <div className='flex justify-end p-5 sm:hidden nextStepWrapper'>
        <button className='nextStep text-xs text-slate-50'>Next Step</button>
      </div>

    </main>
    
  )

}

function App() {

  const handleActive = (pos) =>{
    let listItemsObj = document.getElementsByClassName('number');
    console.log(listItemsObj);
    let count = 0;
    for (count; count < listItemsObj.length; count+=1){
      listItemsObj[count].classList.remove("active");
    }
    listItemsObj[pos].classList.add("active");

  }

  return (

    <main className='w-full h-full flex flex-col sm:max-w-3xl sm:mx-auto sm:my-4 sm:rounded-lg  sm:p-2 sm:flex-row bg-slate-50'>

      {/* Navigation section */}

          <nav className='w-full h-1/4  flex p-8  bg-no-repeat bg-cover justify-center gap-3 sm:w-1/4 sm:justify-start sm:flex-col sm:p-2 sm:pt-5 sm:gap-4 sm:rounded-lg' id="nav">

            {/* Navigation list item wrapper */}  

            <div className='w-fit sm:w-full sm:flex sm:items-center sm:gap-4 hover:cursor-pointer  listItemCustomStyle' onClick={()=>handleActive(0)}>
              
              {/* list Number */}
              <div className='overflow-hidden rounded-full border w-8 h-8 flex justify-center items-center border-slate-50 text-slate-50 number'> <p>1</p></div>

              {/* list Info * This will be hidden in small screens */}
              <div className='hidden sm:flex max-w-20 flex-col  text-slate-50'>
                <p className='font-light text-xs '>STEP 1</p>
                <p className='text-xs tracking-wider'>YOUR INFO</p> 
              </div>

            </div>

            {/* Navigation list item wrapper */} 


            {/* Navigation list item wrapper */}  

            <div className='w-fit sm:w-full sm:flex sm:items-center sm:gap-4 hover:cursor-pointer  listItemCustomStyle' onClick={()=>handleActive(1)}>
              
              {/* list Number */}
              <div className='overflow-hidden rounded-full border w-8 h-8 flex justify-center items-center border-slate-50 text-slate-50 number'> <p>2</p></div>

              {/* list Info * This will be hidden in small screens */}
              <div className='hidden sm:flex max-w-20 flex-col  text-slate-50'>
                <p className='font-light text-xs '>STEP 2</p>
                <p className='text-xs tracking-wider'>SELECT PLAN</p> 
              </div>

            </div>

            {/* Navigation list item wrapper */} 


            {/* Navigation list item wrapper */}  

            <div className='w-fit sm:w-full sm:flex sm:items-center sm:gap-4 hover:cursor-pointer  listItemCustomStyle' onClick={()=>handleActive(2)}>
              
              {/* list Number */}
              <div className='overflow-hidden rounded-full border w-8 h-8 flex justify-center items-center border-slate-50 text-slate-50 number'> <p>3</p></div>

              {/* list Info * This will be hidden in small screens */}
              <div className='hidden sm:flex max-w-20 flex-col  text-slate-50'>
                <p className='font-light text-xs '>STEP 3</p>
                <p className='text-xs tracking-wider'>ADDS-ONS</p> 
              </div>

            </div>

            {/* Navigation list item wrapper */} 

            {/* Navigation list item wrapper */}  

            <div className='w-fit sm:w-full sm:flex sm:items-center sm:gap-4 hover:cursor-pointer  listItemCustomStyle' onClick={()=>handleActive(3)}>
              
              {/* list Number */}
              <div className='overflow-hidden rounded-full border w-8 h-8 flex justify-center items-center border-slate-50 text-slate-50 number'> <p>4</p></div>

              {/* list Info * This will be hidden in small screens */}
              <div className='hidden sm:flex max-w-20 flex-col text-slate-50'>
                <p className='font-light text-xs '>STEP 4</p>
                <p className='text-xs tracking-wider'>SUMMARY</p> 
              </div>

            </div>

            {/* Navigation list item wrapper */}  

          </nav>


      {/* End of naviagtion section */}


      {/* FUNCTIONAL PART */} 
      <PersonalInfo/>




    </main>
  )
}

export default App
