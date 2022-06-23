import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliry/Auxiliry';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component {
    componentDidUpdate(){
        console.log('[OrderSummery: Did Update]')
    }
    
    render(){
        const ingredientSummery = Object.keys(this.props.ingredients).map(
            igKey =>
                {return <li key={igKey}><span style={{textTransform: 'capitalize'}}>
                    {igKey}</span>: {this.props.ingredients[igKey]}</li>}
            )
        return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delecious burger with the following ingredients: </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>
                <strong>
                    Total price: {this.props.price.toFixed(2)}$ 
                </strong>
            </p>
            <p>Continue to checkout?</p>
            <Button 
                btnType='Danger' 
                clicked={this.props.purchaseCanceled}>
                    CANCEL
            </Button>
            <Button 
                btnType='Success' 
                clicked={this.props.purchaseContineud}>
                    CONTINUE
            </Button>
    </Aux>
        )
    }
}

export default OrderSummery;