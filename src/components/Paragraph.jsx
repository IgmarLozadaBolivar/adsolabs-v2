import styles from '@styles/Paragraph.module.css';
import PropTypes from "prop-types";

function Paragraph( { text } ) {
    return <p className = { styles.paragraph }> { text } </p>;
}

Paragraph.propTypes = {
    text: PropTypes.string,
}

Paragraph.defaultProps = {
    text: "",
}

export default Paragraph;