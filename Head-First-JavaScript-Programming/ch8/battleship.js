/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-26 17:09:52
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-08 00:03:48
 */
JS_PUBLIC_API(JSType)
JS_TypeOfValue(JSContext *cx, jsval v)
{
    JSType type = JSTYPE_VOID;
    JSObject *obj;
    JSObjectOps *ops;
    JSClass *clasp;

    CHECK_REQUEST(cx);
    if (JSVAL_IS_VOID(v)) {  // (1) 判断 undefined
        type = JSTYPE_VOID;
    } else if (JSVAL_IS_OBJECT(v)) {  // (2) 判断 object
        obj = JSVAL_TO_OBJECT(v);
        if (obj &&
            (ops = obj->map->ops,
             ops == &js_ObjectOps
             ? (clasp = OBJ_GET_CLASS(cx, obj),
                clasp->call || clasp == &js_FunctionClass) // (2-1)
             : ops->call != 0)) {  // (2-2)
            type = JSTYPE_FUNCTION; // 判断 object 之 function
        } else {
            type = JSTYPE_OBJECT; // 判断其他 object
        }
    } else if (JSVAL_IS_NUMBER(v)) { // (3) 判断 number
        type = JSTYPE_NUMBER;
    } else if (JSVAL_IS_STRING(v)) { // (4) 判断 string
        type = JSTYPE_STRING;
    } else if (JSVAL_IS_BOOLEAN(v)) { // (5) 判断 boolean
        type = JSTYPE_BOOLEAN;
    }
    return type;
}