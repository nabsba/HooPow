import React, { useState } from 'react';

type TFullScreenContext = {
    doWeDiplayFullScreen: boolean;
};
interface AppContextInterface {
    stateFullScreen: TFullScreenContext;
    handleStateFullScreen: (doWeDiplayFullScreen: TFullScreenContext) => any;
}

export const FullScreenChildContext = React.createContext<AppContextInterface>({
    stateFullScreen: { doWeDiplayFullScreen: false },
    handleStateFullScreen: (doWeDiplayFullScreen: TFullScreenContext) =>
        doWeDiplayFullScreen,
});

const FullScreenParentContext = () => {
    const [stateFullScreen, setStateFullScreen] = useState<TFullScreenContext>({
        doWeDiplayFullScreen: false,
    });

    const handleStateFullScreen = (doWeDiplayFullScreen: TFullScreenContext) =>
        setStateFullScreen(doWeDiplayFullScreen);

    return { handleStateFullScreen, stateFullScreen };
};

export default FullScreenParentContext;
