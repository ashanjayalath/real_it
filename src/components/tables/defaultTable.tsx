'use client';

import {useColorModeValue} from '@chakra-ui/react'
import { Button, ConfigProvider, Input, InputRef, Space, Table, TableColumnType, TableProps } from 'antd';
import React, { useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
// import Highlighter from 'react-highlight-words';



export default function DefaultTable(props: { data: any,columnData:any, extra: JSX.Element }) {
    const { extra, data,columnData, ...rest } = props
    // Chakra Color Mode
    //Gray 600 #4A5568
    //Gray 800 #1A202C

    const tableBgColor = useColorModeValue('#FFFFFF', '#2D3748');
    const tableBorderColor = useColorModeValue('#A0AEC0', '#525151');
    const tableCellBorderColor = useColorModeValue('#D6D6D6', '#525151');
    const textColorPrimary = useColorModeValue('#1B2559', '#DEDEDF');
    const tableHeaderBg = useColorModeValue('#F5F5F5', '#1A202C');
    const tableRowHover = useColorModeValue('#F7F7F7', '#4A5568');
    const tableScrollBarBg = useColorModeValue('#A0AEC0', '#171923');

    interface DataType {
        key: React.Key;
        name: string,
        description: string;
        purchaseDescription: string;
        status: string;
        actions: string
    }
    type InputRef = GetRef<typeof Input>;
    type DataIndex = keyof any;

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>();


    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
      ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
      };
    
      const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
      };
    
      const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
          
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' ,backgroundColor:tableBgColor,color:textColorPrimary}}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{ width: 90 }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  setSearchText((selectedKeys as string[])[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered: boolean) => (
          <SearchOutlined style={{ color: filtered ? '#FF1677' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            // <Highlighter
            //   highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            //   searchWords={[searchText]}
            //   autoEscape
            //   textToHighlight={text ? text.toString() : ''}
            // />
            text.toString()
          ) : (
            text
          ),
      });
    

    const Coloumn: TableProps<any>['columns'] = columnData.map((data:any) => 
        [{...data,
            ...getColumnSearchProps(data.key),
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        }])
    const Columns = Coloumn.map((data:any)=>data[0])
        
      




    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        colorBgContainer: tableBgColor,
                        borderColor: tableCellBorderColor,
                        headerColor: textColorPrimary,
                        headerBg: tableHeaderBg,
                        // rowSelectedBg: 'white',
                        stickyScrollBarBg: tableScrollBarBg,
                        rowHoverBg: tableRowHover,
                        headerSplitColor: tableBorderColor,
                        // filterDropdownBg: "red",
                        // bodySortBg: "red",
                        colorLinkHover:"red",
                        colorText: textColorPrimary,
                        controlItemBgHover: "red"
                    },
                },
            }}
        >
            {/* <Button onClick={()=>Coloumns}>save</Button> */}
            <Table
                columns={Columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                scroll={{ y: 200 , x: 850}}
            />
        </ConfigProvider>
    )
}