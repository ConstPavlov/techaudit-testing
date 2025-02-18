export type LayoutItem = {
  children: string[];
  parents: string[];
  type: any;
  id: string;
  meta: {
    chartId: number;
    defaultText?: string;
    height: number;
    placeholder?: string;
    sliceName: string;
    sliceNameOverride?: string;
    text?: string;
    uuid: string;
    width: number;
  };
};

export type DashboardLayout = { [key: string]: LayoutItem };

export type TcustomChartName = keyof Pick<
  LayoutItem['meta'],
  'sliceName' | 'sliceNameOverride'
>;

export type DashboardLayoutState = {
  present: DashboardLayout;
  customChartName: TcustomChartName | string;
};
