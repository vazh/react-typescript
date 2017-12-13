import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{
    message: string
}, {
    count: number
}> {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                {this.props.message} 
                {this.state.count}
            </div>
        );
    }
}

ReactDOM.render(
    <App message="Hello again" />,
    document.getElementById('root')
)