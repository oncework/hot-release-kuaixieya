(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{Q7su:function(e,t,n){(function(e){e(n("VrN/"))})((function(e){"use strict";e.defineMode("mumps",(function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),n=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),o=new RegExp("^[\\.,:]"),$=new RegExp("[()]"),a=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),r=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"],c=["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"],i=e(c),m=e(r);function d(e,r){e.sol()&&(r.label=!0,r.commandMode=0);var c=e.peek();return" "==c||"\t"==c?(r.label=!1,0==r.commandMode?r.commandMode=1:(r.commandMode<0||2==r.commandMode)&&(r.commandMode=0)):"."!=c&&r.commandMode>0&&(r.commandMode=":"==c?-1:2),"("!==c&&"\t"!==c||(r.label=!1),";"===c?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==c?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(n)||e.match(t)?"operator":e.match(o)?null:$.test(c)?(e.next(),"bracket"):r.commandMode>0&&e.match(m)?"variable-2":e.match(i)?"builtin":e.match(a)?"variable":"$"===c||"^"===c?(e.next(),"builtin"):"@"===c?(e.next(),"string-2"):/[\w%]/.test(c)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}return{startState:function(){return{label:!1,commandMode:0}},token:function(e,t){var n=d(e,t);return t.label?"tag":n}}})),e.defineMIME("text/x-mumps","mumps")}))}}]);