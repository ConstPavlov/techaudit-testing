import React from 'react';
import './App.css';
import { fnTesting } from './utils/treeMaker';
import allData from './data';
import { Tree } from 'antd';
import { FunctionalCounter } from './components/Task2/FunctionalCounter';
import { ClassCounter } from './components/Task2/ClassCounter';
import SliceInfo from './components/Task3/SliceInfo';
import { dataEntry, transformData } from './components/Task1/transformData';

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    // const tree = traverseTree(articles);
    // console.log(tree);
    const tree: any[] = fnTesting(allData);
    setData(tree);
    console.log(transformData(dataEntry));
  }, []);

  const treeRoot =
    data.length > 0
      ? {
          checkable: true,
          disabled: false,
          disableCheckbox: false,
          level: null,
          eventKey: 'tree_root',
          value: 'All categories',
          title: 'All categories',
          selectable: true,
          checked: false,
          treeData: data,
        }
      : null;

  console.log(data);
  return (
    <div style={{ padding: '10px' }}>
      <div className="tasks">
        <div className="task">
          <h1>Task2</h1>

          <FunctionalCounter initialName="faang" count={0} />
          <ClassCounter initialName="class is base" count={0} />
        </div>
        <div className="task">
          <h1>Task3</h1>
          <SliceInfo sliceId={2} />
        </div>
        <div className="task">
          <h1>Base Task</h1>
          {data.length > 0 && (
            <Tree key="tree_root" {...treeRoot} autoExpandParent={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
