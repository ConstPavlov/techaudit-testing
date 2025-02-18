import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardLayoutState, LayoutItem } from './ChartsTypes';
import { itemsMock } from './mock';

const initialState: DashboardLayoutState = {
  present: itemsMock,
  customChartName: 'Такого ID Не существует',
};

const dashboardLayoutSlice = createSlice({
  name: 'dashboardLayout',
  initialState,
  reducers: {
    getSliceName(state, action: PayloadAction<number>) {
      const sliceId = action.payload;

      const stateSlice = state.present;
      const valuesLayout = Object.values(stateSlice);
      const foundedSlice = valuesLayout.find(
        (slice) => slice.meta.chartId === sliceId,
      );
      if (!foundedSlice) {
        state.customChartName = 'Такого ID Не существует';
        return;
      }

      state.customChartName = foundedSlice.meta.sliceNameOverride
        ? foundedSlice.meta.sliceNameOverride
        : foundedSlice.meta.sliceName;

      console.log(foundedSlice);
    },
  },
});

export const { getSliceName } = dashboardLayoutSlice.actions;

export default dashboardLayoutSlice.reducer;
