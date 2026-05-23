import { NavLink } from "react-router-dom"
import logo from "../assets/frieza.png"
import { setBudgetMode } from "../contexts/BudgetContext"


export default function AppNav() {

    const { budget , setBudget } = setBudgetMode();
    function toggleBudget() {
        setBudget(prev => (prev != null) ? (null) : (30))
        console.log(budget)
    }
    return (
        <nav className="container d-flex justify-content-between align-items-center">
            <img src={logo} className="logo" alt="prova" />
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/AboutUs">Chi siamo</NavLink>
            <NavLink to="/products">Prodotti</NavLink>
            <div className="">
            <button className={(budget != null) ? ( "active") : (null)} onClick={() => toggleBudget()}>Budget mode</button>
            {budget ? ( <div class="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    defaultValue={30}
                    placeholder="Max price (default 30)"
                onChange={setBudget ? (e) => setBudget(e.target.value) : null}
                />
            </div>
            ) : ""
            }
            </div>
            
        </nav>
            
                       
            
    )
}