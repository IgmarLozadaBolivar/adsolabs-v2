import styles from '@styles/ListItem.module.css';
import PropTypes from "prop-types";

function ListItem({ children, isActive = false }) {
    return (
        <li className = { isActive ? styles.navItemActive : styles.navItem } >
            { children }
        </li>
    )
}

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
}

ListItem.defaultProps = {
    children: null,
    isActive: false,
}

export default ListItem;