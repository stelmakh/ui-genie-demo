import React from 'react';
import './App.css';
import {ComponentsMap, UIGenieView, UIGenieFields, UIGenieProps, UIGenieItems} from 'ui-genie'
import {personsCollectionSchema, multiplePersons} from './mocks/person'

function App() {
  const componentsMap = new ComponentsMap('item-view')

  componentsMap.addItem({name: 'collection', type: 'array', component: (props: UIGenieProps) => (
    <UIGenieItems {...props}/>
  )})
  componentsMap.addItem({name: 'fields', type: 'object', component: (props: UIGenieProps) => (
    <fieldset>
      <UIGenieFields {...props}/>
    </fieldset>
  )})
  componentsMap.addItem({name: 'stringField', type: 'string', component: ({data}: UIGenieProps) => (<div>{data}</div>)})
  componentsMap.addItem({name: 'numberField', type: 'integer', component: ({data}: UIGenieProps) => (<div>{data}</div>)})


  return (
    <div className="App">
      <UIGenieView schema={personsCollectionSchema} data={multiplePersons} componentsMap={componentsMap}/>
    </div>
  );
}

export default App;
