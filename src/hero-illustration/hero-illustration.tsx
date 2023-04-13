import { motion, stagger, useAnimate, useMotionValue } from "framer-motion";

import React, { useEffect } from "react";

const Hills1 = () => (
  <svg
    width="7006"
    height="578"
    viewBox="0 0 7006 578"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 136L60.9411 97.2754C152.279 37.2661 269.024 31.6737 365.679 82.6776L680.92 249.026C769.678 295.862 875.976 295.215 964.157 247.302L1019.54 217.209C1110.58 167.741 1222.12 175.976 1304.91 238.277L1312.17 243.735C1403.98 312.826 1530.84 311.301 1620.97 240.023V240.023C1700.68 176.98 1810.4 167.807 1899.48 216.738L1921.77 228.983C2019.73 282.796 2139.86 275.772 2230.88 210.909L2336 136V578H2V136Z"
      fill="#47E2B9"
    />
    <path
      d="M2 136L60.9411 97.2754C152.279 37.2661 269.024 31.6737 365.679 82.6776L680.92 249.026C769.678 295.862 875.976 295.215 964.157 247.302L1019.54 217.209C1110.58 167.741 1222.12 175.976 1304.91 238.277L1312.17 243.735C1403.98 312.826 1530.84 311.301 1620.97 240.023V240.023C1700.68 176.98 1810.4 167.807 1899.48 216.738L1921.77 228.983C2019.73 282.796 2139.86 275.772 2230.88 210.909L2336 136"
      stroke="#0E1116"
      strokeWidth="4"
    />
    <path
      d="M2336 136L2394.94 97.2754C2486.28 37.2661 2603.02 31.6737 2699.68 82.6776L3014.92 249.026C3103.68 295.862 3209.98 295.215 3298.16 247.302L3353.54 217.209C3444.58 167.741 3556.12 175.976 3638.91 238.277L3646.17 243.735C3737.98 312.826 3864.84 311.301 3954.97 240.023V240.023C4034.68 176.98 4144.4 167.807 4233.48 216.738L4255.77 228.983C4353.73 282.796 4473.86 275.772 4564.88 210.909L4670 136V578H2336V136Z"
      fill="#47E2B9"
    />
    <path
      d="M2336 136L2394.94 97.2754C2486.28 37.2661 2603.02 31.6737 2699.68 82.6776L3014.92 249.026C3103.68 295.862 3209.98 295.215 3298.16 247.302L3353.54 217.209C3444.58 167.741 3556.12 175.976 3638.91 238.277L3646.17 243.735C3737.98 312.826 3864.84 311.301 3954.97 240.023V240.023C4034.68 176.98 4144.4 167.807 4233.48 216.738L4255.77 228.983C4353.73 282.796 4473.86 275.772 4564.88 210.909L4670 136"
      stroke="#0E1116"
      strokeWidth="4"
    />
    <path
      d="M4670 136L4728.94 97.2754C4820.28 37.2661 4937.02 31.6737 5033.68 82.6776L5348.92 249.026C5437.68 295.862 5543.98 295.215 5632.16 247.302L5687.54 217.209C5778.58 167.741 5890.12 175.976 5972.91 238.277L5980.17 243.735C6071.98 312.826 6198.84 311.301 6288.97 240.023V240.023C6368.68 176.98 6478.4 167.807 6567.48 216.738L6589.77 228.983C6687.73 282.796 6807.86 275.772 6898.88 210.909L7004 136V578H4670V136Z"
      fill="#47E2B9"
    />
    <path
      d="M4670 136L4728.94 97.2754C4820.28 37.2661 4937.02 31.6737 5033.68 82.6776L5348.92 249.026C5437.68 295.862 5543.98 295.215 5632.16 247.302L5687.54 217.209C5778.58 167.741 5890.12 175.976 5972.91 238.277L5980.17 243.735C6071.98 312.826 6198.84 311.301 6288.97 240.023V240.023C6368.68 176.98 6478.4 167.807 6567.48 216.738L6589.77 228.983C6687.73 282.796 6807.86 275.772 6898.88 210.909L7004 136"
      stroke="#0E1116"
      strokeWidth="4"
    />
  </svg>
);

