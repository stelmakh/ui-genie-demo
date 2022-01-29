import { ChangeEvent } from 'react';
import {ComponentsMap, UIGenieFields, UIGenieProps, UIGenieItems} from 'ui-genie'

export type ValueGetter<T = any> = (e: T) => any;

export const createViewMap = () => {
  const componentsMap = new ComponentsMap('item-view')

  componentsMap.addItem({
    name: 'collection',
    type: 'array',
    component: (props: UIGenieProps) => (
      <UIGenieItems {...props}/>
    )
  })
  componentsMap.addItem({
    name: 'fields',
    type: 'object',
    component: (props: UIGenieProps) => (
      <fieldset>
        <UIGenieFields {...props}/>
      </fieldset>
    )
  })
  componentsMap.addItem({
    name: 'stringField',
    type: 'string',
    component: ({data}: UIGenieProps) => (
      <div>{data}</div>)
  })
  componentsMap.addItem({
    name: 'numberField',
    type: 'integer',
    component: ({data}: UIGenieProps) => (
      <div><i>{data}</i></div>
    )
  })

  return componentsMap
}

export const createTableMap = () => {
  const componentsMap = new ComponentsMap('items-table')

  componentsMap.addItem({
    name: 'collection',
    type: 'array',
    component: (props: UIGenieProps) => (
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <td>Age</td>
        </tr>
        <UIGenieItems {...props}/>
      </table>
    )
  })
  componentsMap.addItem({
    name: 'fields',
    type: 'object',
    component: (props: UIGenieProps) => (
      <tr>
        <UIGenieFields {...props}/>
      </tr>
    )
  })
  componentsMap.addItem({
    name: 'stringField',
    type: 'string',
    component: ({data}: UIGenieProps) => (
      <td>{data}</td>)
  })
  componentsMap.addItem({
    name: 'numberField',
    type: 'integer',
    component: ({data}: UIGenieProps) => (
      <td><i>{data}</i></td>
    )
  })

  return componentsMap
}
export const createFormMap = (
  createOnChangeHandler: (pointer: string, getValue: ValueGetter<any>) => (e: ChangeEvent) => void
) => {
  const componentsMap = new ComponentsMap('item-form')

  componentsMap.addItem({
    name: 'collection',
    type: 'array',
    component: (props: UIGenieProps) => (
      <UIGenieItems {...props}/>
    )
  })
  componentsMap.addItem({
    name: 'fields',
    type: 'object',
    component: (props: UIGenieProps) => (
      <fieldset>
        <UIGenieFields {...props}/>
      </fieldset>
    )
  })
  componentsMap.addItem({
    name: 'stringField',
    type: 'string',
    component: ({data, pointer}: UIGenieProps) => (
      <input value={data} onChange={createOnChangeHandler(pointer!, val => val)}/>
    )
  })
  componentsMap.addItem({
    name: 'numberField',
    type: 'integer',
    component: ({data, pointer}: UIGenieProps) => (
      <input type='number' value={data} onChange={createOnChangeHandler(pointer!, (val) => +val)}/>
    )
  })

  return componentsMap
}
