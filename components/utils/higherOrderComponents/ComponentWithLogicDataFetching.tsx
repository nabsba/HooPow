import { ErrorComponent, Loading } from "../../tree/molecules";
// eslint-disable-next-line react/display-name
const ComponentWithLogicDataFetching = (Component: any) => (({ isErrorServer, isLoading, ...props }: any) => {
    if (isErrorServer) return <div data-testid="testID-error"> <ErrorComponent /></div>
    if (!isLoading) return <Component data-testid="testID-component" {...props} />
    return <div data-testid="testID-loading"> <Loading /></div>
})




export default ComponentWithLogicDataFetching

