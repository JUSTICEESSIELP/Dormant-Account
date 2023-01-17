// import ReactDom from 'react-dom'
// import React from "react";
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import useKeypress from 'react-use-keypress';
import api from '../helpers/axiosHelper' 
import {BiPowerOff} from "react-icons/bi";
import {BiHelpCircle} from 'react-icons/bi';
import {BiCheck} from 'react-icons/bi'
import {TiDeleteOutline} from 'react-icons/ti'
import {VscNewFile} from 'react-icons/vsc'
import {TbEye} from 'react-icons/tb'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineApproval} from 'react-icons/md'
import {BiError} from 'react-icons/bi'

    
    // <React.Fragment>
    //     <div styles={OVERLAY_STYLES}/>
    //     <div className="App" styles={MODAL_STYLES}>

    //     {/* dormant acc reactive  */}
    //     <div className ='container mx-auto '>
    //         <div className="  w-100 p-5 h- border-slate-200">
    //         <img src = '' href =''/>
    //         <h4 className="bg-blue-400 mx-3 " style={{color:'white'}}>Dormant Acct reactive</h4>
    //         </div>
            
    //         <div className="w-100 flex mx-auto px-8">
    //         <div className="container space-x-5  border-b-8 border-blue-400 w-  flex justify-evenly" >
    //             <div></div>
    //             <div className='flex space-x-12 mb-2'>
    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <VscNewFile/>
    //                 <button>New</button>
    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
                    
    //                 <AiOutlineDelete/>
    //             <button>Delete </button>
    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <MdOutlineApproval/>
    //                 <button>Authorize</button>

    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <TbEye/>
    //             <button>View</button>

    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <BiCheck/>
    //                 <button>Ok</button>

    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center"> 
    //                 <TiDeleteOutline/>
    //                 <button>Cancel</button>
    //             </div>
                
    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <BiError/>
    //                 <button>Reject</button>
    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <BiHelpCircle/>
    //                 <button>Help</button>
    //             </div>

    //             <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //                 <BiPowerOff/>
    //                 <button>Exit</button>
    //             </div>

    //             </div>
    //             {/* <a className="relative bg-slate-200 group rounded px-5 py-2.5 h-20">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">New</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Delete</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Authorize</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">View</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Ok</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Cancel</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Reject</span>
    //             </a>

    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Help</span>
    //             </a>
    //             <a className="relative bg-slate-200 group rounded px-5 py-2.5">
    //             <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
    //             <img src ='' href='' alt=''/>
    //             <span className="relative">Exit</span>
    //             </a> */}
    //             <div></div>



    //         </div>
    //         </div>


    // {/* main body */}
    //         <section className="flex container:sm">


    //         <div className="w-[70%]">
    //         <div className='border flex-col space-y-4 mt-3 p-6'>
            
    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'><label>Account No</label></div>
    //                 <div className='w-[80%]'><input type ='text'/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[20%]'>A/C Name</div>
    //                 <div className='w-[80%] '><input  style={{backgroundColor:'silver', border:'1px solid white'}}type ='text' className="w-[80%] bg-silver-200"/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>Currency</div>
    //                 <div className='w-[80%]'><input style={{backgroundColor:'silver', border:'1px solid white'}} type ='text' className="w-[50%]"/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>Product</div>
    //                 <div className='w-[80%]'><input  style={{backgroundColor:'silver' ,border:'1px solid white'}}type ='text' className="w-[80%] bg-silver-200"/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>Branch</div>
    //                 <div className='w-[80%]'><input className='w-[50%]'type ='text' style={{backgroundColor:'silver'}}/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>A/C Status</div>
    //                 <div className='w-[80%]'><input className="w-[50%]" style={{backgroundColor:'silver' , border:'1px solid white'}}type ='text'/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Date Opened</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>Reason</div>
    //                 <div className='w-[80%]'><input type ='text' className="w-[80%] border-slate-100"/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[20%] mx-3'>Document no</div>
    //                 <div className='w-[80%]'><input type ='text'/>
    //                 <button className="hover:bg-slate-400 bg-slate-100 ml-8 p-2 border rounded">View Document</button>
    //                 </div>
                    
    //             </div>

    
    //             </div>
    //         </div>
                
            
                
                
                    
                    
                    


                    
                    
                    
                    
                    
                    
                

                
            

            

    //         <div className='w-[30%] bg-slate-200 my-4 ' style={{marginRight:'30px'}}>

    //             <div className='border flex-col space-y-4 mt-3 p-6'>
    //             <h1 className="text-center">Balance</h1> 
    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Cust Status :</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[45%] '>Accrued Int :</div>
    //                 <div className='w-[55%] '><input type ='text'/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Accrued OD Amt :</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>COT Amt :</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>
    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Accrued Fees :</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Curretn Bal:</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>

    //             <div className='flex'>
    //                 <div className='w-[40%] mx-3'>Net Bal :</div>
    //                 <div className='w-[60%]'><input type ='text'/></div>
    //             </div>
    //             </div>


    //         </div>

            
            

    //         </section>


    //         {/* table sesssion */}
    //         <div className='p-13 overflow-auto rounded-lg shadow'>
    //         <h1 className="text-center bg-blue-400 p-1 text-white">Account Reactivation - Charge Details </h1>
    //         <table className="w-full">
    //             <thead className="border-gray-200 hover:bg-gray-300 bg-gray-50 border-b-2">
    //             <tr className="bg-gray-50">
    //                 <th className=' w-[10%] p-3 text-sm font-semibold tracking-wide text-left'>Chg.Code</th>
    //                 <th className='w-[15%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Account</th>
    //                 <th className='w-[25%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Account Description</th>
    //                 <th className='w-[25%] p-3 text-sm font-semibold tracking-wide text-left'>Fees Description</th>
    //                 <th className='w-[15%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Amount Per Book</th>
    //                 <th className='w-[5%] p-3 text-sm font-semibold tracking-wide text-left'>Currency</th>
    //                 <th></th>
    //             </tr>
    //             </thead>
    //             <tbody className='divide-y divide-gray-200'>
    //             <tr className="bg-white">
    //                 <td  className="p-3 text-sm text-gray-700">101</td>
    //                 <td  className="p-3 text-sm text-gray-700">Sole</td>
    //                 <td className="p-3 text-sm text-gray-700">Payment of Salaries </td>
    //                 <td className="p-3 text-sm text-gray-700">United States</td>
    //                 <td className="p-3 text-sm text-gray-700">201</td>
    //                 <td className="p-3 text-sm text-gray-700">USD</td>

    //             </tr>

    //             <tr className='bg-gray-50'>
    //                 <td className="p-3 text-sm text-gray-700">102</td>
    //                 <td className="p-3 text-sm text-gray-700">Joint</td>
    //                 <td className="p-3 text-sm text-gray-700">StartUp Founding Account</td>
    //                 <td className="p-3 text-sm text-gray-700">Ghana</td>
    //                 <td className='p-3 text-sm text-gray-700'>700</td>
    //                 <td className='p-3 text-sm text-gray-700'>GHS</td>
    //             </tr>

    //             <tr className="bg-white">
    //                 <td className='p-3 text-sm text-gray-700'>103</td>
    //                 <td className='p-3 text-sm text-gray-700'>Current</td>
    //                 <td className='p-3 text-sm text-gray-700'>Mark Cuban and Company</td>
    //                 <td className='p-3 text-sm text-gray-700'>Euros</td>
    //                 <td className='p-3 text-sm text-gray-700'>500</td>
    //                 <td className='p-3 text-sm text-gray-700'>EUR</td>

    //             </tr>

    //             <tr className="bg-gray-50">
    //                 <td className="p-3 text-sm text-gray-700">104</td>
    //                 <td className="p-3 text-sm text-gray-700">Savings</td>
    //                 <td className="p-3 text-sm text-gray-700">Bob Marley</td>
    //                 <td className="p-3 text-sm text-gray-700">Great Britain</td>
    //                 <td className="p-3 text-sm text-gray-700">600</td>
    //                 <td className="p-3 text-sm text-gray-700">GBP</td>

    //             </tr>

    //             </tbody>
    //         </table>

    //         </div>



    //         {/* footer */}
    //         <div>
    //         <h3 className="bg-blue-400 text-sm text-white">All Mandatory field labels are displayed in blue</h3>

    //         </div>
    //     </div>




        
    //     </div>
    // </React.Fragment>, document.getElementById('portal')


