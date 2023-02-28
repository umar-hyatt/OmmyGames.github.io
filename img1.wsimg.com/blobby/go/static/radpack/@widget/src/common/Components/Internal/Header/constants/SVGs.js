import React from 'react';

const SVGs = {};

const springAnimation = 'draw 5s linear forwards';
const getSpringBase = animate => ({
    stroke: 'currentColor',
    fill: 'none',
    strokeWidth: '1',
    strokeLinejoin: 'round',
    strokeDashoffset: '100',
    strokeDasharray: animate ? '100' : null
});

SVGs.getSpringLeft = animate => ( <
    g { ...getSpringBase(animate)
    } >
    <
    path d = 'M5.59,25.25s-1-2.64,3.69-9.59A9.2,9.2,0,0,0,11,9.56,7.62,7.62,0,0,0,9.67,6,4.45,4.45,0,0,1,9,2.3a4,4,0,0,1,1.31-2,6,6,0,0,1,1,2.13A7,7,0,0,1,11.41,4a3.24,3.24,0,0,1-.65,1.69,2.63,2.63,0,0,1-.49.57s4.27,1.61,4-3.46c0,0-2.61.74-3.08,2'
    style = {
        animate ? {
            animation: springAnimation,
            animationDelay: '0.5s'
        } : {}
    }
    /> <
    g style = {
        animate ? {
            animation: springAnimation,
            animationDelay: '2.5s'
        } : {}
    } >
    <
    path d = 'M6.55,20.62s-2.5-2.14-2.88-4.38a13.09,13.09,0,0,0-.8-2.86A4.36,4.36,0,0,0,.36,11.07s-.94,4.34,2.71,3.59' / >
    <
    path d = 'M3.87,15.91s-1.05-4,1.07-4.84a3.59,3.59,0,0,1,.78,2.74A2.66,2.66,0,0,1,3.87,15.91Z' / >
    <
    /g> <
    /g>
);

SVGs.getSpringRight = animate => ( <
    g { ...getSpringBase(animate)
    } >
    <
    g style = {
        animate ? {
            animation: springAnimation
        } : {}
    } >
    <
    path d = 'M8.91,2.38A7,7,0,0,0,8.76,4a3.24,3.24,0,0,0,.65,1.69,2.63,2.63,0,0,0,.49.57s-4.27,1.61-4-3.46c0,0,2.61.74,3.08,2' / >
    <
    path d = 'M5.59,25.25s-1-2.64,3.69-9.59A9.2,9.2,0,0,0,11,9.56,7.62,7.62,0,0,0,9.67,6,4.45,4.45,0,0,1,9,2.3a4,4,0,0,1,1.31-2,6,6,0,0,1,1,2.13A7,7,0,0,1,11.41,4a3.24,3.24,0,0,1-.65,1.69,2.63,2.63,0,0,1-.49.57s4.27,1.61,4-3.46c0,0-2.61.74-3.08,2' / >
    <
    /g> <
    g style = {
        animate ? {
            animation: springAnimation,
            animationDelay: '2s'
        } : {}
    } >
    <
    path d = 'M6.55,20.62s-2.5-2.14-2.88-4.38a13.09,13.09,0,0,0-.8-2.86A4.36,4.36,0,0,0,.36,11.07s-.94,4.34,2.71,3.59' / >
    <
    path d = 'M3.87,15.91s-1.05-4,1.07-4.84a3.59,3.59,0,0,1,.78,2.74A2.66,2.66,0,0,1,3.87,15.91Z' / >
    <
    /g> <
    g style = {
        animate ? {
            animation: springAnimation,
            animationDelay: '4s'
        } : {}
    } >
    <
    path d = 'M14.23,12.86S17,9.78,15.46,8.06a3.59,3.59,0,0,0-1.93,2.09A2.66,2.66,0,0,0,14.23,12.86Z' / >
    <
    path d = 'M8.68,16.63s3.2-.78,4.55-2.61a13.09,13.09,0,0,1,2-2.19,4.36,4.36,0,0,1,3.28-.92s-1.12,4.29-4,2' / >
    <
    /g> <
    /g>
);

