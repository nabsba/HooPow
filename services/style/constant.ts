import { TTheme } from "./type";


const THEME: TTheme = {
    COLORS: {
        PRIMARY: '#51AABC',
        SECONDARY: '#363636'

    },
    TEXT: {
        PRIMARY: 'white',
        SECONDARY: '#000000'
    },
}

const SIZE_XD_DEFAULT = {
    MAIN_SIDE_FRAME_WIDTH: 1821,
    RIGHT_SIDE_FRAME_WIDTH: 1425,
    LEFT_SIDE_FRAME_WIDTH: 1821 - 1425,
    BURGER: {
        WIDTH: 67,
        HEIGHT: 69
    },
    BORDER_RADIUS_15: 15,
    SPAN_BURGER_WRAPPER: {
        HEIGHT: 25.54,
        WIDTH: 36.14
    },
    SPAN_BURGER: {
        HEIGHT: 3.65,
        WIDTH: 36.14
    }
};

const SIZE_ELEMENTS_ACTUAL_VIEW_PORT = {
    RIGHT_SIDE_FRAME: (actualViewPortWidth: number) => (SIZE_XD_DEFAULT.RIGHT_SIDE_FRAME_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    LEFT_SIDE_FRAME: (actualViewPortWidth: number) => (SIZE_XD_DEFAULT.LEFT_SIDE_FRAME_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    MAIN_SIDE_HEIGHT: (actualViewPortWidth: number) => 0.569633192 * actualViewPortWidth,
    BURGER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BORDER_RADIUS_15: (actualViewPortWidth: number) => SIZE_XD_DEFAULT.BORDER_RADIUS_15 * (SIZE_XD_DEFAULT.BORDER_RADIUS_15 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
    SPAN_BURGER_WRAPPER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.SPAN_BURGER_WRAPPER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.SPAN_BURGER_WRAPPER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    SPAN_BURGER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.SPAN_BURGER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.SPAN_BURGER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },


}


export { SIZE_ELEMENTS_ACTUAL_VIEW_PORT, THEME }