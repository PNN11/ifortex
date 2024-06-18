import { ComponentProps, FC } from 'react'

const HiTechPark: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="131" height="44" viewBox="0 0 131 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="33.5596" y="3.09766" width="3.61409" height="37.1735" fill="#D9D9D9" />
            <path
                d="M0 3.09766H3.61409V19.8774H25.8149V3.09766H29.429V40.2712H25.8149V23.4915H3.61409V40.2712H0V3.09766Z"
                fill="#D9D9D9"
            />
            <path
                d="M47.627 5.29126V4.15303H57.3593V5.29126H53.1681V17H51.8182V5.29126H47.627ZM56.3907 12.553V12.2794C56.3907 10.8912 56.7672 9.75887 57.5201 8.88241C58.2731 8.00595 59.2672 7.56771 60.5025 7.56771C61.7378 7.56771 62.6848 7.97065 63.3436 8.77653C64.0024 9.58241 64.3319 10.6883 64.3319 12.0942V12.65H57.1672V11.5824H63.026V11.4589C63.026 10.6295 62.8172 9.95887 62.3995 9.44711C61.9878 8.92947 61.3642 8.67065 60.5289 8.67065C59.6054 8.67065 58.9054 9.01476 58.429 9.70299C57.9584 10.3853 57.7231 11.2412 57.7231 12.2706V12.553C57.7231 13.5824 57.9701 14.4412 58.4642 15.1294C58.9584 15.8118 59.726 16.1529 60.7672 16.1529C61.3789 16.1529 61.9025 16.0294 62.3377 15.7824C62.773 15.5353 63.1289 15.2324 63.4054 14.8735L64.2613 15.5794C63.973 15.9971 63.5319 16.3824 62.9377 16.7353C62.3495 17.0824 61.626 17.2559 60.7672 17.2559C59.3554 17.2559 58.2731 16.8206 57.5201 15.95C56.7672 15.0735 56.3907 13.9412 56.3907 12.553ZM64.8986 12.553V12.2794C64.8986 10.8853 65.2721 9.75299 66.0192 8.88241C66.7662 8.00595 67.7927 7.56771 69.0985 7.56771C70.3103 7.56771 71.225 7.89712 71.8426 8.55594C72.4662 9.20888 72.7779 9.95005 72.7779 10.7795V10.8324H71.5162V10.7795C71.5162 10.203 71.3221 9.70887 70.9338 9.29711C70.5515 8.87947 69.9397 8.67065 69.0985 8.67065C68.128 8.67065 67.4074 9.01476 66.9368 9.70299C66.4662 10.3853 66.2309 11.2412 66.2309 12.2706V12.553C66.2309 13.5824 66.4662 14.4412 66.9368 15.1294C67.4133 15.8177 68.1338 16.1618 69.0985 16.1618C69.9397 16.1618 70.5515 15.9529 70.9338 15.5353C71.3221 15.1177 71.5162 14.6206 71.5162 14.0441V13.9912H72.7779V14.0441C72.7779 14.8735 72.4662 15.6177 71.8426 16.2765C71.225 16.9294 70.3103 17.2559 69.0985 17.2559C67.7927 17.2559 66.7662 16.8206 66.0192 15.95C65.2721 15.0735 64.8986 13.9412 64.8986 12.553ZM73.9182 17V3.50892H75.224V9.0677C75.5652 8.63241 75.9887 8.2883 76.4946 8.03536C77.0064 7.78242 77.577 7.65595 78.2064 7.65595C79.0946 7.65595 79.8122 7.91477 80.3593 8.43241C80.9064 8.94417 81.1799 9.80593 81.1799 11.0177V17H79.874V11.0089C79.874 10.2089 79.6887 9.63829 79.3181 9.29711C78.9475 8.95006 78.4299 8.77653 77.7652 8.77653C77.1887 8.77653 76.6829 8.92947 76.2476 9.23535C75.8182 9.53535 75.477 9.92064 75.224 10.3912V17H73.9182ZM86.6192 17V4.15303H90.6868C92.0633 4.15303 93.1103 4.50303 93.8279 5.20302C94.5515 5.89714 94.9132 6.82654 94.9132 7.99124C94.9132 9.15006 94.5515 10.0824 93.8279 10.7883C93.1103 11.4942 92.0633 11.8471 90.6868 11.8471H87.9692V17H86.6192ZM87.9692 10.7177H90.678C91.7486 10.7177 92.4956 10.4589 92.9191 9.94123C93.3485 9.4177 93.5632 8.7677 93.5632 7.99124C93.5632 7.21477 93.3485 6.57066 92.9191 6.0589C92.4956 5.54714 91.7486 5.29126 90.678 5.29126H87.9692V10.7177ZM95.2858 14.3618C95.2858 13.4441 95.6505 12.7324 96.3799 12.2265C97.1094 11.7147 98.0417 11.4589 99.177 11.4589H101.445V10.7089C101.445 10.0853 101.286 9.58535 100.968 9.20888C100.651 8.83241 100.103 8.64418 99.327 8.64418C98.5446 8.64418 97.9829 8.80594 97.6417 9.12947C97.3005 9.44711 97.1299 9.82946 97.1299 10.2765V10.3471H95.8417V10.2677C95.8417 9.53241 96.1594 8.90006 96.7947 8.37065C97.4299 7.83536 98.2888 7.56771 99.3711 7.56771C100.448 7.56771 101.28 7.82948 101.868 8.353C102.462 8.87653 102.759 9.66182 102.759 10.7089V14.8824C102.759 15.2647 102.789 15.6265 102.848 15.9677C102.906 16.3088 102.992 16.6059 103.103 16.8588V17H101.85C101.762 16.8471 101.683 16.6471 101.612 16.4C101.542 16.1471 101.498 15.8971 101.48 15.65C101.251 16.0382 100.88 16.3882 100.368 16.7C99.8564 17.0118 99.2005 17.1676 98.4005 17.1676C97.5182 17.1676 96.777 16.9324 96.177 16.4618C95.5829 15.9912 95.2858 15.2912 95.2858 14.3618ZM96.5917 14.3C96.5917 14.8824 96.7623 15.3294 97.1035 15.6412C97.4505 15.9471 97.9799 16.1 98.6917 16.1C99.4093 16.1 100.048 15.8677 100.606 15.403C101.165 14.9324 101.445 14.4265 101.445 13.8853V12.4206H99.3535C98.4476 12.4206 97.7593 12.5883 97.2888 12.9236C96.8241 13.2588 96.5917 13.7177 96.5917 14.3ZM104.561 17V7.83242H105.744L105.797 9.07653H105.832C106.091 8.67653 106.426 8.32653 106.838 8.02653C107.25 7.72065 107.747 7.56771 108.329 7.56771C108.464 7.56771 108.605 7.58242 108.752 7.61183C108.905 7.64124 109.011 7.66771 109.07 7.69124V8.9177C108.952 8.89417 108.823 8.87653 108.682 8.86476C108.547 8.84712 108.397 8.83829 108.232 8.83829C107.673 8.83829 107.191 8.98829 106.785 9.28829C106.379 9.58241 106.073 9.95299 105.867 10.4V17H104.561ZM109.857 17V3.50892H111.163V12.403L115.478 7.83242H117.031L111.163 13.9824V17H109.857ZM115.875 17L112.178 12.0853L113.043 11.1853L117.454 17H115.875ZM48.8976 39V26.153H52.9564C54.2034 26.153 55.1828 26.4177 55.8946 26.9471C56.6064 27.4766 56.9622 28.3265 56.9622 29.4971C56.9622 30.2206 56.7828 30.8148 56.424 31.2795C56.0652 31.7383 55.6152 32.0559 55.074 32.2324V32.2589C55.7328 32.4412 56.2681 32.7942 56.6799 33.3177C57.0975 33.8353 57.3064 34.5177 57.3064 35.3647C57.3064 36.5294 56.9358 37.4265 56.1946 38.0559C55.4593 38.6853 54.474 39 53.2387 39H48.8976ZM50.2211 37.8706H53.2387C54.1799 37.8706 54.8711 37.6471 55.3123 37.2C55.7534 36.753 55.974 36.1412 55.974 35.3647C55.974 34.6 55.7534 33.9942 55.3123 33.5471C54.8711 33.0942 54.1799 32.8677 53.2387 32.8677H50.2211V37.8706ZM50.2211 31.7471H52.9652C53.9064 31.7471 54.5828 31.5501 54.9946 31.1559C55.4123 30.7559 55.6211 30.203 55.6211 29.4971C55.6211 28.7677 55.4123 28.2177 54.9946 27.8471C54.577 27.4707 53.8976 27.2824 52.9564 27.2824H50.2211V31.7471ZM58.1201 34.553V34.2794C58.1201 32.8912 58.4966 31.7589 59.2495 30.8824C60.0025 30.0059 60.9966 29.5677 62.2319 29.5677C63.4672 29.5677 64.4142 29.9707 65.073 30.7765C65.7318 31.5824 66.0613 32.6883 66.0613 34.0942V34.65H58.8966V33.5824H64.7554V33.4589C64.7554 32.6295 64.5466 31.9589 64.1289 31.4471C63.7172 30.9295 63.0936 30.6706 62.2583 30.6706C61.3348 30.6706 60.6348 31.0148 60.1584 31.703C59.6878 32.3853 59.4525 33.2412 59.4525 34.2706V34.553C59.4525 35.5824 59.6995 36.4412 60.1936 37.1294C60.6878 37.8118 61.4554 38.1529 62.4966 38.1529C63.1083 38.1529 63.6319 38.0294 64.0671 37.7824C64.5024 37.5353 64.8583 37.2324 65.1348 36.8735L65.9907 37.5794C65.7024 37.9971 65.2613 38.3824 64.6671 38.7353C64.0789 39.0824 63.3554 39.2559 62.4966 39.2559C61.0848 39.2559 60.0025 38.8206 59.2495 37.95C58.4966 37.0735 58.1201 35.9412 58.1201 34.553ZM67.2633 39V25.5089H68.5691V39H67.2633ZM69.9388 36.3618C69.9388 35.4441 70.3035 34.7324 71.0329 34.2265C71.7623 33.7147 72.6947 33.4589 73.8299 33.4589H76.0976V32.7089C76.0976 32.0853 75.9387 31.5853 75.6211 31.2089C75.3035 30.8324 74.7564 30.6442 73.9799 30.6442C73.1976 30.6442 72.6358 30.8059 72.2947 31.1295C71.9535 31.4471 71.7829 31.8295 71.7829 32.2765V32.3471H70.4947V32.2677C70.4947 31.5324 70.8123 30.9001 71.4476 30.3706C72.0829 29.8354 72.9417 29.5677 74.0241 29.5677C75.1005 29.5677 75.9329 29.8295 76.5211 30.353C77.1152 30.8765 77.4123 31.6618 77.4123 32.7089V36.8824C77.4123 37.2647 77.4417 37.6265 77.5005 37.9677C77.5593 38.3088 77.6446 38.6059 77.7564 38.8588V39H76.5034C76.4152 38.8471 76.3358 38.6471 76.2652 38.4C76.1946 38.1471 76.1505 37.8971 76.1329 37.65C75.9035 38.0382 75.5329 38.3882 75.0211 38.7C74.5093 39.0118 73.8535 39.1676 73.0535 39.1676C72.1711 39.1676 71.43 38.9324 70.83 38.4618C70.2358 37.9912 69.9388 37.2912 69.9388 36.3618ZM71.2447 36.3C71.2447 36.8824 71.4152 37.3294 71.7564 37.6412C72.1035 37.9471 72.6329 38.1 73.3446 38.1C74.0623 38.1 74.7005 37.8677 75.2593 37.403C75.8182 36.9324 76.0976 36.4265 76.0976 35.8853V34.4206H74.0064C73.1005 34.4206 72.4123 34.5883 71.9417 34.9236C71.477 35.2588 71.2447 35.7177 71.2447 36.3ZM79.2143 39V29.8324H80.3966L80.4496 31.0765H80.4848C80.7437 30.6765 81.079 30.3265 81.4907 30.0265C81.9025 29.7207 82.3995 29.5677 82.9819 29.5677C83.1172 29.5677 83.2584 29.5824 83.4054 29.6118C83.5584 29.6412 83.6642 29.6677 83.7231 29.6912V30.9177C83.6054 30.8942 83.476 30.8765 83.3348 30.8648C83.1995 30.8471 83.0495 30.8383 82.8848 30.8383C82.326 30.8383 81.8437 30.9883 81.4378 31.2883C81.0319 31.5824 80.726 31.953 80.5201 32.4V39H79.2143ZM84.4221 35.8147V29.8324H85.728V35.8324C85.728 36.6265 85.9104 37.1971 86.2751 37.5441C86.6456 37.8853 87.1662 38.0559 87.8368 38.0559C88.4074 38.0559 88.9074 37.9059 89.3368 37.6059C89.7721 37.3 90.1192 36.9088 90.378 36.4324V29.8324H91.6838V39H90.5015L90.4486 37.7118H90.4133C90.0603 38.1706 89.6309 38.5294 89.125 38.7882C88.6192 39.0471 88.0574 39.1765 87.4398 39.1765C86.5162 39.1765 85.7809 38.9176 85.2339 38.4C84.6927 37.8824 84.4221 37.0206 84.4221 35.8147ZM92.9388 36.2824H94.2447V36.3441C94.2447 36.9559 94.4594 37.4118 94.8888 37.7118C95.3241 38.0118 95.8976 38.1618 96.6094 38.1618C97.3329 38.1618 97.8976 38.0147 98.3035 37.7206C98.7093 37.4265 98.9123 37.0441 98.9123 36.5735C98.9123 36.103 98.7446 35.753 98.4093 35.5236C98.0799 35.2883 97.4064 35.053 96.3888 34.8177C95.3711 34.5824 94.5858 34.2559 94.0329 33.8383C93.4859 33.4206 93.2123 32.8471 93.2123 32.1177C93.2123 31.3765 93.5182 30.7677 94.13 30.2912C94.7417 29.8089 95.5594 29.5677 96.5829 29.5677C97.6064 29.5677 98.4299 29.8207 99.0535 30.3265C99.677 30.8265 99.9887 31.4883 99.9887 32.3118V32.3648H98.6917V32.303C98.6917 31.7971 98.5152 31.4001 98.1623 31.1118C97.8093 30.8177 97.2829 30.6706 96.5829 30.6706C95.8829 30.6706 95.3623 30.7971 95.0211 31.0501C94.68 31.2971 94.5094 31.6265 94.5094 32.0383C94.5094 32.4383 94.6829 32.7589 95.03 33C95.3829 33.2353 96.0652 33.4706 97.077 33.7059C98.0888 33.9412 98.8623 34.2677 99.3976 34.6853C99.9387 35.103 100.209 35.7059 100.209 36.4941C100.209 37.2941 99.9093 37.9559 99.3093 38.4794C98.7152 38.9971 97.8182 39.2559 96.6182 39.2559C95.4182 39.2559 94.5035 38.9941 93.8741 38.4706C93.2506 37.9412 92.9388 37.2324 92.9388 36.3441V36.2824Z"
                fill="#F2F2F2"
            />
        </svg>
    )
}

export default HiTechPark