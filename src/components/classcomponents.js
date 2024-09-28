import React from "react";
class Classcomponent extends React.Component{
    constructor(){
        super();
        this.state={"count":0};
        this.handleIncrement=this.handleIncrement.bind(this)
        this.handleDecrement=this.handleDecrement.bind(this)
        }
        handleIncrement(){
            this.setState({count:this.state.count+1});
        }
        handleDecrement(){
            this.setState({count:this.state.count-1});

        }
        render(){
            return(
                <div>
                    <h2>im in class components</h2>
                    <h3>props value:{this.props.data}</h3>
                    <h3>state value:{this.state.count}</h3>

                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                </div>
            )
        }

    }
    export default Classcomponent;
