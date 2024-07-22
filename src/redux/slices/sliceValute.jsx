import {
  // createSlice,
  // createAsyncThunk,
  buildCreateSlice,
  asyncThunkCreator,
} from "@reduxjs/toolkit";

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
const initialState = {
  value: [],
  loading: false,
  error: "",
}

export const sliceValute = createAppSlice({
  name: "value",
  initialState,
  selectors: {
    usersState: (state) => state,
    usersList: (state) => state.value,
  },
  reducers: (create) => ({
    fetchValute: create.asyncThunk(
      "value/fetchValute",
      async (_, { rejectWithValue }) => {
        try {
          const response = await fetch(
            "https://www.cbr-xml-daily.ru/daily_json.js"
          );

          if (!response.ok) {
            return rejectWithValue("Loading users error!");
          }

          
          return response.json();
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = "1";
        },
        fulfilled: (state, action) => {
          state.users = action.payload;
          state.error = "2";
        },
        rejected: (state, action) => {
          state.error = action.payload;
        },
        settled: (state) => {
          state.loading = false;
          state.error = "3";
        },
      }
    ),
  }),
});

export const { fetchValute } = sliceValute.actions;
export default sliceValute.reducer;
