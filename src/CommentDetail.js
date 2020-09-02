import React from 'react';
import faker from 'faker';

const DetailComment = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">David Anwar</a>
                    <div className="metadata">
                        <span>To day at 6.00 PM</span>
                    </div>
                    <div className="text"> Nice Blog Post!</div>
                </div>
            </div>
    );
}

export default DetailComment;