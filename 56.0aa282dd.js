webpackJsonp([56],{FQfR:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Walking Route Search")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Search walking route planning on the map")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-walking",{attrs:{start:"百度大厦",end:"北京邮电大学西门","auto-viewport":!0,location:"北京"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmWalking")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("String, Point, None")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Search area. The type can be empty, coordinate point or city name.")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("panel")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether to show the result panel.")])]),t._v(" "),a("tr",[a("td",[t._v("autoViewport")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Whether to adjust the viewport after search.")])]),t._v(" "),a("tr",[a("td",[t._v("selectFirstResult")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Whether to select the first search result.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("markersset")]),t._v(" "),a("td",[t._v("{pois: Array}")]),t._v(" "),a("td",[t._v("Triggers when markers are set.")])]),t._v(" "),a("tr",[a("td",[t._v("infohtmlset")]),t._v(" "),a("td",[t._v("{poi: LocalResultPoi}")]),t._v(" "),a("td",[t._v("Triggers when info windows are set.")])]),t._v(" "),a("tr",[a("td",[t._v("resultshtmlset")]),t._v(" "),a("td",[t._v("{container: HTMLElement}")]),t._v(" "),a("td",[t._v("Triggers when the result panel is set.")])]),t._v(" "),a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",[t._v("{results: [LocalResult]}")]),t._v(" "),a("td",[t._v("Triggers when the search is completed.")])]),t._v(" "),a("tr",[a("td",[t._v("polylinesset")]),t._v(" "),a("td",[t._v("{routes: Array, routes: Array}")]),t._v(" "),a("td",[t._v("Triggers when the polyline is set.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-walking")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"百度大厦"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京邮电大学西门"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-walking")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},L5Ma:function(t,s,a){t.exports=a("tjYQ")},tjYQ:function(t,s,a){var e=a("VU/8")(null,a("FQfR"),null,null);t.exports=e.exports}});