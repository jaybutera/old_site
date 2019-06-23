import * as wasm from './rust_hashgraph_bg.wasm';

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function passArrayJsValueToWasm(array) {
    const ptr = wasm.__wbindgen_malloc(array.length * 4);
    const mem = getUint32Memory();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
*/
export class Graph {

    static __wrap(ptr) {
        const obj = Object.create(Graph.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_graph_free(ptr);
    }
    /**
    * @param {string} peer_id
    * @returns {Graph}
    */
    static new(peer_id) {
        const ptr0 = passStringToWasm(peer_id);
        const len0 = WASM_VECTOR_LEN;
        return Graph.__wrap(wasm.graph_new(ptr0, len0));
    }
    /**
    * @param {string} other_parent
    * @param {string} creator
    * @param {any[]} js_txs
    * @returns {string}
    */
    add(other_parent, creator, js_txs) {
        const ptr0 = isLikeNone(other_parent) ? [0, 0] : passStringToWasm(other_parent);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm(creator);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArrayJsValueToWasm(js_txs);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        wasm.graph_add(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} _creator
    * @returns {string}
    */
    add_creator(_creator) {
        const ptr0 = passStringToWasm(_creator);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        wasm.graph_add_creator(retptr, this.ptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @returns {any}
    */
    get_graph() {
        return takeObject(wasm.graph_get_graph(this.ptr));
    }
    /**
    * @param {string} hash
    * @returns {string}
    */
    get_event(hash) {
        const ptr0 = passStringToWasm(hash);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        wasm.graph_get_event(retptr, this.ptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} event_hash
    * @returns {number}
    */
    round_of(event_hash) {
        const ptr0 = passStringToWasm(event_hash);
        const len0 = WASM_VECTOR_LEN;
        return wasm.graph_round_of(this.ptr, ptr0, len0) >>> 0;
    }
    /**
    * Determines if the event is a witness
    * @param {string} event_hash
    * @returns {boolean}
    */
    determine_witness(event_hash) {
        const ptr0 = passStringToWasm(event_hash);
        const len0 = WASM_VECTOR_LEN;
        return (wasm.graph_determine_witness(this.ptr, ptr0, len0)) !== 0;
    }
}

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbindgen_string_new = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(varg0);
};

export const __wbindgen_throw = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    throw new Error(varg0);
};

