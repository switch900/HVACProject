import { Switch, Route, Link } from "react-router-dom";
//import Home from "./Home";
//import RockPaperScissorsGame from "./RockPaperScissorsGame";
//import ShoppingList from "./ShoppingList";
//import CountriesList from "./CountriesList";
//import BookList from "./BookList";
import NotFound from "./NotFound";

function NavBar() {
    return (
        <div>
            <nav>
                <div id="menu-outer">
                    <div className="table">
                {/*        <ul id="horizontal-list">*/}
                {/*            <li>*/}
                {/*                <Link to="/" className="mainNavLink">*/}
                {/*                    Home*/}
                {/*</Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/RockPaperScissorsGame" className="mainNavLink">*/}
                {/*                    Rock Paper Scissors Game*/}
                {/*</Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/countriesList" className="mainNavLink">*/}
                {/*                    Countries List*/}
                {/*</Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/shoppingList" className="mainNavLink">*/}
                {/*                    Shopping List*/}
                {/*</Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/bookList" className="mainNavLink">*/}
                {/*                    Book List*/}
                {/*</Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                    </div>
                </div>
            </nav>

            <Switch>
                <Route
                    path="/rockPaperScissorsGame"
                    component={RockPaperScissorsGame}
                />
                <Route path="/countriesList" component={CountriesList} />
                <Route path="/shoppingList" component={ShoppingList} />
                <Route path="/bookList" component={BookList} />
                <Route path="/" component={Home} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
export default NavBar;