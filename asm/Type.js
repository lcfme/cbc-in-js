module.exports = Type;

function Type() {

};

Type.prototype = {
  size: function() {
    throw new Error('Type abstract method call: size');
  }

  allocSize: function() {
    return this.size();
  },

  alignment: function() {
    return this.allocSize();
  },

  isSameType: function() {
    throw new Error('Type abstract method call: isSameType');
  },

  isVoid: function() {
    return false;
  },

  isInt: function() {
    return false;
  },

  isInteger: function() {
    return false;
  },

  isSigned: function() {
    throw new Error("#isSigned for non-integer type");
  },

  isPointer: function() {
    return false;
  },

  isArray: function() {
    return false;
  },

  isCompositeType: function() {
    return false;
  },

  isStruct: function() {
    return false;
  },

  isUnion: function() {
    return false;
  },

  isUserType: function() {
    return false;
  },

  isFunction: function() {
    return false;
  },

  isAllocatedArray: function() {
    return false;
  },

  isIncompleteArray: function() {
    return false;
  },

  isScalar: function() {
    return false;
  },

  isCallable: function() {
    return false;
  },

  isCompatible: function(other) {
    throw new Error('Type abstract method call: isCompatible');
  },

  isCastableTo: function(target) {
    throw new Error('Type abstract method call: isCastableTo');
  },

  baseType: function() {
    throw new Error("#baseType called for undereferable type");
  }
}

