(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{210:function(s,a,t){"use strict";t.r(a);var n={props:["slot-key"]},e=t(12),r=Object(e.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"subquery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subquery","aria-hidden":"true"}},[s._v("#")]),s._v(" Subquery")]),s._v(" "),t("p",[s._v("โดยภายใน Subquery ก็จะมี SQL ที่เอาไว้เลือก (SELECT, FROM, WHERE) แต่ด้วยการใช้ subqueries ก็จะสามารถเลือกวิธีการ JOIN ตารางได้")]),s._v(" "),t("p",[s._v("In = จะเลือกข้อมูลที่มี attribute บางข้อมูลใน subqueries ที่เหมือนกันกับของ query หลัก\nAny = บางข้อมูลใน subqueries (แต่สามารถใส่ "),t("code",[s._v(">")]),s._v(" "),t("code",[s._v("<")]),s._v(" "),t("code",[s._v(">=")]),s._v(" พวกนี้ได้)\nAll = ทุกข้อมูลใน subqueries (สามารถใส่ "),t("code",[s._v(">")]),s._v(" "),t("code",[s._v("<")]),s._v(" "),t("code",[s._v(">=")]),s._v(" พวกนี้ได้)")]),s._v(" "),t("p",[s._v("แสดงพนักงานที่ได้รับเงินเดือนตำ่สุดของแผนกต่างๆ")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" employee_id"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" last_name"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" job_id"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" salary\n"),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n"),t("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" salary "),t("span",{attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                  "),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("MIN")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("salary"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                  "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n                  "),t("span",{attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" department_id\n                "),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("แสดงข้อมูล employee ที่ได้เงินเดือนน้อยกว่าเงินเดือนพนักงานที่มีรหัสพนักงาน = ‘IT_PROG’ บางคน และไม่แสดงพนักงานที่มีรหัสงาน IT_PROG")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("    "),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" employee_id"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" last_name"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" job_id"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" salary\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" salary "),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("ALL")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    "),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" salary\n                    "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" employees\n                    "),t("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" job_id "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'IT_PROG'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" job_id "),t("span",{attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'IT_PROG'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])},[],!1,null,null,null);r.options.__file="README.md";a.default=r.exports}}]);