const Hills2 = () => (
  <svg
    width="7004"
    height="292"
    viewBox="0 0 7004 292"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 231L15.6362 236.371C77.9223 259.228 144.135 269.461 210.415 266.472L793.114 240.194C927.651 234.127 1059.58 200.947 1180.98 142.645L1219.78 124.011C1388.19 43.1327 1576.69 13.6651 1761.75 39.2884V39.2884C1832.36 49.0651 1901.65 66.7521 1968.3 92.0158L2335 231V292H1V231Z"
      fill="#34B4A1"
    />
    <path
      d="M1 231L15.6362 236.371C77.9223 259.228 144.135 269.461 210.415 266.472L793.114 240.194C927.651 234.127 1059.58 200.947 1180.98 142.645L1219.78 124.011C1388.19 43.1327 1576.69 13.6651 1761.75 39.2884V39.2884C1832.36 49.0651 1901.65 66.7521 1968.3 92.0158L2335 231"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M2335 231L2349.64 236.371C2411.92 259.228 2478.13 269.461 2544.42 266.472L3127.11 240.194C3261.65 234.127 3393.58 200.947 3514.98 142.645L3553.78 124.011C3722.19 43.1327 3910.69 13.6651 4095.75 39.2884V39.2884C4166.36 49.0651 4235.65 66.7521 4302.3 92.0158L4669 231V292H2335V231Z"
      fill="#34B4A1"
    />
    <path
      d="M2335 231L2349.64 236.371C2411.92 259.228 2478.13 269.461 2544.42 266.472L3127.11 240.194C3261.65 234.127 3393.58 200.947 3514.98 142.645L3553.78 124.011C3722.19 43.1327 3910.69 13.6651 4095.75 39.2884V39.2884C4166.36 49.0651 4235.65 66.7521 4302.3 92.0158L4669 231"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M4669 231L4683.64 236.371C4745.92 259.228 4812.13 269.461 4878.42 266.472L5461.11 240.194C5595.65 234.127 5727.58 200.947 5848.98 142.645L5887.78 124.011C6056.19 43.1327 6244.69 13.6651 6429.75 39.2884V39.2884C6500.36 49.0651 6569.65 66.7521 6636.3 92.0158L7003 231V292H4669V231Z"
      fill="#34B4A1"
    />
    <path
      d="M4669 231L4683.64 236.371C4745.92 259.228 4812.13 269.461 4878.42 266.472L5461.11 240.194C5595.65 234.127 5727.58 200.947 5848.98 142.645L5887.78 124.011C6056.19 43.1327 6244.69 13.6651 6429.75 39.2884V39.2884C6500.36 49.0651 6569.65 66.7521 6636.3 92.0158L7003 231"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
  </svg>
);

const Hills3 = () => (
  <svg
    width="7004"
    height="202"
    viewBox="0 0 7004 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2335 169V169C2291.53 189.416 2244.1 200 2196.08 200H1341.98C1218.23 200 1096.05 172.292 984.411 118.91V118.91C826.84 43.5665 649.496 19.9215 477.689 51.3496L250 93L1 169V200H2335V169Z"
      fill="#33BC8B"
    />
    <path
      d="M2335 169V169C2291.53 189.416 2244.1 200 2196.08 200H1343.01C1218.58 200 1095.74 172.127 983.499 118.429V118.429C823.364 41.818 642.943 18.365 468.543 51.4902L250 93L1 169"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M4669 169V169C4625.53 189.416 4578.1 200 4530.08 200H3675.98C3552.23 200 3430.05 172.292 3318.41 118.91V118.91C3160.84 43.5665 2983.5 19.9215 2811.69 51.3496L2584 93L2335 169V200H4669V169Z"
      fill="#33BC8B"
    />
    <path
      d="M4669 169V169C4625.53 189.416 4578.1 200 4530.08 200H3677.01C3552.58 200 3429.74 172.127 3317.5 118.429V118.429C3157.36 41.818 2976.94 18.365 2802.54 51.4902L2584 93L2335 169"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M7003 169V169C6959.53 189.416 6912.1 200 6864.08 200H6009.98C5886.23 200 5764.05 172.292 5652.41 118.91V118.91C5494.84 43.5665 5317.5 19.9215 5145.69 51.3496L4918 93L4669 169V200H7003V169Z"
      fill="#33BC8B"
    />
    <path
      d="M7003 169V169C6959.53 189.416 6912.1 200 6864.08 200H6011.01C5886.58 200 5763.74 172.127 5651.5 118.429V118.429C5491.36 41.818 5310.94 18.365 5136.54 51.4902L4918 93L4669 169"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
  </svg>
);

