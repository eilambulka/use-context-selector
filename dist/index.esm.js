import e from"react";var r=Symbol("C_L"),t=function(t){var n,u,c=e.createContext(t,function(){return 0});return c[r]=new Set,c.Provider=(n=c.Provider,u=c[r],e.memo(function(r){var t=r.value,c=r.children;return u.forEach(function(e){e(t)}),e.createElement(n,{value:t},c)})),delete c.Consumer,c},n=function(t,n){var u=t[r];if(!u)throw new Error("useContextSelector requires special context");var c=e.useReducer(function(e){return e+1},0)[1],o=e.useContext(t),f=n(o),i=e.useRef(null);return e.useLayoutEffect(function(){i.current={f:n,v:o,s:f}}),e.useLayoutEffect(function(){var e=function(e){try{if(i.current.v===e||Object.is(i.current.s,i.current.f(e)))return}catch(e){}c()};return u.add(e),function(){u.delete(e)}},[u]),f},u=function(e){return n(e,function(e){return e})};export{t as createContext,u as useContext,n as useContextSelector};
//# sourceMappingURL=index.esm.js.map
