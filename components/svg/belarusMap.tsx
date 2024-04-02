import React, { ComponentProps, FC } from 'react'

const BelarusMap: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="645" height="400" viewBox="0 0 645 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M126.509 102.217C129.531 101.081 130.25 101.489 130.066 99.7205C129.134 96.3385 130.106 95.4642 131.564 94.1528C133.022 92.8414 129.465 95.3377 133.994 91.9671C138.523 88.5964 139.185 86.5948 140.03 86.3618L142.567 85.6629C145.385 84.8863 146.231 84.6533 147.329 83.1377C148.428 81.6221 147.427 81.2914 149.477 81.0296C151.528 80.7678 150.964 80.9232 152.966 81.5845C154.967 82.2459 153.276 82.7119 156.94 81.7023C161.731 80.3821 159.943 82.6941 164.248 81.811C168.553 80.928 171.273 81.9975 171.012 79.9472C172.605 81.3279 174.394 79.0153 175.521 78.7047C178.001 78.0213 181.407 77.6893 182.8 77.6087C184.357 78.4936 187.677 79.9038 188.494 78.4658C189.515 76.6684 189.127 75.2592 191.488 76.1247C193.849 76.9903 195.793 75.242 196.667 76.2137C197.541 77.1855 194.139 80.2452 198.882 79.8485C203.624 79.4517 204.518 78.2953 205.082 78.14C205.646 77.9847 210.437 76.6642 210.457 74.5363C210.983 69.8429 210.75 68.9974 211.595 68.7644C212.441 68.5315 215.026 66.9094 216.105 67.5219C217.183 68.1344 217.825 68.2615 218.65 70.1564C219.475 72.0513 220.068 73.1007 220.864 73.7911C221.661 74.4815 222.429 73.967 223.177 75.5801C223.775 76.8705 226.043 76.8115 227.102 76.6207C226.263 76.1443 225.653 75.322 229.921 75.8441C235.255 76.4968 234.818 76.0108 237.306 76.235C239.793 76.4592 242.359 76.9653 242.514 77.5289C242.669 78.0926 242.008 80.0942 244.855 80.5226C247.133 80.8653 251.602 81.898 253.552 82.3715C253.305 82.9447 253.403 84.4743 255.766 86.0065C258.72 87.9217 258.263 89.5638 260.109 89.6615C261.586 89.7397 262.759 89.74 263.16 89.7304L265.697 89.0315M265.697 89.0315C265.746 88.1084 265.541 88.4678 267.232 88.0019C268.923 87.5359 268.078 87.7689 269.079 88.0996C269.879 88.3642 270.896 86.9927 271.305 86.2739C271.415 85.9401 271.717 85.1289 272.044 84.5541C272.452 83.8357 273.346 82.679 274.037 81.8824C274.727 81.0858 274.289 80.5992 275.903 79.8514C277.516 79.1036 278.186 80.4357 279.11 80.4846C280.033 80.5335 281.364 79.8633 282.773 79.475L284.746 78.9314C286.155 78.5431 287.875 79.2816 288.41 77.9218C288.945 76.5621 288.43 75.7937 288.042 74.3845C287.653 72.9754 288.217 72.8195 288.062 72.2564C287.907 71.6932 288.752 71.4592 289.442 70.6625C290.132 69.8659 290.336 69.5064 290.822 69.0693C291.308 68.6321 290.512 67.9422 290.075 67.4565C289.638 66.9707 290.201 66.8146 290.969 66.2998C291.737 65.785 292.427 64.9884 292.476 64.0655C292.525 63.1426 292.933 62.4231 293.419 61.9862C293.808 61.6367 294.793 61.1022 295.236 60.8787L297.054 59.7717L298.618 59.9468C298.764 60.1089 299.184 60.4583 299.697 60.5593C300.338 60.6855 300.98 60.8123 302.622 61.2698C304.264 61.7273 303.467 61.0368 304.362 59.8804C305.256 58.724 305.023 57.8791 306.918 57.0536C308.813 56.2282 309.406 57.2778 310.047 57.4044C310.688 57.5309 309.872 58.9688 309.949 59.2507C310.027 59.5325 311.212 61.6321 312.495 61.8849C313.777 62.1376 313.495 62.2158 314.059 62.0605C314.623 61.9052 315.342 62.3133 316.265 62.3624C317.188 62.4115 316.877 61.2839 317.849 60.4094C318.821 59.5348 319.434 58.4568 321.611 57.5537C323.788 56.6506 324.099 57.778 324.458 57.9821C324.746 58.1455 326.1 58.4393 326.742 58.5659C327.639 58.5208 329.449 58.487 329.511 58.7124C329.573 58.9379 330.651 59.9145 331.182 60.3746C331.217 60.8702 331.294 62.1024 331.317 63.0664C331.346 64.2714 331.473 63.6301 331.093 65.554C330.713 67.478 331.404 66.6814 331.685 66.6037C331.967 66.526 332.764 67.2162 333.483 67.6246C334.202 68.0329 334.28 68.3148 335.562 68.5678C336.845 68.8208 336.252 67.7712 336.865 66.6927C337.477 65.6142 336.914 65.7695 337.04 65.1282C337.141 64.6151 338.618 63.8848 339.344 63.5838L340.831 63.4774L342.26 60.9609C342.586 60.3858 344.068 59.452 344.767 59.057C345.733 58.8921 347.833 58.5156 348.509 58.3292C349.354 58.0963 348.995 57.8922 349.481 57.455C349.967 57.0179 352.299 56.6784 352.941 56.8049C353.454 56.9061 355.052 57.1327 355.788 57.2333C356.335 57.3857 357.774 57.8383 359.15 58.4296C360.869 59.1686 361.384 59.9364 361.899 60.7043C362.414 61.4721 365.902 62.027 366.339 62.513C366.777 62.999 366.854 63.2809 367.651 63.971C368.447 64.6612 368.341 63.1744 368.545 62.8149L369.158 61.7364C369.653 61.701 370.835 61.8807 371.596 62.8838C372.548 64.1377 372.986 64.6237 373.063 64.9055C373.141 65.1873 372.917 67.6749 372.994 67.9568L374.159 72.1842C373.939 72.8515 373.344 74.2888 372.73 74.7007C371.962 75.2155 373.118 76.1098 373.351 76.9553C373.584 77.8008 375.304 78.5399 376.742 79.3565C378.18 80.1732 377.976 80.5327 378.568 81.5824C379.161 82.6321 380.035 83.6041 380.705 84.9356C381.375 86.2671 379.607 86.4512 379.121 86.8883C378.635 87.3255 379.101 89.0165 379.615 89.7843C380.027 90.3986 379.126 92.0419 378.623 92.7867C378.497 93.4281 378.162 94.8545 377.835 95.4297C377.427 96.1487 378.097 97.4801 378.457 97.6843C378.816 97.8885 380.381 98.0639 380.74 98.268C381.1 98.4722 381.663 98.3169 383.024 98.8518C384.384 99.3866 384.102 99.4643 384.976 100.436C385.851 101.408 385.413 100.922 386.774 101.457C387.862 101.885 389.482 101.014 390.156 100.525C390.463 100.542 391.151 100.615 391.438 100.778C391.798 100.982 391.418 102.906 391.369 103.83C391.321 104.753 390.835 105.19 390.3 106.55C389.765 107.91 390.533 107.396 391.534 107.726C392.534 108.057 393.098 107.902 394.099 108.232C395.1 108.563 395.206 110.05 395.361 110.614C395.517 111.177 397.032 112.276 399.014 115.065C399.966 116.319 399.888 116.037 400.763 117.009C401.462 117.787 403.192 117.755 403.969 117.642C405.116 118.135 407.537 119.145 408.05 119.246C408.691 119.373 409.614 119.422 411.743 119.442C413.871 119.462 415.153 119.715 415.872 120.123C416.591 120.532 417.213 122.786 417.679 124.477C418.145 126.168 417.25 127.324 416.997 128.607C416.744 129.89 416.413 130.89 416.928 131.658C417.443 132.426 418.007 132.271 419.853 132.369C421.33 132.447 421.972 131.987 422.108 131.747C422.756 131.164 424.19 129.839 424.742 129.202C425.432 128.405 427.201 128.221 428.561 128.756C429.921 129.291 432.049 129.311 433.332 129.564C434.615 129.817 435.052 130.303 435.285 131.149L436.527 135.658C436.916 137.067 437.324 136.348 438.966 136.805C440.28 137.171 442.079 137.464 442.814 137.564C443.909 137.869 446.331 139.324 447.263 142.706C447.787 146.807 446.242 144.504 444.988 145.456C443.735 146.408 443.608 147.049 442.996 148.127C442.383 149.206 442.869 148.769 442.13 150.489C441.391 152.208 441.391 152.208 440.497 153.364C439.602 154.521 439.553 155.444 439.427 156.085C439.3 156.726 438.124 157.96 436.307 159.067C434.489 160.175 434.13 159.97 431.797 160.31C429.465 160.649 429.592 160.008 428.154 159.191C426.716 158.375 425.948 158.889 423.869 157.946C421.789 157.003 422.664 157.975 422.459 158.335C422.255 158.694 420.564 159.16 419.078 159.266C417.591 159.373 416.57 161.17 416.084 161.608C415.598 162.045 416.55 163.299 416.53 165.427C416.51 167.555 415.791 167.146 415.664 167.788C415.538 168.429 416.208 169.761 417.413 169.732C418.618 169.703 418.627 173.036 421.629 174.028C424.631 175.02 426.147 176.119 427.108 180.706C428.068 185.293 427.778 182.037 428.807 183.573C429.837 185.109 429.915 185.39 430.07 185.954L431.157 189.9C431.468 191.027 432.702 192.203 433.012 193.33C433.323 194.458 433.429 195.945 433.585 196.508C433.74 197.072 436.587 197.5 437.306 197.909C438.025 198.317 437.49 199.677 438.083 200.727C438.675 201.777 439.774 200.261 440.619 200.028C441.296 199.842 441.47 202.017 441.473 203.128C440.868 203.497 439.287 204.216 437.81 204.138C435.963 204.04 436.274 205.167 433.737 205.866C431.201 206.565 431.327 205.924 431.046 206.002C430.82 206.064 429.234 209.331 428.469 210.957C427.254 210.584 424.713 209.869 424.262 209.994C423.698 210.149 421.88 211.256 420.753 211.567C419.626 211.877 420.431 215.901 420.227 216.26C420.023 216.62 419.284 218.339 418.622 220.341C417.961 222.343 417.116 222.576 416.989 223.217C416.863 223.858 416.357 226.424 416.259 228.27C416.161 230.116 415.344 231.554 416.015 232.886C416.685 234.217 415.557 234.528 415.46 236.374C415.362 238.22 419.374 242.876 421.249 244.179C423.124 245.482 421.034 250 419.42 250.747C417.807 251.495 417.827 249.367 417.467 249.163C417.108 248.959 415.057 249.221 414.31 247.607C413.562 245.994 413.766 245.634 412.688 245.022C411.609 244.409 409.734 243.107 408.247 243.213C406.76 243.32 404.943 244.427 403.816 244.738C402.688 245.048 399.364 248.39 398.032 249.06C396.701 249.73 395.614 245.785 394.768 246.018C393.923 246.251 393.67 247.533 392.493 248.767C391.317 250.001 391.142 251.565 390.607 252.926C390.072 254.286 387.458 254.703 386.049 255.091C384.64 255.48 382.494 248.793 381.62 247.821C380.746 246.849 379.561 244.75 377.792 244.934C376.023 245.118 376.518 248.014 375.546 248.888C374.574 249.763 373.165 250.151 371.552 250.899C370.261 251.497 370.391 254.756 370.617 256.311C370.439 256.765 369.723 257.467 368.285 256.651C366.487 255.63 367.304 254.192 366.352 252.938C365.591 251.935 364.752 252.267 364.428 252.558C363.275 252.775 360.871 253.296 360.482 253.646C359.996 254.083 360.152 254.646 358.538 255.394C356.925 256.142 356.382 254.169 355.507 253.197C354.633 252.225 354.964 251.224 354.604 251.02C354.245 250.816 353.506 252.536 353.175 253.537C352.844 254.537 350.104 255.596 348.49 256.344C346.877 257.091 344.7 257.994 345.292 259.044C345.885 260.094 343.659 261.92 342.765 263.076C341.87 264.232 340.763 262.415 340.122 262.288C339.48 262.162 335.089 259.43 333.271 260.537C331.454 261.644 331.143 260.517 328.966 261.42C326.789 262.323 329.142 259.856 328.141 259.525C327.14 259.194 324.129 254.869 320.951 255.442C317.773 256.014 318.725 257.268 317.598 257.578C316.471 257.889 316.393 257.607 314.187 257.305C311.981 257.004 310.339 256.546 309.057 256.293C307.774 256.04 307.112 258.042 305.14 258.585C303.167 259.129 303.702 257.769 302.186 256.67C300.67 255.572 293.751 256.872 291.827 256.492C289.903 256.113 286.521 257.045 281.089 258.238C275.656 259.432 271.682 259.314 269.427 259.936C267.173 260.557 265.102 262.947 264.13 263.821C263.158 264.695 260.593 264.189 259.621 265.064C258.649 265.938 257.317 266.608 255.675 266.151C254.033 265.694 248.678 267.169 247.453 269.326C246.228 271.483 247.209 273.942 247.52 275.069C247.83 276.196 243.427 278.926 242.639 281.569C241.852 284.212 240.695 283.317 238.8 284.143C236.905 284.968 237.955 284.376 238.13 282.811C238.306 281.247 237.538 281.762 235.924 282.509C234.311 283.257 234.846 281.897 232.922 281.517C230.998 281.138 231.872 282.11 230.618 283.062C229.365 284.014 230.57 283.985 231.24 285.316C231.91 286.648 231.628 286.726 230.607 288.523C228.965 288.066 228.188 285.247 227.645 283.275L226.635 279.611C226.325 278.484 229.988 277.474 228.832 276.58C227.676 275.685 228.085 274.966 227.619 273.275C228.231 272.197 227.512 271.788 226.997 271.021C226.483 270.253 227.61 269.942 227.912 267.736C228.214 265.531 226.465 263.587 225.105 263.052C223.744 262.517 222.151 261.137 221.355 260.446C220.558 259.756 220.023 261.116 219.382 260.99C218.74 260.863 215.174 260.027 214.047 260.337C212.92 260.648 212.376 258.675 212.27 257.188C212.163 255.701 215.576 247.18 217.569 244.508C219.562 241.837 221.38 240.729 223.712 240.39C226.044 240.051 226.959 236.766 227.98 234.969C229 233.171 226.475 228.409 226.165 227.282C225.854 226.154 226.058 225.795 226.078 223.667C226.098 221.539 224.174 221.159 223.018 220.265C221.862 219.37 223.291 216.854 223.262 215.649C223.234 214.444 222.078 213.55 220.999 212.937C219.921 212.325 217.191 207.922 215.773 204.977C214.355 202.032 209.926 194.762 209.538 193.353C209.15 191.944 206.032 186.132 205.411 183.877M265.697 89.0315C265.648 89.9547 266.318 91.2862 266.396 91.568C266.473 91.8498 267.066 92.8995 266.939 93.5408C266.813 94.1821 265.179 97.058 265.335 97.6217C265.49 98.1854 266.646 99.0797 266.879 99.9252C267.112 100.771 267.423 101.898 266.81 102.977C266.198 104.055 265.634 104.21 265.993 104.414C266.353 104.619 266.945 105.668 268.918 105.125C270.891 104.581 272.504 103.833 273.428 103.882C274.351 103.931 276.838 104.155 276.148 104.952C275.458 105.749 274.126 106.419 273.718 107.138C273.31 107.857 273.232 107.575 273.261 108.78C273.29 109.985 274.728 110.801 272.833 111.627C270.937 112.452 274.368 110.597 269.81 112.763C265.252 114.929 265.456 114.569 264.562 115.725C263.667 116.881 262.928 118.601 263.161 119.447C263.394 120.292 263.501 121.779 262.655 122.012C261.81 122.245 260.731 121.632 259.633 123.148C258.534 124.664 257.203 125.334 256.513 126.13C255.822 126.927 255.9 127.209 255.365 128.569C254.83 129.929 254.879 129.006 254.781 130.853C254.684 132.699 254.071 133.777 254.537 135.468L255.469 138.85C256.479 142.514 254.67 146.955 254.621 147.878C254.572 148.801 254.037 150.161 254.193 150.725C254.348 151.288 254.046 153.494 253.842 153.854C253.638 154.213 252.948 155.01 254.153 154.981C255.358 154.952 256.893 153.923 257.408 154.691C257.923 155.458 259.001 156.071 259.157 156.635C259.312 157.198 259.953 157.325 260.109 157.888C260.264 158.452 261.857 159.832 260.885 160.707C259.913 161.581 259.223 162.378 258.659 162.534C258.096 162.689 258.251 163.252 256.609 162.795C254.967 162.338 253.839 162.648 254.452 161.57C255.064 160.491 255.142 160.773 255.113 159.568C255.084 158.363 256.24 159.257 254.084 158.032C252.358 157.053 251.156 156.211 250.771 155.913C250.216 156.47 248.914 157.759 248.136 158.458C247.164 159.333 247.213 158.409 246.756 160.052C246.299 161.694 246.862 161.538 246.25 162.617C245.637 163.695 245.919 163.618 244.179 165.007C241.079 165.861 240.409 164.529 239.515 165.686C238.62 166.842 237.853 167.357 237.648 167.716C237.444 168.075 236.443 167.745 237.114 169.076C237.784 170.408 237.706 170.126 238.58 171.098C239.455 172.07 239.892 172.556 239.124 173.071C238.356 173.586 237.209 176.024 236.567 175.898C235.334 174.722 235.615 174.644 235.178 174.158C234.741 173.672 234.896 174.236 234.051 174.469C233.206 174.702 231.057 176.81 230.367 177.606C229.677 178.403 228.734 180.482 227.733 180.152C226.732 179.821 226.45 179.899 225.449 179.568C224.449 179.237 223.011 178.42 222.447 178.576C221.883 178.731 221.349 180.091 220.503 180.324C219.658 180.557 216.12 180.926 215.557 181.081L213.02 181.78C211.611 182.169 210.639 183.042 209.793 183.275C209.117 183.462 207.905 183.392 207.384 183.334L205.411 183.877M101.814 178.764C116.043 178.684 145.461 178.26 149.294 177.204L183.114 167.885C182.103 167.153 179.943 165.181 179.383 163.151C178.685 160.615 178.889 160.255 179.211 155.921C179.533 151.587 181.252 152.327 181.117 149.635C180.982 146.943 182.216 148.119 180.03 145.689C177.844 143.259 177.689 142.695 176.124 142.52C174.56 142.345 173.87 143.141 173.481 141.732L172.782 139.196L167.146 140.749C166.145 140.418 163.933 139.875 163.094 140.349C162.254 140.823 161.5 141.9 161.227 142.38L158.409 143.156C158.127 143.234 160.042 140.28 157.788 140.902C155.533 141.523 153.793 142.912 153.279 142.144C152.867 141.53 152.317 140.489 152.094 140.045C150.801 139.39 147.848 138.061 146.371 137.983C144.524 137.885 143.029 134.659 140.415 135.076C137.8 135.493 136.498 137.368 132.805 137.173M182.832 167.963C184.882 167.701 184.339 165.728 185.621 165.981C186.904 166.234 187.554 169.694 190.528 169.481C193.501 169.268 195.989 169.493 198.943 171.408C201.896 173.323 205.025 173.674 205.112 177.289C205.198 180.904 204.79 181.623 205.411 183.877M296.981 59.4882C296.825 58.9246 296.621 59.2841 297.127 56.7188C297.633 54.1535 298.993 54.6885 297.964 53.1528C295.671 49.236 295.186 49.673 294.642 47.7002C294.099 45.7274 295.099 46.0581 293.866 44.8819C292.632 43.7057 292.554 43.4239 292.244 42.2966C291.933 41.1692 293.187 40.2171 291.545 39.7601C289.902 39.303 289.134 39.8178 287.949 37.7185C284.938 33.3933 284.783 32.8296 284.268 32.0618C283.753 31.294 283.238 30.5261 282.597 30.3996C282.084 30.2984 281.068 30.7198 280.624 30.9432C279.762 31.4839 277.936 32.4118 277.524 31.7975C277.009 31.0295 277.446 31.5155 276.98 29.8246C276.514 28.1336 277.505 25.1317 277.272 24.2862C275.563 18.0859 277.847 18.6696 277.429 16.0555C277.012 13.4413 278.217 13.4125 276.342 12.1098C274.467 10.8071 275.233 10.2929 273.311 9.91279C271.389 9.5327 270.59 8.84307 269.59 8.51239C266.538 8.44348 265.402 5.42098 264.324 4.80847C263.245 4.19595 262.429 5.63391 260.145 5.05019C257.862 4.46647 254.043 4.91238 253.042 4.58169C251.4 4.12449 250.223 5.35828 249.096 5.66891C247.638 6.98054 245.539 8.16527 244.926 9.24374C244.314 10.3222 242.341 10.8656 241.826 10.098C241.311 9.33033 240.641 7.99866 239.514 8.3093C238.387 8.61993 238.134 9.90275 236.463 8.24057C231.576 2.61269 230.09 2.71915 229.652 2.23315C229.215 1.74714 229.497 1.66949 229.186 0.542161C228.938 -0.359699 227.831 -0.701716 227.309 -0.759994L225.337 -0.216385C224.465 -0.077353 222.419 -0.0189946 221.207 -0.897813C219.691 -1.99634 220.488 -1.30616 218.127 -2.17171C216.238 -2.86414 213.848 -4.12617 212.89 -4.67064C211.837 -5.18921 209.563 -6.17976 208.886 -5.99338L206.068 -5.2168C205.274 -4.79594 203.564 -3.73852 203.074 -2.87574C202.462 -1.79727 203.336 -0.825266 200.926 -0.767661C198.516 -0.710056 195.416 0.144187 195.008 0.863166C194.599 1.58215 193.909 2.37878 192.937 3.25308C191.965 4.12738 191.663 6.33317 191.1 6.48849C190.536 6.6438 190.769 7.4893 189.36 7.87759M261.912 4.8668L261.446 3.17581C261.291 2.61215 262.34 2.01969 262.185 1.45602L261.797 0.0468665C261.564 -0.798627 260.252 -2.25664 261.584 -2.92676C263.965 -4.18935 265.092 -4.49998 264.218 -5.47199C263.597 -7.72664 261.828 -7.54252 264.209 -8.80511C266.114 -9.81518 267.99 -10.8577 268.69 -11.2526C268.92 -11.5182 269.164 -12.1718 268.301 -12.6618C265.27 -14.8588 265.863 -13.8092 264.318 -16.1127C261.667 -20.2337 260.637 -21.7693 260.404 -22.6148C260.171 -23.4603 260.249 -23.1785 258.937 -24.6365C257.237 -27.5037 256.8 -27.9897 256.976 -29.5542C257.151 -31.1186 257.151 -31.1186 256.918 -31.9641C256.732 -32.6405 251.136 -43.4098 248.362 -48.7099L254.001 -59.0575C253.897 -59.4333 253.72 -60.7387 253.837 -62.9543C253.983 -65.7237 254.421 -65.2377 254.363 -67.6477C254.305 -70.0576 253.333 -69.1833 254.072 -70.9031C258.446 -74.8375 259.447 -74.5068 259.545 -76.3531C259.643 -78.1994 260.925 -77.9464 259.614 -79.4044C258.302 -80.8624 257.865 -81.3484 256.301 -81.5238M441.629 203.691C443.494 203.42 445.535 203.929 446.322 204.217L448.577 203.596C451.811 201.249 453.573 198.985 454.049 198.146L453.583 196.455C452.962 194.2 453.603 194.327 454.342 192.607C456.841 187.37 460.505 186.36 461.302 187.051C462.098 187.741 463.798 190.608 466.073 187.859C468.347 185.109 467.22 185.42 470.038 184.643C472.293 184.022 474.989 182.066 476.055 181.166C475.148 180.81 474.236 179.848 477.843 178.854L485.171 176.835C484.448 178.247 483.53 180.562 485.637 178.526C490.992 177.05 493.43 178.198 493.994 178.042C494.558 177.887 497.462 180.725 499.153 180.259C500.844 179.793 502.544 182.661 503.088 184.633C507.197 187.443 507.655 185.801 508.888 186.977C510.122 188.153 510.511 189.563 511.822 191.021L514.882 194.423C515.695 194.805 516.926 195.679 515.348 196.114L509.711 197.667C508.02 198.133 506.893 198.443 507.359 200.134C507.732 201.487 509.859 201.871 510.876 201.894C511.612 201.995 513.175 202.534 513.548 203.887L514.946 208.96C515.334 210.369 521.98 212.48 520.241 213.869C521.095 216.969 525.595 212.393 527.956 213.259C530.318 214.125 528.12 217.156 532.756 215.272C537.392 213.388 540.162 213.535 540.259 211.688C540.357 209.842 541.455 208.326 543.078 210.912C546.101 213.96 549.435 213.809 550.725 213.353C551.204 213.625 552.015 214.514 551.423 215.89C550.832 217.265 551.902 219.093 552.511 219.835L553.365 222.935C554.054 225.07 555.746 229.375 556.997 229.515C558.562 229.691 560.69 229.711 560.31 231.635C559.931 233.559 561.475 235.862 561.708 236.708C561.941 237.553 563.992 237.291 565.945 238.876C567.897 240.46 570.471 244.299 570.744 240.889C576.752 234.078 576.645 232.592 577.773 232.281C578.9 231.97 580.047 229.532 581.155 231.349C587.111 234.256 581.115 235.605 589.443 233.917C597.771 232.229 597.723 233.152 599.589 231.121C605.11 224.748 607.647 224.049 608.774 223.739C609.901 223.428 611.319 226.373 611.874 222.884C612.429 219.396 612.167 217.345 613.858 216.879C615.549 216.414 618.27 217.483 619.018 219.097C621.747 223.499 623.136 225.239 624.574 226.056C629.529 228.633 630.015 228.195 632.299 228.779C634.582 229.363 637.205 232.279 638.226 230.481C639.773 223.991 642.64 222.291 644.282 222.748M230.603 288.524L232.662 291.595C233.177 292.363 233.536 292.567 233.769 293.412C234.002 294.258 234.06 296.668 234.293 297.513C234.526 298.359 235.478 299.613 236.274 300.303C237.071 300.993 240.539 303.676 241.132 304.726C241.724 305.775 241.161 305.931 242.676 307.029C244.192 308.128 246.941 310.403 247.738 311.093C248.375 311.645 249.7 313.079 250.283 313.727C251.035 313.52 252.343 313.281 251.566 313.98C250.594 314.854 249.903 315.651 248.776 315.962C247.649 316.272 247.416 315.427 247.24 316.991C247.065 318.556 246.706 318.351 247.706 318.682C248.707 319.013 249.99 319.266 250.145 319.829C250.301 320.393 251.097 321.083 251.33 321.929C251.563 322.774 251.738 321.21 252.029 324.465C252.32 327.721 253.602 327.974 253.349 329.256C253.096 330.539 252.659 330.053 252.202 331.695C251.745 333.337 251.745 333.337 251.259 333.774C250.773 334.212 251.132 334.416 249.441 334.882C247.75 335.348 245.728 336.814 245.242 337.252C244.756 337.689 243.989 338.204 243.658 339.204C243.327 340.205 243.152 341.77 241.976 343.003C241.035 343.99 238.687 346.841 237.63 348.143C237.144 348.58 235.968 349.814 235.152 351.252C234.131 353.049 233.645 353.486 233.392 354.769C233.139 356.052 233.012 356.693 232.477 358.053C231.942 359.413 233.478 358.384 231.408 360.774C229.337 363.164 229.872 361.803 228.034 365.039C226.564 367.627 224.939 371.047 224.31 372.433C223.361 375.221 221.533 380.84 221.82 381.003C222.18 381.207 223.824 381.664 224.261 382.15C224.61 382.539 225.643 384.599 226.116 385.581L226.426 386.708C226.675 387.61 226.354 391.58 226.162 393.452C226.538 393.348 227.336 393.31 227.522 393.987C227.755 394.832 228.678 394.881 229.475 395.571C230.112 396.123 231.386 397.37 231.943 397.924C232.594 398.452 233.927 399.621 234.051 400.072C234.206 400.635 235.391 402.735 234.827 402.89C234.264 403.045 232.446 404.153 231.417 402.617C230.387 401.081 232.719 400.742 229.746 400.955C225.771 400.837 226.18 400.118 224.975 400.147C223.77 400.176 224.236 401.867 220.796 400.389C217.356 398.911 216.433 398.862 215.432 398.531C214.432 398.2 213.051 399.794 211.176 398.491C209.301 397.188 207.941 396.653 207.504 396.167C207.066 395.681 208.378 397.139 206.27 394.991C204.162 392.843 203.52 392.716 202.442 392.104C201.363 391.491 201.208 390.928 198.516 391.063C195.825 391.198 194.853 392.073 194.134 391.664C193.415 391.256 194.154 389.536 191.335 390.313L186.262 391.711C185.699 391.866 184.951 390.253 184.057 391.409C183.162 392.565 183.162 392.565 182.599 392.72C182.035 392.875 181.238 392.185 180.393 392.418C179.547 392.651 178.469 392.039 178.42 392.962C178.381 393.7 179.194 394.669 179.605 395.061C178.999 395.43 177.763 396.296 177.662 396.809C177.535 397.451 179.721 399.881 176.796 399.171C173.872 398.46 174.309 398.946 172.589 398.207C170.869 397.468 168.79 396.525 167.711 395.913C166.633 395.3 167.43 395.99 164.893 396.689C162.357 397.388 160.919 396.571 158.537 397.834C156.156 399.097 156.156 399.097 154.854 400.972C153.551 402.847 153.094 404.489 152.685 405.208C152.277 405.927 154.307 407.793 150.333 407.675C146.359 407.558 143.414 408.976 142.821 407.926C142.229 406.876 142.666 407.362 141.17 404.136C139.675 400.909 141.19 402.007 138.723 399.655C136.255 397.303 136.692 397.789 135.022 396.127C133.351 394.464 133.138 391.491 131.116 392.957C129.094 394.424 127.354 395.813 126.256 397.329C125.157 398.845 123.835 402.848 122.834 402.517C121.833 402.186 121.143 402.983 120.191 401.729C119.239 400.475 118.287 399.222 117.646 399.095C117.004 398.969 118.471 400.99 116.052 397.715C113.634 394.439 117.053 398.045 112.4 393.263C107.747 388.481 109.165 391.425 107.309 387.995C105.454 384.564 106.884 382.047 103.191 381.852C99.4984 381.657 98.7306 382.171 95.8835 381.743C93.0363 381.315 91.4719 381.139 89.8297 380.682C88.1876 380.225 88.4694 380.147 85.0587 379.874C81.6479 379.601 85.7087 383.334 79.7728 378.298C73.8368 373.263 80.0947 373.964 80.1436 373.041C80.1924 372.118 82.0323 368.882 79.4658 368.376C76.8994 367.87 75.1119 370.182 71.8564 370.473C68.6009 370.764 67.3183 370.511 65.0061 368.722C62.6938 366.933 61.693 366.602 59.3319 365.737C56.9708 364.871 54.066 362.033 54.6385 365.211C55.2109 368.389 56.9106 371.256 57.2212 372.383C57.5319 373.51 58.6877 374.405 57.1521 375.434C55.6164 376.464 53.3417 379.213 51.2912 379.475C49.2407 379.737 50.9893 381.681 47.288 378.153C43.5866 374.624 43.8196 375.469 42.2752 373.166C40.7307 370.862 39.1663 370.687 38.1367 369.151C37.107 367.616 32.4512 371.628 36.9517 367.052C41.4523 362.476 43.9127 361.495 43.0376 360.523C42.1625 359.552 44.6998 358.853 39.0055 357.996C33.3113 357.139 32.67 357.012 30.8525 358.12C29.035 359.227 31.5026 361.579 26.5962 358.08C21.6899 354.58 21.3792 353.453 19.3776 352.791C17.7763 352.262 15.7176 351.98 14.8884 351.906C15.2057 352.323 15.1467 352.623 12.372 350.476C8.90357 347.793 11.8283 348.504 7.74744 346.899C3.66654 345.294 2.3839 345.041 2.02441 344.837C1.73682 344.674 1.04949 344.6 0.741769 344.584"
                stroke="url(#paint0_radial_862_4784)"
                strokeOpacity="0.33"
                strokeWidth="2.92335"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_862_4784"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(332.187 179.57) rotate(88.28) scale(185.34 262.219)"
                >
                    <stop stopColor="#B6B6B6" />
                    <stop offset="1" stopColor="#B6B6B6" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export default BelarusMap