const Hills4 = () => (
  <svg
    width="7006"
    height="269"
    viewBox="0 0 7006 269"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2336 163V163C2245.37 66.4488 2101.83 41.4386 1983.89 101.65L1864.09 162.81C1729.94 231.294 1581.47 267 1430.86 267H936.704C845.217 267 756.041 238.268 681.762 184.859L636.388 152.234C531.181 76.5862 392.476 66.2111 277.186 125.365L173.756 178.434C118.324 206.875 51.4727 200.868 2 163V163V267H2336V163Z"
      fill="#33CC99"
    />
    <path
      d="M2336 163V163C2245.37 66.4488 2101.83 41.4386 1983.89 101.65L1864.09 162.81C1729.94 231.294 1581.47 267 1430.86 267H936.704C845.217 267 756.041 238.268 681.762 184.859L636.388 152.234C531.181 76.5862 392.476 66.2111 277.186 125.365L173.756 178.434C118.324 206.875 51.4727 200.868 2 163V163"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M4670 163V163C4579.37 66.4488 4435.83 41.4386 4317.89 101.65L4198.09 162.81C4063.94 231.294 3915.47 267 3764.86 267H3270.7C3179.22 267 3090.04 238.268 3015.76 184.859L2970.39 152.234C2865.18 76.5862 2726.48 66.2111 2611.19 125.365L2507.76 178.434C2452.32 206.875 2385.47 200.868 2336 163V163V267H4670V163Z"
      fill="#33CC99"
    />
    <path
      d="M4670 163V163C4579.37 66.4488 4435.83 41.4386 4317.89 101.65L4198.09 162.81C4063.94 231.294 3915.47 267 3764.86 267H3270.7C3179.22 267 3090.04 238.268 3015.76 184.859L2970.39 152.234C2865.18 76.5862 2726.48 66.2111 2611.19 125.365L2507.76 178.434C2452.32 206.875 2385.47 200.868 2336 163V163"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={1}
    />
    <path
      d="M7004 163V163C6913.37 66.4488 6769.83 41.4386 6651.89 101.65L6532.09 162.81C6397.94 231.294 6249.47 267 6098.86 267H5604.7C5513.22 267 5424.04 238.268 5349.76 184.859L5304.39 152.234C5199.18 76.5862 5060.48 66.2111 4945.19 125.365L4841.76 178.434C4786.32 206.875 4719.47 200.868 4670 163V163V267H7004V163Z"
      fill="#33CC99"
    />
    <path
      d="M7004 163V163C6913.37 66.4488 6769.83 41.4386 6651.89 101.65L6532.09 162.81C6397.94 231.294 6249.47 267 6098.86 267H5604.7C5513.22 267 5424.04 238.268 5349.76 184.859L5304.39 152.234C5199.18 76.5862 5060.48 66.2111 4945.19 125.365L4841.76 178.434C4786.32 206.875 4719.47 200.868 4670 163V163"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={1}
    />
  </svg>
);

