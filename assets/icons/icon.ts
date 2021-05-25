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
}

export default icons
