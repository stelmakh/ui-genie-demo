import { ChangeEvent, useMemo } from 'react';
import {ComponentsMap, UIGenieFields, UIGenieProps, UIGenieItems} from 'ui-genie'

export type ValueGetter<T = any> = (e: T) => any;

export const useListMap = () => {
  return useMemo(() => {
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
        <div className='item'>
          <UIGenieFields {...props}/>
        </div>
      )
    })
    componentsMap.addItem({
      name: 'stringField',
      type: 'string',
      component: ({data}: UIGenieProps) => (
        <b className='item-name'>{data}</b>)
    })
    componentsMap.addItem({
      name: 'numberField',
      type: 'integer',
      component: ({data}: UIGenieProps) => (
        <div className='item-age'><i>{data} years</i></div>
      )
    })

    return componentsMap
  }, [])
}

export const useTableMap = () => {
  return useMemo(() => {
    const componentsMap = new ComponentsMap('items-table')

    componentsMap.addItem({
      name: 'collection',
      type: 'array',
      component: (props: UIGenieProps) => (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            <UIGenieItems {...props}/>
          </tbody>
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
  }, [])
}
export const useFormMap = (
  createOnChangeHandler: (pointer: string, getValue: ValueGetter<any>) => (e: ChangeEvent) => void
) => {
  return useMemo(() => {
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
        <input key={pointer} value={data} onChange={createOnChangeHandler(pointer!, val => val)}/>
      )
    })
    componentsMap.addItem({
      name: 'numberField',
      type: 'integer',
      component: ({data, pointer}: UIGenieProps) => (
        <input key={pointer} type='number' value={data} onChange={createOnChangeHandler(pointer!, (val) => +val)}/>
      )
    })

    return componentsMap
  }, [createOnChangeHandler])
}
