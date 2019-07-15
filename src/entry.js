//@flow

import {
	pipe,
	view,
	storage,
	mvc
} from "async.2018/src";

const AsyncTemplate = pipe;
AsyncTemplate.storage = storage;


const AsyncView = view;
const V = AsyncView;
const AsyncController = mvc;

/**
 * exports
 */

export default AsyncTemplate;
export {
	AsyncTemplate,
	AsyncView,
	AsyncController,
	V
};
