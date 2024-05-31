import react, { useEffect, useState } from 'react'
import arcadeIcon from './assets/icon-arcade.svg'
import advancedIcon from './assets/icon-advanced.svg'
import proIcon from './assets/icon-pro.svg'
import thankYou from './assets/icon-thank-you.svg'
import checkmarkIcon from './assets/icon-checkmark.svg'
import { AppContext } from './AppContext.jsx'


let mainForm = {PersonalInfo:null,PlanInfo:null,AddOns:null} // mainForm is a dictionary with three keys 
// PersonalInfo (object), PlanInfo (object), AddOns ( list of strings ) .
let addOnsChecked = []; // list of strings. The strings represent the addOns that were selected


// Main App Component
function App() {

  const [activeComponent, SetActiveComponent] = useState(1);  // activecomponent State variable - data type is an integer
  const [planDuration, SetPlanDuration] = useState("mon"); // planDuration State variable - data type is a string

  // addOnsOptions - an array of objects. Each object contains a key indicating the option name
  // The value of the keys is an object containing to key which are the monthly and yearly option prices

  const addOnsOptions=[
    {
      online:{
        mon:1,
        yr:10
      }
    },
    {
      storage:{
        mon:2,
        yr:20
      }
    },
    {
      profile:{
        mon:2,
        yr:20
      }
    }    
  ]


  /* PERSONAL INFO COMPONENT */

const PersonalInfo = () =>{

  const [formData,SetFormData] = useState({}); // formData State variable - data type is object

  
  // The code below will Run when the PersonalInfo component renders
  // It checks if the mainForm.PersonalInfo value is null or not
  // If not null, the values will be placed on each input tag respectively
  useEffect(()=>{
    if (mainForm.PersonalInfo != null){
      let nameInputValue = mainForm.PersonalInfo.name;
      let emailInputValue = mainForm.PersonalInfo.email;
      let numberInputValue = mainForm.PersonalInfo.number;

      let nameInput = document.getElementById("name");
      let emailInput = document.getElementById("email");
      let numberInput = document.getElementById("number");

      nameInput.value = nameInputValue;
      emailInput.value = emailInputValue;
      numberInput.value = numberInputValue;

    }
  });

  const handleChange = (e)=>{

    SetFormData({
      ...formData,
      [e.target.id]:e.target.value
    })

  }

  const handleSubmit = ()=>{

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let phoneNumberInput = document.getElementById("number");

    // Checked when you go back to the personalInfo page
    if (mainForm.PersonalInfo != null){
      SetActiveComponent(2);
      return;

    }

    if (nameInput.value == ""){
      let nameError = document.getElementById("nameError");
      nameError.style.display = "block";
    }

    if (emailInput.value == ""){
      let nameError = document.getElementById("emailError");
      nameError.style.display = "block";
    }

    if (phoneNumberInput.value == ""){
      let nameError = document.getElementById("numberError");
      nameError.style.display = "block";
    }

    if (nameInput.value != "" && emailInput.value != "" && phoneNumberInput.value != ""){
        mainForm.PersonalInfo = formData;
        console.log("Main Form Data: \n", mainForm);
        SetActiveComponent(2);
    }


  }

  const handleNextStep = ()=>{

    handleSubmit();

  }


  return (
    
    <>

      <div className='w-4/5 h-auto mx-auto my-5'>

        {/* Heading section */}
        <div className='flex flex-col gap-2'>
          <h1 className='heading text-lg sm:text-3xl'>Personal Info</h1>
          <p className='para text-xs sm:text-sm'>Please provide your name, email address <br /> and phone number</p>
        </div>

        {/* Form data */}

        <form id='personalInfoForm' className='my-5 flex flex-col gap-2' autoComplete='off' onSubmit={()=>handleSubmit()}>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
            <label htmlFor="name" className='heading text-sm'>Name</label>
            <p className='error text-sm' id='nameError'>* This field is required</p>
            </div>
           
            <input onKeyUp={handleChange} type="text" id='name' placeholder='e.g. Stephen King' className='border border-sky-950 outline-none p-2 rounded-md'/>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
            <label htmlFor="email" className='heading text-sm'>Email</label>
            <p className='error text-sm' id='emailError'>* This field is required</p>
            </div>
            <input onKeyUp={handleChange} type="email" id='email' placeholder='e.g. stephenking@lorem.com' className='border border-sky-950 outline-none p-2 rounded-md'/>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <label htmlFor="number" className='heading text-sm'>Phone Number</label>
              <p className='error text-sm' id='numberError'>* This field is required</p>
            </div>
            <input onKeyUp={handleChange} type="number" id='number' placeholder='e.g. + 1 234 567 890' className='border border-sky-950 outline-none p-2 rounded-md'/>
          </div>
        </form>

      </div>

      {/* next step (desktop) */}
      <div className='hidden justify-end sm:flex sm:w-4/5 mx-auto my-5'>
        <button className='nextStep text-xs text-slate-50' onClick={handleNextStep} >Next Step</button>
      </div>

      {/* next step (mobile) */}
      <div className='flex  w-full  justify-end p-5 sm:hidden nextStepWrapper'>
        <button className='nextStep text-xs text-slate-50'  onClick={handleNextStep}>Next Step</button>
      </div>

      </>   
    
  )

}

  /* PLAN COMPONENT */

const Plan = ()=>{

  // const [planDuration, SetPlanDuration] = useState("mon");

  // code below will be run immediately the Plan component is rendered
  // The code below checks if the PlanInfo key is null or not
  // If not, the code gets the plan name and add a planWrapperActive class to the container id corresponding to the plan name
  useEffect(()=>{

    if (mainForm.PlanInfo == null){
      return;
    }
    let activeplan = mainForm.PlanInfo.plan;
    let planWrapper = document.getElementsByClassName("planWrapper");

    for (let i = 0; i < planWrapper.length; i++){
      if(planWrapper[i].id == activeplan){
        planWrapper[i].classList.add("planWrapperActive");
      }
    }

  });

  // planOptions - array of objects with key values as objects too
  const planOptions = [
    {  
      arcade:{
        mon:9,
        yr:90
      }
    },
    {
      advanced:{
        mon:12,
        yr:120
      }
    }, 
    {
      pro:{
        mon:15,
        yr:150
      }
    }
  ]

  // review back. Go to the jsx part of the code 
  const changeMode = ()=>{    

    let modeChange = document.getElementById("modeChange");
    if(planDuration == "yr" && $("#modeChange").hasClass("modeChangeyearly")){
      SetPlanDuration("mon");
      modeChange.classList.toggle("modeChangeyearly");
      return  
    }
    modeChange.classList.toggle("modeChangeyearly");
    SetPlanDuration("yr");
  }

  const handleModePropagation = (e)=>{
    e.stopPropagation();
    changeMode();
  }
  const handleNextStep = ()=>{

    let formData = {};
    let selectedPlan = "";

    let planWrapper = document.getElementsByClassName("planWrapper");

    // If next button is clicked and no plan has been selected

    let planWrapper1 = planWrapper[0];
    let planWrapper2 = planWrapper[1];
    let planWrapper3 = planWrapper[2];

    if (!(planWrapper1.classList.contains("planWrapperActive") || 
        planWrapper2.classList.contains("planWrapperActive") ||
        planWrapper3.classList.contains("planWrapperActive"))){

          alert("Please select a plan before continuing");
          return;
    }

    
    // Getting the name of the plan using the id of the appropriate element (one that has the planWrapperActive class)

    for(let i = 0;i<planWrapper.length;i++){
      if(planWrapper[i].classList.contains("planWrapperActive")){
        formData.plan = planWrapper[i].id;
        selectedPlan = planWrapper[i].id;
      }
    }

   

    planOptions.forEach((plan)=>{
      // plan - {arcade: {mon:9,yr:90}}
      let key = Object.keys(plan)[0];  
      // key = arcade (string)      
         if (key == selectedPlan){
          let [val1, val2] = Object.keys(plan[`${key}`]);
          // [val1, val2] = ["mon","yr"] - data type String

          if (val1 == planDuration){
            formData.price = plan[`${key}`][val1]; // 9

          }
          if (val2 == planDuration){
            formData.price = plan[`${key}`][val2]; // 90

          }           

        }     
      
    });
    mainForm.PlanInfo = formData;
    console.log("Main Form Data: \n", mainForm);
    SetActiveComponent(3);

  }

  const handleBack = ()=>{
    SetActiveComponent(1);

  }

  const handlePlan = (e)=>{
    let planWrapper = document.getElementsByClassName("planWrapper");
    for(let i = 0;i<planWrapper.length;i++){
      planWrapper[i].classList.remove("planWrapperActive")
    }
    e.currentTarget.classList.add("planWrapperActive");

  }


  const handlePropagation = (e)=>{
    e.stopPropagation();
    handlePlan();
  }

  return(
    <>
    <div className='w-4/5 h-auto mx-auto my-5'>

      {/* Heading section */}
      <div className='flex flex-col gap-2'>
          <h1 className='heading font-bold text-lg sm:text-3xl'>Select your plan</h1>
          <p className='para text-xs sm:text-sm'>You have the option for monthly or yearly billing.</p>
      </div>

      {/* Plan options */}
      <div className='mt-5  flex flex-col gap-3 sm:flex-row'>


        <div id='arcade' className='w-full flex items-center sm:items-start gap-2 sm:flex-col  sm:gap-7 sm:w-1/3 planWrapper' onClick={handlePlan}>
          <div className='w-8'>
            <img src={arcadeIcon} alt="Arcade" className='w-full h-auto' onClick={handlePropagation}/>
          </div>

          <div className='flex flex-col' onClick={handlePropagation}>
            <p className='heading font-semibold'>Arcade</p>
            {planDuration=="mon"?<p className='text-xs font-light'>$9/mon</p>:<p className='font-light text-xs'>$90/yr</p>}
            {planDuration=="yr"?<p className='heading text-xs'>2 months free</p>:<></>}
          </div>

        </div>


        <div id='advanced' className='w-full flex items-center sm:items-start gap-2 sm:flex-col  sm:gap-7 sm:w-1/3 planWrapper' onClick={handlePlan}>
          <div className='w-8'>
            <img src={advancedIcon} alt="Advanced" className='w-full h-auto' onClick={handlePropagation}/>
          </div>

          <div className='flex flex-col' onClick={handlePropagation}>
            <p className='heading font-semibold'>Advanced</p>
            {planDuration=="mon"?<p className='text-xs font-light'>$12/mon</p>:<p className='font-light text-xs'>$120/yr</p>}
            {planDuration=="yr"?<p className='heading text-xs'>2 months free</p>:<></>}
          </div>

        </div>

        <div id='pro' className='w-full flex items-center sm:items-start gap-2 sm:flex-col  sm:gap-7 sm:w-1/3 planWrapper' onClick={handlePlan}>
          <div className='w-8'>
            <img src={proIcon} alt="Pro" className='w-full h-auto' onClick={handlePropagation}/>
          </div>

          <div className='flex flex-col' onClick={handlePropagation}>
            <p className='heading font-semibold'>Pro</p>
            {planDuration=="mon"?<p className='text-xs font-light'>$15/mon</p>:<p className='font-light text-xs'>$150/yr</p>}
            {planDuration=="yr"?<p className='heading text-xs'>2 months free</p>:<></>}
          </div>

        </div>

      </div>


      {/* Mode changing between mon/yr */}
      <div className='mt-5 flex items-center justify-center gap-3 mode' onClick={changeMode}>

        <p className='text-sm'>Monthly</p>
        <div id='modeChange' className='w-8 h-4 rounded-xl cursor-pointer flex items-center p-1' onClick={handleModePropagation} >   
          <div className='w-3 h-3 rounded-full bg-slate-50'></div>  
        </div>
        <p className='text-sm'>Yearly</p>

      </div> 

    </div>

    {/* next step (desktop) */}
    <div className='hidden justify-between sm:flex sm:w-4/5 mx-auto my-10'>
        <button className='text-slate-400' onClick={handleBack}>Go Back</button>
        <button className='nextStep text-xs text-slate-50' onClick={handleNextStep}>Next Step</button>
      </div>

      {/* next step (mobile) */}

    <div className='flex  w-full  justify-between p-5 sm:hidden nextStepWrapper'>
        <button className='text-slate-400' onClick={handleBack}>Go Back</button>
        <button className='nextStep text-xs text-slate-50' onClick={handleNextStep}>Next Step</button>
    </div>

    </>
  )

}


    const AddOnsComponent = () =>{

      // let formData = [];

      useEffect(()=>{
        console.log("addOnsChecked:  \n", addOnsChecked);
        addOnsChecked.forEach(elementId=>{
          let element = document.getElementById(elementId);
          let container = element.parentElement;
          container.classList.add("planWrapperActive")
          element.checked = true;
        })

      });

      const handleaddOns = (e) => {

        // let addOnsData = {}
        const container = e.currentTarget; // refers to the element that the event listener is originally attached to (in this case, the parent container).
        const clickedElement = e.target;//  refers to the element that triggered the event (the element that was clicked).
        let inputElement = container.querySelectorAll("input");
        const inputId = Array.from(inputElement).map(input => input.id)[0];        
        const inputIdClone = inputId;
        inputElement = document.getElementById(inputId);
        

           
        // Check if the clicked element is the container or its parent
        if (clickedElement === container || container.contains(clickedElement)) {
          if(container.classList.contains("planWrapperActive")){
            inputElement.checked = false;
            container.classList.remove("planWrapperActive");
            /* removing service key
            formData.filter(serviceObj => serviceObj.serviceName !== inputIdClone);
            console.log(formData);*/
          }else{
    
            inputElement.checked = true;
            container.classList.add("planWrapperActive");

            /* adding service key
            addOnsData.serviceName = inputIdClone;
            // adding service price
            addOnsOptions.forEach((option)=>{
              let serviceName = Object.keys(option)[0];
              if (serviceName == inputIdClone){
                let [val1,val2] = Object.keys(option[`${serviceName}`]);
                if (val1 == planDuration){
                  addOnsData.serviceFee = option[`${serviceName}`][val1];
                }
                if (val2 == planDuration){
                  addOnsData.serviceFee = option[`${serviceName}`][val2];
                }
              }
            })
            formData.push(addOnsData); */
           
          }
        }
      };
    

      const handleNextStep = ()=>{

        addOnsChecked = [];

        let inputWrapper = document.getElementsByClassName("checkboxStyle");

        for (let i = 0; i < inputWrapper.length; i++){
          if(inputWrapper[i].checked){
            addOnsChecked.push(inputWrapper[i].id);
          }

        }
        mainForm.AddOns = addOnsChecked;
        console.log("Add-Ons checked:", addOnsChecked);
        SetActiveComponent(4);

      }

      const handleBack = ()=>{

        addOnsChecked = [];

        let inputWrapper = document.getElementsByClassName("checkboxStyle");

        for (let i = 0; i < inputWrapper.length; i++){
          if(inputWrapper[i].checked){
            addOnsChecked.push(inputWrapper[i].id);
          }

        }
        mainForm.AddOns = addOnsChecked;
        SetActiveComponent(2);
      }

      const handleLabelClick = (e)=>{
        e.stopPropagation(); // Stop event propagation to prevent triggering the container click event
      }

      return (
        <>
    <div className='w-4/5 h-auto mx-auto my-5'>

      {/* Heading section */}
      <div className='flex flex-col gap-2'>
          <h1 className='heading font-bold text-lg sm:text-3xl'>Pick add-ons</h1>
          <p className='para text-xs sm:text-sm'>Add-ons help enhance your gaming experience</p>
      </div>

      <div className='mt-5 flex flex-col gap-3'>

        {/* CHECKOUT ONE */}
        <div className='w-full flex items-center gap-5 p-3 addonsWrapper' onClick={handleaddOns}>
          <input type="checkbox" id='online' className='w-5 checkboxStyle' name='online'/>
          <label htmlFor="online" className='w-4/5 flex justify-between items-center cursor-pointer' onClick={handleLabelClick}>
            <div>
              <p className='heading text-sm'>Online service</p>
              <p className='text-xs font-light'>Access to Multiplayer games</p>
            </div>
            {planDuration == "mon"?<p className='text-xs font-medium addOnsColor'>+$1/mon</p>:<p className='text-xs font-medium addOnsColor'>+$10/yr</p>}

          </label>
        </div>

         {/* CHECKOUT TWO */}
         <div className='w-full flex items-center gap-5 p-3 addonsWrapper' onClick={handleaddOns}>
          <input type="checkbox" id='storage' className='w-5 checkboxStyle' name='storage'/>
          <label htmlFor="storage" className='w-4/5 flex justify-between items-center cursor-pointer' onClick={handleLabelClick}>
            <div>
              <p className='heading text-sm'>Larger storage</p>
              <p className='text-xs font-light'>Extra 1TB of cloud save</p>
            </div>
            {planDuration == "mon"?<p className='text-xs font-medium addOnsColor'>+$2/mon</p>:<p className='font-medium text-xs addOnsColor'>+$20/yr</p>}

          </label>
        </div>

         {/* CHECKOUT THREE */}
         <div className='w-full flex items-center gap-5 p-3 addonsWrapper' onClick={handleaddOns}>
          <input type="checkbox" id='profile' className='w-5 checkboxStyle'  name='profile'/>
          <label htmlFor="profile" className='w-4/5 flex justify-between items-center cursor-pointer' onClick={handleLabelClick}>
            <div>
              <p className='heading text-sm'>Customizable profile</p>
              <p className='text-xs font-light'>Custom theme on your profile</p>
            </div>
            {planDuration == "mon"?<p className='text-xs font-medium addOnsColor'>+$2/mon</p>:<p className='text-xs font-medium addOnsColor'>+$20/yr</p>}

          </label>
        </div>


      </div>


    </div>

     {/* next step (desktop) */}
     <div className='hidden justify-between sm:flex sm:w-4/5 mx-auto my-10'>
        <button className='text-slate-400' onClick={handleBack}>Go Back</button>
        <button className='nextStep text-xs text-slate-50' onClick={handleNextStep}>Next Step</button>
      </div>

      {/* next step (mobile) */}

    <div className='flex  w-full  justify-between p-5 sm:hidden nextStepWrapper'>
        <button className='text-slate-400' onClick={handleBack}>Go Back</button>
        <button className='nextStep text-xs text-slate-50' onClick={handleNextStep}>Next Step</button>
    </div>


      </>

      )
    }
  
    const SummaryComponent = ()=>{

      let plan_info = {};
      let plan_available = false;
      let totalCost = 0;
      let addOnsCost = 0;

      

      
      if (mainForm.PlanInfo != null){
        plan_available = true;
        plan_info = mainForm.PlanInfo;
        totalCost = parseInt(mainForm.PlanInfo.price);
        // adding the addOns price selected with the total cost of the plan oprion selected by the user
        addOnsChecked.forEach(add_on_selected =>{
          addOnsOptions.forEach(obj=>{
            // obj -> {online:{mon:1,yr:10}}
            let add_on_name = Object.keys(obj)[0];
            if(add_on_selected == add_on_name){
              // getting mon and yr keys 
              let [val1, val2] = Object.keys(obj[`${add_on_selected}`]) 
              if (val1 == planDuration){
                totalCost = totalCost + parseInt(obj[`${add_on_selected}`][val1])
              } else{
                totalCost = totalCost + parseInt(obj[`${add_on_selected}`][val2])

              }
            }

          })
        })
        // End of Main forEach loop
      }

      const handleback = ()=>{
        SetActiveComponent(3);
      }

      const handleChange = ()=>{
        SetActiveComponent(2);
      }

      const handleConfirm = ()=>{
        SetActiveComponent(5);
      }

      // const getPlanInfo = ()=>{
        
      // }
      return(
        <>

        <div className='w-4/5 h-auto mx-auto my-5'>

          {/* Heading section */}
          <div className='flex flex-col gap-2'>
              <h1 className='heading font-bold text-lg sm:text-3xl'>Finishing up.</h1>
              <p className='para text-xs sm:text-sm'>Double-check everything looks OK before confirming.</p>
          </div>

          <div className='rounded-md py-4 px-6 mt-4' id='summaryInfo'>

                {plan_available == false ? (
                    <div className=' flex justify-center items-center m-10 heading uppercase sm:h-44'>
                      No plan options selected!
                    </div>
                  ) : (

                    <div>
                    <div className='flex justify-between items-center text-sm '>
                      <div className='flex flex-col'>
                        <p className='heading capitalize flex gap-1'>
                          {mainForm.PlanInfo.plan} ({planDuration === "mon" ? <span>Monthly</span> : <span>Yearly</span>})
                        </p>
                        <p className='underline para cursor-pointer' onClick={handleChange}>Change</p>
                      </div>

                      <div className='heading'>
                        ${mainForm.PlanInfo.price}/{planDuration}
                      </div>
                    </div>

                    <hr className='border border-gray-900 my-4' />
                    
                    
                    {plan_available == false?<></>:(
                      addOnsChecked.map((add_on_selected)=>{
                                               
                        return(
                          addOnsOptions.map((addOn)=>{
                            // addOn -> {online:{mon:1,yr:10}}
                            let addOn_name = Object.keys(addOn)[0]
                            //addOn_name -> online
                            if (addOn_name == add_on_selected){
                              let input_name = "";
                              if (addOn_name == "online"){
                                input_name = "Online service";
  
                              }
                              if (addOn_name == "storage"){
                                input_name = "Larger storage";
  
                              }
                              if(addOn_name == "profile"){
                                input_name = "Customizable profile";
                                
                              }
                              // val1 = "mon" , val2 = "yr"
                              let [val1, val2] = Object.keys(addOn[`${addOn_name}`])
                              
                              
                              if (val1 == planDuration){
                                console.log("In here");
                                return(
                                  <div className='flex justify-between'>
                                    <p>{input_name}</p>
                                    <p>+${addOn[`${addOn_name}`][val1]}/{planDuration}</p>
                                  </div>
                                )
  
                              }
                              else{
                                return(
                                  <div className='flex justify-between'>
                                    <p>{input_name}</p>
                                    <p>+${addOn[`${addOn_name}`][val2]}/{planDuration}</p>
                                  </div>
                                )
  
                              }
                              console.log("retrived !!!")
  
                            }
                            return null;
                            
  
                          })

                        )

                        

                        
                        

                      })                                        
                    )}                      



                    </div>

                    
                )}         
          </div>

          {/* Below if the total cost */}

          {plan_available == false?<></>:(
            <div className='flex justify-between items-center'>
              <div>
                {planDuration == "mon"?<p>Total (per month) </p>:<p>Total (per year)</p>}
              </div>
              <div className='heading font-bold text-xl'>
                <span>+${totalCost}/{planDuration}</span>
              </div>

            </div>
          )}


           {/* next step (desktop) */}


           {plan_available == false?<></>:(
            <div className='hidden justify-between sm:flex mx-auto my-10'>
            <button className='text-slate-400' onClick={handleback}>Go Back</button>
            <button className='nextStep text-xs text-slate-50' onClick={handleConfirm} >Confirm</button>
          </div>    
          )}


            {/* next step (mobile) */}

   
          {plan_available == false?<></>:(
            <div className='fixed w-full bottom-0 left-0'>
              <div className='flex  w-full  justify-between p-5 sm:hidden nextStepWrapper'>
             <button className='text-slate-400' onClick={handleback} >Go Back</button>
             <button className='nextStep text-xs text-slate-50' onClick={handleConfirm}>Confirm</button>
             </div>


            </div>
             

      
          )}
     
     

          







        </div>

        </>
      );





     
    }

  const FinalComponent = ()=>{
     
    return(

      <div className='w-4/5 h-auto mx-auto my-5 flex flex-col justify-center items-center gap-7'>
        <div>
          <img src={thankYou} alt="Thank you"/>
        </div>

        <h1>Thank you!</h1>

        <p className='max-w-96 text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@remixgaming.com </p>

      </div>

    )
  }

  /* FUNCTIONAL COMPONENTS STORAGE */

  let functionalComponents = [
    {
      componentNumber:1,
      component: <PersonalInfo/>
    },
    {
      componentNumber:2,
      component: <Plan/>
    },
    {
      componentNumber:3,
      component: <AddOnsComponent/>
    },
    {
      componentNumber:4,
      component: <SummaryComponent/>
    }
    ,
    {
      componentNumber:5,
      component: <FinalComponent/>

    }
  ]

  const activate = (pos)=>{
    SetActiveComponent(++pos);
  }

  const handleActive = (pos) =>{
    let listItemsObj = document.getElementsByClassName('number');
    
    let count = 0;
    for (count; count < listItemsObj.length; count+=1){
      listItemsObj[count].classList.remove("active");
    }
    listItemsObj[pos].classList.add("active");
    activate(pos);

  }

  return (

    <main className='w-full h-screen flex flex-col sm:max-w-3xl sm:mx-auto sm:my-4 sm:rounded-lg sm:h-3/4  sm:p-2 sm:flex-row bg-slate-50 sm:items-stretch'>

      {/* Navigation section */}

          <nav className='w-full h-28  flex p-8  bg-no-repeat bg-cover justify-center gap-3 sm:w-1/4 sm:h-full sm:justify-start sm:flex-col sm:p-2 sm:pt-5 sm:gap-4 sm:rounded-lg' id="nav">

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
    

      <section className='w-full h-full sm:w-3/4 sm:h-auto'>
        {functionalComponents.map((componentWrapper) => {
          if (componentWrapper.componentNumber === activeComponent) {
            return componentWrapper.component; // Return the component
          }
          return null; // Return null for components that should not be rendered
        })}
     </section>

      




    </main>
  )
}

export default App