const Cathedral = () => (
  <svg
    width="787"
    height="555"
    viewBox="0 0 787 555"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M383.008 351.357H759.665V465.193H383.008V351.357Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M64.9396 351.357H383.008V433.384H64.9396V351.357Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M64.9396 431.711H383.008V552.244H64.9396V431.711ZM400.418 446.779H459.342V552.244H400.418V446.779Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M459.343 446.779H503.536V552.244H459.343V446.779ZM356.224 446.779H400.418V552.244H356.224V446.779Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M681.658 446.779H740.583V552.244H681.658V446.779Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M740.583 446.779H784.777V552.244H740.583V446.779ZM637.459 446.779H681.653V552.244H637.459V446.779Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M541.038 498.675H599.963V552.244H541.038V498.675Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M599.963 498.675H644.157V552.244H599.963V498.675ZM496.844 498.675H541.038V552.244H496.844V498.675Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M537.018 41.6646H600.631V91.8877H537.018V41.6646Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M383.508 272.547C383.508 169.137 467.337 85.3025 570.747 85.3025C674.158 85.3025 757.992 169.137 757.992 272.547"
      fill="#F17A5D"
    />
    <path
      d="M383.508 272.547C383.508 169.137 467.337 85.3025 570.747 85.3025C674.158 85.3025 757.992 169.137 757.992 272.547"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M435.831 271.986C435.831 168.822 495.901 85.1958 570.006 85.1958C644.112 85.1958 704.182 168.845 704.182 271.986"
      fill="#FCE8DE"
    />
    <path
      d="M435.831 271.986C435.831 168.822 495.901 85.1958 570.006 85.1958C644.112 85.1958 704.182 168.845 704.182 271.986"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M449.967 271.986C449.967 168.822 503.71 85.1958 570.001 85.1958C636.291 85.1958 690.034 168.845 690.034 271.986"
      fill="#F17A5D"
    />
    <path
      d="M449.967 271.986C449.967 168.822 503.71 85.1958 570.001 85.1958C636.291 85.1958 690.034 168.845 690.034 271.986"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M518.048 271.986C518.048 169.193 540.836 85.8639 568.951 85.8639C597.066 85.8639 619.859 169.193 619.859 271.986"
      fill="#FCE8DE"
    />
    <path
      d="M518.048 271.986C518.048 169.193 540.836 85.8639 568.951 85.8639C597.066 85.8639 619.859 169.193 619.859 271.986"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M531.999 271.986C531.999 169.193 548.544 85.8639 568.957 85.8639C589.369 85.8639 605.919 169.193 605.919 271.986"
      fill="#F17A5D"
    />
    <path
      d="M531.999 271.986C531.999 169.193 548.544 85.8639 568.957 85.8639C589.369 85.8639 605.919 169.193 605.919 271.986"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M608.142 80.1656H529.512C527.187 80.1656 525.302 82.0507 525.302 84.3761V85.9986C525.302 88.324 527.187 90.2091 529.512 90.2091H608.142C610.468 90.2091 612.353 88.324 612.353 85.9986V84.3761C612.353 82.0507 610.468 80.1656 608.142 80.1656Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M568.844 4L547.101 41.6646H590.587L568.844 4Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M33.9951 209.468L4.27997 260.932H63.7102L33.9951 209.468V209.468Z"
      fill="#F17A5D"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M366.267 272.682H769.709V289.423H366.267V272.682Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M383.008 289.418H759.665V351.357H383.008V289.418Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M568.827 337.968C579.921 337.968 588.914 328.974 588.914 317.881C588.914 306.787 579.921 297.794 568.827 297.794C557.734 297.794 548.74 306.787 548.74 317.881C548.74 328.974 557.734 337.968 568.827 337.968Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M322.742 403.253C329.213 403.253 334.458 398.008 334.458 391.537C334.458 385.066 329.213 379.82 322.742 379.82C316.271 379.82 311.025 385.066 311.025 391.537C311.025 398.008 316.271 403.253 322.742 403.253Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M224.811 403.253C231.281 403.253 236.527 398.008 236.527 391.537C236.527 385.066 231.281 379.82 224.811 379.82C218.34 379.82 213.094 385.066 213.094 391.537C213.094 398.008 218.34 403.253 224.811 403.253Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M126.879 403.253C133.35 403.253 138.596 398.008 138.596 391.537C138.596 385.066 133.35 379.82 126.879 379.82C120.408 379.82 115.163 385.066 115.163 391.537C115.163 398.008 120.408 403.253 126.879 403.253Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M655.879 337.968C666.972 337.968 675.966 328.974 675.966 317.881C675.966 306.787 666.972 297.794 655.879 297.794C644.785 297.794 635.792 306.787 635.792 317.881C635.792 328.974 644.785 337.968 655.879 337.968Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M483.449 337.968C494.543 337.968 503.536 328.974 503.536 317.881C503.536 306.787 494.543 297.794 483.449 297.794C472.355 297.794 463.362 306.787 463.362 317.881C463.362 328.974 472.355 337.968 483.449 337.968Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M383.008 418.321C383.008 405.889 387.947 393.965 396.738 385.174C405.53 376.383 417.453 371.444 429.886 371.444C442.318 371.444 454.242 376.383 463.033 385.174C471.824 393.965 476.763 405.889 476.763 418.321H383.008ZM411.466 418.321C411.466 392.435 419.713 371.45 429.88 371.45C440.047 371.45 448.294 392.435 448.294 418.321H411.466ZM665.922 416.648C665.922 404.216 670.861 392.292 679.652 383.501C688.443 374.71 700.367 369.771 712.799 369.771C725.232 369.771 737.155 374.71 745.946 383.501C754.738 392.292 759.677 404.216 759.677 416.648"
      fill="#F17A5D"
    />
    <path
      d="M665.922 416.648C665.922 404.216 670.861 392.292 679.652 383.501C688.443 374.71 700.367 369.771 712.799 369.771C725.232 369.771 737.155 374.71 745.946 383.501C754.738 392.292 759.677 404.216 759.677 416.648M383.008 418.321C383.008 405.889 387.947 393.965 396.738 385.174C405.53 376.383 417.453 371.444 429.886 371.444C442.318 371.444 454.242 376.383 463.033 385.174C471.824 393.965 476.763 405.889 476.763 418.321H383.008ZM411.466 418.321C411.466 392.435 419.713 371.45 429.88 371.45C440.047 371.45 448.294 392.435 448.294 418.321H411.466Z"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M694.38 416.648C694.38 390.762 702.621 369.771 712.794 369.771C722.966 369.771 731.208 390.762 731.208 416.648H694.38ZM503.536 418.321C503.455 409.476 505.127 400.703 508.456 392.508C511.785 384.312 516.704 376.858 522.93 370.575C529.156 364.291 536.566 359.304 544.73 355.9C552.894 352.497 561.652 350.744 570.498 350.744C579.343 350.744 588.101 352.497 596.265 355.9C604.43 359.304 611.839 364.291 618.065 370.575C624.291 376.858 629.21 384.312 632.539 392.508C635.868 400.703 637.54 409.476 637.459 418.321"
      fill="#F17A5D"
    />
    <path
      d="M503.536 418.321C503.455 409.476 505.127 400.703 508.456 392.508C511.785 384.312 516.704 376.858 522.93 370.575C529.156 364.291 536.566 359.304 544.73 355.9C552.894 352.497 561.652 350.744 570.498 350.744C579.343 350.744 588.101 352.497 596.265 355.9C604.43 359.304 611.839 364.291 618.065 370.575C624.291 376.858 629.21 384.312 632.539 392.508C635.868 400.703 637.54 409.476 637.459 418.321M694.38 416.648C694.38 390.762 702.621 369.771 712.794 369.771C722.966 369.771 731.208 390.762 731.208 416.648H694.38Z"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M544.193 418.321C544.193 381.342 555.983 351.357 570.5 351.357C585.018 351.357 596.808 381.342 596.808 418.321"
      fill="#F17A5D"
    />
    <path
      d="M544.193 418.321C544.193 381.342 555.983 351.357 570.5 351.357C585.018 351.357 596.808 381.342 596.808 418.321"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M543.716 416.648H597.285V485.286H543.716V416.648Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M490.147 485.28H650.854V498.675H490.147V485.28Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M597.285 416.648H637.465V485.286H597.285V416.648ZM503.536 416.648H543.716V485.286H503.536V416.648Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M411.129 416.648H448.625V446.779H411.129V416.648Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M448.631 416.648H476.757V446.779H448.631V416.648ZM383.008 416.648H411.135V446.779H383.008V416.648Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M694.043 416.648H731.539V446.779H694.043V416.648Z"
      fill="#FCE8DE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M731.545 416.648H759.671V446.779H731.545V416.648ZM665.922 416.648H694.048V446.779H665.922V416.648Z"
      fill="#EAD6CE"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M63.2666 351.357H383.008V311.183H103.446L63.2666 351.357V351.357Z"
      fill="#F17A5D"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit={10}
    />
    <path
      d="M125.959 458.495H129.473C131.892 458.495 134.213 459.457 135.924 461.167C137.635 462.878 138.596 465.199 138.596 467.618V522.108H116.836V467.618C116.836 465.199 117.797 462.878 119.508 461.167C121.219 459.457 123.539 458.495 125.959 458.495V458.495ZM221.38 458.495H224.895C227.314 458.495 229.635 459.457 231.345 461.167C233.056 462.878 234.017 465.199 234.017 467.618V522.108H212.258V467.618C212.258 465.199 213.219 462.878 214.93 461.167C216.64 459.457 218.961 458.495 221.38 458.495V458.495ZM320.148 458.495H323.662C326.082 458.495 328.402 459.457 330.113 461.167C331.824 462.878 332.785 465.199 332.785 467.618V522.108H311.025V467.618C311.025 465.199 311.986 462.878 313.697 461.167C315.408 459.457 317.729 458.495 320.148 458.495V458.495Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path d="M64.9397 262.639V552.244H3V262.639" fill="#EAD6CE" />
    <path
      d="M64.9397 262.639V552.244H3V262.639"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M42.7979 478.588H45.2344C46.9046 478.595 48.5038 479.264 49.6822 480.448C50.8606 481.631 51.5221 483.234 51.5221 484.904V520.441H36.4821V484.904C36.4821 483.229 37.1475 481.622 38.332 480.438C39.5164 479.253 41.1229 478.588 42.7979 478.588V478.588ZM22.7109 478.588H25.1361C26.8112 478.588 28.4176 479.253 29.6021 480.438C30.7865 481.622 31.4519 483.229 31.4519 484.904V520.441H16.3951V484.904C16.3951 483.229 17.0605 481.622 18.2449 480.438C19.4294 479.253 21.0358 478.588 22.7109 478.588V478.588ZM42.7979 391.537H45.2344C46.9046 391.544 48.5038 392.213 49.6822 393.397C50.8606 394.58 51.5221 396.182 51.5221 397.853V433.389H36.4821V397.853C36.4821 396.178 37.1475 394.571 38.332 393.387C39.5164 392.202 41.1229 391.537 42.7979 391.537V391.537ZM22.7109 391.537H25.1361C26.8112 391.537 28.4176 392.202 29.6021 393.387C30.7865 394.571 31.4519 396.178 31.4519 397.853V433.389H16.3951V397.853C16.3951 396.178 17.0605 394.571 18.2449 393.387C19.4294 392.202 21.0358 391.537 22.7109 391.537V391.537ZM42.7979 304.486H45.2344C46.9026 304.493 48.5002 305.16 49.6782 306.341C50.8563 307.523 51.5192 309.122 51.5221 310.79V346.327H36.4821V310.79C36.4851 309.117 37.1518 307.513 38.3359 306.331C39.52 305.149 41.1248 304.486 42.7979 304.486V304.486ZM22.7109 304.486H25.1361C25.9655 304.484 26.7871 304.646 27.5539 304.962C28.3208 305.278 29.0178 305.742 29.6054 306.328C30.1929 306.913 30.6593 307.608 30.9781 308.374C31.2969 309.14 31.4617 309.961 31.4632 310.79V346.327H16.3951V310.79C16.3981 309.117 17.0648 307.513 18.2489 306.331C19.433 305.149 21.0378 304.486 22.7109 304.486Z"
      fill="#9473B0"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
  </svg>
);

