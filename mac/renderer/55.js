(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"qE+Q":function(n,e,t){(function(n){n(t("VrN/"))})((function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){var t,i,c=!1;while(!n.eol()&&(t=n.next())!=e.pending){if("$"===t&&"\\"!=i&&'"'==e.pending){c=!0;break}i=t}return c&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}function t(t,i){var c=t.next();return"$"===c?t.match(n)?"variable-2":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==c?(t.skipToEnd(),"comment"):"'"==c||'"'==c?(i.pending=c,e(t,i)):"("==c||")"==c?"bracket":c.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}return{startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,e){return n.eatSpace()?null:t(n,e)}}})),n.defineMIME("text/x-cmake","cmake")}))}}]);