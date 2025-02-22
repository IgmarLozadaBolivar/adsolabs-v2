import PropTypes from "prop-types";
import styles from '@styles/Button.module.css';

function Button({ text, variant }) {
    return (
        <button className={`${styles.button} ${styles[variant] || ""}`}>
            { text }
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
}

Button.defaultProps = {
    text: "",
    variant: "",
}

export default Button;