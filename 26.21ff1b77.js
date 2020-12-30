webpackJsonp([26],{"3iia":function(t,s,a){var n=a("VU/8")(a("GUmn"),a("HZVW"),null,null);t.exports=n.exports},GUmn:function(t,s,a){var n,v,_;!function(a,i){v=[t,s],n=i,void 0!==(_="function"==typeof n?n.apply(s,v):n)&&(t.exports=_)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{infoWindow:{show:!0,contents:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}},methods:{infoWindowClose:function(t){this.infoWindow.show=!1},infoWindowOpen:function(t){this.infoWindow.show=!0},clear:function(){this.infoWindow.contents=""}}},t.exports=s.default})},HZVW:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("信息窗体")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("在地图中添加一个信息窗体")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-info-window",{attrs:{position:{lng:116.404,lat:39.915},title:"Info Window Title",show:t.infoWindow.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[a("p",{domProps:{textContent:t._s(t.infoWindow.contents)}}),t._v(" "),a("button",{on:{click:t.clear}},[t._v("Clear")])])],1),t._v(" "),a("md-table",[a("md-table-header",[a("md-table-head",[t._v("开关")]),t._v(" "),a("md-table-head",[t._v("内容")])],1),t._v(" "),a("md-table-body",[a("md-table-row",[a("md-table-cell",[a("md-switch",{staticClass:"md-primary",model:{value:t.infoWindow.show,callback:function(s){t.infoWindow.show=s},expression:"infoWindow.show"}})],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-textarea",{model:{value:t.infoWindow.contents,callback:function(s){t.infoWindow.contents=s},expression:"infoWindow.contents"}})],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmInfoWindow")]),t._v(" 信息窗体使用 slot 模式渲染子节点。如果您的浏览器支持 "),a("code",[t._v("MutationObserver")]),t._v(" 方法，在您更新子节点的时候会自动调整信息窗体的尺寸。如果不支持该方法，您需要在更新子节点后手动调用当前 "),a("code",[t._v("BmInfoWindow")]),t._v(" 组件实例的 "),a("code",[t._v("redraw()")]),t._v(" 方法更新视图。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("信息窗体是否开启")])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Point")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗体所指坐标")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整")])]),t._v(" "),a("tr",[a("td",[t._v("maxWidth")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗最大化时的宽度，单位像素。取值范围：220 - 730")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("Size")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("信息窗标题文字，支持HTML内容")])]),t._v(" "),a("tr",[a("td",[t._v("autoPan")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否开启信息窗口打开时地图自动移动")])]),t._v(" "),a("tr",[a("td",[t._v("closeOnClick")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否开启点击地图关闭信息窗口")])]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字")])]),t._v(" "),a("tr",[a("td",[t._v("maximize")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("允许最大化")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("event{type, target, point}")]),t._v(" "),a("td",[t._v("信息窗口被关闭时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("event{type, target, point}")]),t._v(" "),a("td",[t._v("信息窗口被打开时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("maximize")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("信息窗口最大化后触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("restore")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("信息窗口还原时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("clickclose")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("点击信息窗口的关闭按钮时触发此事件")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"Info Window Title"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":show")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindow.show"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowClose"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindow.contents"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"clear"')]),t._v(">")]),t._v("Clear"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("infoWindow")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("show")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("contents")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'")]),t._v("\n      }\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    infoWindowClose (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.show = "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    },\n    infoWindowOpen (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.show = "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    },\n    clear () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".infoWindow.contents = "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},haSO:function(t,s,a){t.exports=a("3iia")}});