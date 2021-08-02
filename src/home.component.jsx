import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './home.css';
import Button from "@material-ui/core/Button";
const Home = () => {
    return(
    <div className="centering-div">
        <img src={logo}></img><br></br>
       <Link to='/form'><Button variant="contained" color="primary">Register</Button></Link> 
    </div>
    );
}

export default Home;
