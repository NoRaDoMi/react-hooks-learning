# useState()

- Là 1 hook cơ bản
- Giúp ta có thể dùng state trong functional component
- Input: initialState (giá trị hoặc function)
- Output: một mảng có 2 phần tử tương ứng cho `state` và `setState`
- Cách dùng: `const [name, setName] = useState('Noradomi');`

- **Array destructoring**:

```javascript
// Before
const array = ['Easy','Learning'];
const a = array[0];
const b = array[1];

// Now
const [a, b] = ['Easy','Learning'];
```

- Khi thay đổi `state` thì cần clone state rồi mới update state

```javascript
const newTodoList = [...todoList];
```

- **Những lưu ý khi dùng `useState()`**:
  - useState() sử dụng **REPLACING** thay vì **MERGING** như bên class component.

    ```javascript
    // setState() in class component: MERGING
    this.state = {name: 'Phuc', color: 'blue'};
    this.setState({color: 'green'});
    // -> {name: 'Phuc', color: 'green'}
    ```

    ```javascript
    // useState() in functional component: REPLACING
    const [person, setPerson] = useState({ name: 'Phuc', color: 'blue'});
    setPerson({color: 'green'});
    // -> {color: 'green'}
    ```

    - SOLUTION

    ```javascript
    setPerson({...person, color: 'green'});
    ```
    
  -   Initial state chỉ được cho dùng lần đầu  -> sử dụng callback fucntion.

# useEffect()

- Khi sử dụng setInterval(), setTimeout() hoặc subscription thì sử dụng useEffect() có cleanup.
  - **Error**: Can't update on an unmounted component.

# useRef()

- Tạo ra 1 object mà giá trị không thay đổi giữa những lần render. giá trị của lần render trước sẽ được giữ lại
lại