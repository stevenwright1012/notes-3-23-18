import React, {Component} from 'react';


 class Item extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.save}>Add Item</button>
            </div>
        )
    }
}

export default Item;