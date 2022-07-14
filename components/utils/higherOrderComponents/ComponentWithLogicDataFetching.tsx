const ComponentWithLogicDataFetching = (Component: any) => (({ isErrorServer, isLoading, ...props }: any) => {
    if (isErrorServer) return <h1> Your error server</h1>
    if (!isLoading) return <Component {...props} />;
    return <p> loading</p>
})


export default ComponentWithLogicDataFetching

