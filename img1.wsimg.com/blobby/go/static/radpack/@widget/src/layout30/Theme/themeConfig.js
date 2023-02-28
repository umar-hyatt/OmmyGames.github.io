import {
    constants
} from '@wsb/guac-widget-core';
import {
    COMMON_BUTTON_CONFIG
} from '../../common/constants';

const {
    colorPackCategories,
    buttons
} = constants;
const {
    LIGHT,
    LIGHT_ALT,
    LIGHT_COLORFUL,
    DARK,
    DARK_ALT,
    DARK_COLORFUL,
    COLORFUL
} =
constants.paintJobs;

const id = 'layout30';

export default {
    id,
    name: 'focus',
    packs: {
        color: '#691c26',
        font: 'league-spartan'
    },
    logo: {
        font: 'primary'
    },
    packCategories: {
        color: colorPackCategories.ACCENT
    },
    headerProperties: {
        alignmentOption: 'left',
        defaultLogoAlign: 'center'
    },
    paintJobs: [LIGHT, LIGHT_ALT, LIGHT_COLORFUL, COLORFUL, DARK_COLORFUL, DARK_ALT, DARK],
    defaultPaintJob: LIGHT,
    buttons: {
        primary: {
            fill: buttons.fills.SOLID,
            shape: buttons.shapes.SQUARE,
            decoration: buttons.decorations.NONE,
            shadow: buttons.shadows.NONE,
            color: buttons.colors.PRIMARY
        },
        secondary: {
            fill: buttons.fills.OPEN,
            decoration: buttons.decorations.UNDERLINE,
            shadow: buttons.shadows.NONE,
            color: buttons.colors.PRIMARY
        },
        ...COMMON_BUTTON_CONFIG
    }
};