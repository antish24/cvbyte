import React, { useRef } from 'react';
import { Button } from 'antd';
import ReactToPrint from 'react-to-print';
import PrintableTemplate2 from './components/cv/PrintableTemplate2';
import Template2 from './components/cv/Template2';
import style from './App.module.css'
const App = () => {
  const componentRef = useRef(null);

  return (
    <div className={style.cont} style={{ width: '100vw', height: '100vh', display: 'flex',flexWrap:'wrap' }}>
      <div className={style.form} style={{background:'red'}}></div>
      <div className={style.review} style={{background: '#F0F3FF', display: 'flex', alignItems: 'center',gap:'20px', flexDirection: 'column' }}>
        <div className={style.templateboxbtn} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <ReactToPrint
            trigger={() => <Button style={{ fontWeight: 'bold', background: 'rgb(0,140,255)', color: 'white', height: '40px' }}>Download PDF</Button>}
            content={() => componentRef.current}
          />
        </div>
        <div style={{display:'none', width: '450px', height: '634.5px', background: 'white', borderRadius: '5px', overflow: 'scroll' }}>
          <PrintableTemplate2 ref={componentRef} />
        </div>
        <div className={style.templatebox} style={{background:"white",borderRadius:'5px',overflow:'scroll'}}>
          <Template2/>
        </div>
      </div>
    </div>
  );
};

export default App;



// import { Button, Pagination } from 'antd'
// import React from 'react'
// import { FaSave } from 'react-icons/fa'
// import Template2 from './components/cv/Template2'

// const App = () => {
//   return (
//     <div style={{width:'100vw',height:'100vh',display:'flex'}}>
//       <div style={{width:'50%',overflow:"scroll",minHeight:'100%'}}></div>
//       <div style={{width:'50%',height:'100%',background:'#F0F3FF',display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
//         <div style={{width:'450px',display:'flex',justifyContent:"flex-end",marginTop:'10px'}}><Button style={{fontWeight:"bold",background:"rgb(0,140,255)",color:'white',height:'40px'}}>Download PDF</Button></div>
//         <div style={{width:'450px',height:'634.5px',background:"white",borderRadius:'5px',overflow:'scroll'}}>
//           <Template2/>
//         </div>
//         <div style={{width:'450px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',position:'relative'}}><span style={{position:"absolute",left:'0'}}><FaSave/> Saved</span><Pagination/></div>
//       </div>
//     </div>
//   )
// }

// export default App
