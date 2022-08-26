/**
 * @fileoverview gRPC-Web generated client stub for blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.blog = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.blog.FeedRequest,
 *   !proto.blog.FeedResponse>}
 */
const methodDescriptor_Blog_Feed = new grpc.web.MethodDescriptor(
  '/blog.Blog/Feed',
  grpc.web.MethodType.UNARY,
  proto.blog.FeedRequest,
  proto.blog.FeedResponse,
  /**
   * @param {!proto.blog.FeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.FeedResponse.deserializeBinary
);


/**
 * @param {!proto.blog.FeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.FeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.FeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.feed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/Feed',
      request,
      metadata || {},
      methodDescriptor_Blog_Feed,
      callback);
};


/**
 * @param {!proto.blog.FeedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.FeedResponse>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.feed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/Feed',
      request,
      metadata || {},
      methodDescriptor_Blog_Feed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.FilterPostsRequest,
 *   !proto.blog.FilterPostsResponse>}
 */
const methodDescriptor_Blog_FilterPosts = new grpc.web.MethodDescriptor(
  '/blog.Blog/FilterPosts',
  grpc.web.MethodType.UNARY,
  proto.blog.FilterPostsRequest,
  proto.blog.FilterPostsResponse,
  /**
   * @param {!proto.blog.FilterPostsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.FilterPostsResponse.deserializeBinary
);


/**
 * @param {!proto.blog.FilterPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.FilterPostsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.FilterPostsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.filterPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/FilterPosts',
      request,
      metadata || {},
      methodDescriptor_Blog_FilterPosts,
      callback);
};


/**
 * @param {!proto.blog.FilterPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.FilterPostsResponse>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.filterPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/FilterPosts',
      request,
      metadata || {},
      methodDescriptor_Blog_FilterPosts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.PostRequest,
 *   !proto.blog.Post>}
 */
const methodDescriptor_Blog_Posts = new grpc.web.MethodDescriptor(
  '/blog.Blog/Posts',
  grpc.web.MethodType.UNARY,
  proto.blog.PostRequest,
  proto.blog.Post,
  /**
   * @param {!proto.blog.PostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Post.deserializeBinary
);


/**
 * @param {!proto.blog.PostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.posts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/Posts',
      request,
      metadata || {},
      methodDescriptor_Blog_Posts,
      callback);
};


/**
 * @param {!proto.blog.PostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.Post>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.posts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/Posts',
      request,
      metadata || {},
      methodDescriptor_Blog_Posts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.SignupUserRequest,
 *   !proto.blog.User>}
 */
const methodDescriptor_Blog_SignupUser = new grpc.web.MethodDescriptor(
  '/blog.Blog/SignupUser',
  grpc.web.MethodType.UNARY,
  proto.blog.SignupUserRequest,
  proto.blog.User,
  /**
   * @param {!proto.blog.SignupUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.User.deserializeBinary
);


/**
 * @param {!proto.blog.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.signupUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Blog_SignupUser,
      callback);
};


/**
 * @param {!proto.blog.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.User>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.signupUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Blog_SignupUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.CreateDraftRequest,
 *   !proto.blog.Post>}
 */
const methodDescriptor_Blog_CreateDraft = new grpc.web.MethodDescriptor(
  '/blog.Blog/CreateDraft',
  grpc.web.MethodType.UNARY,
  proto.blog.CreateDraftRequest,
  proto.blog.Post,
  /**
   * @param {!proto.blog.CreateDraftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Post.deserializeBinary
);


/**
 * @param {!proto.blog.CreateDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.createDraft =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/CreateDraft',
      request,
      metadata || {},
      methodDescriptor_Blog_CreateDraft,
      callback);
};


/**
 * @param {!proto.blog.CreateDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.Post>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.createDraft =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/CreateDraft',
      request,
      metadata || {},
      methodDescriptor_Blog_CreateDraft);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.DeletePostRequest,
 *   !proto.blog.Post>}
 */
const methodDescriptor_Blog_DeletePost = new grpc.web.MethodDescriptor(
  '/blog.Blog/DeletePost',
  grpc.web.MethodType.UNARY,
  proto.blog.DeletePostRequest,
  proto.blog.Post,
  /**
   * @param {!proto.blog.DeletePostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Post.deserializeBinary
);


/**
 * @param {!proto.blog.DeletePostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.deletePost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/DeletePost',
      request,
      metadata || {},
      methodDescriptor_Blog_DeletePost,
      callback);
};


/**
 * @param {!proto.blog.DeletePostRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.Post>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.deletePost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/DeletePost',
      request,
      metadata || {},
      methodDescriptor_Blog_DeletePost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.PublishRequest,
 *   !proto.blog.Post>}
 */
const methodDescriptor_Blog_Publish = new grpc.web.MethodDescriptor(
  '/blog.Blog/Publish',
  grpc.web.MethodType.UNARY,
  proto.blog.PublishRequest,
  proto.blog.Post,
  /**
   * @param {!proto.blog.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Post.deserializeBinary
);


/**
 * @param {!proto.blog.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.Post)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Post>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.Blog/Publish',
      request,
      metadata || {},
      methodDescriptor_Blog_Publish,
      callback);
};


/**
 * @param {!proto.blog.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.Post>}
 *     Promise that resolves to the response
 */
proto.blog.BlogPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.Blog/Publish',
      request,
      metadata || {},
      methodDescriptor_Blog_Publish);
};


module.exports = proto.blog;

