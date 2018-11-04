(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{422:function(s,t,e){"use strict";e.r(t);var a=e(1),v=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("Javascript 编程详解记录")])]),s._v(" "),e("h2",{attrs:{id:"编程语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编程语言","aria-hidden":"true"}},[s._v("#")]),s._v(" 编程语言")]),s._v(" "),e("h3",{attrs:{id:"运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符","aria-hidden":"true"}},[s._v("#")]),s._v(" 运算符")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("一个值的运算为一元运算符,以此类推")]),s._v(" "),e("p",[s._v("运算符优先级 || 最低, 其次是 && , 接着是比较运算符(> < 等),最后是其他运算符, 进行数学计算时,按照数学计算的优先级")]),s._v(" "),e("p",[e("code",[s._v("+")]),s._v("运算符可用于数学计算也可用于 字符串拼接\n"),e("code",[s._v("-")]),s._v("运算当其中有一个值为数字类型时, 将对另一个值做类型转换,若计算结果为非法数字时"),e("code",[s._v("NaN")])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("一元运算符 "),e("code",[s._v("typeof")]),s._v(": 主要用于检测变量类型, 只能检测基础类型, 不能检测引用类型("),e("code",[s._v("instaceof")]),s._v("), "),e("code",[s._v("delete")]),s._v(" 用于删除属性, "),e("code",[s._v("in")]),s._v("判断前者是否是后者的属性")])]),s._v(" "),e("li",[e("p",[s._v("二元运算符 "),e("code",[s._v("+ - * / %")]),s._v("(计算运算符),主要用于数学运算")])]),s._v(" "),e("li",[e("p",[s._v("三元运算符 也可称为三元表达式, "),e("code",[s._v("const a = 1== true ? 'a' : ''")]),s._v(",若表达式为"),e("code",[s._v("true")]),s._v("时显示 "),e("code",[s._v("a")]),s._v(", 否则显示"),e("code",[s._v("''")])])]),s._v(" "),e("li",[e("p",[s._v("逻辑运算符 对两个值进行比较, "),e("code",[s._v("> < >= <= == !== ===")]),s._v(", 当使用 "),e("code",[s._v("==")]),s._v("时, 只要求计算的值相同即可,比如"),e("code",[s._v("0 == false null == false undefined == false")]),s._v(", 及要求值相等, 类型也相同时使用"),e("code",[s._v("=== ,!==")]),s._v(",严格")])]),s._v(" "),e("li",[e("p",[s._v("自动转换类型, 在使用运算符进行运算或者比较时, 通常会对值进行类型转换(强类型转换)")])]),s._v(" "),e("li",[e("p",[s._v("比较运算符的短路运算, "),e("code",[s._v("true && 表达式")]),s._v(" 只有当判断为 "),e("code",[s._v("true")]),s._v(" 时对右侧表达式执行 或者 "),e("code",[s._v("false || '空'")]),s._v(" 当只有判断为"),e("code",[s._v("false")]),s._v(" 才会使用右侧的值, 否则都讲不会对右侧进行执行或者赋值")])])]),s._v(" "),e("h3",{attrs:{id:"基础类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础类型")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("JS")]),s._v("中若不需要使用某个值了, 这个值对应的数据将会被清理和回收, 供其他值来使用, 以防止内存泄露")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Number: 数字类型,储存 限制 64 位, 损失小数点精度,"),e("code",[s._v("Infinity -Infinity NaN")]),s._v("属于特殊数值, "),e("code",[s._v("NaN(Not a Number)")]),s._v("指非法数字,以非法运算得到的数值,或产生无意义的数值都为"),e("code",[s._v("NaN")]),s._v(", 且"),e("code",[s._v("NaN")]),s._v("不等于本身, 检测使用 "),e("code",[s._v("isNaN")]),s._v(", 数值过大时可使用 "),e("code",[s._v("e(10 指数)")]),s._v(" 来表示")])]),s._v(" "),e("li",[e("p",[s._v("String: 字符串类型,需要在字符串中显示特殊字符或者换行时, 需使用"),e("code",[s._v("\\")]),s._v("进行转义,")])]),s._v(" "),e("li",[e("p",[s._v("Boolean: 布尔类型, "),e("code",[s._v("true")]),s._v(" 或 "),e("code",[s._v("false")])])]),s._v(" "),e("li",[e("p",[s._v("null 和 undedined, 表示无意义的值, "),e("code",[s._v("undefined")]),s._v("通常在定义变量但未赋值, 或者函数的默认返回值, null 有值 但是是 null")])])]),s._v(" "),e("h2",{attrs:{id:"程序结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 程序结构")]),s._v(" "),e("h3",{attrs:{id:"表达式和语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式和语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 表达式和语句")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("产生值的操作的代码称为表达式, 声明变量只能以除了 "),e("code",[s._v("$ _")]),s._v("字符以外的其他字符为名, 不能包含其他任何标点符号, 且不能使用"),e("a",{attrs:{href:"#%E5%85%B3%E9%94%AE%E5%AD%97%E5%92%8C%E4%BF%9D%E7%95%99%E5%AD%97"}},[s._v("关键字和保留字")])])]),s._v(" "),e("li",[e("p",[s._v("给定事件内的变量和变量值的集合称为环境")])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("条件执行: "),e("code",[s._v("if else")]),s._v(",多个判断组成时, 可选择使用 "),e("code",[s._v("swtch case")]),s._v(", 符合判断时,使用 "),e("code",[s._v("break")]),s._v(" 跳出判断, "),e("code",[s._v("retrun")]),s._v("返回值并跳出判断执行,"),e("code",[s._v("default")]),s._v(" 当不匹配所有判断时的默认值, 当省略 "),e("code",[s._v("break")]),s._v("或者 "),e("code",[s._v("return")]),s._v("时多用于重复使用相同逻辑的代码,但也容易对程序有影响, 以防止内存溢出")])]),s._v(" "),e("li",[e("p",[s._v("循环 "),e("code",[s._v("for while do while")]),s._v(", "),e("code",[s._v("while")]),s._v(" 和 "),e("code",[s._v("do while")]),s._v(" 的区别在于, 前者是先进行判断后执行, 后者则是先执行,后判断, "),e("code",[s._v("for")]),s._v(" 循环使用 "),e("code",[s._v("break")]),s._v("跳出循环, "),e("code",[s._v("continue")]),s._v("可跳出当前循环进入下一个循环")])])]),s._v(" "),e("h2",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("函数表达式 "),e("code",[s._v("let fn = function() {};")])])]),s._v(" "),e("li",[e("p",[s._v("函数声明 "),e("code",[s._v("function fn(){}")])])]),s._v(" "),e("li",[e("p",[s._v("匿名函数 "),e("code",[s._v("setTimeout(function() {}, 0)")])])]),s._v(" "),e("li",[e("p",[s._v("调用栈 函数在执行坚持书后跳转回调用该函数的代码位置,计算机记住函数调用的上下文, 函数调用的上下文区域成为调用栈, 每当函数调用时, 当前的上下文信息就会被存储在栈顶, 当函数返回时, 删除存储在栈顶的上下文信息, 并使用该信息继续执行程序")])]),s._v(" "),e("li",[e("p",[s._v("调用函数时, 会有两个隐式参数的绑定 "),e("code",[s._v("this(当前函数调用执行的上下文) arguments(当前函数接收的实参组成的类数组, 只有 length 属性, 不能调用数组方法)")]),s._v(", 且函数默认返回值 "),e("code",[s._v("undefined")])])]),s._v(" "),e("li",[e("p",[s._v("调用函数时,除了返回函数值以外还对主函数以及后续程序有影响时,称为函数副作用, 纯函数只返回值, 给出同样的参数值总是求出同样的结果, 不会再执行任何其他操作")])]),s._v(" "),e("li",[e("p",[s._v("闭包 因当前函数会创建一个属于该函数的函数作用域, 外部访问不了函数内部定义的局部变量,所以产生了闭包,可让外边调用内部的变量"),e("code",[s._v("const fn = function() { let n = 0; return function() { n += 1; return n; }}")])])]),s._v(" "),e("li",[e("p",[s._v("递归 函数允许调用自身函数, 但要避免栈溢出, 在不考虑性能问题情况下, 可使用递归, 因为递归写法函数执行的效率比循环写法的函数慢了大约 10 倍")])])]),s._v(" "),e("h2",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("触须模型: 一个变量(比作章鱼)可以有多个变量名(比作触须), 两个相同的变量可以引用同一个值, 变量只是引用了值, 程序只能访问引用的值")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("关于属性的访问, 可使用 "),e("code",[s._v("a[属性名]")]),s._v(" 也可使用 "),e("code",[s._v("a.属性名")]),s._v("进行访问, 区别在于"),e("code",[s._v("a.属性名")]),s._v(" 只能访问属性名为合法变量名, 数组只能通过"),e("code",[s._v("a[属性名]")]),s._v("获取, 存储时, 属性名即为下标值")])]),s._v(" "),e("li",[e("p",[s._v("数组只不过是属于存储有序的数据序列的特殊对象, 所以 "),e("code",[s._v("typeof arr === object")])])])]),s._v(" "),e("ul",[e("li",[s._v("不同的变量名引用同一个值时,修改其中一个,另一个也会被修改,因为引用的是同一个内存地址, 不同的对象,相同的属性内容值时是不同的, 因为引用的内存地址不一样, 基本类型的判断是根据值的判断而不是根据内存地址, 因为使用的是同一个位序列")])]),s._v(" "),e("h2",{attrs:{id:"关键字和保留字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字和保留字","aria-hidden":"true"}},[s._v("#")]),s._v(" 关键字和保留字")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[s._v("break")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("continue")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("debugger")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("implements")]),s._v("\n\n"),e("span",{attrs:{class:"token class-name"}},[s._v("in")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),e("span",{attrs:{class:"token class-name"}},[s._v("interface")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{attrs:{class:"token class-name"}},[s._v("null")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),e("span",{attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])])}],!1,null,null,null);t.default=v.exports}}]);