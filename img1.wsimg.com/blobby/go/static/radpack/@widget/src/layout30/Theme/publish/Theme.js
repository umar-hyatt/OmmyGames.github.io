import React from 'react';
import {
    without
} from 'lodash';
import {
    UX2,
    constants
} from '@wsb/guac-widget-core';
import Default from '../../../common/Themes/Default/Theme';
import {
    getMenuHeadingStyle
} from '../../../common/utils/legacyOverrides';
import {
    minimalIconMapping
} from '../../../common/Components/Internal/Header/utils/mapPropsToSocialProps';
import * as socialIconPack from '../../../common/IconPacks/SocialIcons/minimalSocialIconPack';
import * as boldIcons from '../../../common/IconPacks/boldOutline';
import {
    Cascade
} from '../../../common/loaders';
import SVGs from '../../../common/Components/Internal/Header/constants/SVGs';
import {
    spacingVertical
} from '../../../common/utils';
import themeConfig from '../themeConfig';

const {
    buttons,
    widgetTypes: {
        RSS
    }
} = constants;
const typographyShared1 = {
    style: {
        font: 'primary',
        color: 'highContrast',
        fontSize: 'large',
        fontWeight: 'normal',
        lineHeight: '1.45',
        letterSpacing: 'normal',
        textTransform: 'none'
    }
};
const typographyHeadingDelta = {
    font: 'alternate',
    color: 'highContrast',
    fontSize: 'large',
    fontWeight: 'normal',
    letterSpacing: '1px',
    lineHeight: '1.45',
    textTransform: 'none'
};
const {
    GRAYSCALE,
    NONE
} = constants.imageFilters;

class Theme30 extends Default {
    static config = themeConfig;

    static get displayName() {
        return 'Theme30';
    }

    static excludedProps = without(Default.excludedProps, 'foreground');

    static getDefaultBackgroundFilter = (widgetType, widgetPreset) => {
        const setNone = {
            widgetPreset: ['about5'],
            widgetType: ['GALLERY', 'RSS', 'REVIEWS', 'SHOP_PRODUCT_GROUP', 'SHOP', 'APPOINTMENTS']
        };
        return setNone.widgetType.find(t => t === widgetType) ||
            setNone.widgetPreset.find(p => p === widgetPreset) ?
            NONE :
            GRAYSCALE;
    };

    static getMutatorDefaultProps(widgetType, widgetPreset) {
        const defaultProps = super.getMutatorDefaultProps(widgetType, widgetPreset);

        return widgetType === 'HEADER' ?
            {
                ...defaultProps,
                useSocialLinks: true,
                hasLogoAlign: true,
                socialLinksOnSecondaryPage: false,
                useForegroundImage: true,
                showOverlayOpacityControls: true,
                enableVideoOverlaySlider: true,
                showShrinkFit: false,
                headerTreatmentsConfig: {},
                coverImagePivot: {},
                foregroundAspectRatio: 1
            } :
            defaultProps;
    }

    static getWidgetDefaultProps(widgetType, widgetPreset) {
        return {
            ...super.getWidgetDefaultProps(widgetType, widgetPreset),
            ...(widgetType === 'HEADER' && {
                alignmentOption: 'left',
                logoAlign: 'center'
            })
        };
    }

