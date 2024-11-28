import React,{useState} from 'react'
import Searchbar from './Searchbar'
   import Icons from './Icons'
import Product from './Product'
import Navbar from './Navbar'
import Login from './Login'
import Footer from './Footer'
import Signup from './Signup'



const Home = () => {
  const[loginsettter,setloginsetter] =useState(false);
  const [iconsetter,seticonsetter] =useState(['icon']);
  const [signupsetter,setsignupsetter]=useState(false)
 
  return (
    <div className='mx-12 my-2 '>
      <Navbar loginsettter={loginsettter} setloginsetter={setloginsetter}  signupsetter={signupsetter} setsignupsetter={setsignupsetter}/>
      {loginsettter?<Login setloginsetter={setloginsetter}/>:""} {signupsetter?<Signup  setsignupsetter={setsignupsetter}/>:""}
      <Searchbar/>
     <Icons iconsetter={iconsetter} seticonsetter={seticonsetter} />
     <Product iconsetter={iconsetter} />
     <Footer/>
  

    </div>
  )
}

export default Home