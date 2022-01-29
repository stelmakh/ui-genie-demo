import { ChangeEvent, useCallback, useState } from 'react';
import './App.css';
import {UIGenieView} from 'ui-genie'
import {personsCollectionSchema, multiplePersons} from './mocks/person'
import { applyOperation, Operation } from 'fast-json-patch';
import { createViewMap, createFormMap, ValueGetter, createTableMap } from './maps';

function App() {
  const [data, setData] = useState(multiplePersons);

  const createOnChangeHandler = useCallback((pointer: string, getValue: ValueGetter<any>) => (e: ChangeEvent<any>) => {
    const value = e.currentTarget?.value;

    const operation =
      {
        op: 'replace',
        path: pointer,
        value: getValue(value)
      } as Operation

    setData(applyOperation(data, operation, false, false).newDocument)

  }, [data])

  const viewMap = createViewMap();
  const tableMap = createTableMap();
  const formMap = createFormMap(createOnChangeHandler);

  return (
    <div className="App">
      <UIGenieView schema={personsCollectionSchema} data={data} componentsMap={tableMap}/>
      <br/>
      <UIGenieView schema={personsCollectionSchema} data={data} componentsMap={viewMap}/>
      <br/>
      <UIGenieView schema={personsCollectionSchema} data={data} componentsMap={formMap}/>
    </div>
  );
}

export default App;
