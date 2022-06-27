import { useState, createContext, useEffect } from 'react';
import { SIZE_XD_DEFAULT } from '../../../services/style/constant';
type TViewPort = { width: number, height: number };
interface ViewPortContextInterface {
    viewPort: TViewPort
    handleViewPortInformations: (value: any) => any;
}

export const ViewPortChildContext = createContext<ViewPortContextInterface>({
    viewPort:
        { width: 0, height: 0 },
    handleViewPortInformations: (value: TViewPort) => value
})

const ViewPortParentContext = () => {
    const [viewPort, setViewPort] = useState<TViewPort>({ width: 0, height: 0 });

    useEffect(() => {
        setViewPort({
            width: (window.innerHeight > SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT ? SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT : window.innerHeight) * (SIZE_XD_DEFAULT.WINDOW_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT),
            height: window.innerHeight
        })
    }, [])
    useEffect(() => {

        const handleResize = () => {
            setViewPort({
                width: (window.innerHeight > SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT ? SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT : window.innerHeight) * (SIZE_XD_DEFAULT.WINDOW_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT),
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
    }, [])

    const handleViewPortInformations = (value: TViewPort) =>
        setViewPort(value);
    return { handleViewPortInformations, viewPort };
};
export default ViewPortParentContext

// width: (window.innerHeight > SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT ? SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT : window.innerHeight) * (SIZE_XD_DEFAULT.WINDOW_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_HEIGHT),
// height: window.innerHeight