const Snake = () => (
  <svg
    width="139"
    height="281"
    viewBox="0 0 139 281"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.045 70.4153V278.224C136.045 278.231 136.045 278.238 136.043 278.245C136.04 278.251 136.037 278.257 136.032 278.262C136.027 278.267 136.021 278.271 136.014 278.273C136.008 278.275 136.001 278.276 135.994 278.275H101.647C114.425 264.768 114.374 238.045 101.473 224.672C88.5722 211.3 88.5273 184.313 101.473 170.873C114.419 157.433 114.425 130.536 101.473 117.074C88.5217 103.611 88.5273 76.7367 101.473 63.2799C114.251 50.0139 112.791 23.6504 100.294 10.0195C111.102 15.9789 120.117 24.7228 126.404 35.3433C132.69 45.9638 136.019 58.0737 136.045 70.4153Z"
      fill="#F17A5D"
    />
    <path
      d="M101.475 117.072C114.427 130.546 114.427 157.432 101.475 170.872C88.5235 184.312 88.5291 211.214 101.475 224.671C114.421 238.128 114.427 264.766 101.649 278.274H66.96C66.9531 278.275 66.9462 278.274 66.9396 278.272C66.9331 278.27 66.9271 278.266 66.9222 278.261C66.9173 278.256 66.9136 278.25 66.9114 278.244C66.9092 278.237 66.9085 278.23 66.9095 278.223V69.0948C66.9095 69.0555 66.8758 69.0387 66.8365 69.0387H2.05051C2.01682 69.0387 2 69.005 2 68.9713C2.01396 51.4414 8.89505 34.6146 21.1682 22.0979C33.4414 9.58124 50.1299 2.37097 67.6561 2.01271C79.0482 1.78795 90.3009 4.54789 100.296 10.0183C112.793 23.6492 114.253 50.0127 101.475 63.2787C88.5291 76.7355 88.5291 103.632 101.475 117.072ZM55.0695 32.4801C55.0717 31.3788 54.747 30.3016 54.1365 29.3849C53.5261 28.4683 52.6573 27.7535 51.6402 27.331C50.6232 26.9085 49.5036 26.7974 48.4233 27.0117C47.3431 27.226 46.3507 27.7561 45.572 28.5349C44.7932 29.3136 44.2631 30.306 44.0488 31.3862C43.8345 32.4665 43.9456 33.586 44.3681 34.6031C44.7906 35.6202 45.5054 36.4889 46.422 37.0994C47.3387 37.7099 48.4159 38.0346 49.5172 38.0324C50.9893 38.0309 52.4007 37.4454 53.4416 36.4045C54.4825 35.3636 55.068 33.9522 55.0695 32.4801Z"
      fill="#FCE8DE"
    />
    <path
      d="M49.5184 26.9219C50.6171 26.9241 51.6906 27.252 52.6031 27.864C53.5156 28.4761 54.2262 29.3449 54.6451 30.3606C55.0641 31.3764 55.1725 32.4936 54.9568 33.5709C54.7411 34.6483 54.2109 35.6376 53.4332 36.4138C52.6555 37.1899 51.6651 37.7181 50.5873 37.9317C49.5095 38.1452 48.3926 38.0345 47.3776 37.6135C46.3627 37.1925 45.4954 36.4802 44.8851 35.5664C44.2749 34.6527 43.9492 33.5785 43.9492 32.4798C43.9492 31.749 44.0934 31.0253 44.3734 30.3503C44.6534 29.6752 45.0638 29.062 45.5811 28.5458C46.0984 28.0295 46.7124 27.6204 47.388 27.3417C48.0636 27.0631 48.7875 26.9204 49.5184 26.9219Z"
      fill="#0E1116"
    />
    <path
      d="M101.649 278.274H66.96C66.9531 278.275 66.9462 278.274 66.9396 278.272C66.9331 278.27 66.9271 278.266 66.9222 278.261C66.9173 278.256 66.9136 278.25 66.9114 278.244C66.9092 278.237 66.9085 278.23 66.9095 278.223V69.0948C66.9095 69.0555 66.8758 69.0387 66.8365 69.0387H2.05051C2.01682 69.0387 2 69.005 2 68.9713C2.01396 51.4414 8.89505 34.6146 21.1682 22.0979C33.4414 9.58124 50.1299 2.37097 67.6561 2.01271C79.0482 1.78795 90.3009 4.54789 100.296 10.0183C111.104 15.9777 120.119 24.7216 126.405 35.3421C132.692 45.9626 136.021 58.0725 136.046 70.4141V278.223C136.047 278.23 136.047 278.237 136.044 278.244C136.042 278.25 136.038 278.256 136.034 278.261C136.029 278.266 136.023 278.27 136.016 278.272C136.01 278.274 136.003 278.275 135.996 278.274H101.649Z"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="1"
    />
    <path
      d="M101.473 278.47C101.529 278.397 101.597 278.347 101.647 278.274C114.425 264.767 114.374 238.044 101.473 224.671C88.5722 211.298 88.5273 184.312 101.473 170.872C114.419 157.432 114.425 130.535 101.473 117.072C88.5217 103.61 88.5273 76.7356 101.473 63.2788C114.251 50.0128 112.791 23.6493 100.294 10.0184C100.142 9.82285 99.9785 9.63546 99.8059 9.45703"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M38.7388 69.5273V91.8038L28.5156 102.027V69.5273H49.5514V91.8038L39.3283 102.027V69.5273"
      fill="#E94135"
    />
    <path
      d="M38.7388 69.5273V91.8038L28.5156 102.027V69.5273H49.5514V91.8038L39.3283 102.027V69.5273"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
  </svg>
);

