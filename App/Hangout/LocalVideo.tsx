import * as React from "react";

export default class LocalVideo extends React.Component {
    myDiv;

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const videoElement = this.myDiv.getElementsByTagName('video')[0];
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {
            videoElement.srcObject = stream;
        }).catch(err => {
            console.warn('Cannot stream', err);
        })
    }


    render() {
        return (
            <div ref={c => this.myDiv = c}>
                <h1>Real time user feed</h1>
                <video autoPlay></video>
            </div>
        )
    }
}