var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps - setting default values for properties');
    },

    getInitialState: function() {
        console.log('getInitialState setting initial state of component');
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('componentWillMount - component is ready to be rendered');
    },

    componentDidMount: function() {
        console.log('componentDidMount - component was rendered');
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps - properties will be changed');
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate - checking if render is needed');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate - preparing component to be rerendered');
    },

    componentDidUpdate : function() {
        console.log('componentDidUpdate - component was rerendered');
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount - component will be removed');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter + ' ',
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-')
            )
        );
    }
});

var counter1 = React.createElement(Counter);
var counter2 = React.createElement(Counter);
var counter3 = React.createElement(Counter);

ReactDOM.render(counter1, document.getElementById('counter1'));
ReactDOM.render(counter2, document.getElementById('counter2'));
ReactDOM.render(counter3, document.getElementById('counter3'));