(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{178:function(t,s,a){"use strict";a.r(s);var e={props:["slot-key"]},n=a(12),r=Object(n.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"inner-equijoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inner-equijoin","aria-hidden":"true"}},[t._v("#")]),t._v(" Inner - Equijoin")]),t._v(" "),a("p",[t._v("The old style join method.")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employees"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("departments\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" employees"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department_id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" department"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department_id\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("and the common attribute will be shown")]),t._v(" "),a("p",[t._v("Equijoin = Calculate from Cartesian Product → Match the rows that have a match on WHERE statement → Merge the table → Remove the foreign key")]),t._v(" "),a("p",[t._v("To merge the table, the common key need to be typed in, else the sql may not able to merge them (because they can have multiple common attribute")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employee e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" departments d"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locations l\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department_id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department_id\n    "),a("span",{attrs:{class:"token operator"}},[t._v("AND")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location_id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" l"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location_id\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])},[],!1,null,null,null);r.options.__file="README.md";s.default=r.exports}}]);