import Modal from "./component/Modal"
import { useState } from "react";

function App (){
  const [tapModal, setModal] = useState(false)

  const handleModal = ()=>{
    setModal(!tapModal)
  }
  return (
    <div styles={{position:'relative', zIndex:'1'}}>
     
      <button className="hover:bg-slate-400 bg-slate-100 ml-8 p-2 border rounded" onClick={handleModal}>View Document</button>
      
      <Modal tapModal = {tapModal} closeModal = {()=>setModal(false)}>
        
      </Modal>

      
    </div>

  )

}
export default App