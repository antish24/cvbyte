import React from 'react'
import pic from '../../asset/image/bg.webp'

const Template2 = ({sideC}) => {
  return (
    <div style={{width:'100%',height:'100%',background:'white',display:'flex'}}>
        <div style={{width:'40%',height:'100%',background:sideC,display:'flex',alignItems:'center',flexDirection:'column',gap:'5px'}}>
            <img style={{width:'90px',height:'90px',borderRadius:'50%',background:'white',marginTop:'20px'}} src={pic} alt='profile'/>
            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
                <span style={{width:'80%',fontWeight:'bold',borderBottom:'1px solid white',color:'white'}}>Contact</span>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>Phone</span>
                <span style={{fontSize:'8px'}}>0934608749</span>
            </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>Email</span>
                <span style={{fontSize:'8px'}}>aantenehh@gmail.com</span>
            </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>Address</span>
                <span style={{fontSize:'8px'}}>Addis Abeba,Ethiopia</span>
            </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
                <span style={{width:'80%',fontWeight:'bold',borderBottom:'1px solid white',color:'white'}}>Education</span>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
                <span style={{fontSize:'8px'}}>2012 - 2016 E.C</span>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>BSc Computer Science</span>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>Hawassa University</span>
            </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
                <span style={{fontSize:'8px'}}>2014 - 2017 E.C</span>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>BSc Accountant</span>
                <span style={{fontWeight:'bold',fontSize:'8px'}}>Unity University</span>
            </div>
            </div>


            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
                <span style={{width:'80%',fontWeight:'bold',borderBottom:'1px solid white',color:'white'}}>Skill</span>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Web Development</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>App Development</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Graphics Design</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Graphics Design</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Graphics Design</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>UI/UX</span>
            </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
                <span style={{width:'80%',fontWeight:'bold',borderBottom:'1px solid white',color:'white'}}>Language</span>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:"flex-end"}}>
            <div style={{display:'flex',flexDirection:'column',width:'80%',color:"white"}}>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Amahric</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>English</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Geez</span>
               <span style={{fontSize:"9px",display:'flex',alignItems:'center',gap:'2px'}}>Java</span>
            </div>
            </div>

        </div>
        <div style={{width:'60%',minHeight:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
            <div style={{width:'95%',display:'flex',flexDirection:'column',marginTop:'25px'}}>
                <span style={{fontSize:"18px",fontWeight:'bold',color:'#323B4C'}}>Anteneh Ashenafi</span>
                <span style={{fontSize:"8px",textAlign:'justify',color:'#323B4C'}}>Emphasis on computer security and full stack website and mobile app development with graphics designing skill.As a passionate programmer writing clean, organized, and scalable code with attention to security best practices.
                Exceptional communication and problem-solving skills with success working independently and on cross-functional teams.Strong knowledge of computer science fundamentals including data structures, algorithms, and OOP principles. My goal is to Work on challenging and impactful projects that push the boundaries of what's possible in technology.</span>
            </div>

            <div style={{width:'95%',display:'flex',flexDirection:'column',gap:'5px'}}>
                <span style={{fontSize:"18px",fontWeight:'bold',color:'#323B4C',borderBottom:'1px solid #323B4c',marginBottom:'5px'}}>Experience</span>
                <div style={{height:'max-content',width:'100%',display:'flex',gap:'5px'}}>
                    <div style={{display:'flex',flexDirection:'column',height:'100%',alignItems:'center'}}>
                        <div style={{width:'5px',height:'5px',border:'1px solid #323B4c',borderRadius:'50%'}}></div>
                        <div style={{width:'1px',background:'#323B4c',height:'100%'}}></div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span style={{fontSize:'8px'}}>2014 - 2016 E.C</span>
                        <span style={{fontSize:'10px',fontWeight:'bold'}}>Trust Ict Soultion | Addis Abeba</span>
                        <span style={{fontSize:'8px',fontWeight:'bold'}}>Full Stack Web Development Intership</span>
                        <span style={{fontSize:'8px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</span>

                    </div>
                </div>

                <div style={{height:'max-content',width:'100%',display:'flex',gap:'5px'}}>
                    <div style={{display:'flex',flexDirection:'column',height:'100%',alignItems:'center'}}>
                        <div style={{width:'5px',height:'5px',border:'1px solid #323B4c',borderRadius:'50%'}}></div>
                        <div style={{width:'1px',background:'#323B4c',height:'100%'}}></div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span style={{fontSize:'8px'}}>2014 - 2016 E.C</span>
                        <span style={{fontSize:'10px',fontWeight:'bold'}}>Trust Ict Soultion | Addis Abeba</span>
                        <span style={{fontSize:'8px',fontWeight:'bold'}}>Full Stack Web Development Intership</span>
                        <span style={{fontSize:'8px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</span>

                    </div>
                </div>

                <div style={{height:'max-content',width:'100%',display:'flex',gap:'5px'}}>
                    <div style={{display:'flex',flexDirection:'column',height:'100%',alignItems:'center'}}>
                        <div style={{width:'5px',height:'5px',border:'1px solid #323B4c',borderRadius:'50%'}}></div>
                        <div style={{width:'1px',background:'#323B4c',height:'100%'}}></div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span style={{fontSize:'8px'}}>2014 - 2016 E.C</span>
                        <span style={{fontSize:'10px',fontWeight:'bold'}}>Trust Ict Soultion | Addis Abeba</span>
                        <span style={{fontSize:'8px',fontWeight:'bold'}}>Full Stack Web Development Intership</span>
                        <span style={{fontSize:'8px',textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</span>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Template2