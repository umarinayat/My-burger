import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from '../Checkout/ContactData/ContactData';
import * as actions from '../../store/actions/index';


class Checkout extends Component {

    componentWillMount(){
        this.props.onInitPurchase();
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summery = (<Redirect to='/'/>);
        
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to='/'/> : null;
            summery = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummery 
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData}/>
                </div>
            )
        }
        return summery
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: ()=> dispatch(actions.purchaseInit())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);