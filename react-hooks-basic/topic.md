# Front-end

## JavaScript Basic

- Async
  - Callback
    - Là truyền 1 đoạn code (hàm A) vào 1 đoạn code khác (hàm B) như `1 đối số`, và đến 1 lúc nào đó thì hàm A sẽ được hàm B gọi là (`callback`).
    - Trong C++, Java, C# được thể hiện qua khái niêm con trỏ hàm (or delegate trong C#).
    - 2 loại: `sync callback` và `async callback` - các hàm thực thi trong .then() -> xử lí code JS bất đồng bộ.
  - Callback hell
    - Callback lông nhau.
  - Promise
    - ES6
    - Là một cơ chế giúp thực thi, xử lí các tác vụ bất đồng bộ mà không rơi vào callback hell.
    - Promise chaining: bên trong hàm `resolve` có thẻ trả về một giá trị bất đồng bộ hoặc một Promise
  
    ``` javascript
        api.getUser('Noradomi')
        .then(user => api.getPostsOfUser(user))
        .then(posts => api.getCommentsOfPosts(posts))
        .catch(err => {
            throw err
        })
    ```

    - Notes:
      - `.then()` tham số luôn là một hàm. Nếu tham sô truyền vào là một giá trị, nó sẽ bị bỏ qua.  

  - Async/Await
    - ES8
    - Sử dụng Promise bên dưới.
    - Cách dùng:
      - Khai báo hàm với từ khóa `async`.
      - Dùng từ khóa `await` trước async codes.
      - Kết quả trả về của một `async function` là 1 Promise

     ```javascript
        async function() {
            try {
                const user = await api.getUser('Noradomi');
                const posts = await api.getPostsOfUser(user);
                const comments = await api.getCommentsOfPosts(posts);
            }
            catch (err){
                // ...
            }
        }
    ```

- setTimeout, setInterval 

- Closure

- OOP: prototypes, class
- (lodash,...)
