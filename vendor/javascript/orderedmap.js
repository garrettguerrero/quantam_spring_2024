function OrderedMap(t){this.content=t}OrderedMap.prototype={constructor:OrderedMap,find:function(t){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===t)return e;return-1},get:function(t){var e=this.find(t);return-1==e?void 0:this.content[e+1]},update:function(t,e,n){var r=n&&n!=t?this.remove(n):this;var o=r.find(t),i=r.content.slice();if(-1==o)i.push(n||t,e);else{i[o+1]=e;n&&(i[o]=n)}return new OrderedMap(i)},remove:function(t){var e=this.find(t);if(-1==e)return this;var n=this.content.slice();n.splice(e,2);return new OrderedMap(n)},addToStart:function(t,e){return new OrderedMap([t,e].concat(this.remove(t).content))},addToEnd:function(t,e){var n=this.remove(t).content.slice();n.push(t,e);return new OrderedMap(n)},addBefore:function(t,e,n){var r=this.remove(e),o=r.content.slice();var i=r.find(t);o.splice(-1==i?o.length:i,0,e,n);return new OrderedMap(o)},forEach:function(t){for(var e=0;e<this.content.length;e+=2)t(this.content[e],this.content[e+1])},prepend:function(t){t=OrderedMap.from(t);return t.size?new OrderedMap(t.content.concat(this.subtract(t).content)):this},append:function(t){t=OrderedMap.from(t);return t.size?new OrderedMap(this.subtract(t).content.concat(t.content)):this},subtract:function(t){var e=this;t=OrderedMap.from(t);for(var n=0;n<t.content.length;n+=2)e=e.remove(t.content[n]);return e},toObject:function(){var t={};this.forEach((function(e,n){t[e]=n}));return t},get size(){return this.content.length>>1}};OrderedMap.from=function(t){if(t instanceof OrderedMap)return t;var e=[];if(t)for(var n in t)e.push(n,t[n]);return new OrderedMap(e)};export{OrderedMap as default};
