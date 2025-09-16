export interface RouteInformation {
    path: string;
    component: () => React.ReactElement;
    layout?: (({ children }: { children: React.ReactElement }) => React.ReactElement) | null;
}
