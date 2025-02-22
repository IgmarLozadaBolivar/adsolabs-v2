import styles from '@styles/NavItem.module.css';
import PropTypes from "prop-types";

function NavItem({ children }) {
    return (
        <ul className = { styles.navItems } >
            { children }
        </ul>
    )
}

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
}

NavItem.defaultProps = {
    children: null,
}

export default NavItem;