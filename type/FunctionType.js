var $extend = require('../util/extend');
var $import = require('../util/import');
var Type = require('./Type');
module.exports = FunctionType;

$extend(FunctionType, Type);
function FunctionType(ret, partypes) {
  // Type ret, ParamTypes partypes
  this._returnType = ret;
  this._partypes = partypes;
};

$import(FunctionType.prototype, {
  isFunction: function() {
    return true;
  },

  isCallable: function() {
    return true;
  },

  /**
   * @param {Object} other // Type
   */

  isSameType: function(other) {
    if (! other.isFunction()) return false;
    var t = other.getFunctionType();
    return t.returnType.isSameType(this._returnType)
        && t.paramTypes.isSameType(this._paramTypes);
  },

  /**
   * @param {Object} other // Type
   */

  isCompatible: function(target) {
    if (! target.isFunction()) return false;
    var t = target.getFunctionType();
    return t.returnType.isCompatible(this._returnType)
        && t.paramTypes.isSameType(this._paramTypes);
  },

  /**
   * @param {Object} other // Type
   */

  isCastableTo: function(target) {
    return target.isFunction();
  },

  returnType: function() {
    return  this._returnType;
  },

  isVararg: function() {
    return  this._paramTypes.isVararg();
  },

  acceptsArgc: function(numArgs) {
    if (this._paramTypes.isVararg()) {
        return (numArgs >= this._paramTypes.minArgc());
    } else {
        return (numArgs == this._paramTypes.argc());
    }
  },

  paramTypes: function() {
    return this._paramTypes.types();
  },

  alignment: function() {
    throw new Error("FunctionType#alignment called");
  },

  size: function() {
    throw new Error("FunctionType#size called");
  }
});
