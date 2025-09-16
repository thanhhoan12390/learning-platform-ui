import Header from './Header';
import Sidebar from './Sidebar';

interface DefaultLayoutProps {
    children: React.ReactElement;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
