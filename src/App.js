import React, { useRef, useState } from 'react';
import { Button, ColorPicker } from 'antd';
import ReactToPrint from 'react-to-print';
import PrintableTemplate2 from './components/cv/PrintableTemplate2';
import Template2 from './components/cv/Template2';
import style from './App.module.css'
import doc from './asset/file/cv template.doc'

const App = () => {
  const componentRef = useRef(null);
  const [sideColor,setSideColor]=useState('black')

  return (
    <div className={style.cont} style={{ width: '100vw', height: '100vh', display: 'flex',flexWrap:'wrap' }}>
      <div className={style.form} style={{background:'gray'}}></div>
      <div className={style.review} style={{background: '#F0F3FF', display: 'flex', alignItems: 'center',gap:'20px', flexDirection: 'column' }}>
        <div className={style.templateboxbtn} style={{ display: 'flex', alignItems:'center',justifyContent: 'flex-end', marginTop: '10px',gap:'10px' }}>
        <ColorPicker
        defaultValue="#1677ff"
        onChange={value=>setSideColor(value.toHexString())}
      />
        <Button style={{ fontWeight: 'bold', color: 'rgb(0,140,255)', background: 'white', height: '40px',display:'flex',alignItems:'center'}}><a href={doc} download>Get Template</a></Button>
          <ReactToPrint
            trigger={() => <Button style={{ fontWeight: 'bold', background: 'rgb(0,140,255)', color: 'white', height: '40px' }}>Download PDF</Button>}
            content={() => componentRef.current}
          />
        </div>
        <div style={{display:'none', width: '450px', height: '634.5px', background: 'white', borderRadius: '5px', overflow: 'scroll' }}>
          <PrintableTemplate2 sideC={sideColor} ref={componentRef} />
        </div>
        <div className={style.templatebox} style={{background:"white",borderRadius:'5px',overflow:'scroll'}}>
          <Template2 sideC={sideColor}/>
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
