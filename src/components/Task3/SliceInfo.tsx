/**
 * You are implementing the "Chart Info" feature, which displays a small info popover with chart information.
 * The component receives a `sliceId` as a prop and should use it to retrieve the custom user's chart name.
 *
 * Requirements:
 * - Access the Redux store to retrieve the custom chart name (`sliceNameOverride`), located in the `dashboardLayout` state.
 * - Match the chart’s `sliceId` prop with the `meta.chartId` in each layout item to find the correct chart.
 * - If `sliceNameOverride` is undefined, fall back to the `sliceName` field.
 *
 * Task:
 * - Unravel the complex types in the Redux store and retrieve the `sliceNameOverride` field or `sliceName` as a fallback.
 * - Return a component that displays the retrieved name in an `<h1>` element.
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSliceName } from './ChartSlice';
import { RootState } from './store';

const SliceInfo: React.FC<{ sliceId: number }> = ({ sliceId }) => {
  const dispatch = useDispatch();
  const { customChartName } = useSelector(
    (state: RootState) => state.dashboardLayout,
  );
  React.useEffect(() => {
    dispatch(getSliceName(sliceId));
  }, []);
  return (
    <div>
      <h3>Name slice: {customChartName}</h3>
    </div>
  );
};

export default SliceInfo;
