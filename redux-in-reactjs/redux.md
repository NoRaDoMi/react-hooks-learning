# Redux

## 1. Redux là gì ? Kiến trúc

> Redux is a predictable state container for Javascript apps.

- `Thư viện` js quản lí state, mà state này có thể dự đoán được.
- Sử dụng kiến trúc `uni-directional data flow` - 1 chiều: view -> action -> store -> state mới -> cập nhật view.

- Kiến trúc:
  - Actions: 1 js object chứa thông tin mô tả thao tác với store
  - View: phần giao diện (buttons,...), không nhất thiết là React.
  - Store: 
    - Dispatcher: gọi API, log, ... (*)
    - Reducer: sau khi dispatch, reducer là 1 fucntion nhận vào: 1. state hiện tại, 2. action được gửi lên -> biến đổi để tạo ra state mới.
      - Cùng 1 state hiện tại và 1 action => luôn nhận được cùng 1 state mới duy nhất -> `predictable`
    - State: ban đầu có initial state, khi có state mới được tạo ra từ reducer sẽ báo lên view để cập nhật UI.

## Khi nào dùng

- Dữ liệu được chia sẻ, sử dụng ở `nhiều nơi`
- Có hỗ trợ chức năng `undo / redo`: package hỗ trợ : `redux-undo`
- Cần `cache dữ liệu` để tái sử dụng cho những lần sau. -> Gọi API, component lấy dữ liệu từ redux sử dụng.

> Nếu app đang chạy tốt mà không cần tới Redux, thì app đó có thể không tới Redux.

## Redux chỉ dùng với ReactJS

- Redux có thể sử dụng với view libary khác: Angular, ...

- Redux work với ReactJS có khác với vanila Js không ? -> Tương tự nhau theo data-flow của Redux, chỉ khác ở `View`.
  - How connect React components với Redux store ? -> `react-redux`.
    - Với `clas component`: dùng HOC `connect()`
    - Với `functional component`: dùng hooks: `useSelector()` và `useDispatch()` (version react-redux 7.1)
      - `useSelector()`: select states from redux
      - `useDispatch()`: dùng điể dispatch 1 actions tới store.

## Lưu ý

- Chỉ kết nối tới redux ở những smart components (components xử lí logic - pages), <> Dom components render UI (components folder)

## useSelector() - react-redux

```javascript
// Cách 1
const hobbyList = useSelector(state => state.hobby.list);
const activeId = useSelector(state => state.hobby.activeId);

// Cách 2
const hobbyState = useSelector(state => ({
        list: state.hobby.list,
        activeId: state.hobby.list
    }));
```

- useSelector() sử dụng `strict ref equality` -> Cách 2 luôn trả về 1 object mới thì khi so sánh object mới vs obj cũ theo strict sẽ luôn trả về false -> luôn re-render component dù các properties bên trong không thay đổi.

[How to Compare Objects in JavaScript](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/)

- Khi truy xuất nhiều properties -> all properties cùng thay đổi -> chỉ render 1 lần.