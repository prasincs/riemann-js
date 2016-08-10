/* initialize our protobuf schema,
   and cache it in memory. */
var ProtoBuf;
if (!ProtoBuf) {
    ProtoBuf    = require('protobufjs');
    var builder = ProtoBuf.loadProtoFile(__dirname + "/proto/proto.proto");
    var root = builder.build();
    var Event = root.Event;
    var State = root.State;
    var Query = root.Query;
    var Msg = root.Msg;
    var Attribute = root.Attribute;
}

/* serialization support for all
   known Riemann protobuf types. */

exports.serializeEvent = function(event) {
    var ev = new Event(event);
    return ev.encode().toBuffer();
};

exports.deserializeEvent = function(event) {
    return new Event(JSON.parse(event));
};

exports.serializeMessage = function(message) {
    var msg = new Msg(message);
    return msg.encode().toBuffer();
};

exports.deserializeMessage = function(message) {
    return new Msg(JSON.parse(message));
};

exports.serializeQuery = function(query) {
    var q = new Query(query);
    return q.encode().toBuffer();
};

exports.deserializeQuery = function(query) {
    return new Query(query);
};

exports.serializeState = function(state) {
    var st = new State(state);
    return st.encode().toBuffer();
};

exports.deserializeState = function(state) {
    return State(state);
};
