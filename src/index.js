import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// Avatar Component
function Avatar() {
  return (
    <img 
      src='https://www.gravatar.com/avatar/nothing'
      className='avatar'
      alt='Avatar' />
  );
}
// Message Component
function Message() {
  return (
    <div className='message'>
      This is less than 150 characters.
    </div>
  );
}
// Author Component
function Author() {
  return (
    <span className='author'>
      <span className='name'>Muhammad Asif</span>
      <span className='handle'>@AsifKhan</span>
    </span>
  );
}
// Show Time Component
const Time = () => (
  <span className='time'>3h ago</span>
);
// Reply Button Component
const ReplyButton = () => (
  <i className='fa fa-reply reply-button' />
);
// Rewteet Button Component
const Retweet = () => (
  <i className='fa fa-retweet retweet-button' />
);
// Like Button Component
const LikeButton = () => (
  <i className='fa fa-heart like-button' /> 
);
// More Options Buttons Component
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
);

function Tweet() {

  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author /> <Time />
        <Message />
        <div className='buttons'>
          <ReplyButton />
          <Retweet />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));