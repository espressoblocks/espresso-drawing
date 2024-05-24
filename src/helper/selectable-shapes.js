const selectablePaths = {
    dragon: 'M169.19262,341.94408c-5.80616,2.17958 -21.17199,0.24298 -33.38995,1.0916c-7.25679,0 -9.67935,-0.84862 -15.72487,-5.20415c-7.74276,-11.732 -18.51008,-29.51676 -23.10859,-48.2662c-1.20765,-6.17244 9.43637,-6.77446 4.23585,-12.70392c-5.32382,-8.95041 0.9683,-11.49264 3.26392,-11.97498c9.31669,0.23935 3.02457,20.92901 26.00986,15.36221c2.29925,-9.79903 -1.33096,-32.17867 4.71818,-38.95313c3.02457,19.96071 0.72532,26.25284 3.74989,32.29835c8.95403,-3.86956 12.09828,0.48596 14.87987,1.45426c2.54223,6.16882 7.98574,3.26392 8.71105,0.23935c-0.11968,-10.16169 -0.84499,-27.82315 0.60564,-39.55877c-3.14425,-1.93297 -5.80616,-7.86243 -3.50691,-18.2671c-0.36266,-0.9683 8.70743,-23.22464 -1.21128,-25.76687c-8.10541,2.54223 -11.61232,14.39754 -16.1528,19.33332c-3.77165,-11.7864 -7.26042,-25.55291 -7.97123,-44.80644c1.39623,-28.10239 14.28149,-28.10239 24.68253,-27.17036c-2.48421,-4.81248 -6.36465,-9.7809 -6.65841,-17.67234c-1.70812,-29.19037 5.90045,-48.59984 22.04963,-54.96812c-4.65653,7.60857 -4.96842,20.03325 -4.65653,24.06963c4.19233,15.99323 14.90526,28.87848 22.82209,30.74255c9.16438,-5.12436 13.82091,-13.81728 19.72136,-25.93007c2.17232,-4.50422 -2.02001,-24.68978 -0.15594,-36.79894c7.45263,-23.44586 28.41428,-34.47067 38.04286,-44.87534c-5.74451,15.68497 -11.49264,37.11083 -9.78452,42.85533c7.14437,18.01324 12.73293,31.67821 22.20557,47.04767c6.21234,-0.93203 11.02481,-6.98843 17.23352,-8.5406c-16.76932,25.30992 -3.10436,55.27638 -2.79247,57.45233c20.33788,-20.02962 35.24676,-43.94331 56.67262,-53.56826c25.62181,-25.93007 41.30316,-55.58827 65.83699,-89.12691c-2.7961,27.63819 -19.25353,67.23323 -29.50226,85.71067c-9.7809,20.64977 -19.25353,36.33111 -33.85053,58.92473c-17.90807,20.81296 -20.18556,24.60999 -26.83672,48.36411c0.23935,3.38723 4.23222,5.92946 7.01381,8.46807c-7.25679,1.81329 -8.70743,5.56681 -9.07371,11.37297c0,41.61504 5.32382,45.24525 5.20052,56.37524c-15.36221,32.41803 -28.67177,42.46004 -60.2448,65.565c-76.33595,21.41497 -51.90003,3.86956 -76.45563,-3.63021zM242.45,269.99185c3.089,-2.18347 3.8336,-19.71382 1.23123,-26.15118c-3.41142,-8.43867 -9.64814,-22.47456 -13.03123,-22.04882c-8.4,0.67715 -6.47716,12 -26,17.4c-2.36136,1.15845 -17.23312,6.73679 -30.28301,6.53392c-4.23102,-0.06578 -2.26453,29.16099 -0.51699,31.46608c5.4,7.12284 58.90584,-0.34765 68.6,-7.2z',
    sussy: 'm 77 0 h 28 a 20 20 0 0 1 20 20 v 0 a 20 20 0 0 1 -20 20 V 40 H 77 V 112 A 1 1 0 0 1 42 111 A 1 1 0 0 0 16 112 A 1 1 0 0 1 -18 111 V 74 H -29 C -35 74 -36 73 -36 67 V 5 C -36 -1 -35 -2 -29 -2 H -18 A 1 1 0 0 1 76 0',
    speechBubble: 'M204.14966,175.04472c-0.31482,-15.49173 8.58161,-20.45314 15.2824,-20.45314c8.15418,0 26.20534,-0.47063 40.10194,0c6.7857,0.22981 16.64329,5.37466 16.31655,20.45314c-0.30922,14.27018 -11.32079,18.61465 -16.43145,18.61465c-4.65217,0 -12.43125,0 -21.25748,0c-2.33362,0 -8.8706,12.31777 -19.5339,11.95015c-7.56289,-0.26073 4.2991,-11.95015 1.26396,-11.95015c-9.00032,0 -15.52291,-7.83267 -15.74202,-18.61465z',
    smile: 'M218.60708,180c0,-11.81499 9.57794,-21.39292 21.39292,-21.39292c11.81499,0 21.39292,9.57794 21.39292,21.39292c0,11.81499 -9.57794,21.39293 -21.39292,21.39293c-11.81499,0 -21.39292,-9.57794 -21.39292,-21.39293zM239.89701,196.60775c14.70959,0.07281 16.22782,-13.7612 16.22782,-13.7612h-31.54689c0,0 1.12947,13.69096 15.31907,13.7612zM247.80316,176.22994c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.8933 -2.8933,-2.8933c-1.59793,0 -2.8933,1.29538 -2.8933,2.8933c0,1.59793 1.29538,2.8933 2.8933,2.8933zM232.19685,176.22994c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.8933 -2.8933,-2.8933c-1.59793,0 -2.8933,1.29538 -2.8933,2.8933c0,1.59793 1.29538,2.8933 2.8933,2.8933z',
    frown: 'M218.60708,180c0,-11.81499 9.57794,-21.39292 21.39292,-21.39292c11.81499,0 21.39293,9.57794 21.39293,21.39292c0,11.81499 -9.57794,21.39292 -21.39293,21.39292c-11.81498,0 -21.39292,-9.57794 -21.39292,-21.39292zM247.80316,176.22993c1.59793,0 2.89331,-1.29538 2.89331,-2.8933c0,-1.59793 -1.29537,-2.89331 -2.89331,-2.89331c-1.59793,0 -2.8933,1.29538 -2.8933,2.89331c0,1.59793 1.29537,2.8933 2.8933,2.8933zM232.19685,176.22993c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.89331 -2.8933,-2.89331c-1.59793,0 -2.8933,1.29538 -2.8933,2.89331c0,1.59793 1.29538,2.8933 2.8933,2.8933zM226.26564,193.49228h28.1715c0,0 -1.35578,-10.96285 -14.49151,-10.90515c-12.67137,0.05566 -13.67999,10.90515 -13.67999,10.90515z',
    thinkingBubble: 'M181.625,163.75c0,-9.03599 8.31115,-16.7148 19.88037,-19.50356c3.78813,-8.33365 14.94537,-14.37144 28.11963,-14.37144c10.60583,0 19.90445,3.91305 25.10344,9.78682c1.5942,-0.18873 3.22977,-0.28682 4.89656,-0.28682c7.20482,0 13.82617,1.83268 19.04507,4.89724c0.96891,-0.09722 1.95499,-0.14724 2.95493,-0.14724c13.66905,0 24.75,9.34606 24.75,20.875c0,6.80117 -3.85625,12.84269 -9.82521,16.65396c2.12223,2.1898 3.32521,4.69056 3.32521,7.34604c0,8.62945 -12.70392,15.625 -28.375,15.625c-5.79983,0 -11.19324,-0.9582 -15.68664,-2.60279c-5.37837,3.48673 -12.44651,5.60279 -20.18836,5.60279c-2.14277,0 -4.23392,-0.1621 -6.25193,-0.4705c0.00128,0.04563 0.00193,0.09136 0.00193,0.13717c0,4.55635 -6.37994,8.25 -14.25,8.25c-7.87006,0 -14.25,-3.69365 -14.25,-8.25c0,-1.85573 1.0583,-3.56835 2.84455,-4.9466c-12.33446,-0.48405 -22.09455,-6.7775 -22.09455,-14.47006c0,-4.13493 2.81999,-7.8656 7.34397,-10.50709c-4.57145,-3.63277 -7.34397,-8.39897 -7.34397,-13.61791zM202.125,220.66667c0,2.96853 -3.52576,5.375 -7.875,5.375c-4.34924,0 -7.875,-2.40647 -7.875,-5.375c0,-2.96853 3.52576,-5.375 7.875,-5.375c4.34924,0 7.875,2.40647 7.875,5.375zM183.375,226c0,2.27818 -2.18261,4.125 -4.875,4.125c-2.69239,0 -4.875,-1.84682 -4.875,-4.125c0,-2.27818 2.18261,-4.125 4.875,-4.125c2.69239,0 4.875,1.84682 4.875,4.125z',
    codeblock: 'M191.07407,156c0,-2.20914 1.79086,-4 4,-4h8c2,0 3,1 4,2l4,4c1,1 2,2 4,2h12c2,0 3,-1 4,-2l4,-4c1,-1 2,-2 4,-2h45.85186c2.20914,0 4,1.79086 4,4v40c0,2.20914 -1.79086,4 -4,4h-45.85186c-2,0 -3,1 -4,2l-4,4c-1,1 -2,2 -4,2h-12c-2,0 -3,-1 -4,-2l-4,-4c-1,-1 -2,-2 -4,-2h-8c-2.20914,0 -4,-1.79086 -4,-4z',
    cloud: 'M158.70156,190.30055c5.28613,-2.83052 11.70216,-2.80297 14.45107,-3.01001c1.11791,-2.76161 17.92516,-32.66635 39.60873,-32.32664c21.75534,0.41423 30.07396,15.16631 40.51872,23.33781c12.96693,-9.11314 22.14689,-12.62033 35.86057,-9.23745c12.88406,3.27521 19.41273,22.07303 19.93181,22.83242c0.25097,0.37125 7.32687,-4.86498 13.30369,-3.82602c7.68158,1.33529 10.15773,16.75568 8.47916,16.75568c-2.13284,0 -176.99884,-0.27065 -181.13536,0.21264c-4.02823,-3.61485 4.21405,-12.184 8.98161,-14.73843z',
    heart: 'M182.17524,160.22928c-0.06174,-6.9356 0.38429,-9.6077 2.28538,-13.6958c0.21863,-0.47017 0.44452,-0.93216 0.67758,-1.38588c0.041,-0.08369 0.0824,-0.16634 0.12422,-0.24792c0.8012,-1.56302 1.70465,-3.01791 2.69546,-4.36451c2.87826,-3.97624 6.46849,-7.08113 10.70447,-9.24389c4.19614,-2.14228 6.35284,-3.1423 13.00539,-3.25541c0.73674,-0.02848 1.47326,-0.03072 2.20779,-0.0067c5.51272,0.05908 7.5834,0.72925 10.6475,2.33132c5.98584,2.56127 11.11488,7.22077 14.1395,13.99129l1.33748,2.99387l1.33748,-2.99387c3.02461,-6.77051 8.15365,-11.43 14.13948,-13.99128c3.06411,-1.60208 5.13479,-2.27226 10.64753,-2.33133c0.73452,-0.02402 1.47103,-0.02178 2.20776,0.0067c6.65256,0.11311 8.80926,1.11313 13.0054,3.25541c4.23591,2.16272 7.8261,5.26755 10.70433,9.24371c0.99086,1.34665 1.89437,2.8016 2.6956,4.36469c0.04183,0.08159 0.08324,0.16426 0.12425,0.24797c0.23305,0.45371 0.45893,0.91567 0.67755,1.38583c1.90109,4.0881 2.34712,6.7602 2.28538,13.6958c-0.00127,0.14305 -0.00303,0.28572 -0.00528,0.42802c0.10329,5.40072 -0.53917,10.86793 -1.9823,14.87168c-3.9932,11.0782 -11.61727,19.5239 -29.30813,32.466c-11.60195,8.4878 -24.70011,21.3299 -25.60268,23.1336c-0.49,0.97911 -1.36275,0.97911 -1.85275,0c-0.90257,-1.8037 -14.00072,-14.6458 -25.60268,-23.1336c-17.69086,-12.9421 -25.31493,-21.3878 -29.30813,-32.466c-1.44313,-4.00376 -2.0856,-9.47098 -1.9823,-14.87171c-0.00225,-0.14229 -0.004,-0.28495 -0.00528,-0.42799z',
    check: 'M165.25,196.6109l22.7173,-22.8612l30.6088,24.281l71.6857,-83.9057l24.4882,22.1844l-94.7184,109.5656z',
    cross: 'M199.65003,179.64477l-79.5,-77l38.00987,-40.68564l79.49013,76.68564l80.09184,-78.14413l39.93685,39.28777l-78.5287,79.35636l80.69993,77.78108l-39.28229,39.59957l-80.18174,-77.08931l-77.03078,80.06325l-41.49233,-38.94156z',
    blank: '',
};

