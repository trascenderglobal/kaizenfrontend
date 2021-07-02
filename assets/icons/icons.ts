/* eslint-disable prettier/prettier */

interface Icon {
  [name: string]: string
}

interface Icons {
  [index: string]: Icon
}

const icons: Icons = {
  profile: {
    outline:
      "<g transform='translate(4.000000, 2.000000)'><path d='M15.8399,16.1931 C15.8399,19.4891 11.3199,19.8701 7.9209,19.8701 L7.67766371,19.8698897 C5.51210414,19.8646311 -0.0001,19.7279077 -0.0001,16.1731 C-0.0001,12.9443653 4.33825235,12.5128651 7.71138402,12.4965976 L8.16412764,12.4963103 C10.329545,12.5015689 15.8399,12.6382923 15.8399,16.1931 Z M7.9209,13.9961 C3.6599,13.9961 1.4999,14.7281 1.4999,16.1731 C1.4999,17.6311 3.6599,18.3701 7.9209,18.3701 C12.1809,18.3701 14.3399,17.6381 14.3399,16.1931 C14.3399,14.7351 12.1809,13.9961 7.9209,13.9961 Z M7.9209,-0.0003 C10.8489,-0.0003 13.2299,2.3817 13.2299,5.3097 C13.2299,8.2377 10.8489,10.6187 7.9209,10.6187 L7.8889,10.6187 C4.9669,10.6097 2.5999,8.2267 2.60986843,5.3067 C2.60986843,2.3817 4.9919,-0.0003 7.9209,-0.0003 Z M7.9209,1.4277 C5.7799,1.4277 4.03787882,3.1687 4.03787882,5.3097 C4.0309,7.4437 5.7599,9.1837 7.8919,9.1917 L7.9209,9.9057 L7.9209,9.1917 C10.0609,9.1917 11.8019,7.4497 11.8019,5.3097 C11.8019,3.1687 10.0609,1.4277 7.9209,1.4277 Z' ></path></g>",
  },
  password: {
    outline:
      "<path d='M13.1582 7.20452L13.1582 7.204C13.1582 3.91979 10.4884 1.25 7.2042 1.25C3.92218 1.25 1.2502 3.9196 1.2502 7.204C1.2502 9.69415 2.78541 11.8284 4.95532 12.7168L4.95666 15.6427L3.5 15.6434C3.49989 15.6434 3.49978 15.6434 3.49966 15.6434C2.2576 15.6436 1.25 16.6513 1.25 17.8934C1.25 19.1356 2.25779 20.1434 3.5 20.1434L3.50034 20.1434L4.95672 20.1427L4.95628 21.2998L3.5 21.2998C2.25779 21.2998 1.25 22.3076 1.25 23.5498C1.25 24.792 2.25779 25.7998 3.5 25.7998L7.206 25.7998C8.44819 25.7998 9.45596 24.7921 9.456 23.5499C9.456 23.5499 9.456 23.5498 9.456 23.5498L9.45711 12.7156C11.6245 11.827 13.1565 9.69539 13.1582 7.20452ZM7.2042 5.75C8.00489 5.75 8.65785 6.40098 8.6582 7.20735C8.65656 8.00564 8.004 8.658 7.2042 8.658C6.40286 8.658 5.7502 8.00423 5.7502 7.204C5.7502 6.40221 6.40242 5.75 7.2042 5.75Z' stroke-width='1.5'/>",
  },
  lock: {
    outline:
      '<g transform="translate(4.000000, 2.000000)"><path d="M8.3749,0.002 C11.2949,0.002 13.6729,2.38 13.6729,5.303 L13.6727875,6.879599 C15.4479968,7.49741017 16.725,9.18740957 16.725,11.1708 L16.725,15.4598 C16.725,17.9648 14.688,20.0018 12.183,20.0018 L4.542,20.0018 C2.037,20.0018 -9.23705556e-14,17.9648 -9.23705556e-14,15.4598 L-9.23705556e-14,11.1708 C-9.23705556e-14,9.18778429 1.27652074,7.49804876 3.05120634,6.87994928 L3.0519,5.303 C3.0579,3.863 3.6149,2.534 4.6199,1.538 C5.6259,0.541 6.9539,-0.036 8.3749,0.002 Z M12.183,8.1288 L4.542,8.1288 C2.864,8.1288 1.5,9.4928 1.5,11.1708 L1.5,15.4598 C1.5,17.1378 2.864,18.5018 4.542,18.5018 L12.183,18.5018 C13.86,18.5018 15.225,17.1378 15.225,15.4598 L15.225,11.1708 C15.225,9.4928 13.86,8.1288 12.183,8.1288 Z M8.3623,11.4546 C8.7763,11.4546 9.1123,11.7906 9.1123,12.2046 L9.1123,14.4256 C9.1123,14.8396 8.7763,15.1756 8.3623,15.1756 C7.9483,15.1756 7.6123,14.8396 7.6123,14.4256 L7.6123,12.2046 C7.6123,11.7906 7.9483,11.4546 8.3623,11.4546 Z M8.3719,1.502 L8.3559,1.502 C7.3429,1.502 6.3939,1.892 5.6769,2.603 C4.9549,3.317 4.5559,4.27 4.5519,5.286 L4.551,6.62823323 L12.172,6.62823323 L12.1729,5.303 C12.1729,3.207 10.4679,1.502 8.3719,1.502 Z"></path></g>',
  },
  edit: {
    outline:
      "<g transform='translate(2.000000, 3.000000)'><path d='M18.7504743,17.4395426 C19.1644743,17.4395426 19.5004743,17.7755426 19.5004743,18.1895426 C19.5004743,18.6035426 19.1644743,18.9395426 18.7504743,18.9395426 L11.4974743,18.9395426 C11.0834743,18.9395426 10.7474743,18.6035426 10.7474743,18.1895426 C10.7474743,17.7755426 11.0834743,17.4395426 11.4974743,17.4395426 L18.7504743,17.4395426 Z M14.1162743,0.653642644 C14.1662743,0.692642644 15.8392743,1.99264264 15.8392743,1.99264264 C16.4472743,2.35464264 16.9222743,3.00164264 17.1022743,3.76764264 C17.2812743,4.52564264 17.1512743,5.30764264 16.7342743,5.96864264 C16.7314843,5.97305264 16.7287267,5.97740594 16.7190724,5.99036671 L16.7115384,6.00037748 C16.6438514,6.08958254 16.3496103,6.46163507 14.8645637,8.32222949 C14.8507703,8.34661541 14.8351388,8.36945203 14.8180743,8.39164264 C14.7930299,8.42435375 14.7657794,8.45442349 14.736689,8.48180241 C14.6353903,8.60933705 14.5284065,8.74334814 14.4159195,8.88423852 L14.1879908,9.16970248 C13.7176954,9.7586788 13.1598596,10.4570865 12.4980586,11.2854628 L12.1584183,11.7105768 C10.8807459,13.3097378 9.24443431,15.3572426 7.14827431,17.9796426 C6.68927431,18.5516426 6.00127431,18.8846426 5.26227431,18.8936426 L1.62327431,18.9396426 L1.61327431,18.9396426 C1.26627431,18.9396426 0.964274306,18.7016426 0.883274306,18.3626426 L0.0642743057,14.8916426 C-0.104725694,14.1726426 0.0632743057,13.4306426 0.524274306,12.8546426 L9.94427431,1.07264264 C9.94827431,1.06864264 9.95127431,1.06364264 9.95527431,1.05964264 C10.9882743,-0.175357356 12.8562743,-0.357357356 14.1162743,0.653642644 Z M8.894,4.787 L1.69527431,13.7916426 C1.52427431,14.0056426 1.46127431,14.2816426 1.52427431,14.5466426 L2.20527431,17.4316426 L5.24427431,17.3936426 C5.53327431,17.3906426 5.80027431,17.2616426 5.97727431,17.0416426 C6.88875764,15.901226 8.03433097,14.4678757 9.21212914,12.9940199 L9.62883197,12.4725647 L9.62883197,12.4725647 L10.0462387,11.9502119 C11.1508202,10.5678883 12.2420592,9.20206663 13.1551253,8.05886375 L8.894,4.787 Z M11.1102743,2.01664264 L9.831,3.615 L14.0917742,6.88592888 C14.9118863,5.85869797 15.4513975,5.1821385 15.5012743,5.11764264 C15.6652743,4.85164264 15.7292743,4.47564264 15.6432743,4.11364264 C15.5552743,3.74264264 15.3242743,3.42764264 14.9912743,3.22664264 C14.9202743,3.17764264 13.2352743,1.86964264 13.1832743,1.82864264 C12.5492743,1.32064264 11.6242743,1.40864264 11.1102743,2.01664264 Z' ></path></g>",
  },
  message: {
    outline:
      "<g transform='translate(1.000000, 1.000000)'><path d='M15.6589,1 C18.9889,1 21.4999,3.717 21.4999,7.32 L21.4999,14.188 C21.4999,16.032 20.8479,17.698 19.6629,18.88 C18.5999,19.939 17.2209,20.5 15.6749,20.5 L5.8219,20.5 C4.2789,20.5 2.9009,19.94 1.8369,18.88 C0.6519,17.698 -0.0001,16.032 -0.0001,14.188 L-0.0001,7.32 C-0.0001,3.717 2.5109,1 5.8409,1 L15.6589,1 Z M15.6589,2.5 L5.8409,2.5 C3.3259,2.5 1.4999,4.527 1.4999,7.32 L1.4999,14.188 C1.4999,15.631 1.9959,16.92 2.8959,17.817 C3.6719,18.592 4.6849,19 5.8249,19 L15.6589,19 C15.6609,18.998 15.6689,19 15.6749,19 C16.8159,19 17.8279,18.592 18.6039,17.817 C19.5049,16.92 19.9999,15.631 19.9999,14.188 L19.9999,7.32 C19.9999,4.527 18.1739,2.5 15.6589,2.5 Z M17.2349,7.1288 C17.4959,7.4498 17.4469,7.9218 17.1259,8.1838 L12.6819,11.7958 C12.1199,12.2418 11.4479,12.4648 10.7769,12.4648 C10.1079,12.4648 9.4409,12.2438 8.8829,11.8018 L4.3979,8.1858 C4.0749,7.9258 4.0249,7.4528 4.2839,7.1308 C4.5449,6.8098 5.0169,6.7588 5.3389,7.0178 L9.8199,10.6298 C10.3829,11.0758 11.1759,11.0758 11.7429,10.6258 L16.1789,7.0198 C16.5009,6.7568 16.9729,6.8068 17.2349,7.1288 Z' ></path></g>",
  },
  show: {
    outline:
      "<g transform='translate(2.000000, 4.000000)'><path d='M10.0029,0.0005 C14.1389,0.0035 17.8529,2.9025 19.9389,7.7565 C20.0209,7.9455 20.0209,8.1595 19.9389,8.3485 C17.8539,13.2035 14.1389,16.1025 10.0029,16.1055 L9.9969,16.1055 C5.8609,16.1025 2.1469,13.2035 0.0609,8.3485 C-0.0201,8.1595 -0.0201,7.9455 0.0609,7.7565 C2.1469,2.9025 5.8619,0.0035 9.9969,0.0005 L10.0029,0.0005 Z M9.9999,1.5005 C6.5639,1.5015 3.4299,3.9445 1.5699,8.0525 C3.4299,12.1615 6.5629,14.6045 9.9999,14.6055 C13.4369,14.6045 16.5699,12.1615 18.4299,8.0525 C16.5699,3.9445 13.4369,1.5015 9.9999,1.5005 Z M9.9996,4.1413 C12.1566,4.1413 13.9116,5.8963 13.9116,8.0533 C13.9116,10.2093 12.1566,11.9633 9.9996,11.9633 C7.8426,11.9633 6.0886,10.2093 6.0886,8.0533 C6.0886,5.8963 7.8426,4.1413 9.9996,4.1413 Z M9.9996,5.6413 C8.6696,5.6413 7.5886,6.7233 7.5886,8.0533 C7.5886,9.3823 8.6696,10.4633 9.9996,10.4633 C11.3296,10.4633 12.4116,9.3823 12.4116,8.0533 C12.4116,6.7233 11.3296,5.6413 9.9996,5.6413 Z' ></path></g>",
  },
  hide: {
    outline:
      "<g transform='translate(2.000000, 3.000000)'><path d='M18.4174,0.21975 C18.7104,0.51275 18.7104,0.98775 18.4174,1.28075 L2.6434,17.05375 C2.4974,17.20075 2.3054,17.27375 2.1134,17.27375 C1.9214,17.27375 1.7294,17.20075 1.5834,17.05375 C1.2904,16.76075 1.2904,16.28675 1.5834,15.99375 L3.55534696,14.0230028 C2.14153178,12.7298365 0.942216653,10.9866302 0.0615,8.93395 C-0.0205,8.74395 -0.0205,8.52995 0.0615,8.34095 C1.0825,5.97695 2.5205,4.01995 4.2205,2.68295 C7.51332757,0.0769990431 11.8423054,-0.0613257214 15.2686834,2.30827702 L17.3574,0.21975 C17.6504,-0.07325 18.1244,-0.07325 18.4174,0.21975 Z M18.0472,5.04075 C18.7712,6.00175 19.4072,7.11275 19.9382,8.33875 C20.0212,8.52875 20.0212,8.74475 19.9382,8.93375 C17.8422,13.79075 14.1272,16.68975 10.0002,16.68975 C9.0632,16.68975 8.1312,16.53775 7.2312,16.23875 C6.8382,16.10775 6.6252,15.68275 6.7562,15.28975 C6.8872,14.89575 7.3102,14.68675 7.7052,14.81475 C8.4522,15.06375 9.2242,15.18975 10.0002,15.18975 C13.4282,15.18975 16.5612,12.74775 18.4302,8.63675 C17.9742,7.63775 17.4432,6.73275 16.8492,5.94275 C16.6002,5.61175 16.6662,5.14075 16.9972,4.89175 C17.3272,4.64275 17.7982,4.71075 18.0472,5.04075 Z M5.1495,3.86095 C3.7135,4.99095 2.4805,6.63695 1.5705,8.63895 C2.3639438,10.3913952 3.40632366,11.8693129 4.6170542,12.9607029 L6.75485503,10.8231134 C6.31993117,10.1831911 6.0859,9.42869604 6.0859,8.63855 C6.0859,6.47855 7.8419,4.72155 9.9999,4.72155 C10.7828812,4.72155 11.5487925,4.95995861 12.1864706,5.39085121 L14.1880037,3.38945022 C11.3351603,1.54522332 7.86298928,1.71346462 5.1495,3.86095 Z M13.2375,8.46155 C13.6455,8.53455 13.9165,8.92455 13.8435,9.33255 C13.5565,10.92555 12.2945,12.18955 10.7025,12.47955 C10.6575,12.48755 10.6115,12.49155 10.5675,12.49155 C10.2125,12.49155 9.8965,12.23755 9.8305,11.87555 C9.7565,11.46855 10.0265,11.07755 10.4345,11.00355 C11.4145,10.82555 12.1905,10.04755 12.3665,9.06655 C12.4405,8.65955 12.8305,8.39155 13.2375,8.46155 Z M9.9999,6.22155 C8.6689,6.22155 7.5859,7.30555 7.5859,8.63855 C7.5859,9.02393171 7.67662769,9.39593921 7.84765172,9.73001539 L11.093292,6.48399 C10.75914,6.31371 10.3833,6.22155 9.9999,6.22155 Z' ></path></g>",
  },
  setting: {
    outline:
      "<g transform='translate(2.000000, 1.000000)'><path d='M10.2672,1.0005 C10.9832,1.0005 11.6792,1.2945 12.1782,1.8055 C12.6762,2.3195 12.9512,3.0245 12.9302,3.7395 C12.9322,3.9005 12.9852,4.0865 13.0812,4.2495 C13.2402,4.5195 13.4912,4.7095 13.7892,4.7875 C14.0872,4.8615 14.3992,4.8215 14.6642,4.6645 C15.9442,3.9335 17.5732,4.3715 18.3042,5.6415 L18.9272,6.7205 C18.9432,6.7495 18.9572,6.7775 18.9692,6.8065 C19.6312,8.0575 19.1892,9.6325 17.9592,10.3515 C17.7802,10.4545 17.6352,10.5985 17.5352,10.7725 C17.3802,11.0415 17.3372,11.3615 17.4152,11.6555 C17.4952,11.9555 17.6862,12.2045 17.9552,12.3585 C18.5622,12.7075 19.0152,13.2955 19.1962,13.9745 C19.3772,14.6525 19.2782,15.3885 18.9252,15.9955 L18.2612,17.1015 C17.5302,18.3575 15.9012,18.7925 14.6342,18.0605 C14.4652,17.9635 14.2702,17.9105 14.0762,17.9055 L14.0702,17.9055 C13.7812,17.9055 13.4842,18.0285 13.2682,18.2435 C13.0492,18.4625 12.9292,18.7545 12.9312,19.0645 C12.9242,20.5335 11.7292,21.7215 10.2672,21.7215 L9.0142,21.7215 C7.5452,21.7215 6.3502,20.5275 6.3502,19.0585 C6.3482,18.8775 6.2962,18.6895 6.1992,18.5265 C6.0422,18.2525 5.7882,18.0565 5.4952,17.9785 C5.2042,17.9005 4.8852,17.9435 4.6232,18.0955 C3.9952,18.4455 3.2562,18.5305 2.5802,18.3405 C1.9052,18.1495 1.3222,17.6855 0.9802,17.0705 L0.3552,15.9935 C-0.3758,14.7255 0.0592,13.1005 1.3252,12.3685 C1.6842,12.1615 1.9072,11.7755 1.9072,11.3615 C1.9072,10.9475 1.6842,10.5605 1.3252,10.3535 C0.0582,9.6175 -0.3758,7.9885 0.3542,6.7205 L1.0322,5.6075 C1.7532,4.3535 3.3832,3.9115 4.6542,4.6415 C4.8272,4.7445 5.0152,4.7965 5.2062,4.7985 C5.8292,4.7985 6.3502,4.2845 6.3602,3.6525 C6.3562,2.9555 6.6312,2.2865 7.1322,1.7815 C7.6352,1.2775 8.3032,1.0005 9.0142,1.0005 L10.2672,1.0005 Z M10.2672,2.5005 L9.0142,2.5005 C8.7042,2.5005 8.4142,2.6215 8.1952,2.8395 C7.9772,3.0585 7.8582,3.3495 7.8602,3.6595 C7.8392,5.1215 6.6442,6.2985 5.1972,6.2985 C4.7332,6.2935 4.2862,6.1685 3.8982,5.9365 C3.3532,5.6265 2.6412,5.8175 2.3222,6.3725 L1.6452,7.4855 C1.3352,8.0235 1.5252,8.7345 2.0772,9.0555 C2.8962,9.5295 3.4072,10.4135 3.4072,11.3615 C3.4072,12.3095 2.8962,13.1925 2.0752,13.6675 C1.5262,13.9855 1.3362,14.6925 1.6542,15.2425 L2.2852,16.3305 C2.4412,16.6115 2.6962,16.8145 2.9912,16.8975 C3.2852,16.9795 3.6092,16.9445 3.8792,16.7945 C4.2762,16.5615 4.7382,16.4405 5.2022,16.4405 C5.4312,16.4405 5.6602,16.4695 5.8842,16.5295 C6.5602,16.7115 7.1472,17.1635 7.4952,17.7705 C7.7212,18.1515 7.8462,18.5965 7.8502,19.0505 C7.8502,19.7005 8.3722,20.2215 9.0142,20.2215 L10.2672,20.2215 C10.9062,20.2215 11.4282,19.7035 11.4312,19.0645 C11.4272,18.3585 11.7032,17.6875 12.2082,17.1825 C12.7062,16.6845 13.4022,16.3855 14.0982,16.4055 C14.5542,16.4165 14.9932,16.5395 15.3802,16.7595 C15.9372,17.0785 16.6482,16.8885 16.9702,16.3385 L17.6342,15.2315 C17.7822,14.9765 17.8252,14.6565 17.7462,14.3615 C17.6682,14.0665 17.4722,13.8105 17.2082,13.6595 C16.5902,13.3035 16.1492,12.7295 15.9662,12.0415 C15.7852,11.3665 15.8842,10.6295 16.2372,10.0225 C16.4672,9.6225 16.8042,9.2855 17.2082,9.0535 C17.7502,8.7365 17.9402,8.0275 17.6252,7.4755 C17.6122,7.4535 17.6002,7.4305 17.5902,7.4065 L17.0042,6.3905 C16.6852,5.8355 15.9752,5.6445 15.4182,5.9615 C14.8162,6.3175 14.1002,6.4195 13.4122,6.2385 C12.7252,6.0605 12.1492,5.6255 11.7902,5.0115 C11.5602,4.6275 11.4352,4.1805 11.4312,3.7255 C11.4402,3.3835 11.3202,3.0765 11.1022,2.8515 C10.8852,2.6275 10.5802,2.5005 10.2672,2.5005 Z M9.6451,7.9746 C11.5121,7.9746 13.0311,9.4946 13.0311,11.3616 C13.0311,13.2286 11.5121,14.7466 9.6451,14.7466 C7.7781,14.7466 6.2591,13.2286 6.2591,11.3616 C6.2591,9.4946 7.7781,7.9746 9.6451,7.9746 Z M9.6451,9.4746 C8.6051,9.4746 7.7591,10.3216 7.7591,11.3616 C7.7591,12.4016 8.6051,13.2466 9.6451,13.2466 C10.6851,13.2466 11.5311,12.4016 11.5311,11.3616 C11.5311,10.3216 10.6851,9.4746 9.6451,9.4746 Z' ></path></g>",
  },
  activity: {
    outline:
      "<g transform='translate(2.000000, 2.000000)'><path d='M12.8969,0.8421 C13.3109,0.8421 13.6469,1.1781 13.6469,1.5921 C13.6469,2.0061 13.3109,2.3421 12.8969,2.3421 L5.6289,2.3421 C3.1209,2.3421 1.4999,4.0661 1.4999,6.7361 L1.4999,14.8181 C1.4999,17.5231 3.0819,19.2031 5.6289,19.2031 L14.2329,19.2031 C16.7409,19.2031 18.3619,17.4821 18.3619,14.8181 L18.3619,7.7791 C18.3619,7.3651 18.6979,7.0291 19.1119,7.0291 C19.5259,7.0291 19.8619,7.3651 19.8619,7.7791 L19.8619,14.8181 C19.8619,18.3381 17.5999,20.7031 14.2329,20.7031 L5.6289,20.7031 C2.2619,20.7031 -0.0001,18.3381 -0.0001,14.8181 L-0.0001,6.7361 C-0.0001,3.2111 2.2619,0.8421 5.6289,0.8421 L12.8969,0.8421 Z M15.0123,7.6719 C15.3403,7.9259 15.4003,8.3969 15.1463,8.7239 L12.2163,12.5039 C12.0943,12.6619 11.9143,12.7649 11.7163,12.7889 C11.5163,12.8159 11.3183,12.7579 11.1603,12.6349 L8.3423,10.4209 L5.8113,13.7099 C5.6633,13.9019 5.4413,14.0029 5.2163,14.0029 C5.0563,14.0029 4.8953,13.9519 4.7593,13.8479 C4.4313,13.5949 4.3693,13.1239 4.6223,12.7959 L7.6153,8.9059 C7.7373,8.7469 7.9183,8.6439 8.1163,8.6189 C8.3183,8.5929 8.5163,8.6489 8.6733,8.7739 L11.4933,10.9889 L13.9603,7.8059 C14.2143,7.4769 14.6843,7.4159 15.0123,7.6719 Z M17.9673,2.7533531e-14 C19.4413,2.7533531e-14 20.6393,1.198 20.6393,2.672 C20.6393,4.146 19.4413,5.345 17.9673,5.345 C16.4943,5.345 15.2953,4.146 15.2953,2.672 C15.2953,1.198 16.4943,2.7533531e-14 17.9673,2.7533531e-14 Z M17.9673,1.5 C17.3213,1.5 16.7953,2.025 16.7953,2.672 C16.7953,3.318 17.3213,3.845 17.9673,3.845 C18.6133,3.845 19.1393,3.318 19.1393,2.672 C19.1393,2.025 18.6133,1.5 17.9673,1.5 Z' ></path></g>",
  },
  document: {
    outline:
      "<g transform='translate(3.000000, 2.000000)'><path d='M12.9087,8.17124146e-14 C16.0527,8.17124146e-14 18.1647,2.153 18.1647,5.357 L18.1647,14.553 C18.1647,17.785 16.1177,19.887 12.9497,19.907 L5.2567,19.91 C2.1127,19.91 -0.0003,17.757 -0.0003,14.553 L-0.0003,5.357 C-0.0003,2.124 2.0467,0.023 5.2147,0.004 L12.9077,8.17124146e-14 L12.9087,8.17124146e-14 Z M12.9087,1.5 L5.2197,1.504 C2.8917,1.518 1.4997,2.958 1.4997,5.357 L1.4997,14.553 C1.4997,16.968 2.9047,18.41 5.2557,18.41 L12.9447,18.407 C15.2727,18.393 16.6647,16.951 16.6647,14.553 L16.6647,5.357 C16.6647,2.942 15.2607,1.5 12.9087,1.5 Z M12.7158,13.4737 C13.1298,13.4737 13.4658,13.8097 13.4658,14.2237 C13.4658,14.6377 13.1298,14.9737 12.7158,14.9737 L5.4958,14.9737 C5.0818,14.9737 4.7458,14.6377 4.7458,14.2237 C4.7458,13.8097 5.0818,13.4737 5.4958,13.4737 L12.7158,13.4737 Z M12.7158,9.2872 C13.1298,9.2872 13.4658,9.6232 13.4658,10.0372 C13.4658,10.4512 13.1298,10.7872 12.7158,10.7872 L5.4958,10.7872 C5.0818,10.7872 4.7458,10.4512 4.7458,10.0372 C4.7458,9.6232 5.0818,9.2872 5.4958,9.2872 L12.7158,9.2872 Z M8.2505,5.1104 C8.6645,5.1104 9.0005,5.4464 9.0005,5.8604 C9.0005,6.2744 8.6645,6.6104 8.2505,6.6104 L5.4955,6.6104 C5.0815,6.6104 4.7455,6.2744 4.7455,5.8604 C4.7455,5.4464 5.0815,5.1104 5.4955,5.1104 L8.2505,5.1104 Z' ></path></g>",
  },
  logout: {
    outline:
      "<g transform='translate(2.000000, 2.000000)'><path d='M9.3083,0 C11.7543,0 13.7443,1.99 13.7443,4.436 L13.7443,5.368 C13.7443,5.782 13.4083,6.118 12.9943,6.118 C12.5803,6.118 12.2443,5.782 12.2443,5.368 L12.2443,4.436 C12.2443,2.816 10.9273,1.5 9.3083,1.5 L4.4333,1.5 C2.8163,1.5 1.5003,2.816 1.5003,4.436 L1.5003,15.565 C1.5003,17.184 2.8163,18.5 4.4333,18.5 L9.3193,18.5 C10.9313,18.5 12.2443,17.188 12.2443,15.576 L12.2443,14.633 C12.2443,14.219 12.5803,13.883 12.9943,13.883 C13.4083,13.883 13.7443,14.219 13.7443,14.633 L13.7443,15.576 C13.7443,18.016 11.7583,20 9.3193,20 L4.4333,20 C1.9893,20 0.0003,18.011 0.0003,15.565 L0.0003,4.436 C0.0003,1.99 1.9893,0 4.4333,0 L9.3083,0 Z M17.3884,6.554 L20.3164,9.469 C20.3425203,9.49492031 20.3659115,9.52186976 20.387318,9.55039275 L20.3164,9.469 C20.3518297,9.50393069 20.3833375,9.54209853 20.4106748,9.58280455 C20.4227077,9.6012464 20.4343142,9.62031535 20.4450703,9.63991619 C20.4537987,9.65523007 20.4618316,9.67121581 20.4692784,9.68746498 C20.4755915,9.70181939 20.4816509,9.71618462 20.4872676,9.73076915 C20.4948074,9.74977474 20.5014094,9.76931306 20.5072001,9.78910914 C20.5115634,9.80470095 20.5155749,9.82025822 20.5190909,9.8360017 C20.5235582,9.8551018 20.5270758,9.87431713 20.5298429,9.89368117 C20.5314091,9.90627242 20.5329392,9.91946559 20.534122,9.93275816 C20.5364114,9.95556556 20.5374,9.97773898 20.5374,10 L20.5323,10.062 L20.5302493,10.1017257 C20.5300188,10.103423 20.5297827,10.1051185 20.5295408,10.1068122 L20.5374,10 C20.5374,10.0555105 20.5312529,10.1104764 20.5193059,10.1639208 C20.5155749,10.1797418 20.5115634,10.195299 20.5070738,10.2106529 C20.5014094,10.2306869 20.4948074,10.2502253 20.4874127,10.2694533 C20.4816509,10.2838154 20.4755915,10.2981806 20.4691057,10.31231 C20.4618316,10.3287842 20.4537987,10.3447699 20.4451921,10.360458 C20.4343142,10.3796847 20.4227077,10.3987536 20.4103006,10.4172409 C20.403281,10.428205 20.3955821,10.4390289 20.3875831,10.4496533 C20.3637735,10.480979 20.3378281,10.5104472 20.3097553,10.5377382 L17.3884,13.447 C17.2424,13.593 17.0504,13.666 16.8594,13.666 C16.6674,13.666 16.4744,13.593 16.3284,13.445 C16.0364,13.151 16.0374,12.677 16.3304,12.385 L17.9703,10.75 L7.7461,10.75 C7.3321,10.75 6.9961,10.414 6.9961,10 C6.9961,9.586 7.3321,9.25 7.7461,9.25 L17.9723,9.25 L16.3304,7.616 C16.0374,7.324 16.0354,6.85 16.3284,6.556 C16.6204,6.262 17.0944,6.262 17.3884,6.554 Z'></path><g id='Group-8' transform='translate(16.000000, 6.000000)'><mask id='mask-2' fill='white'><polygon id='path-1' points='0.10964744 0.33524936 4.537 0.33524936 4.537 7.666 0.10964744 7.666'></polygon></mask><g id='Clip-7'></g></g></g>",
  },
  'time-circle': {
    outline:
      "<g transform='translate(2.000000, 2.000000)'><path d='M10,0 C15.514,0 20,4.486 20,10 C20,15.514 15.514,20 10,20 C4.486,20 0,15.514 0,10 C0,4.486 4.486,0 10,0 Z M10,1.5 C5.313,1.5 1.5,5.313 1.5,10 C1.5,14.687 5.313,18.5 10,18.5 C14.687,18.5 18.5,14.687 18.5,10 C18.5,5.313 14.687,1.5 10,1.5 Z M9.6612,5.0954 C10.0762,5.0954 10.4112,5.4314 10.4112,5.8454 L10.4112,10.2674 L13.8162,12.2974 C14.1712,12.5104 14.2882,12.9704 14.0762,13.3264 C13.9352,13.5614 13.6862,13.6924 13.4312,13.6924 C13.3002,13.6924 13.1682,13.6584 13.0472,13.5874 L9.2772,11.3384 C9.0512,11.2024 8.9112,10.9574 8.9112,10.6934 L8.9112,5.8454 C8.9112,5.4314 9.2472,5.0954 9.6612,5.0954 Z' ></path></g>",
  },
  'edit-square': {
    bold: '<g transform="translate(2.000000, 2.000000)" fill-rule="nonzero"><path d="M14.6652914,0.0103352515 C16.1038147,-0.0795717312 17.5223585,0.419911506 18.5912613,1.39889865 C19.5702563,2.46779278 20.0697436,3.88632517 19.9898256,5.33482656 L19.9898256,5.33482656 L19.9898256,14.6651734 C20.0797333,16.1136748 19.5702563,17.5322072 18.601251,18.6011013 C17.5323483,19.5800885 16.1038147,20.0795717 14.6652914,19.9896647 L14.6652914,19.9896647 L5.33486949,19.9896647 C3.88635644,20.0795717 2.46781264,19.5800885 1.39890991,18.6011013 C0.419914885,17.5322072 -0.0795723715,16.1136748 0.0103353347,14.6651734 L0.0103353347,14.6651734 L0.0103353347,5.33482656 C-0.0795723715,3.88632517 0.419914885,2.46779278 1.39890991,1.39889865 C2.46781264,0.419911506 3.88635644,-0.0795717312 5.33486949,0.0103352515 L5.33486949,0.0103352515 Z M14.4055581,4.57561204 C13.7861939,3.95625283 12.7872194,3.95625283 12.1678552,4.57561204 L12.1678552,4.57561204 L11.4985422,5.25490924 C11.3986448,5.35480589 11.3986448,5.52463019 11.4985422,5.62452684 C11.4985422,5.62452684 11.5181517,5.64401285 11.5530542,5.67870947 L11.7987742,5.92308627 C11.9409122,6.06450374 12.1183227,6.24111115 12.2964731,6.41870519 L12.9005598,7.02250437 C13.0266032,7.14912234 13.1102211,7.23397283 13.1168809,7.24285253 C13.2267681,7.36272851 13.2966964,7.52256314 13.2966964,7.70237711 C13.2966964,8.06200504 13.0069937,8.36169498 12.6373732,8.36169498 C12.4675475,8.36169498 12.3077116,8.29176733 12.1978244,8.18188102 L12.1978244,8.18188102 L10.529537,6.52359667 C10.449619,6.44367935 10.3097626,6.44367935 10.2298446,6.52359667 L10.2298446,6.52359667 L5.46473618,11.2886668 C5.13507459,11.6183257 4.94526943,12.0578709 4.93527968,12.5273852 L4.93527968,12.5273852 L4.87534121,14.8949357 C4.87534121,15.0248014 4.91530019,15.1446773 5.0052079,15.2345843 C5.09511561,15.3244913 5.21499255,15.3744396 5.34485923,15.3744396 L5.34485923,15.3744396 L7.69244934,15.3744396 C8.17195711,15.3744396 8.63148538,15.184636 8.98112646,14.8449874 L8.98112646,14.8449874 L15.7042249,8.1019637 C16.3135994,7.48260448 16.3135994,6.48363801 15.7042249,5.87426846 L15.7042249,5.87426846 Z"></path></g>',
  },
  'danger-circle': {
    outline:
      '<g transform="translate(2.000000, 2.000000)"><path d="M10,0 C15.514,0 20,4.486 20,10 C20,15.514 15.514,20 10,20 C4.486,20 0,15.514 0,10 C0,4.486 4.486,0 10,0 Z M10,1.5 C5.313,1.5 1.5,5.313 1.5,10 C1.5,14.687 5.313,18.5 10,18.5 C14.687,18.5 18.5,14.687 18.5,10 C18.5,5.313 14.687,1.5 10,1.5 Z M10.0039,12.7959 C10.5569,12.7959 11.0039,13.2429 11.0039,13.7959 C11.0039,14.3489 10.5569,14.7959 10.0039,14.7959 C9.4509,14.7959 8.9989,14.3489 8.9989,13.7959 C8.9989,13.2429 9.4419,12.7959 9.9939,12.7959 L10.0039,12.7959 Z M9.9941,5.454 C10.4081,5.454 10.7441,5.79 10.7441,6.204 L10.7441,10.623 C10.7441,11.037 10.4081,11.373 9.9941,11.373 C9.5801,11.373 9.2441,11.037 9.2441,10.623 L9.2441,6.204 C9.2441,5.79 9.5801,5.454 9.9941,5.454 Z" ></path></g>',
  },
  plus: {
    outline:
      '<g transform="translate(1.000000, 1.000000)"><path d="M15.436,0 C19.063,0 21.5,2.546 21.5,6.335 L21.5,15.165 C21.5,18.954 19.063,21.5 15.436,21.5 L6.064,21.5 C2.437,21.5 0,18.954 0,15.165 L0,6.335 C0,2.546 2.437,0 6.064,0 L15.436,0 Z M15.436,1.5 L6.064,1.5 C3.292,1.5 1.5,3.397 1.5,6.335 L1.5,15.165 C1.5,18.103 3.292,20 6.064,20 L15.436,20 C18.209,20 20,18.103 20,15.165 L20,6.335 C20,3.397 18.209,1.5 15.436,1.5 Z M10.75,6.3273 C11.164,6.3273 11.5,6.6633 11.5,7.0773 L11.5,9.99 L14.4165,9.9902 C14.8305,9.9902 15.1665,10.3262 15.1665,10.7402 C15.1665,11.1542 14.8305,11.4902 14.4165,11.4902 L11.5,11.49 L11.5,14.4043 C11.5,14.8183 11.164,15.1543 10.75,15.1543 C10.336,15.1543 10,14.8183 10,14.4043 L10,11.49 L7.0835,11.4902 C6.6685,11.4902 6.3335,11.1542 6.3335,10.7402 C6.3335,10.3262 6.6685,9.9902 7.0835,9.9902 L10,9.99 L10,7.0773 C10,6.6633 10.336,6.3273 10.75,6.3273 Z"></path></g>',
    bold: '<g transform="translate(2.000000, 2.000000)"><path d="M14.6602,0.0001 C18.0602,0.0001 20.0002,1.9201 20.0002,5.3301 L20.0002,5.3301 L20.0002,14.6701 C20.0002,18.0601 18.0702,20.0001 14.6702,20.0001 L14.6702,20.0001 L5.3302,20.0001 C1.9202,20.0001 0.0002,18.0601 0.0002,14.6701 L0.0002,14.6701 L0.0002,5.3301 C0.0002,1.9201 1.9202,0.0001 5.3302,0.0001 L5.3302,0.0001 Z M9.9902,5.5101 C9.5302,5.5101 9.1602,5.8801 9.1602,6.3401 L9.1602,6.3401 L9.1602,9.1601 L6.3302,9.1601 C6.1102,9.1601 5.9002,9.2501 5.7402,9.4001 C5.5902,9.5601 5.5002,9.7691 5.5002,9.9901 C5.5002,10.4501 5.8702,10.8201 6.3302,10.8301 L6.3302,10.8301 L9.1602,10.8301 L9.1602,13.6601 C9.1602,14.1201 9.5302,14.4901 9.9902,14.4901 C10.4502,14.4901 10.8202,14.1201 10.8202,13.6601 L10.8202,13.6601 L10.8202,10.8301 L13.6602,10.8301 C14.1202,10.8201 14.4902,10.4501 14.4902,9.9901 C14.4902,9.5301 14.1202,9.1601 13.6602,9.1601 L13.6602,9.1601 L10.8202,9.1601 L10.8202,6.3401 C10.8202,5.8801 10.4502,5.5101 9.9902,5.5101 Z"></path></g>',
  },
  notification: {
    outline:
      '<g transform="translate(3.000000, 1.000000)"><path d="M7.3243,19.106 C7.8423,19.683 8.5073,20 9.1973,20 L9.1983,20 C9.8913,20 10.5593,19.683 11.0783,19.105 C11.3563,18.798 11.8303,18.773 12.1373,19.05 C12.4453,19.327 12.4703,19.802 12.1933,20.109 C11.3853,21.006 10.3223,21.5 9.1983,21.5 L9.1963,21.5 C8.0753,21.499 7.0143,21.005 6.2093,20.108 C5.9323,19.801 5.9573,19.326 6.2653,19.05 C6.5733,18.772 7.0473,18.797 7.3243,19.106 Z M9.2471,0 C13.6921,0 16.6781,3.462 16.6781,6.695 C16.6781,8.358 17.1011,9.063 17.5501,9.811 C17.9941,10.549 18.4971,11.387 18.4971,12.971 C18.1481,17.018 13.9231,17.348 9.2471,17.348 C4.5711,17.348 0.3451,17.018 8.66453236e-05,13.035 C-0.0029,11.387 0.5001,10.549 0.9441,9.811 L1.10084456,9.54715551 C1.48677474,8.88385813 1.8161,8.16235294 1.8161,6.695 C1.8161,3.462 4.8021,0 9.2471,0 Z M9.2471,1.5 C5.7521,1.5 3.3161,4.238 3.3161,6.695 C3.3161,8.774 2.7391,9.735 2.2291,10.583 C1.8201,11.264 1.4971,11.802 1.4971,12.971 C1.6641,14.857 2.9091,15.848 9.2471,15.848 C15.5501,15.848 16.8341,14.813 17.0001,12.906 C16.9971,11.802 16.6741,11.264 16.2651,10.583 C15.7551,9.735 15.1781,8.774 15.1781,6.695 C15.1781,4.238 12.7421,1.5 9.2471,1.5 Z"></path></g>',
  },
  'arrow-down-2': {
    outline:
      '<g transform="translate(4.000000, 7.500000)" fill-rule="nonzero"><path d="M0.469669914,0.469669914 C0.735936477,0.203403352 1.15260016,0.1791973 1.44621165,0.397051761 L1.53033009,0.469669914 L8,6.939 L14.4696699,0.469669914 C14.7359365,0.203403352 15.1526002,0.1791973 15.4462117,0.397051761 L15.5303301,0.469669914 C15.7965966,0.735936477 15.8208027,1.15260016 15.6029482,1.44621165 L15.5303301,1.53033009 L8.53033009,8.53033009 C8.26406352,8.79659665 7.84739984,8.8208027 7.55378835,8.60294824 L7.46966991,8.53033009 L0.469669914,1.53033009 C0.176776695,1.23743687 0.176776695,0.762563133 0.469669914,0.469669914 Z" ></path></g>',
  },
  loading: {
    outline:
      '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.75s" repeatCount="indefinite"/></path></g></g>',
  },
  search: {
    outline:
      '<g transform="translate(2.000000, 2.000000)"><path d="M9.7388,8.8817842e-14 C15.1088,8.8817842e-14 19.4768,4.368 19.4768,9.738 C19.4768,12.2715459 18.5045194,14.5822774 16.9134487,16.3164943 L20.0442,19.4407 C20.3372,19.7337 20.3382,20.2077 20.0452,20.5007 C19.8992,20.6487 19.7062,20.7217 19.5142,20.7217 C19.3232,20.7217 19.1312,20.6487 18.9842,20.5027 L15.8156604,17.3430042 C14.1488713,18.6778412 12.0354764,19.477 9.7388,19.477 C4.3688,19.477 -0.0002,15.108 -0.0002,9.738 C-0.0002,4.368 4.3688,8.8817842e-14 9.7388,8.8817842e-14 Z M9.7388,1.5 C5.1958,1.5 1.4998,5.195 1.4998,9.738 C1.4998,14.281 5.1958,17.977 9.7388,17.977 C14.2808,17.977 17.9768,14.281 17.9768,9.738 C17.9768,5.195 14.2808,1.5 9.7388,1.5 Z" ></path></g>',
  },
  star: {
    outline:
      '<path d="M11.7499161,4.5 C11.6589161,4.5 11.4349161,4.525 11.3159161,4.763 L9.48991609,8.414 C9.20091609,8.991 8.64391609,9.392 7.99991609,9.484 L3.91191609,10.073 C3.64191609,10.112 3.54991609,10.312 3.52191609,10.396 C3.49691609,10.477 3.45691609,10.683 3.64291609,10.861 L6.59891609,13.701 C7.06991609,14.154 7.28391609,14.807 7.17191609,15.446 L6.47591609,19.456 C6.43291609,19.707 6.58991609,19.853 6.65991609,19.903 C6.73391609,19.959 6.93191609,20.07 7.17691609,19.942 L10.8319161,18.047 C11.4079161,17.75 12.0939161,17.75 12.6679161,18.047 L16.3219161,19.941 C16.5679161,20.068 16.7659161,19.957 16.8409161,19.903 C16.9109161,19.853 17.0679161,19.707 17.0249161,19.456 L16.3269161,15.446 C16.2149161,14.807 16.4289161,14.154 16.8999161,13.701 L19.8559161,10.861 C20.0429161,10.683 20.0029161,10.476 19.9769161,10.396 C19.9499161,10.312 19.8579161,10.112 19.5879161,10.073 L15.4999161,9.484 C14.8569161,9.392 14.2999161,8.991 14.0109161,8.413 L12.1829161,4.763 C12.0649161,4.525 11.8409161,4.5 11.7499161,4.5 M6.94691609,21.5 C6.53391609,21.5 6.12391609,21.37 5.77291609,21.114 C5.16691609,20.67 4.86991609,19.937 4.99891609,19.199 L5.69491609,15.189 C5.72091609,15.04 5.66991609,14.889 5.55991609,14.783 L2.60391609,11.943 C2.05991609,11.422 1.86491609,10.652 2.09491609,9.937 C2.32691609,9.214 2.94091609,8.697 3.69791609,8.589 L7.78591609,8 C7.94391609,7.978 8.07991609,7.881 8.14791609,7.743 L9.97491609,4.091 C10.3119161,3.418 10.9919161,3 11.7499161,3 L11.7499161,3 C12.5079161,3 13.1879161,3.418 13.5249161,4.091 L15.3529161,7.742 C15.4219161,7.881 15.5569161,7.978 15.7139161,8 L19.8019161,8.589 C20.5589161,8.697 21.1729161,9.214 21.4049161,9.937 C21.6349161,10.652 21.4389161,11.422 20.8949161,11.943 L17.9389161,14.783 C17.8289161,14.889 17.7789161,15.04 17.8049161,15.188 L18.5019161,19.199 C18.6299161,19.938 18.3329161,20.671 17.7259161,21.114 C17.1109161,21.565 16.3099161,21.626 15.6309161,21.272 L11.9779161,19.379 C11.8349161,19.305 11.6639161,19.305 11.5209161,19.379 L7.86791609,21.273 C7.57591609,21.425 7.26091609,21.5 6.94691609,21.5" ></path>',
  },
  bag: {
    outline:
      '<g transform="translate(2.000000, 2.000000)"><path d="M9.7808,0.0003 C12.3946651,0.0003 14.5539696,1.99195878 14.8202003,4.53922219 L14.8945,4.5401 C16.3445,4.5401 18.1075,5.5031 18.7025,8.2041 L19.4915,14.3111 C19.7745,16.2821 19.4205,17.8631 18.4375,18.9971 C17.4595,20.1251 15.9115,20.7221 13.9605,20.7221 L5.6125,20.7221 C3.4695,20.7221 1.9765,20.1971 1.0475,19.1181 C0.1145,18.0361 -0.1975,16.4131 0.1205,14.2951 L0.8965,8.2691 C1.4065,5.5061 3.2715,4.5401 4.7155,4.5401 C4.84016159,3.39057578 5.35849636,2.29700142 6.1808,1.4773 C7.1258,0.5383 8.4288,0.0003 9.7598,0.0003 L9.7808,0.0003 Z M14.8945,6.0401 L4.7155,6.0401 C4.2745,6.0401 2.8005,6.2181 2.3775,8.5021 L1.6055,14.5021 C1.3545,16.1851 1.5485,17.4031 2.1835,18.1401 C2.8105,18.8681 3.9325,19.2221 5.6125,19.2221 L13.9605,19.2221 C15.0085,19.2221 16.4395,19.0131 17.3035,18.0151 C17.9895,17.2241 18.2255,16.0461 18.0055,14.5131 L17.2265,8.4611 C16.8945,6.9701 16.0185,6.0401 14.8945,6.0401 Z M12.6973,8.8242 C13.1113,8.8242 13.4703,9.1602 13.4703,9.5742 C13.4703,9.9882 13.1573,10.3242 12.7433,10.3242 L12.6973,10.3242 C12.2833,10.3242 11.9473,9.9882 11.9473,9.5742 C11.9473,9.1602 12.2833,8.8242 12.6973,8.8242 Z M6.8672,8.8242 C7.2812,8.8242 7.6402,9.1602 7.6402,9.5742 C7.6402,9.9882 7.3262,10.3242 6.9122,10.3242 L6.8672,10.3242 C6.4532,10.3242 6.1172,9.9882 6.1172,9.5742 C6.1172,9.1602 6.4532,8.8242 6.8672,8.8242 Z M9.7778,1.5003 L9.7628,1.5003 C8.8218,1.5003 7.9048,1.8793 7.2398,2.5403 C6.6981005,3.07956671 6.34381793,3.78849506 6.22921258,4.53963388 L13.3084973,4.53991346 C13.0515216,2.82167813 11.565699,1.5003 9.7778,1.5003 Z"></path></g>',
  },
  '3-user': {
    outline:
      '<g transform="translate(1.000000, 4.000000)"><path d="M10.8867,10.414 L10.9996152,10.4140329 L10.9996152,10.4140329 L11.2522022,10.4148874 C13.1827903,10.4276063 17.5947,10.6226304 17.5947,13.613 C17.5947,16.5837391 13.3365823,16.777483 11.282292,16.7901185 L10.5211856,16.7901137 C8.59048355,16.7774107 4.1777,16.5826304 4.1777,13.596 C4.1777,10.6215217 8.59048355,10.427534 10.5211856,10.4148827 L10.7737834,10.4140327 C10.812967,10.414 10.8506348,10.414 10.8867,10.414 Z M10.8867,11.914 C8.5107,11.914 5.6777,12.206 5.6777,13.596 C5.6777,14.9545455 8.3416045,15.2721653 10.6695326,15.2901675 L10.8867,15.291 C13.2627,15.291 16.0947,15 16.0947,13.613 C16.0947,12.209 13.2627,11.914 10.8867,11.914 Z M18.8403,10.0082 C21.2633,10.3712 21.7723,11.5092 21.7723,12.4002 C21.7723,12.9442 21.5583,13.9372 20.1283,14.4822 C20.0403,14.5152 19.9503,14.5312 19.8613,14.5312 C19.5593,14.5312 19.2743,14.3472 19.1603,14.0482 C19.0123,13.6612 19.2073,13.2272 19.5943,13.0802 C20.2723,12.8222 20.2723,12.5372 20.2723,12.4002 C20.2723,11.9622 19.7153,11.6562 18.6173,11.4922 C18.2083,11.4302 17.9253,11.0492 17.9863,10.6382 C18.0473,10.2282 18.4273,9.9552 18.8403,10.0082 Z M3.7861,10.6382 C3.8471,11.0492 3.5641,11.4302 3.1551,11.4922 C2.0571,11.6562 1.5001,11.9622 1.5001,12.4002 C1.5001,12.5372 1.5001,12.8212 2.1791,13.0802 C2.5661,13.2272 2.7611,13.6612 2.6131,14.0482 C2.4991,14.3472 2.2141,14.5312 1.9121,14.5312 C1.8231,14.5312 1.7331,14.5152 1.6451,14.4822 C0.2141,13.9362 0.0001,12.9432 0.0001,12.4002 C0.0001,11.5102 0.5091,10.3712 2.9331,10.0082 C3.3461,9.9562 3.7241,10.2282 3.7861,10.6382 Z M10.8867,-8.08242362e-14 C13.4067,-8.08242362e-14 15.4557,2.05 15.4557,4.569 C15.4557,7.088 13.4067,9.138 10.8867,9.138 L10.8597,9.138 C9.6397,9.134 8.4967,8.656 7.6407,7.792 C6.7827,6.929 6.3137,5.783 6.31866043,4.566 C6.31866043,2.05 8.3677,-8.08242362e-14 10.8867,-8.08242362e-14 Z M10.8867,1.5 C9.1947,1.5 7.8186787,2.877 7.8186787,4.569 C7.8157,5.389 8.1297,6.156 8.7047,6.735 C9.2797,7.314 10.0457,7.635 10.8617,7.638 L10.8867,8.388 L10.8867,7.638 C12.5787,7.638 13.9557,6.262 13.9557,4.569 C13.9557,2.877 12.5787,1.5 10.8867,1.5 Z M17.0757,0.9795 C18.8337,1.2685 20.1107,2.7725 20.1107,4.5555 C20.1067,6.3505 18.7657,7.8905 16.9907,8.1395 C16.9557,8.1445 16.9207,8.1465 16.8867,8.1465 C16.5187,8.1465 16.1977,7.8755 16.1447,7.5005 C16.0877,7.0895 16.3727,6.7105 16.7837,6.6535 C17.8237,6.5075 18.6087,5.6055 18.6107,4.5535 C18.6107,3.5105 17.8627,2.6285 16.8317,2.4595 C16.4237,2.3925 16.1467,2.0065 16.2137,1.5975 C16.2817,1.1885 16.6647,0.9145 17.0757,0.9795 Z M5.5597,1.5975 C5.6267,2.0065 5.3497,2.3925 4.9417,2.4595 C3.9107,2.6285 3.1627,3.5105 3.1627,4.5555 C3.1647,5.6055 3.9497,6.5085 4.9887,6.6535 C5.3997,6.7105 5.6847,7.0895 5.6277,7.5005 C5.5747,7.8755 5.2537,8.1465 4.8857,8.1465 C4.8517,8.1465 4.8167,8.1445 4.7817,8.1395 C3.0067,7.8905 1.6667,6.3505 1.6627,4.5575 C1.6627,2.7725 2.9397,1.2685 4.6977,0.9795 C5.1187,0.9135 5.4917,1.1905 5.5597,1.5975 Z" ></path></g>',
  },
  linkedin: {
    outline:
      '<path d="M21.5592 21.4315H17.1141V14.4702C17.1141 12.8102 17.0845 10.6733 14.8022 10.6733C12.4871 10.6733 12.1328 12.482 12.1328 14.3494V21.431H7.68791V7.11586H11.9551V9.07219H12.0148C12.4419 8.342 13.059 7.7413 13.8004 7.33408C14.5418 6.92686 15.3798 6.72836 16.2251 6.75973C20.7304 6.75973 21.561 9.72316 21.561 13.5784L21.5592 21.4315ZM2.67229 5.15918C1.24764 5.15941 0.0925196 4.00465 0.0922852 2.58C0.0920508 1.15535 1.2467 0.000234455 2.67135 8.02522e-08C4.096 -0.000351482 5.25111 1.15441 5.25135 2.57906C5.25147 3.26321 4.97982 3.91938 4.49616 4.40325C4.01249 4.88711 3.35643 5.15902 2.67229 5.15918ZM4.89486 21.4316H0.445137V7.11586H4.89475L4.89486 21.4316Z" fill="white"/>',
  },
  camera: {
    outline:
      '<g transform="translate(2.000000, 3.000000)"><path d="M13.3175531,0.354467682 C13.9012037,0.586772183 14.3138806,1.00549435 14.6838358,1.61936241 L14.8057478,1.8312247 L15.2579543,2.69837386 L15.2728377,2.72258769 L15.2728377,2.72258769 L15.286354,2.74366661 L15.3247597,2.796173 C15.5308029,3.02067524 15.8756055,3.1563 16.1032,3.1563 C18.1879714,3.1563 19.8907414,4.79356147 19.9951286,6.85183843 L20.0002,7.0523 L20.0002,12.8473 C20.0002,15.5192974 17.8900188,17.6997943 15.2457403,17.8127069 L15.0302,17.8173 L4.9702,17.8173 C2.29753839,17.8173 0.117670718,15.7074202 0.00479171483,13.0628641 L0.0002,12.8473 L0.0002,7.0523 C0.0002,4.90089495 1.74517795,3.1563 3.8972,3.1563 C4.12397456,3.1563 4.46927917,3.02047779 4.67564031,2.796173 L4.68275094,2.78779077 L4.68275094,2.78779077 L4.69164734,2.77613586 L4.74307424,2.69725323 L5.1940188,1.83150057 C5.59597079,1.10097637 6.03323312,0.612628825 6.68208381,0.354373451 C7.87109099,-0.118406855 12.1294852,-0.118406855 13.3175531,0.354467682 Z M7.23655306,1.74813232 C7.01516279,1.83625003 6.81472373,2.04021414 6.60081735,2.39380601 L6.50821831,2.55460476 L6.12335745,3.29870183 L6.02863194,3.47013187 C5.94955759,3.60165916 5.8704633,3.71268698 5.78014826,3.8110924 C5.31972781,4.3115494 4.65866767,4.60060326 4.0710184,4.6490225 L3.8972,4.6563 L3.7331048,4.66182949 C2.54017462,4.74249187 1.58641158,5.69602822 1.50573073,6.88829761 L1.5002,7.0523 L1.5002,12.8473 C1.5002,14.6995873 2.95194016,16.213308 4.77981216,16.3121647 L4.9702,16.3173 L15.0302,16.3173 C16.8821269,16.3173 18.396184,14.8649738 18.4950635,13.0376292 L18.5002,12.8473 L18.5002,7.0523 C18.5002,5.7845168 17.5144495,4.74615834 16.2672952,4.66182949 L16.1032,4.6563 L15.929087,4.64902139 C15.3405456,4.60059328 14.6794812,4.31146427 14.2196403,3.810427 C14.1305238,3.7133267 14.0518528,3.6030873 13.9732499,3.4726702 L13.9543588,3.44034107 L13.9543588,3.44034107 L13.9318518,3.40018775 L13.8157601,3.18244123 L13.491852,2.55488063 C13.2731365,2.15777284 13.0728433,1.91507909 12.8565996,1.79311114 L12.7628469,1.74813232 L12.6435141,1.70846625 C11.6143727,1.41758173 8.03461084,1.43080375 7.23655306,1.74813232 Z M9.9999,6.199 C12.1701136,6.199 13.9289,7.95778644 13.9289,10.128 C13.9289,12.2982136 12.1701136,14.057 9.9999,14.057 C7.82968644,14.057 6.0709,12.2982136 6.0709,10.128 C6.0709,7.95778644 7.82968644,6.199 9.9999,6.199 Z M9.9999,7.699 C8.65811356,7.699 7.5709,8.78621356 7.5709,10.128 C7.5709,11.4697864 8.65811356,12.557 9.9999,12.557 C11.3416864,12.557 12.4289,11.4697864 12.4289,10.128 C12.4289,8.78621356 11.3416864,7.699 9.9999,7.699 Z M15.5045,5.5 C16.0567847,5.5 16.5045,5.94771525 16.5045,6.5 C16.5045,7.01283584 16.1184598,7.43550716 15.6211211,7.49327227 L15.5045,7.5 C14.9432153,7.5 14.4955,7.05228475 14.4955,6.5 C14.4955,5.98716416 14.8815402,5.56449284 15.3788789,5.50672773 L15.5045,5.5 Z" ></path></g>',
  },
  close: {
    outline:
      '<path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>',
  },
}

export default icons