// export default Modal;
import React from 'react'
import ReactDom from 'react-dom'
import '../index.css'



const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',

  zIndex: 1000,
  width:'1500px', 
  height:'850px', 
//   overflowY:'scroll',
  boxShadow:'rgba(0,0,0,.35) 0px 5px 15px',
  padding:'25px',
  borderRadius:'1%', 
  display:'flex', 
  flexDirection:'column',
//   flexWrap:'nowrap',
  overflow:'auto'
//   overflow:'auto'

}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
  display:'flex', 
  flexDirection:'row', 
  justifyContent:'center', 
  alignItem:'center',
  flexWrap:'wrap',
  
 
}

export default function Modal({ tapModal, closeModal}) {
    const [getData , setData] = useState([]);
    const inputAccountNumber = useRef()
    // console.log(inputAccountNumber.current.value)?
   
        // useKeypress('Enter', (e) => {
        //     if (e.key === 'Enter') {
        //       fetchData();
        //       inputAccountNumber.current.value = ''
        //     }
        //   });
        const handleKeyPress = (e)=>{
            if(e.key == 'Enter'){
                fetchData()
                // inputAccountNumber.current.value = ''
            }

        }
    

    
        const fetchData = async ()=>{
            try{
                let accountNumber = inputAccountNumber.current.value
            
                const response = await api.post('/get-account-details', {accountNumber: accountNumber})
                setData(response.data[0])
                console.log('response',response.data[0])

              
            }catch(err){
                if(err.response){
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
    
                }else{
                    console.log(`Error ${err.message}`)
    
                }
                
    
            }
    
        }
        // console.log('getDAta', getData)
        
        
    

    
    if (!tapModal) return null
 

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={closeModal} />
      <div style={MODAL_STYLES} className= 'modalContainer'>
      
        <header className='titleHeader'>Dormant Account Reactivation</header>
            
      

{/* nav */}
      <div className='flexNav'>
            <div></div>

            <div className="flexNavBorder">
                <VscNewFile/>
                <button>New</button>
            </div>

            <div className="flexNavBorder">
                <AiOutlineDelete/>
                <button>Delete</button>
            </div>

            <div className="flexNavBorder">
                <MdOutlineApproval/>
                <button>Authorize</button>
            </div>

            <div className="flexNavBorder">
                <TbEye/>
                <button>View</button>
            </div>

            <div className="flexNavBorder">
                <BiCheck/>
                <button>Ok</button>
            </div>

            <div className="flexNavBorder">
                <TiDeleteOutline/>
                <button>Cancel</button>
            </div>

            <div className="flexNavBorder">
                <BiError/>
                <button>Reject</button>
            </div>

            <div className="flexNavBorder">
                <BiHelpCircle/>
                <button>Help</button>
            </div>

            <div className="flexNavBorder">
                <BiPowerOff/>
                <button>Exit</button>
            </div>

            <div></div>

      </div>

{/* body */}
<div>
    <form>
        <div class = 'form first '>
            <div class = 'details balance'>
                <span className='formTitle'>Account Details</span>

                <div className= 'fields'>

                    <div className='input-field'>
                        <label>Account Number</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Account Name</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Account Status</label>
                        <input type ='text' />
                        
                    </div>



                    <div className='input-field'>
                        <label>Currency</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Product</label>
                        <input type ='text' />
                        
                    </div>
                    
                    <div className='input-field'>
                        <label>Date Opened</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Branch</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field' style={{"flex":'row'}}>
                        <label>Document No</label>
                        <input type ='text' />
                       
                        
                    </div>

                    <div className='input-field'>
                        <label>Reason</label>
                        <input type ='textarea' />
                        
                    </div>




                </div>
            
            </div>
            
            <div className= 'middle-ground-container'>
                <div className='middle-ground'></div>
            </div>

            <div class = 'details balance'>
                <span className='formTitle'>Balance</span>

                <div className= 'fields'>

                    <div className='input-field'>
                        <label>Customer Status</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Accrued Int</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Accrued OD Amount</label>
                        <input type ='text' />
                        
                    </div>



                    <div className='input-field'>
                        <label>COT Amount</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Accrued Fees</label>
                        <input type ='text' />
                        
                    </div>
                    
                    <div className='input-field'>
                        <label>Current Balance</label>
                        <input type ='text' />
                        
                    </div>

                    <div className='input-field'>
                        <label>Net Balance</label>
                        <input type ='text' />
                        
                    </div>





                </div>
            
            </div>

        </div>
    </form>
</div>



{/* table sesssion */}
     <div style={{flexGrow:'1'}}>
        <h1 className="tableTitle footer">Account Reactivation</h1>
        <table style={{width:'100%', overflowY:'scroll'}}>
            <thead className="tableHead">
                <tr className="">
                    <th>Chg. Code</th>

                    <th>Fee Account</th>
                    <th>Fee Account Description</th>
                    <th>Fees Description</th>
                    <th>Fee Amount Per Book</th>
                    <th>Currency</th>
                    <th>{" "}</th>
                
                </tr>

            </thead>
            <tbody className="overflow">
                <tr className="tableBody bgColorGray" style={{backgroundColor:'#ffff'}}>
                    <td className='text-center tableCell'>101</td>
                    <td className="text-center">Sole</td>
                    <td className="text-center">Payment of Salaries</td>
                    <td className="text-center">United States</td>
                    <td className="text-center">201</td>
                    <td className="text-center">USD</td>
                </tr>
                

                <tr className="tableBody bgColorWhite">
                    <td className="text-center">102</td>
                    <td className="text-center">Joint</td>
                    <td className="text-center">StartUp Funding</td>
                    <td className="text-center">United Kingdom</td>
                    <td className="text-center">202</td>
                    <td className="text-center">GBP</td>
                </tr>
                <tr>
                    <td className="text-center">103</td>
                    <td className="text-center">Current</td>
                    <td className="text-center">Mark Cuban and Corporate</td>
                    <td className="text-center">Germany</td>
                    <td className="text-center">203</td>
                    <td className="text-center">EUR</td>
                </tr>

            </tbody>

        </table>
     </div>
      {/* <div className='p-13 overflow-auto rounded-lg shadow'>
                <h1 className="text-center bg-blue-400 p-1 text-white">Account Reactivation - Charge Details </h1>
                <table className="w-full">
                    <thead className="border-gray-200 hover:bg-gray-300 bg-gray-50 border-b-2">
                //     <tr className="bg-gray-50">
                //         <th className=' w-[10%] p-3 text-sm font-semibold tracking-wide text-left'>Chg.Code</th>
                //         <th className='w-[15%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Account</th>
                //         <th className='w-[25%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Account Description</th>
                //         <th className='w-[25%] p-3 text-sm font-semibold tracking-wide text-left'>Fees Description</th>
                //         <th className='w-[15%] p-3 text-sm font-semibold tracking-wide text-left'>Fee Amount Per Book</th>
                //         <th className='w-[5%] p-3 text-sm font-semibold tracking-wide text-left'>Currency</th>
                //         <th></th>
                //     </tr>
                //     </thead>
                //     <tbody className='divide-y divide-gray-200'>
                //     <tr className="bg-white">
                //         <td  className="p-3 text-sm text-gray-700">101</td>
                //         <td  className="p-3 text-sm text-gray-700">Sole</td>
                //         <td className="p-3 text-sm text-gray-700">Payment of Salaries </td>
                //         <td className="p-3 text-sm text-gray-700">United States</td>
                //         <td className="p-3 text-sm text-gray-700">201</td>
                //         <td className="p-3 text-sm text-gray-700">USD</td>

                //     </tr>

                //     <tr className='bg-gray-50'>
                //         <td className="p-3 text-sm text-gray-700">102</td>
                //         <td className="p-3 text-sm text-gray-700">Joint</td>
                //         <td className="p-3 text-sm text-gray-700">StartUp Founding Account</td>
                //         <td className="p-3 text-sm text-gray-700">Ghana</td>
                //         <td className='p-3 text-sm text-gray-700'>700</td>
                //         <td className='p-3 text-sm text-gray-700'>GHS</td>
                //     </tr>

                //     <tr className="bg-white">
                //         <td className='p-3 text-sm text-gray-700'>103</td>
                //         <td className='p-3 text-sm text-gray-700'>Current</td>
                //         <td className='p-3 text-sm text-gray-700'>Mark Cuban and Company</td>
                //         <td className='p-3 text-sm text-gray-700'>Euros</td>
                //         <td className='p-3 text-sm text-gray-700'>500</td>
                //         <td className='p-3 text-sm text-gray-700'>EUR</td>

                        </tr>

                        <tr className="bg-gray-50">
                        <td className="p-3 text-sm text-gray-700">104</td>
                        <td className="p-3 text-sm text-gray-700">Savings</td>
                        <td className="p-3 text-sm text-gray-700">Bob Marley</td>
                        <td className="p-3 text-sm text-gray-700">Great Britain</td>
                        <td className="p-3 text-sm text-gray-700">600</td>
                        <td className="p-3 text-sm text-gray-700">GBP</td>

                        </tr>

                        </tbody>
                    </table>

            </div> */}



{/* footer */}
        <div className='footer'>
            
            <h1>All Mandatory field labels are displayed in blue</h1>

        </div>
  
        
       
        
      </div>
    </>,
    document.getElementById('portal')
  )
}











