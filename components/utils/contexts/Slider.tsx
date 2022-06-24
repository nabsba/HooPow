import React, { useState, createContext } from 'react';

type TSlide = {
    oldSlide: number;
    activeSlide: number;
};
interface SlideContextInterface {
    contextSlider: TSlide;
    handleSlider: (context: TSlide) => any;
}

export const SlideChildContext = createContext<SlideContextInterface>({
    contextSlider: { oldSlide: 0, activeSlide: 0 },
    handleSlider: (context: TSlide) => context,
})
const SlideParentContext = () => {
    const [contextSlider, setContextSlider] = useState<TSlide>({
        oldSlide: 0,
        activeSlide: 0,
    });
    const handleSlider = (context: TSlide) => setContextSlider(context);

    return { handleSlider, contextSlider };
};
export default SlideParentContext