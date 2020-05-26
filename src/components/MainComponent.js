import React, { PureComponent } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailcomponent';
import { DISHES } from '../shared/dishes';
import  { COMMENTS }  from '../shared/comments';
import  { PROMOTIONS }  from '../shared/promotions';
import  { LEADERS }  from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
    };
  }

  async onDishSelect(dishId) {
    await this.setState({ selectedDish: dishId});
  }
  componentDidMount() {
    console.log("mounted")
}

renderDish() {
  if (this.state.selectedDish != null)
      return(
      <div>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
       );
  
}

  

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default Main;
//{this.renderDish(this.state.selectedDish)}