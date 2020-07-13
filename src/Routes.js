import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Account/Login";
import Signup from "./Pages/Account/Signup";
import ProductList from "./Pages/Products/ProductList";
import ProductsDetails from "./Pages/Products/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products-detail" component={ProductsDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/wishlist" component={Wishlist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
