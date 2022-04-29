# 自定义 Hook

## useThunkReducer

useReducer 是用于提高应用性能的，当更新逻辑比较复杂时，我们应该考虑使用 useReducer

- useReducer 是 useState 的代替方案，用于 state 复杂变化
- useReducer 是单个组件状态管理，组件通讯还需要 props
- redux 是全局状态管理，多组件共享数据

实现源码：

```jsx
// useThunkReducer.js
import { useReducer } from "react";

const useThunkReducer = (reducer, defaultState) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const getState = () => state;
  const thunkDispatch = (action) => {
    typeof action === "function"
      ? action(thunkDispatch, getState)
      : dispatch(action);
  };
  return [state, thunkDispatch];
};

export default useThunkReducer;
```

store 实现：

```js
//store.js
const type = {
  getList: "getList",
  setVisible: "setVisible",
};
const getList = () => ({
  type: type.getList,
  payload, //Promise请求
});
const setVisible = (visible) => ({
  type: type.setVisible,
  visible,
});
export const action = {
  getList,
  setVisible,
};
export const initialState = {
  getListResult: {},
  visible: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case type.getList:
      return { ...state, getListResult: action.payload };
    case type.setVisible:
      return { ...state, visible: action.visible };
    default:
      return { ...state };
  }
};
function isPromise(obj) {
  return obj && typeof obj.then === "function";
}
export const wrapperDispatch = (dispatch) => {
  return function (action) {
    if (isPromise(action.payload)) {
      //   异步请求拦截并进行数据格式化
      dispatch({ ...action, payload: { loading: true, status: "pending" } });
      action.payload.then((result) => {
        let ret = {
          loading: false,
          status: "success",
          result: result || result === 0 ? result : {},
        };
        dispatch({ ...action, payload: ret });
      });
    } else {
      dispatch(action);
    }
  };
};
```

组件内使用：

```jsx
// Parent.jsx
import { reducer, initialState, wrapperDispatch } from "./store";
import useThunkReducer from "./useThunkReducer";

const Parent = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  return <Children state={state} dispatch={wrapperDispatch(dispatch)} />;
};

export default Parent;
```

```jsx
// Children.jsx
const Children = ({ state, dispatch }) => {};
```