/*

TEMPLATE:

    {
        id: "item",
        name: "item",
        path: selectablePaths.item,
        size: 50,
        strokeWidth: 5,
        icon: '',
    },

*/

const strokeColor = "none";
const selectableShapes = [
    {
        id: "smile",
        name: "Smile",
        path: selectablePaths.smile,
        size: 37,
        strokeWidth: 3,
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.78585" height="42.78585" viewBox="0,0,42.78585,42.78585"><g transform="translate(-218.60707,-158.60707)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="none" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M218.60708,180c0,-11.81499 9.57794,-21.39292 21.39292,-21.39292c11.81499,0 21.39292,9.57794 21.39292,21.39292c0,11.81499 -9.57794,21.39293 -21.39292,21.39293c-11.81499,0 -21.39292,-9.57794 -21.39292,-21.39293zM239.89701,196.60775c14.70959,0.07281 16.22782,-13.7612 16.22782,-13.7612h-31.54689c0,0 1.12947,13.69096 15.31907,13.7612zM247.80316,176.22994c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.8933 -2.8933,-2.8933c-1.59793,0 -2.8933,1.29538 -2.8933,2.8933c0,1.59793 1.29538,2.8933 2.8933,2.8933zM232.19685,176.22994c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.8933 -2.8933,-2.8933c-1.59793,0 -2.8933,1.29538 -2.8933,2.8933c0,1.59793 1.29538,2.8933 2.8933,2.8933z"/></g></g></svg><!--rotationCenter:21.39292499999999:21.39292499999999-->`
    },
    {
        id: "frown",
        name: "Frown",
        path: selectablePaths.frown,
        size: 37,
        strokeWidth: 3,
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.78585" height="42.78584" viewBox="0,0,42.78585,42.78584"><g transform="translate(-218.60708,-158.60708)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="${strokeColor}" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M218.60708,180c0,-11.81499 9.57794,-21.39292 21.39292,-21.39292c11.81499,0 21.39293,9.57794 21.39293,21.39292c0,11.81499 -9.57794,21.39292 -21.39293,21.39292c-11.81498,0 -21.39292,-9.57794 -21.39292,-21.39292zM247.80316,176.22993c1.59793,0 2.89331,-1.29538 2.89331,-2.8933c0,-1.59793 -1.29537,-2.89331 -2.89331,-2.89331c-1.59793,0 -2.8933,1.29538 -2.8933,2.89331c0,1.59793 1.29537,2.8933 2.8933,2.8933zM232.19685,176.22993c1.59793,0 2.8933,-1.29538 2.8933,-2.8933c0,-1.59793 -1.29538,-2.89331 -2.8933,-2.89331c-1.59793,0 -2.8933,1.29538 -2.8933,2.89331c0,1.59793 1.29538,2.8933 2.8933,2.8933zM226.26564,193.49228h28.1715c0,0 -1.35578,-10.96285 -14.49151,-10.90515c-12.67137,0.05566 -13.67999,10.90515 -13.67999,10.90515z"/></g></g></svg><!--rotationCenter:21.392924999999963:21.392920000000004-->`
    },
    {
        id: "codeblock",
        name: "Code Block",
        path: selectablePaths.codeblock,
        size: 50,
        strokeWidth: 9,
        icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97.85186" height="56" viewBox="0,0,97.85186,56"><g transform="translate(-191.07407,-152)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#ff4ddf" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M191.07407,156c0,-2.20914 1.79086,-4 4,-4h8c2,0 3,1 4,2l4,4c1,1 2,2 4,2h12c2,0 3,-1 4,-2l4,-4c1,-1 2,-2 4,-2h45.85186c2.20914,0 4,1.79086 4,4v40c0,2.20914 -1.79086,4 -4,4h-45.85186c-2,0 -3,1 -4,2l-4,4c-1,1 -2,2 -4,2h-12c-2,0 -3,-1 -4,-2l-4,-4c-1,-1 -2,-2 -4,-2h-8c-2.20914,0 -4,-1.79086 -4,-4z"/></g></g></svg><!--rotationCenter:48.92592750000003:28-->',
    },
    {
        id: "heart",
        name: "Heart",
        path: selectablePaths.heart,
        size: 50,
        strokeWidth: 9,
        icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="115.6604" height="103.85023" viewBox="0,0,115.6604,103.85023"><g transform="translate(-182.1698,-128.01269)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#ff0000" fill-rule="nonzero" stroke="none" stroke-width="0.18069" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M182.17524,160.22928c-0.06174,-6.9356 0.38429,-9.6077 2.28538,-13.6958c0.21863,-0.47017 0.44452,-0.93216 0.67758,-1.38588c0.041,-0.08369 0.0824,-0.16634 0.12422,-0.24792c0.8012,-1.56302 1.70465,-3.01791 2.69546,-4.36451c2.87826,-3.97624 6.46849,-7.08113 10.70447,-9.24389c4.19614,-2.14228 6.35284,-3.1423 13.00539,-3.25541c0.73674,-0.02848 1.47326,-0.03072 2.20779,-0.0067c5.51272,0.05908 7.5834,0.72925 10.6475,2.33132c5.98584,2.56127 11.11488,7.22077 14.1395,13.99129l1.33748,2.99387l1.33748,-2.99387c3.02461,-6.77051 8.15365,-11.43 14.13948,-13.99128c3.06411,-1.60208 5.13479,-2.27226 10.64753,-2.33133c0.73452,-0.02402 1.47103,-0.02178 2.20776,0.0067c6.65256,0.11311 8.80926,1.11313 13.0054,3.25541c4.23591,2.16272 7.8261,5.26755 10.70433,9.24371c0.99086,1.34665 1.89437,2.8016 2.6956,4.36469c0.04183,0.08159 0.08324,0.16426 0.12425,0.24797c0.23305,0.45371 0.45893,0.91567 0.67755,1.38583c1.90109,4.0881 2.34712,6.7602 2.28538,13.6958c-0.00127,0.14305 -0.00303,0.28572 -0.00528,0.42802c0.10329,5.40072 -0.53917,10.86793 -1.9823,14.87168c-3.9932,11.0782 -11.61727,19.5239 -29.30813,32.466c-11.60195,8.4878 -24.70011,21.3299 -25.60268,23.1336c-0.49,0.97911 -1.36275,0.97911 -1.85275,0c-0.90257,-1.8037 -14.00072,-14.6458 -25.60268,-23.1336c-17.69086,-12.9421 -25.31493,-21.3878 -29.30813,-32.466c-1.44313,-4.00376 -2.0856,-9.47098 -1.9823,-14.87171c-0.00225,-0.14229 -0.004,-0.28495 -0.00528,-0.42799z" data-paper-data="{&quot;index&quot;:null}"/></g></g></svg><!--rotationCenter:57.8301984423353:51.98731274940036-->',
    },
    {
        id: "cloud",
        name: "Cloud",
        path: selectablePaths.cloud,
        size: 100,
        strokeWidth: 11,
        icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="182.71119" height="50.07795" viewBox="0,0,182.71119,50.07795"><g transform="translate(-148.64441,-154.96103)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M158.70156,190.30055c5.28613,-2.83052 11.70216,-2.80297 14.45107,-3.01001c1.11791,-2.76161 17.92516,-32.66635 39.60873,-32.32664c21.75534,0.41423 30.07396,15.16631 40.51872,23.33781c12.96693,-9.11314 22.14689,-12.62033 35.86057,-9.23745c12.88406,3.27521 19.41273,22.07303 19.93181,22.83242c0.25097,0.37125 7.32687,-4.86498 13.30369,-3.82602c7.68158,1.33529 10.15773,16.75568 8.47916,16.75568c-2.13284,0 -176.99884,-0.27065 -181.13536,0.21264c-4.02823,-3.61485 4.21405,-12.184 8.98161,-14.73843z"/></g></g></svg><!--rotationCenter:91.35559376978156:25.038973609398028-->',
    },
    {
        id: "speechBubble",
        name: "Speech Bubble",
        path: selectablePaths.speechBubble,
        size: 50,
        strokeWidth: 5,
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="71.71694" height="51.23518" viewBox="0,0,71.71694,51.23518"><g transform="translate(-204.14153,-154.38241)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#ff00ff" fill-rule="nonzero" stroke="none" stroke-width="555" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M204.14966,175.04472c-0.31482,-15.49173 8.58161,-20.45314 15.2824,-20.45314c8.15418,0 26.20534,-0.47063 40.10194,0c6.7857,0.22981 16.64329,5.37466 16.31655,20.45314c-0.30922,14.27018 -11.32079,18.61465 -16.43145,18.61465c-4.65217,0 -12.43125,0 -21.25748,0c-2.33362,0 -8.8706,12.31777 -19.5339,11.95015c-7.56289,-0.26073 4.2991,-11.95015 1.26396,-11.95015c-9.00032,0 -15.52291,-7.83267 -15.74202,-18.61465z"/></g></g></svg><!--rotationCenter:35.858470177379075:25.617591628072915-->`
    },
    {
        id: "thinkingBubble",
        name: "Thinking Bubble",
        path: selectablePaths.thinkingBubble,
        size: 65,
        strokeWidth: 10,
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="132.75" height="100.25" viewBox="0,0,132.75,100.25"><g transform="translate(-173.625,-129.875)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="${strokeColor}" stroke-width="8" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M181.625,163.75c0,-9.03599 8.31115,-16.7148 19.88037,-19.50356c3.78813,-8.33365 14.94537,-14.37144 28.11963,-14.37144c10.60583,0 19.90445,3.91305 25.10344,9.78682c1.5942,-0.18873 3.22977,-0.28682 4.89656,-0.28682c7.20482,0 13.82617,1.83268 19.04507,4.89724c0.96891,-0.09722 1.95499,-0.14724 2.95493,-0.14724c13.66905,0 24.75,9.34606 24.75,20.875c0,6.80117 -3.85625,12.84269 -9.82521,16.65396c2.12223,2.1898 3.32521,4.69056 3.32521,7.34604c0,8.62945 -12.70392,15.625 -28.375,15.625c-5.79983,0 -11.19324,-0.9582 -15.68664,-2.60279c-5.37837,3.48673 -12.44651,5.60279 -20.18836,5.60279c-2.14277,0 -4.23392,-0.1621 -6.25193,-0.4705c0.00128,0.04563 0.00193,0.09136 0.00193,0.13717c0,4.55635 -6.37994,8.25 -14.25,8.25c-7.87006,0 -14.25,-3.69365 -14.25,-8.25c0,-1.85573 1.0583,-3.56835 2.84455,-4.9466c-12.33446,-0.48405 -22.09455,-6.7775 -22.09455,-14.47006c0,-4.13493 2.81999,-7.8656 7.34397,-10.50709c-4.57145,-3.63277 -7.34397,-8.39897 -7.34397,-13.61791zM202.125,220.66667c0,2.96853 -3.52576,5.375 -7.875,5.375c-4.34924,0 -7.875,-2.40647 -7.875,-5.375c0,-2.96853 3.52576,-5.375 7.875,-5.375c4.34924,0 7.875,2.40647 7.875,5.375zM183.375,226c0,2.27818 -2.18261,4.125 -4.875,4.125c-2.69239,0 -4.875,-1.84682 -4.875,-4.125c0,-2.27818 2.18261,-4.125 4.875,-4.125c2.69239,0 4.875,1.84682 4.875,4.125z"/></g></g></svg><!--rotationCenter:66.37500000000003:50.12499999999997-->`
    },
    {
        id: "check",
        name: "Checkmark",
        path: selectablePaths.check,
        size: 50,
        strokeWidth: 11,
        icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="149.5" height="131.75" viewBox="0,0,149.5,131.75"><g transform="translate(-165.25,-114.125)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#00f31c" fill-rule="nonzero" stroke="none" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M165.25,196.6109l22.7173,-22.8612l30.6088,24.281l71.6857,-83.9057l24.4882,22.1844l-94.7184,109.5656z"/></g></g></svg><!--rotationCenter:74.74999999999997:65.87500000000003-->',
    },
    {
        id: "cross",
        name: "X",
        path: selectablePaths.cross,
        size: 85,
        strokeWidth: 16,
        icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="239.69993" height="238.99871" viewBox="0,0,239.69993,238.99871"><g transform="translate(-120.15003,-60.50064)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="#ff0000" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M199.65003,179.64477l-79.5,-77l38.00987,-40.68564l79.49013,76.68564l80.09184,-78.14413l39.93685,39.28777l-78.5287,79.35636l80.69993,77.78108l-39.28229,39.59957l-80.18174,-77.08931l-77.03078,80.06325l-41.49233,-38.94156z"/></g></g></svg><!--rotationCenter:119.84996640680819:119.49935645821554-->',
    },
    {
        id: "sussy",
        name: "Sussy",
        path: selectablePaths.sussy,
        size: 100,
        strokeWidth: 14,
        icon: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="20px" height="20px" viewBox="-36 -55 161 192" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch -->
    <title>sussy</title>
    <desc>Created with Sketch.</desc>
    <desc>jk its made with https://yqnn.github.io/svg-path-editor/ stupeit</desc>
    <defs></defs>
    <path stroke="${strokeColor}" stroke-width="14" fill="transparent" d="m 77 0 h 28 a 20 20 0 0 1 20 20 v 0 a 20 20 0 0 1 -20 20 V 40 H 77 V 112 A 1 1 0 0 1 42 111 A 1 1 0 0 0 16 112 A 1 1 0 0 1 -18 111 V 74 H -29 C -35 74 -36 73 -36 67 V 5 C -36 -1 -35 -2 -29 -2 H -18 A 1 1 0 0 1 76 0"/>
</svg>`
    },
    {
        id: "dragon",
        name: "Dragon",
        path: selectablePaths.dragon,
        size: 100,
        strokeWidth: 26,
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="302.64767" height="345.05044" viewBox="0,0,330.64767,360.05044"><g transform="translate(-82.87288,-3)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="${strokeColor}" stroke-width="26" stroke-linecap="butt" stroke-linejoin="round" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal">
        <path d="M169.19262,341.94408c-5.80616,2.17958 -21.17199,0.24298 -33.38995,1.0916c-7.25679,0 -9.67935,-0.84862 -15.72487,-5.20415c-7.74276,-11.732 -18.51008,-29.51676 -23.10859,-48.2662c-1.20765,-6.17244 9.43637,-6.77446 4.23585,-12.70392c-5.32382,-8.95041 0.9683,-11.49264 3.26392,-11.97498c9.31669,0.23935 3.02457,20.92901 26.00986,15.36221c2.29925,-9.79903 -1.33096,-32.17867 4.71818,-38.95313c3.02457,19.96071 0.72532,26.25284 3.74989,32.29835c8.95403,-3.86956 12.09828,0.48596 14.87987,1.45426c2.54223,6.16882 7.98574,3.26392 8.71105,0.23935c-0.11968,-10.16169 -0.84499,-27.82315 0.60564,-39.55877c-3.14425,-1.93297 -5.80616,-7.86243 -3.50691,-18.2671c-0.36266,-0.9683 8.70743,-23.22464 -1.21128,-25.76687c-8.10541,2.54223 -11.61232,14.39754 -16.1528,19.33332c-3.77165,-11.7864 -7.26042,-25.55291 -7.97123,-44.80644c1.39623,-28.10239 14.28149,-28.10239 24.68253,-27.17036c-2.48421,-4.81248 -6.36465,-9.7809 -6.65841,-17.67234c-1.70812,-29.19037 5.90045,-48.59984 22.04963,-54.96812c-4.65653,7.60857 -4.96842,20.03325 -4.65653,24.06963c4.19233,15.99323 14.90526,28.87848 22.82209,30.74255c9.16438,-5.12436 13.82091,-13.81728 19.72136,-25.93007c2.17232,-4.50422 -2.02001,-24.68978 -0.15594,-36.79894c7.45263,-23.44586 28.41428,-34.47067 38.04286,-44.87534c-5.74451,15.68497 -11.49264,37.11083 -9.78452,42.85533c7.14437,18.01324 12.73293,31.67821 22.20557,47.04767c6.21234,-0.93203 11.02481,-6.98843 17.23352,-8.5406c-16.76932,25.30992 -3.10436,55.27638 -2.79247,57.45233c20.33788,-20.02962 35.24676,-43.94331 56.67262,-53.56826c25.62181,-25.93007 41.30316,-55.58827 65.83699,-89.12691c-2.7961,27.63819 -19.25353,67.23323 -29.50226,85.71067c-9.7809,20.64977 -19.25353,36.33111 -33.85053,58.92473c-17.90807,20.81296 -20.18556,24.60999 -26.83672,48.36411c0.23935,3.38723 4.23222,5.92946 7.01381,8.46807c-7.25679,1.81329 -8.70743,5.56681 -9.07371,11.37297c0,41.61504 5.32382,45.24525 5.20052,56.37524c-15.36221,32.41803 -28.67177,42.46004 -60.2448,65.565c-76.33595,21.41497 -51.90003,3.86956 -76.45563,-3.63021zM242.45,269.99185c3.089,-2.18347 3.8336,-19.71382 1.23123,-26.15118c-3.41142,-8.43867 -9.64814,-22.47456 -13.03123,-22.04882c-8.4,0.67715 -6.47716,12 -26,17.4c-2.36136,1.15845 -17.23312,6.73679 -30.28301,6.53392c-4.23102,-0.06578 -2.26453,29.16099 -0.51699,31.46608c5.4,7.12284 58.90584,-0.34765 68.6,-7.2z"/></g></g></svg><!--rotationCenter:143.12711719751513:170.26182-->`
    },
];

export default selectableShapes;