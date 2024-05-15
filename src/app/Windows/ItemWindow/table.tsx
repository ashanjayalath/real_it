'use client';

import {
  useColorModeValue, Text, Flex, Box,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/react'
import {
  Button, ConfigProvider, Input,
  Popconfirm, Space, Table, TableColumnType,
  Tag
} from 'antd';
import React, { useRef } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
// import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useAppDispatch } from 'app/services/hooks';
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { setSelectedDataSet } from '../../../redux/features/item/itemSlice';
import DataAddDrawer from 'app/Windows/ItemWindow/dataAddDrawer';
import DataViewDrawer from './dataViewDrawer';
import { useItemDeleteBulkWithIdMutation, useItemDeleteMutation } from '../../../redux/apiMutationSlice';
import Highlighter from 'react-highlight-words';


export default function ItemTable(props: { data: any, loadingState: boolean, columnData: any, extra: JSX.Element }) {
  const { extra, data, columnData, loadingState = true, ...rest } = props
   
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  type InputRef = GetRef<typeof Input>;
  type DataIndex = keyof React.Key;
  const toast = useToast()
  const [isEditDrawerOpen, setEditDrawerOpen] = React.useState(false);
  const [isViewDrawerOpen, setViewDrawerOpen] = React.useState(false);

  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const searchInput = useRef<InputRef>();
  const [dataSource, setDataSource] = React.useState<any>([...data]);

  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
  const [selectDataSetViwe , setSelectDataSetViwe] = React.useState<any>();
  const [selectDataSetEdit , setSelectDataSetEdit] = React.useState<any>();


  const dispatch = useAppDispatch();
  const itemDetails = useSelector((state: RootState) => state.item.itemData);
  const selectDataSet = useSelector((state:RootState) => state.item.selectedItemData);

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
 

  const [itemDelete,
    {
      data:itemDeleteData,
      isLoading:isItemDeleteLoading,
      isSuccess:isItemDeleteSuccess,
      isError:isItemDeleteError,
      error:ItemDeleteError
    }] = useItemDeleteMutation();


    const [itemDeleteBulkWithID,
      {
        data:itemDeleteBUlkData,
        isLoading:isItemDeleteBUlkLoading,
        isSuccess:isItemDeleteBUlkSuccess,
        isError:isItemDeleteBUlkError,
        error:ItemDeleteBUlkError
      }] = useItemDeleteBulkWithIdMutation();

  React.useEffect(()=>{
    if(isItemDeleteSuccess){
      // message.success("gfjhfhgh")
      toast.closeAll();
      toast(
        {
          title:'Item Delete',
          description:"Item Delete Success",
          status:'success',
          isClosable:true,
          position:'top-right'
        }
      )
    // onClose();
    }else if(isItemDeleteError){
     toast.closeAll();
      toast(
        {
          title:'Error',
          description:(ItemDeleteError as any).message || "Item Delete Unsuccess.",
          isClosable:true,
          status:'error',
          position:'top-right'
        }
      )
    }
  },[isItemDeleteSuccess,ItemDeleteError, dispatch, itemDeleteData,toast,isItemDeleteError]);

  React.useEffect(()=>{
    if(isItemDeleteBUlkSuccess){
      // message.success("gfjhfhgh")
      toast.closeAll();
      toast(
        {
          title:'Item Delete',
          description:"Item Delete Success",
          status:'success',
          isClosable:true,
          position:'top-right'
        }
      )
    // onClose();
    }else if(isItemDeleteBUlkError){
     toast.closeAll();
      toast(
        {
          title:'Error',
          description:(ItemDeleteBUlkError as any).message || "Item Delete Unsuccess.",
          isClosable:true,
          status:'error',
          position:'top-right'
        }
      )
    }
  },[isItemDeleteBUlkSuccess,ItemDeleteBUlkError, dispatch, itemDeleteBUlkData,toast,isItemDeleteBUlkError]);


  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDelete = async (key: React.Key) => {
    // const newData = dataSource.filter((item: any) => item.key !== key);
    // setDataSource(newData)
    await itemDelete(key);
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
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <DeleteIcon color={textColorPrimary} cursor={'pointer'} />
              </Popconfirm>
              <EditIcon color={textColorPrimary} cursor={'pointer'} onClick={() => dataEditDrawer(record.key)} />
              <ViewIcon color={textColorPrimary} cursor={'pointer'} onClick={() => viewDataDrawer(record.key)} />
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


  const dataEditDrawer = async (key : any) =>{
    await itemDetails.map((value: any) => {
      if (value[0] === key) {
        setSelectDataSetEdit(value[1])
        // dispatch(setSelectedItemData(value[1]))
        if(selectDataSetEdit){
          setEditDrawerOpen(true)
        }
      }
    })
    console.log(selectDataSetViwe)
  }

  const viewDataDrawer = async (key: string) => {
    await itemDetails.map((value: any) => {
      if (value[0] === key) {
        setSelectDataSetViwe(value[1])
        dispatch(setSelectedDataSet(value[1]))
        if(selectDataSetViwe){
          setViewDrawerOpen(true);
        }
      }
    })
  };

  const selectedDataDelete = async ()=>{
    console.log(selectedRowKeys)
    await itemDeleteBulkWithID([selectedRowKeys]);
    setSelectedRowKeys([])
  }



  return (
    <>
      { isViewDrawerOpen ? <DataViewDrawer Open={isViewDrawerOpen} DataSet={selectDataSetViwe}/> : null}
      { isEditDrawerOpen ? <DataAddDrawer Open={isEditDrawerOpen} DataSet={selectDataSetEdit}/> : null}
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
        <Flex mb={2} justify={'space-between'}>
          <Box display={'flex'}>
            <Text>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </Text>
          </Box>
          <Box>
            <Button type='primary' style={{ backgroundColor: textColorPrimary, color: tableBgColor }} onClick={onOpen}>Remove Selected</Button>
          </Box>
        </Flex>
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
        >
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClose} >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
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