{/* <div className=" w-100 p-5 h- border-slate-200">
<img src = '' href =''/>
<h4 className="bg-blue-400 mx-3 " style={{color:'white'}}>Dormant Acct reactive</h4>
</div> */}





// <div className="w-100 flex mx-auto px-8">
// <div className="container space-x-5  border-b-8 border-blue-400 w-  flex justify-evenly" >
//     <div></div>
//     <div className='flex space-x-12 mb-2'>
    // <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
    //     <VscNewFile/>
    //     <button>New</button>
    // </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
        
//         <AiOutlineDelete/>
//     <button>Delete </button>
//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <MdOutlineApproval/>
//         <button>Authorize</button>

//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <TbEye/>
//     <button>View</button>

//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <BiCheck/>
//         <button>Ok</button>

//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center"> 
//         <TiDeleteOutline/>
//         <button>Cancel</button>
//     </div>
    
//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <BiError/>
//         <button>Reject</button>
//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <BiHelpCircle/>
//         <button>Help</button>
//     </div>

//     <div className=" hover:border-slate-100 rounded border p-3 flex flex-col items-center">
//         <BiPowerOff/>
//         <button>Exit</button>
//     </div>

//     </div>
//     {/* <a className="relative bg-slate-200 group rounded px-5 py-2.5 h-20">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">New</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Delete</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Authorize</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">View</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Ok</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Cancel</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Reject</span>
//     </a>

