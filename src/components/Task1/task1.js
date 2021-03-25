import react from "react";

class Task1 extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            text : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return (
            <div>
                <h2>Task 1</h2>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <h1>{this.state.text}</h1>

            </div>

        )
    }
}


export default Task1