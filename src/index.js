import React from 'react';
import ReactDOM from 'react-dom';
import DetailComment from './CommentDetail';
//import faker from 'faker';

function App() {
    return (
        <div className="ui container comments">
            <DetailComment/>
            <DetailComment/>
            <DetailComment/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));