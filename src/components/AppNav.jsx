import { NavLink } from "react-router-dom"
import logo from "../assets/frieza.png"
import { setBudgetMode } from "../contexts/BudgetContext"
import { useTheme } from "../contexts/ThemeContext"


export default function AppNav() {

    const { budget , setBudget } = setBudgetMode();
    const { mode, setMode } = useTheme();

    function toggleTheme() {
        setMode(prev => (prev === "light") ? ("dark") : ("light"))
    }   

    function toggleBudget() {
        setBudget(prev => (prev != null) ? (null) : (30))
    }
    return (
        <nav className={`container d-flex justify-content-between align-items-center ${mode === "light" ?  ("") : ("dark-mode")} `}>
            <img src={logo} className="logo" alt="prova" />
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/about-us">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
            <div className="">
            <button className={(budget != null) ? ( "active") : (null)} onClick={() => toggleBudget()}>Budget mode</button>
            {budget ? ( <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    defaultValue={30}
                    placeholder="Max price (default 30)"
                onChange={(e) => { e.target.value === "" ? setBudget(null) : setBudget(e.target.value) }}
                />  
            </div>
            ) : ""
            }
            </div>
            <p onClick={() => {toggleTheme()}}> 
                { (mode === "light") ? "dark" : "light"} mode
                <br />
                <i 
                className={ (mode === "light") ? "bi bi-lightbulb-fill" : "bi bi-lightbulb" }>
                    </i> 
                    </p>
            
        </nav>
            
                       
            
    )
}