import React, { useState, useRef } from 'react';
import Button from'@mui/material/Button';
import Table from '@mui/material/Table'



export default function TodoTable(props:any) {
    //const gridRef = useRef();
  
    
    const _deleteRow = (index:number) => {
       
            props.deleteRow(index)
        
        
    }

    if (props.todos.length === 0) {
        return (
            <div style={{ marginTop: 100, textAlign:'center' }}>
                Nothing to do for now. Add new tasks!!
            </div>
        )
    } else {
        return (

            <div className="ag-theme-alpine" style={{ height: '700px', width: '50%', margin: 'auto' }} >
                <table style={{marginTop: '100px'}}>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.todos.map((todo:any,index:number) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {todo.date}
                                </td>
                                <td>
                                    {todo.desc}
                                </td>
                                <td>
                                    {todo.priority}
                                </td>
                                <td>
                                    <Button onClick={() => _deleteRow(index)} variant="contained">Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                
            </div >

        );
    }

}