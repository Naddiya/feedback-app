import PropTypes from 'prop-types';

export const Card = ({ children, reverse }) => {
    return (
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>
        <div
            className="card"
            style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff',
                color: reverse ? '#fff' : 'rgba(0,0,0,0,4)'
            }}>
            {children}
        </div>
    );
};


Card.defaultProps = {
    reverse: false,
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    resverse: PropTypes.bool

};

export default Card;