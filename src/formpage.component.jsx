import logo from './logo.svg';
import './formpage.css';
import axios from "axios";
import { useState } from 'react';
import Phone from './phone.component';
import close from './close.svg';
import close2 from './close2.svg';
import formurlencoded from "form-urlencoded";
import { Link } from 'react-router-dom';
const FormPage = () => {
    const[high,setHigh] = useState(0);
    const [phoneNo,setPhoneNo] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [site, setSite] = useState("");
    const getPhone =(e)=>{
            setPhoneNo(e);
    }
    const handleBox = (e) =>{
        
        setHigh(e.target.id);
        
        }
    const handleContinue = (e) =>{
        const data = {
            "entry.923575230":name,
            "entry.959771919":address,
            "entry.1470857061":phoneNo,
            "entry.766642417":high,
            "entry.210369612":site
        }
        console.log(data);
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(
        "https://cors-proxy-server123.herokuapp.com/https://docs.google.com/forms/u/1/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse",
        formurlencoded(data)
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return(
            <div className="container">
                <div className="logo">
                    <img src={logo}></img>
                    <div className="logo-title">PolyMatic</div>
                    <div className="sub-title">Redesign Everything</div>
                </div>
                <div className ="form">
                    <Link to="/" ><img className="close" src={high?close2:close} alt="close"></img></Link>
                    <div className="title">
                        Get a Free Demo.<br></br>
                            It’s Completely <span className='free'>Free!</span>
                    </div>
                    <div className="input-fields">
                    <form>
                            <label for="Name" >Name<span className="star">*</span></label>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your Name here"></input>

                            <label for="Address">Address<span className="star">*</span></label>
                            <input type="text"  placeholder="Enter your Address here" onChange={(e) => setAddress(e.target.value)}></input>

                            <label for="Phone">Phone Number<span className="star">*</span></label>
                            <Phone getPhone={getPhone}/>
                            <label for="demo">Select Demo Time<span className="star">*</span></label>
                            <div className="slot">
                                <div className={high==="1 - 2"?'box high':'box'} id="1 - 2" onClick={handleBox}>1-2</div>
                                <div className={high==="3 - 4"?'box high':'box'} id="3 - 4" onClick={handleBox}>3-4</div>
                                <div className={high==="5 - 6"?'box high':'box'} id="5 - 6"onClick={handleBox}>5-6</div>
                                <div className={high==="7 - 8"?'box high':'box'} id="7 - 8" onClick={handleBox}>7-8</div>
                            </div>
                            <label for="ques">Where did you hear about us?</label>
                            <input list="site" onChange={(e) => setSite(e.target.value)} placeholder="Select"></input>
                            <datalist id="site">
                                <option value="Google" />
                                <option value="Facebook" />
                                <option value="Friends & Families" />
                                <option value="Others" />
                            </datalist>
                             <br></br>   
                             <div class="sub-button" onClick={handleContinue}><span class="continue">Continue</span></div>
                    </form>
                    <div className='terms'>By registering here, I agree to PolyMatic’s <span className="cond">Terms & Conditions</span> and<span className="cond"> Privacy Policy</span></div>      
                    </div>
                   
                </div>
            </div>
                  

                       

                


                
    );
}
export default FormPage;