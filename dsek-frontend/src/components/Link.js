import { Link as RouterLink } from "react-router-dom";

function Link({ children, to, className, style }) {
    if (to === undefined) {
        return (
            <a href="#" className={className} style={style}>
                {children}
            </a>
        );
    }
    
    return to.startsWith("http") ? (
        <a href={to} className={className} style={style}>
            {children}
        </a>
    ) : (
        <RouterLink to={to} className={className} style={style}>
            {children}
        </RouterLink>
    );
}

export default Link;