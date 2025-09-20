import './GlobalStyle.scss';
import '~/assets/css/grid.css';

interface GlobalStylesProps {
    children: React.ReactElement;
}

function GlobalStyles({ children }: GlobalStylesProps) {
    return children;
}

export default GlobalStyles;
