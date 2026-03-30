# Novelty - 前端功能与接口规范 (API Specification)

本文档描述了 Novelty (AI互动小说阅读器) 的前端完整功能流程，以及需要后端配合提供的 API 接口规范。

## 1. 核心业务流程 (User Flow)

1. **登录/注册 (Login/Auth)**
   - 用户打开应用，未登录状态下进入 `/login` 页面。
   - 输入账号密码（或第三方登录）后，获取 Token 并存储在本地。
   - 登录成功后跳转至书城 (`/store`) 或书架 (`/bookshelf`)。

2. **选书 (Store & Bookshelf)**
   - **书城 (`/store`)**: 浏览系统推荐、热门、最新上架的 AI 互动小说。点击书籍封面进入阅读或添加到书架。
   - **书架 (`/bookshelf`)**: 查看用户正在阅读或已收藏的书籍，显示阅读进度。点击继续阅读。

3. **互动阅读 (Interactive Reading)**
   - 进入阅读页 (`/read/:bookId`)，加载当前章节内容。
   - 章节末尾会提供 2-4 个选项（由 AI 生成或预设）。
   - 用户点击某个选项后，前端展示“生成中”的加载状态。
   - 调用后端接口，后端根据用户的选择，调用 LLM 生成下一章的内容和新的选项。
   - 接口返回后，前端平滑滚动到顶部，展示新章节内容。

4. **个人中心 (Profile)**
   - 查看个人信息、阅读统计（阅读时长、解锁结局数等）。
   - 设置偏好、退出登录。

---

## 2. 需要的后端接口 (Required APIs)

所有接口建议统一前缀，例如 `/api/v1`，并使用 `Authorization: Bearer <token>` 进行鉴权。

### 2.1 认证相关 (Authentication)

#### 1. 用户登录
- **POST** `/api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "u_123",
      "name": "Reader",
      "avatar": "https://..."
    }
  }
  ```

### 2.2 书籍与书架 (Books & Bookshelf)

#### 2. 获取书城列表
- **GET** `/api/books?category=trending&page=1&limit=10`
- **Response**:
  ```json
  {
    "items": [
      {
        "id": "b_001",
        "title": "The Obsidian Gate",
        "coverUrl": "https://...",
        "author": "AI Architect",
        "description": "A sci-fi fantasy adventure...",
        "tags": ["Sci-Fi", "Interactive"]
      }
    ],
    "total": 100
  }
  ```

#### 3. 获取用户书架
- **GET** `/api/user/bookshelf`
- **Response**:
  ```json
  {
    "items": [
      {
        "bookId": "b_001",
        "title": "The Obsidian Gate",
        "coverUrl": "https://...",
        "progress": 45,
        "lastReadAt": "2026-03-24T10:00:00Z",
        "currentChapterId": "c_014"
      }
    ]
  }
  ```

### 2.3 互动阅读核心 (Interactive Reading)

#### 4. 获取章节内容
- **GET** `/api/books/:bookId/chapters/:chapterId`
- **Response**:
  ```json
  {
    "chapterId": "c_014",
    "chapterNumber": 14,
    "title": "The Obsidian Gate",
    "content": "The air within the vault hung heavy...",
    "options": [
      {
        "id": "opt_a",
        "label": "A",
        "title": "Step through the Gate",
        "description": "Embrace the unknown and enter the digital void."
      },
      {
        "id": "opt_b",
        "label": "B",
        "title": "Decipher the Runes",
        "description": "Study the glowing etchings to find a flaw."
      }
    ]
  }
  ```

#### 5. 提交选择并生成下一章 (Generate Next Chapter)
- **POST** `/api/books/:bookId/chapters/:chapterId/choice`
- **Description**: 这是一个核心接口，后端可能需要较长时间（调用 LLM）。建议使用 Server-Sent Events (SSE) 流式返回，或者普通的长连接 POST。
- **Request Body**:
  ```json
  {
    "selectedOptionId": "opt_a"
  }
  ```
- **Response**:
  ```json
  {
    "chapterId": "c_015",
    "chapterNumber": 15,
    "title": "The Digital Void",
    "content": "As you step through the gate, reality dissolves...",
    "options": [
      {
        "id": "opt_c",
        "label": "A",
        "title": "Look for the Architect",
        "description": "Search the void for the creator."
      }
    ]
  }
  ```

### 2.4 用户中心 (User Profile)

#### 6. 获取用户信息与统计
- **GET** `/api/user/profile`
- **Response**:
  ```json
  {
    "id": "u_123",
    "name": "Reader",
    "stats": {
      "booksRead": 12,
      "totalWords": 450000,
      "endingsUnlocked": 8
    }
  }
  ```
