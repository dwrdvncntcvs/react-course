(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={card:"Card_card__3Wjxw"}},50:function(e,t,c){e.exports={form:"QuoteForm_form__2Vcrp",loading:"QuoteForm_loading__3Hmb0",control:"QuoteForm_control__3qEJg",actions:"QuoteForm_actions__1qdTw"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(3),o=c(15),s=c(49),a=c.n(s),i=c(1),d=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},u=c(10),l=c(50),j=c.n(l),b=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)();return Object(i.jsx)(d,{children:Object(i.jsxs)("form",{className:j.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value,o=c.current.value;e.onAddQuote({author:r,text:o})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(u.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Quote"})})]})})},x=c(14);t.default=function(){var e=Object(x.a)(o.b,!1),t=e.sendRequest,c=e.status,s=Object(r.n)();return Object(n.useEffect)((function(){"completed"===c&&s("/quotes")}),[c,s]),Object(i.jsx)("div",{children:Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})})}}}]);
//# sourceMappingURL=3.806729f9.chunk.js.map