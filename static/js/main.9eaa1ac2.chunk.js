(this["webpackJsonpmini-tooltip-demo"]=this["webpackJsonpmini-tooltip-demo"]||[]).push([[0],{88:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a.n(r),s=a(12),i=a.n(s),o=a(9),l=a(13),j="SET_CATEGORY",d="GET_CATEGORIES",g={category:"",categories:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object.assign({},e,{category:t.payload});case d:return Object.assign({},e,{categories:t.payload});default:return e}},u=Object(l.b)({categoryReducer:h}),b=Object(l.c)(u,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=(a(88),a(20)),O=a(21),p=a(28),f=a(27),x=a(98),y=a(54),v=a(95),_=a(96),C=function(){return Object(c.jsx)("header",{children:Object(c.jsx)(v.a,{children:Object(c.jsxs)(_.a,{xs:12,sm:9,className:"header-title mx-auto",children:[Object(c.jsx)("h1",{children:"Britecharts React Plugin Demo"}),Object(c.jsx)("p",{children:"Move your cursor over the chart to see data for each category"})]})})})},N=a(56),S=a(97),k=a(55),E=Object(o.b)((function(e){return{category:e.categoryReducer.category,categories:e.categoryReducer.categories}}),(function(e){return{onSetCategory:function(t){return e({type:"SET_CATEGORY",payload:t})}}}))((function(e){var t=e.category,a=e.categories,r=e.onSetCategory,s=n.a.useState(""),i=Object(N.a)(s,2);i[0],i[1];return Object(c.jsx)("nav",{children:Object(c.jsx)(v.a,{children:Object(c.jsx)(_.a,{xs:12,sm:8,md:6,className:"mx-auto",children:Object(c.jsxs)(S.a,{variant:"secondary",title:t.length?t:"Select a category",onSelect:function(e){return r(e)},children:[Object(c.jsx)(k.a.Item,{eventKey:"",children:"Any"}),a.map((function(e,t){var a=e["Metro Area"];return Object(c.jsx)(k.a.Item,{eventKey:a,children:a},t)}))]})})})})})),w=a(50),R=a(51),T=a.n(R),A=a(52),D=a(53),P=function(e){for(var t=[],a=["Metro Area","Share of workers in this region who can work remotely"],c=0,r=Object.entries(e);c<r.length;c++){var n=r[c];a.includes(n[0])||t.push({name:n[0],value:+n[1]})}return t},G=function(e){var t=e.data;return Object(c.jsx)(A.Bar,{data:P(t),height:56,margin:{top:0,bottom:0,left:-10,right:0},yAxisPaddingBetweenChart:0,betweenBarsPadding:0,colorSchema:D.colors.colorSchemas.britecharts})},I=new w.Child,M="Share of workers in this region who can work remotely",F=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).onPageClick=function(e){var t=e.selected,a=t*r.state.per_page;r.setState({page:t,offset:a},(function(){r.getCategories(!1)}))},r.state={data:[],category:e.category,page:0,offset:0,per_page:3,page_count:0,displayed:Object(c.jsx)(c.Fragment,{})},r}return Object(O.a)(a,[{key:"getCategories",value:function(e){var t=this.props,a=t.category,r=t.categories,n=this.state,s=n.per_page,i=n.offset,o=e?0:i,l=a.length?r.filter((function(e){return a==e["Metro Area"]})):r,j=l.slice(o,o+s).map((function(e,t){return Object(c.jsxs)("div",{className:"chart",children:[Object(c.jsxs)(v.a,{className:"chart-category align-items-center",children:[Object(c.jsx)(_.a,{sm:8,children:Object(c.jsx)("h3",{children:e["Metro Area"]})}),!t&&Object(c.jsx)(_.a,{sm:4,children:Object(c.jsx)("p",{className:"d-none d-sm-block",children:M})})]}),Object(c.jsxs)(v.a,{className:"chart-data align-items-center",children:[Object(c.jsx)(_.a,{sm:9,className:"chart-data__graph",children:Object(c.jsx)(G,{data:e})}),Object(c.jsxs)(_.a,{sm:3,className:"chart-data__percent text-center d-flex d-sm-block align-items-center mb-3 mb-sm-0",children:[Object(c.jsxs)("p",{className:"chart-data__percent-label d-sm-none my-0 mx-3",children:[M,":"]}),Object(c.jsx)("p",{className:"chart-data__percent-data flex-fill",children:e[M]})]})]})]},t)}));this.setState({category:a,page_count:Math.ceil(l.length/s),displayed:j})}},{key:"componentDidMount",value:function(){this.getCategories(!1),I.sendHeight()}},{key:"componentDidUpdate",value:function(){I.sendHeight()}},{key:"shouldComponentUpdate",value:function(e){return e.category!=this.state.category&&this.getCategories(!0),!0}},{key:"render",value:function(){var e=this.state,t=e.displayed,a=e.page_count;return t?Object(c.jsxs)("main",{children:[t,Object(c.jsx)(v.a,{children:Object(c.jsx)(_.a,{className:"d-flex justify-content-center",children:Object(c.jsx)(T.a,{previousLabel:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("i",{className:"fas fa-angle-left"})," Prev"]}),nextLabel:Object(c.jsxs)(c.Fragment,{children:["Next ",Object(c.jsx)("i",{className:"fas fa-angle-right"})]}),breakLabel:"...",breakClassName:"break-me",marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:this.onPageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",pageCount:a})})}),Object(c.jsx)(v.a,{as:"footer",children:Object(c.jsx)(_.a,{children:Object(c.jsxs)("p",{children:["Shameless Plug: ",Object(c.jsx)("a",{href:"https://github.com/cabarbato",children:"github.com/cabarbato"})]})})})]}):Object(c.jsx)(c.Fragment,{})}}]),a}(n.a.Component),B=Object(o.b)((function(e){return{category:e.categoryReducer.category,categories:e.categoryReducer.categories}}))(F),L=a.p+"static/media/data.f4870092.csv",U=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var c;return Object(m.a)(this,a),c=t.call(this,e),y.a(L).then((function(t){return e.onGetCategories(t)})),c}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props.categories;return Object(c.jsxs)(x.a,{fluid:!0,children:[Object(c.jsx)(C,{}),e.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{}),Object(c.jsx)(B,{})]}):Object(c.jsx)(c.Fragment,{})]})}}]),a}(n.a.Component),X=Object(o.b)((function(e){return{categories:e.categoryReducer.categories}}),(function(e){return{onGetCategories:function(t){return e({type:"GET_CATEGORIES",payload:t})}}}))(U);i.a.render(Object(c.jsx)(o.a,{store:b,children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.9eaa1ac2.chunk.js.map