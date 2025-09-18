import Header from '~/layouts/components/Header';

interface HeaderOnlyProps {
    children: React.ReactElement;
}

function HeaderOnly({ children }: HeaderOnlyProps) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
