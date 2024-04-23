'use client';

import {
  useColorModeValue, Text, Flex, Box
} from '@chakra-ui/react'
import {
  Button, ConfigProvider, Input,
  Popconfirm, Space, Table, TableColumnType,
  Tag
} from 'antd';
import React, { useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import Highlighter from 'react-highlight-words';
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

export default function DefaultTable(props: { data: any, loadingState: boolean, columnData: any, extra: JSX.Element }) {
  const { extra, data, columnData, loadingState = true, ...rest } = props
  type InputRef = GetRef<typeof Input>;
  type DataIndex = keyof React.Key;

 
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>();
  const [dataSource, setDataSource] = useState<any>([...data]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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
  const tableRowSelectedHoverBg = useColorModeValue('#6A6D79', '#7E7E7E');
  const tableRowSelect = useColorModeValue('#CECCCC', '#1A202C');
 
 



  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };


  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item: any) => item.key !== key);
    setDataSource(newData);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

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
          style={{ marginBottom: 8, display: 'block', backgroundColor: tableBgColor, color: textColorPrimary }}
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
            onClick={() => { clearFilters && handleReset(clearFilters); handleSearch(selectedKeys as string[], confirm, dataIndex) }}
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
      <SearchOutlined />
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
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const Column = columnData.map((data: any) => {
    if (data.key === 'actions') {
      return {
        ...data,
        render: (_: any, record: any) =>
          dataSource.length >= 0 ? (
            <Flex justify={'space-around'}>
              <Popconfirm overlay title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <DeleteIcon color={textColorPrimary} cursor={'pointer'} />
              </Popconfirm>
              <EditIcon color={textColorPrimary} cursor={'pointer'}/>
              <ViewIcon color={textColorPrimary} cursor={'pointer'} />
            </Flex>
          ) : null,
      }
    }
    else if(data.key === 'status'){
      return{
        ...data,
        render: (_:any, r:any ) => 
          r.status == 'Active' ? (
              <Tag icon={<CheckCircleOutlined />}  color="success">
                Active
              </Tag>
            ) : (
                <Tag icon={<ExclamationCircleOutlined />} color="warning">
                  Inactive
                </Tag>
            ),
      }
    } 
    else {
      return {
        ...data,
        ...getColumnSearchProps(data.key),
        sorter: (a: any, b: any) => a.key - b.key,
        sortDirections: ['descend', 'ascend']
      }
    }
  })





  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: tableBgColor,
              borderColor: tableCellBorderColor,
              headerColor: textColorPrimary,
              headerBg: tableHeaderBg,
              stickyScrollBarBg: tableScrollBarBg,
              rowSelectedBg: tableRowSelect,
              rowHoverBg: tableRowHover,
              rowSelectedHoverBg: tableRowSelectedHoverBg,
              headerSplitColor: tableBorderColor,
              // filterDropdownBg: "red",
              // bodySortBg: "red",
              colorLinkHover: "red",
              colorText: textColorPrimary,
              controlItemBgHover: "red"
            },
          },
        }}
      >
        {/* <Button onClick={()=>Coloumns}>save</Button> */}
        <Flex mb={2} justify={'space-between'}>
          <Box display={'flex'}>
            <Text>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </Text>
          </Box>
          <Box>
            <Button type='primary' style={{ backgroundColor: textColorPrimary, color: tableBgColor }}>Remove Selected</Button>
          </Box>
        </Flex>

        <Table
          rowSelection={rowSelection}
          columns={Column}
          dataSource={data}
          size="middle"
          loading={loadingState}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 200, x: 1350 }}
        />
      </ConfigProvider>

    </>
  )
}