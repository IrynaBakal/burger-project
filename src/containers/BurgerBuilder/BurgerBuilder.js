import React, {Component} from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div><Burger /></div>
                <div>Builder Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;