    constructor() {
        super();
        this.mappedValues = {
            ...this.mappedValues,
            // Generic Spacing
            spacingSmall: '12px',
            typographyOverrides: {
                LogoAlpha: {
                    ...typographyShared1
                },
                HeadingAlpha: {
                    style: {
                        font: 'primary',
                        color: 'highContrast',
                        fontSize: 'xxxlarge',
                        fontWeight: 'normal',
                        lineHeight: '1.42',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                HeadingBeta: {
                    style: {
                        font: 'primary',
                        color: 'highlight',
                        fontSize: 'xlarge',
                        fontWeight: 'normal',
                        lineHeight: '1.27',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                HeadingGamma: {
                    ...typographyShared1
                },
                HeadingDelta: {
                    style: {
                        ...typographyHeadingDelta,
                        '> p > span > a': {
                            ...typographyHeadingDelta,
                            ':hover': {
                                color: 'highlight'
                            }
                        }
                    }
                },
                BodyAlpha: {
                    style: {
                        font: 'alternate',
                        color: 'highContrast',
                        fontSize: 'medium',
                        fontWeight: 'normal',
                        lineHeight: '1.75',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                BodyBeta: {
                    style: {
                        font: 'alternate',
                        color: 'section',
                        fontSize: 'large',
                        fontWeight: 'normal',
                        lineHeight: '1.33',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                DetailsAlpha: {
                    style: {
                        'font': 'alternate',
                        'color': 'lowContrast',
                        'fontSize': 'small',
                        'fontWeight': 'normal',
                        'lineHeight': '1.71',
                        'letterSpacing': 'normal',
                        'textTransform': 'none',
                        // needed to override media breakpoint styles hard-set in InputSearch in Elements/Actions.js
                        '@xs-only': {
                            fontSize: 'small'
                        }
                    }
                },
                DetailsGamma: {
                    style: {
                        font: 'alternate',
                        color: 'lowContrast',
                        fontSize: 'xsmall',
                        fontWeight: 'normal',
                        lineHeight: '1.33',
                        letterSpacing: '0.083em',
                        textTransform: 'uppercase'
                    }
                },
                LinkAlpha: {
                    style: {
                        'font': 'alternate',
                        'color': 'highlight',
                        'fontSize': 'inherit',
                        'fontWeight': 'normal',
                        'lineHeight': '1.5',
                        'letterSpacing': 'normal',
                        'textDecoration': 'none',
                        ':hover': {
                            color: 'highlight',
                            borderColor: 'highlight'
                        }
                    }
                },
                NavAlpha: {
                    style: {
                        font: 'alternate',
                        color: 'section',
                        fontSize: 'mlarge',
                        fontWeight: 'normal',
                        lineHeight: '1.71',
                        letterSpacing: 'normal',
                        textTransform: 'uppercase'
                    }
                },
                SubNavAlpha: {
                    style: {
                        font: 'alternate',
                        color: 'section',
                        fontSize: 'small',
                        fontWeight: 'normal',
                        lineHeight: '1.71',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                NavBeta: {
                    style: {
                        font: 'alternate',
                        color: 'highlight',
                        fontSize: 'small',
                        fontWeight: 'normal',
                        lineHeight: '1.45',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }
                },
                SubNavBeta: {
                    style: {
                        font: 'alternate',
                        color: 'section',
                        fontSize: 'small',
                        fontWeight: 'normal',
                        lineHeight: '1.5',
                        letterSpacing: 'normal',
                        textTransform: 'none'
                    }
                },
                ButtonAlpha: props => {
                    const {
                        size = 'default'
                    } = props;
                    const sizes = {
                        small: {
                            fontSize: 'xsmall'
                        },
                        default: {
                            fontSize: 'small'
                        },
                        large: {
                            fontSize: 'medium'
                        }
                    };
                    return {
                        style: {
                            font: 'alternate',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            ...sizes[size]
                        }
                    };
                },
                ButtonBeta: {
                    style: {
                        font: 'alternate',
                        fontSize: 'small',
                        fontWeight: 'normal',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }
                }
            }
        };
    }

    Widget(props) {
        const svgWrapperStyles = {
            display: 'flex',
            justifyContent: 'center',
            color: props.category === 'neutral' ? '#EEEEEE' : 'background'
        };
        const svgStyles = {
            position: 'absolute',
            maxWidth: '53px',
            maxHeight: '24px',
            marginTop: '-23px',
            zIndex: 2,
            transform: 'rotate(180deg)',
            filter: props.category === 'primary' ?
                'drop-shadow(0px 0px 0px #4444dd)' :
                'drop-shadow(0px 0px 0px #efefef)'
        };
        return super.Widget(
            this.merge(props, {
                children: this.base.widgetType === 'FOOTER' ? ( <
                    UX2.Element.Block >
                    <
                    UX2.Element.Block style = {
                        svgWrapperStyles
                    } >
                    <
                    UX2.Element.SVG style = {
                        svgStyles
                    } > {
                        SVGs.triangle
                    } < /UX2.Element.SVG> <
                    /UX2.Element.Block> {
                        props.children
                    } <
                    /UX2.Element.Block>
                ) : (
                    props.children
                )
            })
        );
    }

    Heading(props) {
        const {
            tag
        } = props;
        const {
            widgetType,
            widgetPreset
        } = this.base;

        return super.Heading(
            this.merge({
                    style: getMenuHeadingStyle(tag, widgetType, widgetPreset),
                    saveOriginalText: tag === 'h1'
                },
                props
            )
        );
    }

    SectionHeading({
        layout = 'full',
        ...props
    }) {
        return super.SectionHeading(
            this.merge({
                    style: {
                        // Static
                        'overflow': 'hidden',
                        'textAlign': 'center',
                        '@md': {
                            textAlign: layout === 'full' ? 'center' : 'left',
                            marginBottom: 'xxxlarge'
                        }
                    }
                },
                props
            )
        );
    }

    Intro(props) {
        return super.Intro(
            this.merge({
                    alignment: 'center',
                    style: {
                        ['@md']: {
                            marginBottom: 'xxxlarge'
                        }
                    }
                },
                props
            )
        );
    }

    Form(props) {
        return super.Form(
            this.merge({
                    style: {
                        '> *': {
                            alignSelf: 'flex-end'
                        },
                        '> * * * button': {
                            width: 'auto',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }
                    }
                },
                props
            )
        );
    }

    Section(props) {
        const isFooter = this.base.widgetType === 'FOOTER';
        const isGallery2 = this.base.widgetPreset === 'gallery2';
        const borderStyles = {
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderColor: props.category === 'neutral' ? '#EEEEEE' : 'section'
        };

        const backgroundColor = isFooter && props.category === 'neutral' ? '#EEEEEE' : 'unset';
        const backgroundColorOverride =
            this.base.widgetPreset === 'payment2' || this.base.widgetType === RSS ?
            {} :
            {
                backgroundColor
            };

        return super.Section(
            this.merge(props, {
                style: {
                    '@xs-only': {
                        paddingVertical: 'xxlarge'
                    },
                    '@md': {
                        paddingVertical: isFooter ?
                            this.base.widgetPreset === 'footer3' ?
                            'large' :
                            'xxlarger' :
                            isGallery2 ?
                            '0px' :
                            '100px'
                    },
                    ...backgroundColorOverride,
                    ...(isFooter ? borderStyles : {})
                }
            })
        );
    }

    Image(props) {
        const themeStyleOverrides =
            this.base.widgetPreset === 'about1' ?
            {
                borderRadius: '0px !important',
                position: 'relative',
                width: '100%',
                height: 'auto'
            } :
            {};
        return super.Image(this.merge(props, {
            style: themeStyleOverrides
        }));
    }

    ContentCardWrapperImage(props) {
        return super.ContentCardWrapperImage(
            this.merge({
                    style: {
                        '> img': {
                            width: '100%'
                        }
                    }
                },
                props
            )
        );
    }

    Input(props) {
        return super.Input(
            this.merge({
                    style: {
                        // Dials Based
                        borderColor: 'input',
                        // Theme Based
                        borderRadius: 'medium',
                        borderWidth: 'xsmall',
                        paddingVertical: 'xsmall',
                        paddingHorizontal: 'xsmall',
                        borderBottomStyle: 'solid'
                    }
                },
                props
            )
        );
    }

    InputSearch(props) {
        const mobileSearch = {
            backgroundColor: 'searchMobileLight',
            borderStyle: 'none',
            borderRadius: 'none',
            borderWidth: 'none',
            paddingHorizontal: 'xlarge'
        };
        return super.InputSearch(
            this.merge({
                    style: {
                        '@xs-only': {
                            ...mobileSearch
                        },
                        '@sm-only': {
                            ...mobileSearch
                        },
                        '@md': {
                            paddingLeft: 'xlarge'
                        }
                    }
                },
                props
            )
        );
    }

    InputSelect(props) {
        return super.InputSelect(
            this.merge({
                    style: {
                        // Dials Based
                        borderColor: 'input',
                        // Theme Based
                        borderRadius: 'medium',
                        borderWidth: 'xsmall',
                        borderStyle: 'solid',
                        ['@xs-only']: {
                            fontSize: 'medium' // 16px
                        }
                    }
                },
                props
            )
        );
    }

    InputSelectElement(props) {
        return super.InputSelectElement(
            this.merge({
                    style: {
                        paddingVertical: 'xsmall',
                        paddingHorizontal: 'xsmall',
                        ['@xs-only']: {
                            fontSize: 'medium' // 16px
                        }
                    }
                },
                props
            )
        );
    }

    InputFloatLabelInput(props) {
        return super.InputFloatLabelInput(
            this.merge({
                    style: {
                        borderTopStyle: 'none',
                        borderLeftStyle: 'none',
                        borderRightStyle: 'none',
                        borderRadius: '0px',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '1px',
                        borderColor: 'input',
                        paddingBottom: 'small'
                    }
                },
                props
            )
        );
    }

    InputTextArea(props) {
        return super.InputTextArea(
            this.merge({
                    style: {
                        borderTopStyle: 'none',
                        borderLeftStyle: 'none',
                        borderRightStyle: 'none',
                        borderRadius: '0px',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '1px',
                        borderColor: 'input',
                        paddingBottom: 'small'
                    }
                },
                props
            )
        );
    }

    InputFloatLabelLabel(props) {
        const fixedPadding = this.base.widgetType === 'CONTACT' ? {
            style: {
                left: '8px'
            }
        } : {};
        return super.InputFloatLabelLabel(this.merge(props, fixedPadding));
    }

    CardBanner(props) {
        return super.CardBanner(
            this.merge({
                    style: {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                },
                props
            )
        );
    }

    CardBannerBlock(props) {
        return super.CardBannerBlock(
            this.merge({
                    style: {
                        '@xs-only': {
                            width: '100%'
                        }
                    }
                },
                props
            )
        );
    }

    CardBannerContainer(props) {
        return super.CardBannerContainer(
            this.merge({
                    style: {
                        'flexDirection': 'column',
                        '@md': {
                            'flexDirection': 'column',
                            '> div:nth-child(2)': {
                                paddingTop: 0,
                                paddingLeft: 0,
                                flexShrink: 0
                            }
                        }
                    }
                },
                props
            )
        );
    }

    CardBannerHeading(props) {
        return super.CardBannerHeading(
            this.merge({
                    typography: 'HeadingAlpha',
                    style: {
                        marginBottom: 'small',
                        textAlign: 'center'
                    }
                },
                props
            )
        );
    }

    ContentHeading(props) {
        const forcedHeadingBeta = ['MLS_SEARCH', 'ZILLOW'];

        return super.ContentHeading(
            this.merge({
                    typography: forcedHeadingBeta.indexOf(this.base.widgetType) >= 0 ? 'HeadingBeta' : 'HeadingDelta'
                },
                props
            )
        );
    }

    ContentBasic(props) {
        return super.ContentBasic(
            this.merge({
                    style: spacingVertical('large')
                },
                props
            )
        );
    }

    FeaturedHeading(props) {
        return super.FeaturedHeading(this.merge({
            typography: 'HeadingBeta'
        }, props));
    }

    FeaturedText(props) {
        return super.FeaturedText(this.merge({
            typography: 'BodyBeta'
        }, props));
    }

    CardHeading(props) {
        return super.CardHeading(this.merge({
            typography: 'HeadingDelta'
        }, props));
    }

    NavListItemInline(props) {
        return super.ListItemInline(
            this.merge(props, {
                style: {
                    paddingLeft: 'xlarge'
                }
            })
        );
    }

    Icon({
        icon,
        ...props
    }) {
        icon = minimalIconMapping[icon] || icon;
        return super.Icon(
            this.merge({
                    icon,
                    iconPack: { ...boldIcons,
                        ...socialIconPack
                    },
                    ...(props['data-aid'] === 'SEARCH_ICON_RENDERED_OPEN' ?
                        {
                            style: {
                                '@xs-only': {
                                    right: '25px'
                                }
                            }
                        } :
                        {})
                },
                props,
                icon !== 'whatsApp' ? {
                    style: {
                        marginHorizontal: 0
                    }
                } : {}
            )
        );
    }

    CloseIcon(props) {
        return super.CloseIcon(
            this.merge({
                    style: {
                        'color': 'highlight',
                        '@md': {
                            color: 'primary'
                        }
                    }
                },
                props
            )
        );
    }

    UtilitiesMenuIcon(props) {
        return super.UtilitiesMenuIcon(
            this.merge({
                    style: {
                        '@md': {
                            color: 'primary'
                        }
                    }
                },
                props
            )
        );
    }

    Loader(props) {
        return Cascade.apply(this, [props]);
    }

    Button(props) {
        const {
            fill = this.getButtonDefaults().fill
        } = props;
        const openOverride =
            fill !== buttons.fills.OPEN ?
            {} :
            {
                typography: 'ButtonBeta'
            };
        return super.Button(this.merge({
            customBorderWidth: 'small'
        }, openOverride, props));
    }

    MediaObject(props) {
        return super.MediaObject(
            this.merge({
                    style: {
                        alignItems: 'center'
                    }
                },
                props
            )
        );
    }

    BlogAside(props) {
        return super.BlogAside(
            this.merge({
                    section: 'alt',
                    style: {
                        'height': 'auto',
                        'backgroundColor': 'section',
                        'paddingVertical': 'large',
                        'paddingHorizontal': 'large',
                        'borderTopWidth': '0',
                        '@md': {
                            paddingVertical: 'large',
                            borderWidth: '0'
                        }
                    }
                },
                props
            )
        );
    }

    Pipe(props) {
        return super.Pipe(
            this.merge({
                    style: {
                        marginRight: 'medium',
                        height: '0.8em',
                        backgroundColor: 'sectionLowContrast'
                    }
                },
                props
            )
        );
    }

    HR(props) {
        return super.HR(
            this.merge(props, {
                style: {
                    borderColor: 'highContrast'
                }
            })
        );
    }

    MembershipHR(props) {
        return this.HR(
            this.merge({
                    style: {
                        '@xs': {
                            borderColor: 'section',
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            marginLeft: 0
                        }
                    }
                },
                props
            )
        );
    }

    NavigationDrawer(props) {
        return super.NavigationDrawer(
            this.merge({
                    category: 'neutral',
                    section: 'alt',
                    style: {
                        paddingTop: 'xxxlarge',
                        backgroundColor: 'section',
                        boxShadow: 'none !important',
                        maxWidth: '100%',
                        ['@md']: {
                            maxWidth: 400
                        }
                    }
                },
                props
            )
        );
    }

    NavigationDrawerList(props) {
        return super.NavigationDrawerList(
            this.merge({
                    style: {
                        '> :last-child': {
                            paddingBottom: 'medium'
                        }
                    }
                },
                props
            )
        );
    }

    NavigationDrawerInputSearch(props) {
        return super.NavigationDrawerInputSearch(
            this.merge({
                    style: {
                        backgroundColor: 'searchMobileGray'
                    }
                },
                props
            )
        );
    }

    NavigationDrawerListItem(props) {
        return super.NavigationDrawerListItem(
            this.merge({
                    style: {
                        borderBottomWidth: 0,
                        textDecoration: 'none'
                    }
                },
                props
            )
        );
    }

    NavigationDrawerLink(props) {
        return super.NavigationDrawerLink(
            this.merge({
                    style: {
                        paddingLeft: 'xlarger'
                    }
                },
                props
            )
        );
    }

    NavigationDrawerCloseIcon(props) {
        const {
            logoAlign
        } = props;
        return super.CloseIcon(
            this.merge({
                    style: {
                        right: 'initial',
                        top: 20,
                        left: 20,
                        zIndex: 2,
                        color: 'highlight',
                        ['@md']: {
                            top: 80,
                            left: logoAlign === 'center' ? 40 : 'unset',
                            right: logoAlign === 'center' ? 'unset' : 40
                        }
                    }
                },
                props
            )
        );
    }

    NavigationDrawerSubLink(props) {
        return super.NavigationDrawerSubLink(
            this.merge({
                    style: {
                        'paddingLeft': 'xxlarge',
                        '@md': {
                            paddingLeft: 'xxxlarge'
                        }
                    }
                },
                props
            )
        );
    }

    PromoBanner(props) {
        return super.PromoBanner(
            this.merge({
                    style: {
                        '@xs': {
                            paddingVertical: 'small'
                        }
                    }
                },
                props
            )
        );
    }

    ProductAsset(props) {
        return super.ProductAsset(this.merge({
            style: {
                borderStyle: 'none'
            }
        }, props));
    }

    PromoBannerText(props) {
        return super.PromoBannerText(this.merge({
            typography: 'DetailsGamma'
        }, props));
    }

    NavFooterLink(props) {
        return super.NavFooterLink(this.merge({
            typography: 'LinkAlpha'
        }, props));
    }

    MembershipHeading(props) {
        return super.MembershipHeading(
            this.merge({
                    style: {
                        paddingHorizontal: 'xlarger'
                    }
                },
                props
            )
        );
    }

    FooterText(props) {
        return super.FooterText(
            this.merge({
                    typography: 'DetailsGamma'
                },
                props
            )
        );
    }

    FooterDetails(props) {
        return super.FooterDetails(
            this.merge({
                    typography: 'DetailsGamma'
                },
                props
            )
        );
    }

    InputGroup(props) {
        return super.InputGroup(
            this.merge({
                    button: {
                        style: {
                            width: 'auto'
                        }
                    }
                },
                props
            )
        );
    }

    Phone(props) {
        const {
            alignmentOption
        } = props;

        return super.Phone(
            this.merge({
                    style: {
                        '@md': {
                            top: alignmentOption === 'center' ? '40px' : 'unset',
                            bottom: alignmentOption === 'center' ? 'unset' : '40px',
                            zIndex: 1,
                            position: 'absolute',
                            maxWidth: '300px',
                            textAlign: 'center'
                        }
                    },
                    typography: 'BodyBeta'
                },
                props
            )
        );
    }

    IconHamburger(props) {
        return super.IconHamburger(
            this.merge({
                    style: {
                        color: 'highlight'
                    }
                },
                props
            )
        );
    }

    CommerceOverlayIcon(props) {
        return super.Icon(
            this.merge({
                    iconPack: { ...boldIcons,
                        ...socialIconPack
                    },
                    style: {
                        display: 'inline-block',
                        marginRight: 'xxsmall',
                        marginLeft: '-xxsmall'
                    }
                },
                props
            )
        );
    }

    CommerceItemIcon(props) {
        return super.Icon(
            this.merge({
                    iconPack: { ...boldIcons,
                        ...socialIconPack
                    },
                    style: {
                        display: 'inline-block',
                        marginRight: 'xxsmall',
                        marginLeft: '-xxsmall'
                    }
                },
                props
            )
        );
    }
}

export default Theme30;