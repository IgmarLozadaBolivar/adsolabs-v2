import PropTypes from 'prop-types';
import styles from '@styles/Anchor.module.css';

function Anchor({ href, text }) {
    return (
        <>
            <a href = { href } className = { styles.anchor } >
                { text }
            </a>
        </>
    )
}

Anchor.propTypes = {
    text: PropTypes.string,
}

Anchor.defaultProps = {
    text: '',
}

export default Anchor;