const summerBase = {
    stroke: 'currentColor',
    fill: 'none',
    strokeWidth: '1px'
};

SVGs.getSummerLeft = animate => ( <
    g { ...summerBase
    } >
    <
    path d = 'M15,13.89s5-12.13,18.31-8L27.9,9.24a.56.56,0,0,1-.68-.09,2.49,2.49,0,0,0-1.72-.86l.68,1.52a.71.71,0,0,1-.24.87l-3,2.12a.22.22,0,0,1-.32-.08c-.18-.38-.58-1.06-1.21-1.06,0,0,.76,1.92.38,2.23C21.73,13.89,18,16.45,15,13.89Z'
    style = {!animate ?
        {} :
        {
            transformOrigin: '50% 50%',
            transform: 'rotate(5deg)',
            animation: 'sway-right 3s infinite'
        }
    }
    /> <
    g style = {!animate ?
        {} :
        {
            transformOrigin: '50% 30%',
            transform: 'rotate(0deg)',
            animation: 'sway-left 3s infinite',
            animationDelay: '1.5s'
        }
    } >
    <
    path d = 'M15.09,14.37S14.75,1.26.81.42l3.92,5a.56.56,0,0,0,.67.16,2.49,2.49,0,0,1,1.91-.2L6.14,6.6a.71.71,0,0,0-.08.9l1.83,2.68' / >
    <
    path d = 'M8.95,10.23A1.18,1.18,0,0,1,10,10s-.3.33-.6.73' / >
    <
    /g> <
    path d = 'M15,13.25S8.9,7,1.72,13l4.21.66a.37.37,0,0,0,.4-.23,1.66,1.66,0,0,1,.84-1l0,1.11a.47.47,0,0,0,.37.48l2.42.54a.15.15,0,0,0,.18-.13c0-.28.09-.8.48-1,0,0,0,1.38.33,1.47C10.92,14.95,13.89,15.58,15,13.25Z'
    style = {!animate ?
        {} :
        {
            transformOrigin: '50% 30%',
            transform: 'rotate(0deg)',
            animation: 'sway-left 3s infinite',
            animationDelay: '1.7s'
        }
    }
    /> <
    path d = 'M9.55,10.56' / >
    <
    path d = 'M11.51,26.92A13.24,13.24,0,0,1,15,13.83s-2.4,10.3-.34,13.32a.19.19,0,0,1-.15.31H12.23A.74.74,0,0,1,11.51,26.92Z' / >
    <
    path d = 'M11.15,21.47s.89-1.07,1.61-.83' / >
    <
    /g>
);

SVGs.getSummerRight = animate => ( <
    g { ...summerBase
    } >
    <
    path d = 'M19.21,13.89s-5-12.13-18.31-8l5.46,3.3A.56.56,0,0,0,7,9.15a2.49,2.49,0,0,1,1.72-.86L8.08,9.81a.71.71,0,0,0,.24.87l3,2.12a.22.22,0,0,0,.32-.08c.18-.38.58-1.06,1.21-1.06,0,0-.76,1.92-.38,2.23C12.53,13.89,16.28,16.45,19.21,13.89Z'
    style = {!animate ?
        {} :
        {
            transformOrigin: '50% 50%',
            transform: 'rotate(5deg)',
            animation: 'sway-left 3s infinite'
        }
    }
    /> <
    path d = 'M19.17,14.37S19.51,1.26,33.46.42l-3.92,5a.56.56,0,0,1-.67.16,2.49,2.49,0,0,0-1.91-.2L28.12,6.6a.71.71,0,0,1,.08.9l-1.83,2.68'
    style = {!animate ?
        {} :
        {
            transformOrigin: '50% 50%',
            transform: 'rotate(0deg)',
            animation: 'sway-right 3s infinite',
            animationDelay: '1.5s'
        }
    }
    /> <
    path d = 'M19.21,13.25S25.37,7,32.54,13l-4.21.66a.37.37,0,0,1-.4-.23,1.66,1.66,0,0,0-.84-1l0,1.11a.47.47,0,0,1-.37.48l-2.42.54a.15.15,0,0,1-.18-.13c0-.28-.09-.8-.48-1,0,0,0,1.38-.33,1.47C23.34,14.95,20.38,15.58,19.21,13.25Z'
    style = {!animate ?
        {} :
        {
            transformOrigin: '50% 30%',
            transform: 'rotate(0deg)',
            animation: 'sway-right 3s infinite',
            animationDelay: '1.7s'
        }
    }
    /> <
    path d = 'M22.75,26.92a13.24,13.24,0,0,0-3.54-13.1s2.4,10.3.34,13.32a.19.19,0,0,0,.15.31H22A.74.74,0,0,0,22.75,26.92Z' / >
    <
    path d = 'M23.11,21.47s-.89-1.07-1.61-.83' / >
    <
    /g>
);

