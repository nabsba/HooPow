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
    MAIN_SIDE_FRAME_HEIGHT: 1067,
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
    BORDER_RADIUS_5: 5,
    BORDER_RADIUS_15: 15,
    BORDER_RADIUS_14: 14,
    BORDER_RADIUS_20: 20,
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
        },
        VARIANT: {
            WIDTH: 596,
            HEIGHT: 67
        }
    },
    BUTTONV_V1: {
        WIDTH: 189.19,
        HEIGHT: 48.45
    },
    MAIN_CHARACTER_SMALL: {
        WIDTH: 187,
        HEIGHT: 309
    },
    MAIN_ANNONCE: {
        WIDTH: 338,
        HEIGHT: 498
    },
    ANNONCE_SUB_ANNONCE: {
        WIDTH: 160,
        HEIGHT: 40
    },
    GALLERY_MULTIPLE_ROWS: {
        WIDTH: 1152,
        HEIGHT: 1038,
    },
    GALLERY_COLUMN: {
        WIDTH: 210,
        HEIGHT: 1038,
    },
    CARD: {
        WIDTH: 258,
        HEIGHT: 281,
        IMAGE: {
            WIDTH: 258,
            HEIGHT: 258
        }
    },
    CARD_ON_ONE_COLUMN: {
        WIDTH: 210,
        HEIGHT: 230,
        IMAGE: {
            WIDTH: 210,
            HEIGHT: 210
        }
    },
    MAIN_CHARACTER: {
        WIDTH: 633.47,
        HEIGHT: 1335.58
    },
    SHARE_ICON_TEXT: {
        WIDTH: 104,
        HEIGHT: 101.06,
    },
    SHARE_ICON: {
        WIDTH: 64.07,
        HEIGHT: 64.06
    },
    BUTTON_V2: {
        WIDTH: 281,
        HEIGHT: 62
    },
    BUTTON_V2_ICON: {
        WIDTH: 36.48,
        HEIGHT: 36.48,
    },
    ICON_ARROW: {
        WIDTH: 86,
        HEIGHT: 86

    },
    DOT_SLIDER: {
        WIDTH: 21,
        HEIGHT: 21
    },
    SLIDER_IMAGE: {
        WIDTH: 790,
        HEIGHT: 790
    },
    ICON_FULLSCREEN: {
        WIDTH: 104.87,
        HEIGHT: 104.87
    },
    CARD_FULL_SCREEN: {
        WIDTH: 1182,
        HEIGHT: 1182
    },
    POSITION_MAIN_CHARACTER: {
        TOP: 74,
        RIGHT: 343
    }

};

const SIZE_ELEMENTS_ACTUAL_VIEW_PORT = {
    POSITION_MAIN_CHARACTER: (actualViewPortWidth: number) => {
        return {
            TOP: actualViewPortWidth * (SIZE_XD_DEFAULT.POSITION_MAIN_CHARACTER.TOP / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            RIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.POSITION_MAIN_CHARACTER.RIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    CARD_FULL_SCREEN: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_FULL_SCREEN.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_FULL_SCREEN.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    ICON_FULLSCREEN: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.ICON_FULLSCREEN.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.ICON_FULLSCREEN.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    CARD_ON_ONE_COLUMN: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_ON_ONE_COLUMN.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_ON_ONE_COLUMN.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    CARD_ON_ONE_COLUMN_IMAGE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_ON_ONE_COLUMN.IMAGE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD_ON_ONE_COLUMN.IMAGE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    SLIDER_IMAGE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.SLIDER_IMAGE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.SLIDER_IMAGE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    DOT_SLIDER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.DOT_SLIDER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.DOT_SLIDER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    ICON_ARROW: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.ICON_ARROW.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.ICON_ARROW.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    CARD: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BUTTON_V2: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTON_V2.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTON_V2.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BUTTON_V2_MENU: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTON_V2.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (40 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BUTTON_V2_ICON: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTON_V2_ICON.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BUTTON_V2_ICON.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    SHARE_ICON_TEXT: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.SHARE_ICON_TEXT.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.SHARE_ICON_TEXT.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    SHARE_ICON: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.SHARE_ICON.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.SHARE_ICON.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    CARD_IMAGE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD.IMAGE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.CARD.IMAGE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    RIGHT_SIDE_FRAME: (actualViewPortWidth: number) => (SIZE_XD_DEFAULT.RIGHT_SIDE_FRAME_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    LEFT_SIDE_FRAME: (actualViewPortWidth: number) => (SIZE_XD_DEFAULT.LEFT_SIDE_FRAME_WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    MAIN_SIDE_HEIGHT: (actualViewPortWidth: number) => 0.56 * actualViewPortWidth,
    BURGER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.BURGER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    BORDER_RADIUS_5: (actualViewPortWidth: number) => (5 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    BORDER_RADIUS_15: (actualViewPortWidth: number) => (15 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    BORDER_RADIUS_14: (actualViewPortWidth: number) => (14 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    BORDER_RADIUS_20: (actualViewPortWidth: number) => (20 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    BORDER_RADIUS_42: (actualViewPortWidth: number) => (42 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,

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
        },
        VARIANT: (actualViewPortWidth: number) => {
            return {
                WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE.VARIANT.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
                HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE.VARIANT.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
            }
        },
    },
    TITLE_HOO_POW_LARGE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_LARGE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.TITLE_HOO_POW_LARGE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    FONT_SIZE_21: (actualViewPortWidth: number) => (21 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_22: (actualViewPortWidth: number) => (22 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_15: (actualViewPortWidth: number) => (15 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_17: (actualViewPortWidth: number) => (17 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_25: (actualViewPortWidth: number) => (25 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_20: (actualViewPortWidth: number) => (20 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_24: (actualViewPortWidth: number) => (24 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_31: (actualViewPortWidth: number) => (31 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
    FONT_SIZE_34: (actualViewPortWidth: number) => (34 / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH) * actualViewPortWidth,
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
    ANNONCE_SUB_ANNONCE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE_SUB_ANNONCE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.ANNONCE_SUB_ANNONCE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    MAIN_ANNONCE: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_ANNONCE.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_ANNONCE.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    GALLERY_MULTIPLE_ROWS: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.GALLERY_MULTIPLE_ROWS.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.GALLERY_MULTIPLE_ROWS.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    GALLERY_COLUMN: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.GALLERY_COLUMN.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.GALLERY_COLUMN.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },
    MAIN_CHARACTER: (actualViewPortWidth: number) => {
        return {
            WIDTH: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_CHARACTER.WIDTH / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH),
            HEIGHT: actualViewPortWidth * (SIZE_XD_DEFAULT.MAIN_CHARACTER.HEIGHT / SIZE_XD_DEFAULT.MAIN_SIDE_FRAME_WIDTH)
        }
    },


}


export { SIZE_ELEMENTS_ACTUAL_VIEW_PORT, THEME }