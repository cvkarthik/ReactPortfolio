import react from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import homeanime from './../../assets/home_anime.gif'
import Modal from "../Modal/Modal";

class Home extends Component{
    state = {showModal:false};
    componentDidMount=()=>{//lifecycle method that runs everytime when home is loaded
        setTimeout(() =>{
                this.setState({showModal:true})
        },2000)
    }
    closeModal = () =>{
        this.setState({showModal:false});
    }
    render(){
        return(
            <div className = 'home-container'>
                {this.state.showModal&& <Modal closeModal = {this.closeModal}/>}
                <div className='header-text'>
                    <h1>Welcome to my portfolio!!</h1>
                    <p>Hello, I am Karthik</p>
                </div>
                <div className = 'head-btns'>
                    <Link to='/about' className = 'btn btn-white'>
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to='/contact' className = 'btn btn-transparent'>
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className = 'splash-image'>
                    <img src= {homeanime} alt='Animation' className = 'home-anime'></img>
                </div>
            </div>
        );
    }
}

export default Home;