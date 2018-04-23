import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Yaaro from './Header/Yaaro';
import LocalVideo from './Hangout/LocalVideo';
import Copyright from './Footer/Copyright';

class App extends React.Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <Yaaro></Yaaro>
                    <LocalVideo></LocalVideo>
                </div>
                <Copyright ></Copyright>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));