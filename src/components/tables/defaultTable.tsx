'use client';

import {
  IconButton, Tooltip, useColorModeValue, Text, Flex, Box,Drawer, DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerHeader, DrawerOverlay, DrawerFooter
} from '@chakra-ui/react'
import {
  Button, ConfigProvider, Input, InputRef,
  Popconfirm, Space, Table, TableColumnType, TableProps
} from 'antd';
import React, { useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import InputBox from 'components/fields/InputField';
import { DeleteIcon, EditIcon, RepeatIcon, ViewIcon } from '@chakra-ui/icons';
import Highlighter from 'react-highlight-words';



export default function DefaultTable(props: { data: any, columnData: any, extra: JSX.Element }) {
  const { extra, data, columnData, ...rest } = props
  type InputRef = GetRef<typeof Input>;
  type DataIndex = keyof React.Key;

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>();
  const [dataSource, setDataSource] = useState<DataType[]>([...data]);
  const [open, setOpen] = useState(false);


  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
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


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  interface DataType {
    key: React.Key;
    name: string,
    description: string;
    purchaseDescription: string;
    status: string;
    actions: string
  }


  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
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
      return [
        {
          ...data,
          render: (_: any, record: any) =>
            dataSource.length >= 1 ? (
              <Flex justify={'space-around'}>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                  <DeleteIcon color={textColorPrimary} cursor={'pointer'} />
                </Popconfirm>
                <EditIcon color={textColorPrimary} cursor={'pointer'} onClick={() => alert("edit")} />
                <ViewIcon color={textColorPrimary} cursor={'pointer'} onClick={showDrawer} />
              </Flex>

            ) : null,
        }
      ]
    } else {
      return [{
        ...data,
        ...getColumnSearchProps(data.key),
        sorter: (a: any, b: any) => a.key - b.key,
        sortDirections: ['descend', 'ascend']
      }]
    }
  })
  const Columns = Column.map((data: any) => data[0])


  return (
    <>
      <Drawer
        isOpen={open}
        placement='right'
        onClose={onClose}
        size={'lg'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
              <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                ddsdsd
              </Box>
              <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                sdsd
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
            <Tooltip label='Reload' placement='top'>
              <IconButton
                variant='link'
                colorScheme='gray'
                aria-label='See menu'
                icon={<RepeatIcon />}
                onClick={start}
                disabled={!hasSelected}
              />
            </Tooltip>
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
          columns={Columns}
          dataSource={data}
          size="middle"
          pagination={{ pageSize: 10 }}
          scroll={{ y: 200, x: 850 }}
        />
      </ConfigProvider>

    </>
  )
}