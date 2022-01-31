import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import './App.css';
import {UIGenieView} from 'ui-genie'
import {personsCollectionSchema, multiplePersons} from './mocks/person'
import { applyOperation, Operation } from 'fast-json-patch';
import { useListMap, useFormMap, ValueGetter, useTableMap } from './maps';

function App() {
  const [data, setData] = useState(multiplePersons);
  const [view, setView] = useState<'table' | 'list' | 'form'>('table')

  const createOnChangeHandler = useCallback((pointer: string, getValue: ValueGetter<any>) => (e: ChangeEvent<any>) => {
    const value = e.currentTarget?.value;

    const operation =
      {
        op: 'replace',
        path: pointer,
        value: getValue(value)
      } as Operation

    setData(data => applyOperation(data, operation, false, false).newDocument)

  }, [])

  const listMap = useListMap();
  const tableMap = useTableMap();
  const formMap = useFormMap(createOnChangeHandler);

  const componentsMap = useMemo(() => {
    switch(view) {
      case 'list':
        return listMap;
      case 'form':
        return formMap;
      default:
        return tableMap
    }
  }, [formMap, listMap, tableMap, view])

  return (
    <div className="App">
      <div className='container'>
        <div>
          <button onClick={() => setView('table')} disabled={view === 'table'}>table</button>
          <button onClick={() => setView('list')} disabled={view === 'list'}>list</button>
          <button onClick={() => setView('form')} disabled={view === 'form'}>form</button>
        </div>
        <div className='content'>
          <UIGenieView schema={personsCollectionSchema} data={data} componentsMap={componentsMap}/>
        </div>
      </div>
    </div>
  );
}

export default App;
