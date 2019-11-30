
const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
let nodeFolder = process.env.NODE_ENV === "development" ? process.env.VUE_APP_DIR_PLATFORM_PLUGINS : __dirname;
module.exports = requireFunc(nodeFolder + '/ffi_bindings.node');
