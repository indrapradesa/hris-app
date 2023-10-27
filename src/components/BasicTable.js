import React, { useMemo } from "react";
import { useTable } from "react-table";
import DUMP_PEOPLE  from './dump_people.json';
import { COLUMNS } from './columns';
import './table.css';

export const BasicTable =  () => {
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DUMP_PEOPLE, [])

    const tableInstamce = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstamce;

    return (

        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (

                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {

                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}