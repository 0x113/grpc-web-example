/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pb = require('./dashboard_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.DashboardServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.DashboardServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.DashboardRequest,
 *   !proto.pb.DashboardResponse>}
 */
const methodDescriptor_DashboardService_DashboardStats = new grpc.web.MethodDescriptor(
  '/pb.DashboardService/DashboardStats',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pb.DashboardRequest,
  proto.pb.DashboardResponse,
  /**
   * @param {!proto.pb.DashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DashboardResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.DashboardRequest,
 *   !proto.pb.DashboardResponse>}
 */
const methodInfo_DashboardService_DashboardStats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.DashboardResponse,
  /**
   * @param {!proto.pb.DashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.DashboardResponse.deserializeBinary
);


/**
 * @param {!proto.pb.DashboardRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DashboardResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.DashboardServiceClient.prototype.dashboardStats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.DashboardService/DashboardStats',
      request,
      metadata || {},
      methodDescriptor_DashboardService_DashboardStats);
};


/**
 * @param {!proto.pb.DashboardRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.DashboardResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.DashboardServicePromiseClient.prototype.dashboardStats =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.DashboardService/DashboardStats',
      request,
      metadata || {},
      methodDescriptor_DashboardService_DashboardStats);
};


module.exports = proto.pb;

