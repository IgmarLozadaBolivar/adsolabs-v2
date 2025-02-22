import styles from '@styles/Heading.module.css';
import PropTypes from "prop-types";

function Heading({ level, text }) {
    const Tag = `h${level}`;
    return <Tag className={`${styles.heading}`}> { text } </Tag>;
}

Heading.propTypes = {
    level: PropTypes.bigint,
    text: PropTypes.string,
}

Heading.defaultProps = {
    int: 1,
    string: "",
}

export default Heading;