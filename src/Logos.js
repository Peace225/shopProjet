import classes from "./Logo.module.css";
import logo from "./image/Shop.png";

const Logo = () => {
    return(
        <div className={classes.logo} >
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo