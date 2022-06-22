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
    TITLE_HOO_POW_SMALL: {
        WIDTH: 208.25,
        HEIGHT: 53.51,
    },
    TITLE_HOO_POW_LARGE: {
        WIDTH: 325.53,
        HEIGHT: 146.11
    },
    BURGER_PLUS_TITLE_HOO_POW: {
        WIDTH: 293.42,
        HEIGHT: 69
    },
    BORDER_RADIUS_15: 15,
    BORDER_RADIUS_14: 14,
    SPAN_BURGER_WRAPPER: {
        HEIGHT: 25.54,
        WIDTH: 36.14
    },
    SPAN_BURGER: {
        HEIGHT: 3.65,
        WIDTH: 36.14
    },
    ANNONCE: {
        ORIGINAL: {
            WIDTH: 338,
            HEIGHT: 124
        }
    },
    BUTTONV_V1: {
        WIDTH: 189.19,
        HEIGHT: 48.45
    },
    MAIN_CHARACTER_SMALL: {
        WIDTH: 187,
        HEIGHT: 309
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
    BORDER_RADIUS_15: (actualViewPortWidth: number) => actualViewPortWidth * (SIZE_XD_DEFAULT.BORDER_RADIUS_15 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
    BORDER_RADIUS_14: (actualViewPortWidth: number) => actualViewPortWidth * (SIZE_XD_DEFAULT.BORDER_RADIUS_14 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
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
    TITLE_HOO_POW_SMALL: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_SMALL.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_SMALL.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BURGER_PLUS_TITLE_HOO_POW: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER_PLUS_TITLE_HOO_POW.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER_PLUS_TITLE_HOO_POW.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    ANNONCE: {
        ORIGINAL: (actualViewPortWidth: number) => {
            return {
                WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE.ORIGINAL.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
                HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE.ORIGINAL.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
            }
        }
    },
    TITLE_HOO_POW_LARGE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_LARGE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_LARGE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    FONT_SIZE_21: (actualViewPortWidth: number) => 28 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH * actualViewPortWidth,
    FONT_SIZE_25: (actualViewPortWidth: number) => 33 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH * actualViewPortWidth,
    FONT_SIZE_31: (actualViewPortWidth: number) => 41 - 7 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH * actualViewPortWidth,
    BUTTON_V1: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTONV_V1.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTONV_V1.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    MAIN_CHARACTER_SMALL: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_CHARACTER_SMALL.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_CHARACTER_SMALL.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },

}


export { SIZE_ELEMENTS_ACTUAL_VIEW_PORT, THEME }