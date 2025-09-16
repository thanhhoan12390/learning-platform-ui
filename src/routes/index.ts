import type { RouteInformation } from '~/models';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search/';
import { HeaderOnly } from '~/components/Layout';

// Public routes
const publicRoutes: RouteInformation[] = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// Private routes
const privateRoutes: RouteInformation[] = [];

export { publicRoutes, privateRoutes };
