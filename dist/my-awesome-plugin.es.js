import { openBlock as c, createElementBlock as l, createElementVNode as r } from "vue";
const m = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, s] of e)
    n[t] = s;
  return n;
}, p = {
  name: "MyAwesomePluginComponent"
}, i = /* @__PURE__ */ r("h1", null, "MyAwesomePluginComponent Component", -1), _ = [
  i
];
function a(o, e, n, t, s, f) {
  return c(), l("div", null, _);
}
const u = /* @__PURE__ */ m(p, [["render", a]]), d = {
  install(o, e = {}) {
    o.component(d, u);
  }
};
export {
  d as default
};
