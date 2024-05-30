import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';

import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import Vue from "vue";
Vue.prototype.$am5 = () => {
    return {
        am5,
        am5xy,
        am5themes_Animated,
        am5percent
    }
}