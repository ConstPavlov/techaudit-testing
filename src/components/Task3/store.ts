import { configureStore } from '@reduxjs/toolkit';
import dashboardLayout from './ChartSlice';

export const store = configureStore({
  reducer: {
    dashboardLayout,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
