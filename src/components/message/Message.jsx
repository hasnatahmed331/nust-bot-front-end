import PropTypes from 'prop-types';

import './message.css';

function Message({text , user}) {
    return (
        <div className={`message ${user ? 'left' : 'right'}`}>
            <div className={`messagecontent ${user ? 'left' : 'right'}`}>
                <h3>{user ? 'You' : 'Nust Bot'}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}  

Message.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.bool
};

Message.defaultProps = {
    user: false
};

export default Message
  
