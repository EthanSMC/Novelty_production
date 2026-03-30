# Novelty - Interactive Story Platform Frontend Specification & API Requirements

## Overview
Novelty is an interactive story platform where users can read, manage, and generate AI-driven stories based on their choices. The frontend is built with React, Tailwind CSS, and React Router.

## 1. Pages & Functionality

### 1.1 Login Page (`/login`)
- **Functionality**: Authenticates the user. Currently simulates a login process with a 1.5s delay.
- **Interactions**: 
  - User enters email and password.
  - Clicks "Sign In".
  - Button shows a loading spinner.
  - Upon success, sets `isAuthenticated` in `localStorage` and redirects to `/store`.
- **Required APIs**:
  - `POST /api/auth/login`
    - **Request Body**: `{ email, password }`
    - **Response**: `{ token, user: { id, name, email, avatarUrl } }`

### 1.2 Store / The Eternal Library (`/store`)
- **Functionality**: The main catalog where users can find new stories or templates to start.
- **Interactions**:
  - **Search**: Users can type in the search bar to filter stories by title or description.
  - **Category Filters**: Users can click on category pills (e.g., "Sci-Fi", "Cyberpunk") to filter the displayed stories.
  - **Story Cards**: Clicking on a story card navigates the user to the reading interface (`/read`) to start that story.
- **Required APIs**:
  - `GET /api/stories/catalog`
    - **Query Params**: `?category=Sci-Fi&search=neon`
    - **Response**: `[{ id, title, category, description, imageUrl, ... }]`

### 1.3 Bookshelf (`/bookshelf`)
- **Functionality**: Displays the user's personal library, separated into "Stories in Progress" and "Finished Masterpieces".
- **Interactions**:
  - **Story Cards**: Clicking any story card (in progress or finished) navigates to `/read` to continue or review the story.
  - **Floating Action Button (FAB)**: Clicking the "+" button navigates to `/store` to start a new story.
  - **AI Suggestion Card**: Clicking "Continue Writing" navigates to `/read`.
- **Required APIs**:
  - `GET /api/user/library`
    - **Response**: `{ inProgress: [...], finished: [...] }`

### 1.4 Reading Interface (`/read`)
- **Functionality**: The core interactive reading experience. Displays the current chapter and presents choices for the next chapter.
- **Interactions**:
  - **Reading**: User reads the generated text.
  - **Making a Choice**: User selects one of the options (A, B, C, D).
  - **Generation State**: Upon selection, the buttons are disabled, and a loading state ("The Muse is weaving your next chapter...") is displayed.
  - **Progression**: After a delay (simulating AI generation), the chapter number increments, new text appears, and the page scrolls to the top.
- **Required APIs**:
  - `GET /api/stories/:storyId/chapter/:chapterId`
    - **Response**: `{ chapterNumber, title, content, choices: [{ id, text }] }`
  - `POST /api/stories/:storyId/generate-next`
    - **Request Body**: `{ currentChapterId, selectedChoiceId }`
    - **Response**: `{ newChapterId, chapterNumber, title, content, choices: [...] }`

### 1.5 Profile (`/profile`)
- **Functionality**: Displays user statistics and provides account management options.
- **Interactions**:
  - **Logout**: Clicking the "Sign Out" button clears the local authentication state and redirects to `/login`.
- **Required APIs**:
  - `GET /api/user/profile`
    - **Response**: `{ name, role, avatarUrl, stats: { storiesBuilt, wordsGenerated, choicesMade } }`
  - `POST /api/auth/logout`

## 2. Global Components & Interactions

### 2.1 Navigation (Layout)
- **Top Header**: 
  - Logo navigates to `/`.
  - Search icon navigates to `/store`.
  - User avatar navigates to `/profile`.
  - In `/read` mode, the header changes to display reading progress instead of standard navigation icons.
- **Bottom Navigation Bar**:
  - Visible on all pages except `/read`.
  - Provides quick access to Bookshelf, Store, and Profile.

### 2.2 Authentication Guard
- The `Layout` component checks for `isAuthenticated` in `localStorage`. If missing, it redirects unauthenticated users to `/login`.

## 3. Future Enhancements & API Integration Notes
- **State Management**: Currently, state is managed locally within components. When integrating real APIs, a global state management solution (like React Context or Redux) or a data-fetching library (like React Query or SWR) should be implemented to manage user sessions and cache library data.
- **Error Handling**: API error states (e.g., network failures, invalid credentials) need to be handled gracefully with toast notifications or inline error messages.
- **Real-time Generation**: The `/read` page's generation simulation should be replaced with Server-Sent Events (SSE) or WebSockets if the AI generation takes a significant amount of time, allowing for a streaming text effect.