SVGs.fallLeafLeft = ( <
    g stroke = 'currentColor'
    fill = 'none' >
    <
    path d = 'M8.72,21.91H8.11S5.18,6.91,18.18,7a12.49,12.49,0,0,1-.52,8.52' / >
    <
    path d = 'M8.25,22.25s3.82-5.67,9.08-6.67c2.61-.5,5.58.15,8.61,3.21C25.94,18.79,16.7,30.77,8.25,22.25Z' / >
    <
    path d = 'M8.11,21.92s-3,2-8,0' / >
    <
    path d = 'M33.15,13s-1,2-5,1' / >
    <
    path d = 'M8.7,22.62C17.33,15.36,26.12,19,26.12,19' / >
    <
    path d = 'M16,18.83s-1.19,3.54,3,5.35' / >
    <
    path d = 'M19.13,18S18,20.61,21.55,22.8' / >
    <
    path d = 'M23.13,18s-1.41,2.11.78,3.06' / >
    <
    path d = 'M12.62,19.94s-.91,2.52,2.28,5.27' / >
    <
    path d = 'M33.08,13.18S48.38,13.05,45.72.33C45.72.33,30.63,1.44,33.08,13.18Z' / >
    <
    path d = 'M45.65.06S43.84,9.41,33,12.6' / >
    <
    path d = 'M40.2,8.62s-3.62-1-2.83-5.42' / >
    <
    path d = 'M42.65,6.46S39.83,5.94,40,1.78' / >
    <
    path d = 'M44.84,3.11s-2.54,0-2.12-2.34' / >
    <
    path d = 'M37.42,10.81s-2.6-.63-3.14-4.81' / >
    <
    path d = 'M18.18,7s-8.8,4.81-9.45,14.88' / >
    <
    /g>
);

SVGs.fallLeafRight = ( <
    g stroke = 'currentColor'
    fill = 'none' >
    <
    path d = 'M4.878 4.914s10.908 10.723 18.027-.155c0 0-11.458-9.887-18.027.155zM23.044 4.519S15.153 9.85 5.25 4.459M13.139 6.72s-1.88-3.234 1.829-5.836M16.398 6.93s-1.631-2.365 1.406-5.222M20.312 6.111s-1.807-1.783.156-3.157M9.626 6.302S8.23 4.013 10.802.679M5.035 4.854s-2.124.699-4.23-2.846' / >
    <
    path d = 'M52.08 16.182s15.296-.13 12.638-12.856c0 0-15.093 1.11-12.638 12.856zM64.647 3.057s-1.81 9.35-12.625 12.541M59.199 11.618s-3.615-.957-2.833-5.42M61.652 9.462s-2.825-.518-2.698-4.686M63.841 6.115s-2.539.017-2.122-2.342M56.42 13.806s-2.605-.632-3.145-4.808M52.15 16.029s-1.008 1.996-5.004.979' / >
    <
    /g>
);

SVGs.winterSnowflake = ( <
    g stroke = 'currentColor'
    fill = 'none'
    fillRule = 'evenodd' >
    <
    path d = 'M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z' / >
    <
    /g>
);

SVGs.triangle = ( <
    g fill = 'currentColor'
    fillRule = 'evenodd'
    width = '53'
    height = '24' >
    <
    path d = 'M26.5 24L53 0H0z' / >
    <
    /g>
);

export default SVGs;