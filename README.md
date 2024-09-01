## Setting Up the Project

**React with Redux Toolkit and TypeScript:** The project was set up using Create React App with the TypeScript template. Redux Toolkit was chosen over the classic Redux approach due to its simplified store setup and reduced boilerplate.

## State Management with Redux Toolkit

**User Data Fetching:** `createAsyncThunk` was used to handle asynchronous fetching of user data from the mock API (https://jsonplaceholder.typicode.com/users). This approach manages loading, success, and error states within Redux.

**Slice Creation:** A slice was created using `createSlice` to manage user state.

## Implementing the User Management Table

**Table Layout:** A simple table was designed to display user information, including name, username, email, and phone, with a focus on clean and readable design.

**Dynamic Filtering:** Individual search inputs were added for each table column, allowing users to filter by name, username, email, or phone. The filtering logic utilizes controlled components and updates the Redux state dynamically as users type, providing real-time feedback.

## Type Safety with TypeScript

**Type Definitions:** Interfaces were defined for user data, Redux state, and API response to ensure type safety across the application.

**Error Handling:** Basic error handling was implemented to display messages when data fetching fails.

## Styling and User Experience

**Styled Components:** Styled-components were used for styling the table and search inputs, providing scoped, maintainable styles that are easy to adjust.

## Deployment

**GitHub Actions:** GitHub Actions were configured to automate the build and deployment process, pushing updates to GitHub Pages whenever changes are made to the main branch. Open [https://nelia11.github.io/test-task/](https://nelia11.github.io/test-task/) to view it in the browser.
