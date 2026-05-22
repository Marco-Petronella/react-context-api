import { NavLink } from "react-router-dom"
import logo from "../assets/frieza.png"
import { setBudgetMode } from "../contexts/BudgetContext"


export default function AppNav() {

    const { Budget , SetBudget } = setBudgetMode();
    function toggleBudget() {
        SetBudget(prev => !prev)
        console.log(Budget)
    }
    return (
        <nav className="container d-flex justify-content-between align-items-center">
            <img src={logo} className="logo" alt="prova" />
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/AboutUs">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
            <button className={Budget ? ( "active") : (null)} onClick={() => toggleBudget()}>Budget mode</button>
            
        </nav>
            
                       
            
    )
}