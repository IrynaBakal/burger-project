import React, {Component} from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
//    constructor(props){
//        super(props);
//        this.state = {...};
//    }
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 2,
            meat: 1
        }
    }

    render () {
        return (
            <Aux>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div>Builder Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;