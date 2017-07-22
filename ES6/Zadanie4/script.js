class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
           running: false,
           times: {
               minutes: 0,
               seconds: 0,
               miliseconds:0
           },
           watch: null,
           results: []
        };
    }

    reset() {
        this.setState({times: {
            minutes: 0,
               seconds: 0,
               miliseconds:0
            }
        });
    }

    format(times) {
        return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
    }

    add() {
        this.setState({results: this.state.results.concat(this.format(this.state.times))});
    }

    removeAll() {
        this.setState({results: []});
    }

    start() {
        if (!this.state.running) {
            this.setState({running: true});
            let interval = setInterval(() => this.step(), 10);
            this.setState({watch: interval});
        }
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
        this.forceUpdate();
    }

    stop() {
        this.setState({running: false});
        clearInterval(this.state.watch);
    } 

    render() {
        return (
            <div>
                <div>
                    
                    <a href="#" className="button" id="start" onClick={() => this.start()}>Start</a>
                    <a href="#" className="button" id="stop" onClick={() => this.stop()}>Stop</a>
                    <a href="#" className="button" id="reset" onClick={() => this.reset()}>Reset</a>
                    <br/><br/>
                    <a href="#" className="button" id="add" onClick={() => this.add()}>Add to list</a>
                    <a href="#" className="button" id="removeAll" onClick={() => this.removeAll()}>Clear list</a>
                    <br/><br/>
                </div>
                <div>
                    <span className="stopwatch">{this.format(this.state.times)}</span>
                </div>
                <div className="results">
                    <ol>{this.state.results.map((result, i) => <li key={i}>{result}</li>)}</ol>
                </div>
            </div>
        )
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<Stopwatch />, document.getElementById('timer'));