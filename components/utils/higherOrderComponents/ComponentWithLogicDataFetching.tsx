import { ErrorComponent, Loading } from "../../tree/molecules";
// eslint-disable-next-line react/display-name
const ComponentWithLogicDataFetching = (Component: any) => (({ isErrorServer, isLoading, ...props }: any) => {
    if (isErrorServer) return <ErrorComponent />
    if (!isLoading) return <Component {...props} />;
    return <Loading />
})


export default ComponentWithLogicDataFetching

