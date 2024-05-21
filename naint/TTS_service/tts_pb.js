// source: tts.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('tts_naint_EmoTTS.SynthesisRequest', null, global);
goog.exportSymbol('tts_naint_EmoTTS.SynthesisResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
tts_naint_EmoTTS.SynthesisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(tts_naint_EmoTTS.SynthesisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  tts_naint_EmoTTS.SynthesisRequest.displayName = 'tts_naint_EmoTTS.SynthesisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
tts_naint_EmoTTS.SynthesisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(tts_naint_EmoTTS.SynthesisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  tts_naint_EmoTTS.SynthesisResponse.displayName = 'tts_naint_EmoTTS.SynthesisResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.toObject = function(opt_includeInstance) {
  return tts_naint_EmoTTS.SynthesisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!tts_naint_EmoTTS.SynthesisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
tts_naint_EmoTTS.SynthesisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emotion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!tts_naint_EmoTTS.SynthesisRequest}
 */
tts_naint_EmoTTS.SynthesisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new tts_naint_EmoTTS.SynthesisRequest;
  return tts_naint_EmoTTS.SynthesisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!tts_naint_EmoTTS.SynthesisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!tts_naint_EmoTTS.SynthesisRequest}
 */
tts_naint_EmoTTS.SynthesisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmotion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  tts_naint_EmoTTS.SynthesisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!tts_naint_EmoTTS.SynthesisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
tts_naint_EmoTTS.SynthesisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmotion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!tts_naint_EmoTTS.SynthesisRequest} returns this
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 emotion = 2;
 * @return {number}
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.getEmotion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!tts_naint_EmoTTS.SynthesisRequest} returns this
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.setEmotion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 sid = 3;
 * @return {number}
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.getSid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!tts_naint_EmoTTS.SynthesisRequest} returns this
 */
tts_naint_EmoTTS.SynthesisRequest.prototype.setSid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.toObject = function(opt_includeInstance) {
  return tts_naint_EmoTTS.SynthesisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!tts_naint_EmoTTS.SynthesisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
tts_naint_EmoTTS.SynthesisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inferenceTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!tts_naint_EmoTTS.SynthesisResponse}
 */
tts_naint_EmoTTS.SynthesisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new tts_naint_EmoTTS.SynthesisResponse;
  return tts_naint_EmoTTS.SynthesisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!tts_naint_EmoTTS.SynthesisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!tts_naint_EmoTTS.SynthesisResponse}
 */
tts_naint_EmoTTS.SynthesisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInferenceTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  tts_naint_EmoTTS.SynthesisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!tts_naint_EmoTTS.SynthesisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
tts_naint_EmoTTS.SynthesisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInferenceTime();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string audio = 1;
 * @return {string}
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.getAudio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!tts_naint_EmoTTS.SynthesisResponse} returns this
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.setAudio = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!tts_naint_EmoTTS.SynthesisResponse} returns this
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float inference_time = 3;
 * @return {number}
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.getInferenceTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!tts_naint_EmoTTS.SynthesisResponse} returns this
 */
tts_naint_EmoTTS.SynthesisResponse.prototype.setInferenceTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, tts_naint_EmoTTS);