const SnakeTail = () => (
  <svg
    width="106"
    height="292"
    viewBox="0 0 106 292"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M103.88 278.231C103.88 278.265 103.92 289.773 103.88 289.773H68.6521V289.319C82.1258 275.323 82.1258 247.342 68.6521 233.364C55.1785 219.385 55.1785 191.387 68.6521 177.392C82.1258 163.396 82.1258 135.432 68.6521 121.437C55.1785 107.441 55.1785 79.4604 68.6521 65.4758C82.1258 51.4913 80.4023 23.4997 66.9286 9.50389L66.9623 9.41406C78.0869 15.263 87.4043 24.0372 93.91 34.791C100.416 45.5447 103.863 57.8701 103.88 70.4386V278.231Z"
      fill="#FCE8DE"
    />
    <path
      d="M68.6498 121.436C82.1235 135.432 82.1235 163.412 68.6498 177.391C55.1761 191.37 55.1761 219.368 68.6498 233.363C82.1235 247.359 82.1235 275.323 68.6498 289.318V289.773H34.7411C34.7748 289.773 34.7411 289.964 34.7411 278.231V70.4384C34.7181 58.6849 31.6997 47.1312 25.9709 36.8682C20.2422 26.6053 11.9923 17.9718 2 11.783C12.0948 5.60565 23.6548 2.23353 35.4877 2.01456C46.4324 1.78282 57.2582 4.32031 66.96 9.39141L66.9263 9.48124C80.3999 23.477 82.1235 51.4574 68.6498 65.4532C55.1761 79.449 55.193 107.452 68.6498 121.436Z"
      fill="#F17A5D"
    />
    <path
      d="M2 11.783C12.0948 5.60565 23.6548 2.23353 35.4877 2.01456C46.4324 1.78282 57.2582 4.32031 66.96 9.39141C78.088 15.2421 87.4075 24.0199 93.9134 34.7779C100.419 45.536 103.865 57.8661 103.878 70.4384V278.231C103.878 278.264 103.917 289.773 103.878 289.773H34.7411"
      stroke="#0E1116"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 11.7832C11.9923 17.972 20.2422 26.6055 25.9709 36.8684C31.6997 47.1314 34.7181 58.6851 34.7411 70.4386V278.231C34.7411 289.964 34.7748 289.773 34.7411 289.773M68.6498 289.319C82.1235 275.323 82.1235 247.343 68.6498 233.364C55.1761 219.385 55.1761 191.387 68.6498 177.392C82.1235 163.396 82.1235 135.432 68.6498 121.437C55.1761 107.441 55.1761 79.4604 68.6498 65.4758C82.1235 51.4913 80.3999 23.4997 66.9263 9.50391"
      stroke="#0E1116"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sun = () => (
  <svg
    width="309"
    height="309"
    viewBox="0 0 309 309"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M154.64 265.577C216.103 265.577 265.929 215.751 265.929 154.288C265.929 92.8256 216.103 43 154.64 43C93.1771 43 43.3516 92.8256 43.3516 154.288C43.3516 215.751 93.1771 265.577 154.64 265.577Z"
      fill="#F8B03D"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
    <path
      d="M154.641 296.281C232.867 296.281 296.282 232.867 296.282 154.641C296.282 76.4147 232.867 13 154.641 13C76.4147 13 13 76.4147 13 154.641C13 232.867 76.4147 296.281 154.641 296.281Z"
      stroke="#0E1116"
      strokeWidth="25"
      strokeMiterlimit="10"
      strokeDasharray="5.96 49.68"
    />
  </svg>
);

const Cloud = () => (
  <svg
    width="178"
    height="59"
    viewBox="0 0 178 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M175.341 56.3845C175.224 51.5136 173.86 46.7541 171.381 42.5602C168.901 38.3662 165.387 34.8779 161.176 32.4281C156.964 29.9783 152.195 28.6488 147.323 28.5664C142.452 28.4841 137.64 29.6517 133.348 31.9578C130.804 23.6909 125.795 16.3987 118.991 11.0578C112.188 5.71685 103.914 2.58215 95.2799 2.07348C86.6453 1.56481 78.0615 3.70645 70.6778 8.2116C63.2942 12.7168 57.4632 19.3703 53.9659 27.2813C48.9009 24.0247 43.0448 22.2087 37.026 22.0281C31.0071 21.8474 25.0526 23.309 19.8014 26.256C14.5503 29.203 10.2006 33.5242 7.21921 38.7558C4.23777 43.9875 2.73712 49.9323 2.8782 55.9522L175.341 56.3845Z"
      fill="white"
      stroke="#0E1116"
      strokeWidth="4"
      strokeMiterlimit="10"
    />
  </svg>
);

const staggerItems = stagger(0.2, { startDelay: 0 });

export const HeroIllustration = ({}) => {
  const [scope, animate] = useAnimate();
  const snakeX = useMotionValue(400);
  const snakeY = useMotionValue(400);
  const snakeTailX = useMotionValue(1000);
  const snakeTailY = useMotionValue(400);
  const snakeOpacity = useMotionValue(0);

  useEffect(() => {
    animate(
      ".landmark",
      { bottom: ["-100%", "0%"] },
      {
        duration: 0.5,
        delay: staggerItems,
      }
    ).then(async () => {
      snakeOpacity.set(1);
      await animate(snakeY, 20, { duration: 0.5, ease: "easeOut" });
      await animate(snakeTailY, 100, { duration: 0.5, ease: "easeOut" });
      animate(snakeY, [20, 0, 20, 0, 20, 0], {
        duration: 2.3,
        delay: 0.1,
        ease: "easeInOut",
      });
      animate(snakeTailY, [100, 120, 100, 120, 100, 120], {
        duration: 2.3,
        delay: 0.1,
        ease: "easeInOut",
      });
      animate(snakeX, -220, { duration: 2.4, delay: 0.1, ease: "easeInOut" });
      animate(snakeTailX, 380, { duration: 2.4, delay: 0.1, ease: "easeInOut" });
    });

    animate(
      ".cloud",
      { right: ["-200px", "200px"] },
      { duration: 0.5, delay: 0.2 }
    );
    animate(
      ".cloud-2",
      { right: ["-200px", "300px"] },
      { duration: 0.5, delay: 0.3 }
    );
  });

  return (
    <div className="w-full h-full bg-[#6A80EF] overflow-hidden">
      <div className="relative w-full h-full" ref={scope}>
        <div className="landmark absolute -bottom-full min-w-full flex justify-center z-10 left-1/2 -translate-x-1/2">
          <Hills1 />
        </div>

        <div className="landmark absolute -bottom-full flex justify-center min-w-full z-0 left-1/2 -translate-x-1/2">
          <div className="relative left-[-600px] top-[-300px]">
            <Sun />
          </div>
        </div>

        <div className="landmark absolute -bottom-full min-w-full flex justify-center z-20 left-1/2 -translate-x-1/2">
          <Hills2 />
        </div>
        <div className="landmark absolute -bottom-full min-w-full flex justify-center z-30 left-1/2 -translate-x-1/2">
          <Hills3 />
        </div>
        <div className="landmark absolute -bottom-full min-w-full flex justify-center z-30 left-1/2 -translate-x-1/2">
          <Hills4 />
        </div>

        <div className="landmark absolute -bottom-full min-w-full flex justify-center z-20">
          <Cathedral />
        </div>

        <div className="cloud absolute bottom-[700px] -right-full z-10">
          <Cloud />
        </div>

        <div className="cloud-2 absolute bottom-[580px] -right-full z-10">
          <Cloud />
        </div>

        <motion.div
          className="snake absolute bottom-[200px] left-[100px] min-w-full flex justify-center z-10"
          style={{ x: snakeX, y: snakeY, opacity: snakeOpacity }}
        >
          <Snake />
        </motion.div>

        <motion.div
          className="snake-tail absolute bottom-[200px] left-[100px] min-w-full flex justify-center z-10"
          style={{ x: snakeTailX, y: snakeTailY, opacity: snakeOpacity }}
        >
          <SnakeTail />
        </motion.div>
      </div>
    </div>
  );
};