//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Help</span>
//     </a>
//     <a className="relative bg-slate-200 group rounded px-5 py-2.5">
//     <span className=" group-hover:w-full transition-all ease-out duration:300 w-0 absolute h-0.5 left-0 top-0 bg-white"></span>
//     <img src ='' href='' alt=''/>
//     <span className="relative">Exit</span>
//     </a> */}
//     <div></div>



// </div>
// </div>


// {/* main body */}
// <section className="flex container:sm">


// <div className="w-[70%]">
// <div className='border flex-col space-y-4 mt-3 p-6'>

//     <div className='flex'>
//         <div className='w-[20%] mx-3'><label>Account No</label></div>
//         <div className='w-[80%]'><input type ='text'/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[20%]'>A/C Name</div>
//         <div className='w-[80%] '><input  style={{backgroundColor:'silver', border:'1px solid white'}}type ='text' className="w-[80%] bg-silver-200"/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[20%] mx-3'>Currency</div>
//         <div className='w-[80%]'><input style={{backgroundColor:'silver', border:'1px solid white'}} type ='text' className="w-[50%]"/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[20%] mx-3'>Product</div>
//         <div className='w-[80%]'><input  style={{backgroundColor:'silver' ,border:'1px solid white'}}type ='text' className="w-[80%] bg-silver-200"/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[20%] mx-3'>Branch</div>
//         <div className='w-[80%]'><input className='w-[50%]'type ='text' style={{backgroundColor:'silver'}}/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[20%] mx-3'>A/C Status</div>
//         <div className='w-[80%]'><input className="w-[50%]" style={{backgroundColor:'silver' , border:'1px solid white'}}type ='text'/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Date Opened</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[20%] mx-3'>Reason</div>
//         <div className='w-[80%]'><input type ='text' className="w-[80%] border-slate-100"/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[20%] mx-3'>Document no</div>
//         <div className='w-[80%]'><input type ='text'/>
//         <button className="hover:bg-slate-400 bg-slate-100 ml-8 p-2 border rounded">View Document</button>
//         </div>
        
//     </div>


//     </div>
// </div>
    

    
    
        
        
        


        
        
        
        
        
        
    

    




// <div className='w-[30%] bg-slate-200 my-4 ' style={{marginRight:'30px'}}>

//     <div className='border flex-col space-y-4 mt-3 p-6'>
//     <h1 className="text-center">Balance</h1> 
//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Cust Status :</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[45%] '>Accrued Int :</div>
//         <div className='w-[55%] '><input type ='text'/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Accrued OD Amt :</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[40%] mx-3'>COT Amt :</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>
//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Accrued Fees :</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Curretn Bal:</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>

//     <div className='flex'>
//         <div className='w-[40%] mx-3'>Net Bal :</div>
//         <div className='w-[60%]'><input type ='text'/></div>
//     </div>
//     </div>


// </div>




// </section>




// {/* footer */}
// <div>
// <h3 className="bg-blue-400 text-sm text-white">All Mandatory field labels are displayed in blue</h3>

// </div>
// </div>
