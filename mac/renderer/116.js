(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{wOIU:function(e,t,n){(function(e){e(n("VrN/"))})((function(e){"use strict";function t(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}var n=t(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),r=t(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),i=t(["true","false","nil","self","super","_"]),o=t(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),a="+-/*%=|&<>~^?!",u=":;,.(){}[]",c=/^\-?0b[01][01_]*/,f=/^\-?0o[0-7][0-7_]*/,l=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,s=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,p=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,d=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,h=/^\#[A-Za-z]+/,m=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function v(e,t,v){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;var _,x=e.peek();if("/"==x){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.tokenize.push(k),k(e,t)}if(e.match(h))return"builtin";if(e.match(m))return"attribute";if(e.match(c))return"number";if(e.match(f))return"number";if(e.match(l))return"number";if(e.match(s))return"number";if(e.match(d))return"property";if(a.indexOf(x)>-1)return e.next(),"operator";if(u.indexOf(x)>-1)return e.next(),e.match(".."),"punctuation";if(_=e.match(/("""|"|')/)){var b=w.bind(null,_[0]);return t.tokenize.push(b),b(e,t)}if(e.match(p)){var y=e.current();return o.hasOwnProperty(y)?"variable-2":i.hasOwnProperty(y)?"atom":n.hasOwnProperty(y)?(r.hasOwnProperty(y)&&(t.prev="define"),"keyword"):"define"==v?"def":"variable"}return e.next(),null}function _(){var e=0;return function(t,n,r){var i=v(t,n,r);if("punctuation"==i)if("("==t.current())++e;else if(")"==t.current()){if(0==e)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}return i}}function w(e,t,n){var r,i=1==e.length,o=!1;while(r=t.peek())if(o){if(t.next(),"("==r)return n.tokenize.push(_()),"string";o=!1}else{if(t.match(e))return n.tokenize.pop(),"string";t.next(),o="\\"==r}return i&&n.tokenize.pop(),"string"}function k(e,t){var n;while(1){if(e.match(/^[^/*]+/,!0),n=e.next(),!n)break;"/"===n&&e.eat("*")?t.tokenize.push(k):"*"===n&&e.eat("/")&&t.tokenize.pop()}return"comment"}function x(e,t,n){this.prev=e,this.align=t,this.indented=n}function b(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1;e.context=new x(e.context,n,e.indented)}function y(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}e.defineMode("swift",(function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=t.tokenize[t.tokenize.length-1]||v,i=r(e,t,n);if(i&&"comment"!=i?t.prev||(t.prev=i):t.prev=n,"punctuation"==i){var o=/[\(\[\{]|([\]\)\}])/.exec(e.current());o&&(o[1]?y:b)(t,e)}return i},indent:function(t,n){var r=t.context;if(!r)return 0;var i=/^[\]\}\)]/.test(n);return null!=r.align?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}})),e.defineMIME("text/x-swift","swift")}))}}]);