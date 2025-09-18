import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        const Layout = route.layout === undefined ? DefaultLayout : route.layout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout === null ? (
                                        <Fragment>
                                            <Page />
                                        </Fragment>
                                    ) : (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
