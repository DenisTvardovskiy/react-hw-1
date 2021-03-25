import A from "./A";
import React from "react";

class Task2 extends React.Component{
    state = {
        randomCount : null,
    };
    getRanCount = num =>{
        this.setState({randomCount:num})
    };
    render() {
        const {randomCount} = this.state;

        return(
            <div>
                <h1>Task 2</h1>
                <p>
                    {randomCount
                        ? `Число: ${randomCount}`
                        : `Натисніть на кнопку для нового числа`
                    }
                </p>
                <A count={randomCount} onGetNum={this.getRanCount} />
            </div>
        )
    }
}

export default Task2