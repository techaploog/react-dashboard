import React from 'react';

import { 
  GridComponent, 
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
} from '@syncfusion/ej2-react-grids'

import { customersData,customersGrid } from '../data/dummy';

import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customer" />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Search','Delete']}
        editSettings={{allowDeleting:true,allowEditing:true,}}
        width="auto"
        // allowExcelExport
        // allowPdfExport
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject 
          services={[Page,Toolbar, Selection, Edit, Sort, Filter, Search]}
        />
      </GridComponent>
    </div>
  )
}

export default Customers