(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{205:function(t,v,_){"use strict";_.r(v);var a={props:["slot-key"]},s=_(12),n=Object(s.a)(a,function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[_("h1",{attrs:{id:"sample-table-locations"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sample-table-locations","aria-hidden":"true"}},[t._v("#")]),t._v(" Sample Table - Locations")]),t._v(" "),_("h3",{attrs:{id:"table-constraints"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#table-constraints","aria-hidden":"true"}},[t._v("#")]),t._v(" Table constraints")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Attribute Name")]),t._v(" "),_("th",[_("router-link",{attrs:{to:"/Overall/DataType/"}},[t._v("Data Type")])],1),t._v(" "),_("th",[t._v("PK")]),t._v(" "),_("th",[t._v("AI")]),t._v(" "),_("th",[t._v("UQ")]),t._v(" "),_("th",[t._v("NN")]),t._v(" "),_("th",[t._v("FK")]),t._v(" "),_("th",[t._v("Ref. FK")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("employee_id")]),t._v(" "),_("td",[t._v("INT(10)")]),t._v(" "),_("td",[t._v("☑️")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" locations "),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    location_id "),_("span",{attrs:{class:"token keyword"}},[t._v("numeric")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("4")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),_("span",{attrs:{class:"token number"}},[t._v("0")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("0")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("::"),_("span",{attrs:{class:"token keyword"}},[t._v("numeric")]),t._v(" "),_("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    street_address "),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("40")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("::"),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    postal_code "),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("12")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("::"),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    city "),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("30")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    state_province "),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("25")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("::"),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    country_id "),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token number"}},[t._v("2")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),_("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("::"),_("span",{attrs:{class:"token keyword"}},[t._v("character")]),t._v(" "),_("span",{attrs:{class:"token keyword"}},[t._v("varying")]),t._v("\n"),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br")])]),_("h3",{attrs:{id:"data-values"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data-values","aria-hidden":"true"}},[t._v("#")]),t._v(" Data Values")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("location_id")]),t._v(" "),_("th",[t._v("street_address")]),t._v(" "),_("th",[t._v("postal_code")]),t._v(" "),_("th",[t._v("city")]),t._v(" "),_("th",[t._v("state_province")]),t._v(" "),_("th",[t._v("country_id")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1000")]),t._v(" "),_("td",[t._v("1297 Via Cola di Rie")]),t._v(" "),_("td",[t._v("989")]),t._v(" "),_("td",[t._v("Roma")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("IT")])]),t._v(" "),_("tr",[_("td",[t._v("1100")]),t._v(" "),_("td",[t._v("93091 Calle della Testa")]),t._v(" "),_("td",[t._v("10934")]),t._v(" "),_("td",[t._v("Venice")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("IT")])]),t._v(" "),_("tr",[_("td",[t._v("1200")]),t._v(" "),_("td",[t._v("2017 Shinjuku-ku")]),t._v(" "),_("td",[t._v("1689")]),t._v(" "),_("td",[t._v("Tokyo")]),t._v(" "),_("td",[t._v("Tokyo Prefecture")]),t._v(" "),_("td",[t._v("JP")])]),t._v(" "),_("tr",[_("td",[t._v("1300")]),t._v(" "),_("td",[t._v("9450 Kamiya-cho")]),t._v(" "),_("td",[t._v("6823")]),t._v(" "),_("td",[t._v("Hiroshima")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("JP")])]),t._v(" "),_("tr",[_("td",[t._v("1400")]),t._v(" "),_("td",[t._v("2014 Jabberwocky Rd")]),t._v(" "),_("td",[t._v("26192")]),t._v(" "),_("td",[t._v("Southlake")]),t._v(" "),_("td",[t._v("Texas")]),t._v(" "),_("td",[t._v("US")])]),t._v(" "),_("tr",[_("td",[t._v("1500")]),t._v(" "),_("td",[t._v("2011 Interiors Blvd")]),t._v(" "),_("td",[t._v("99236")]),t._v(" "),_("td",[t._v("South San Francisco")]),t._v(" "),_("td",[t._v("California")]),t._v(" "),_("td",[t._v("US")])]),t._v(" "),_("tr",[_("td",[t._v("1600")]),t._v(" "),_("td",[t._v("2007 Zagora St")]),t._v(" "),_("td",[t._v("50090")]),t._v(" "),_("td",[t._v("South Brunswick")]),t._v(" "),_("td",[t._v("New Jersey")]),t._v(" "),_("td",[t._v("US")])]),t._v(" "),_("tr",[_("td",[t._v("1700")]),t._v(" "),_("td",[t._v("2004 Charade Rd")]),t._v(" "),_("td",[t._v("98199")]),t._v(" "),_("td",[t._v("Seattle")]),t._v(" "),_("td",[t._v("Washington")]),t._v(" "),_("td",[t._v("US")])]),t._v(" "),_("tr",[_("td",[t._v("1800")]),t._v(" "),_("td",[t._v("147 Spadina Ave")]),t._v(" "),_("td",[t._v("M5V 2L7")]),t._v(" "),_("td",[t._v("Toronto")]),t._v(" "),_("td",[t._v("Ontario")]),t._v(" "),_("td",[t._v("CA")])]),t._v(" "),_("tr",[_("td",[t._v("1900")]),t._v(" "),_("td",[t._v("6092 Boxwood St")]),t._v(" "),_("td",[t._v("YSW 9T2")]),t._v(" "),_("td",[t._v("Whitehorse")]),t._v(" "),_("td",[t._v("Yukon")]),t._v(" "),_("td",[t._v("CA")])]),t._v(" "),_("tr",[_("td",[t._v("2000")]),t._v(" "),_("td",[t._v("40-5-12 Laogianggen")]),t._v(" "),_("td",[t._v("190518")]),t._v(" "),_("td",[t._v("Beijing")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("CN")])]),t._v(" "),_("tr",[_("td",[t._v("2100")]),t._v(" "),_("td",[t._v("1298 Vileparle (E)")]),t._v(" "),_("td",[t._v("490231")]),t._v(" "),_("td",[t._v("Bombay")]),t._v(" "),_("td",[t._v("Maharashtra")]),t._v(" "),_("td",[t._v("IN")])]),t._v(" "),_("tr",[_("td",[t._v("2200")]),t._v(" "),_("td",[t._v("12-98 Victoria Street")]),t._v(" "),_("td",[t._v("2901")]),t._v(" "),_("td",[t._v("Sydney")]),t._v(" "),_("td",[t._v("New South Wales")]),t._v(" "),_("td",[t._v("AU")])]),t._v(" "),_("tr",[_("td",[t._v("2300")]),t._v(" "),_("td",[t._v("198 Clementi North")]),t._v(" "),_("td",[t._v("540198")]),t._v(" "),_("td",[t._v("Singapore")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("SG")])]),t._v(" "),_("tr",[_("td",[t._v("2400")]),t._v(" "),_("td",[t._v("8204 Arthur St")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("London")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("UK")])]),t._v(" "),_("tr",[_("td",[t._v("2500")]),t._v(" "),_("td",[t._v("Magdalen Centre")]),t._v(" "),_("td",[t._v("The Oxford")]),t._v(" "),_("td",[t._v("OX9 9ZB")]),t._v(" "),_("td",[t._v("Oxford")]),t._v(" "),_("td",[t._v("Ox")])]),t._v(" "),_("tr",[_("td",[t._v("2600")]),t._v(" "),_("td",[t._v("9702 Chester Road")]),t._v(" "),_("td",[t._v("9629850293")]),t._v(" "),_("td",[t._v("Stretford")]),t._v(" "),_("td",[t._v("Manchester")]),t._v(" "),_("td",[t._v("UK")])]),t._v(" "),_("tr",[_("td",[t._v("2700")]),t._v(" "),_("td",[t._v("Schwanthalerstr. 7031")]),t._v(" "),_("td",[t._v("80925")]),t._v(" "),_("td",[t._v("Munich")]),t._v(" "),_("td",[t._v("Bavaria")]),t._v(" "),_("td",[t._v("DE")])]),t._v(" "),_("tr",[_("td",[t._v("2800")]),t._v(" "),_("td",[t._v("Rua Frei Caneca 1360")]),t._v(" "),_("td",[t._v("01307-002")]),t._v(" "),_("td",[t._v("Sao Paulo")]),t._v(" "),_("td",[t._v("Sao Paulo")]),t._v(" "),_("td",[t._v("BR")])]),t._v(" "),_("tr",[_("td",[t._v("2900")]),t._v(" "),_("td",[t._v("20 Rue des Corps-Saints")]),t._v(" "),_("td",[t._v("1730")]),t._v(" "),_("td",[t._v("Geneva")]),t._v(" "),_("td",[t._v("Geneve")]),t._v(" "),_("td",[t._v("CH")])]),t._v(" "),_("tr",[_("td",[t._v("3000")]),t._v(" "),_("td",[t._v("Murtenstrasse 921")]),t._v(" "),_("td",[t._v("3095")]),t._v(" "),_("td",[t._v("Bern")]),t._v(" "),_("td",[t._v("BE")]),t._v(" "),_("td",[t._v("CH")])]),t._v(" "),_("tr",[_("td",[t._v("3100")]),t._v(" "),_("td",[t._v("Pieter Breughelstraat 837")]),t._v(" "),_("td",[t._v("3029SK")]),t._v(" "),_("td",[t._v("Utrecht")]),t._v(" "),_("td",[t._v("Utrecht")]),t._v(" "),_("td",[t._v("NL")])]),t._v(" "),_("tr",[_("td",[t._v("3200")]),t._v(" "),_("td",[t._v("Mariano Escobedo 9991")]),t._v(" "),_("td",[t._v("11932")]),t._v(" "),_("td",[t._v("Mexico City")]),t._v(" "),_("td",[t._v("Distrito Federal")]),t._v(" "),_("td")])])])])},[],!1,null,null,null);n.options.__file="Locations.md";v.default=n.exports}}]);