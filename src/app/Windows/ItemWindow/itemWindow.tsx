
import { EditIcon, RepeatIcon } from "@chakra-ui/icons";
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    IconButton,
    Flex,
    Tooltip,
    useToast
} from "@chakra-ui/react"

import React from "react";
import { useItemGetAllMutation } from "../../../redux/apiMutationSlice";
import { TableProps, Tag } from "antd";
import { useAppDispatch } from 'app/services/hooks';
import { setItemData } from "../../../redux/features/item/itemSlice";
import DataAddDrawer from "./dataAddDrawer";
import ItemTable from "./table";

export default function ItemWindow() {
    const [storeItem, setStoreItems] = React.useState<any>([]);
    const toast = useToast()

    const dispatch = useAppDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [DLoad,setDLoad] = React.useState(false);

    interface DataType {
        key: React.Key;
        ID:string,
        ItemType: string,
        ItemName: string;
        ItemUnit: string;
        SellingPrice: string;
        PurchasePrice: string;
        status: string;
        actions: string
    }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            width: "20%",
            align: 'center'
        },
        {
            title: 'Item Type',
            dataIndex: 'ItemType',
            key: 'ItemType',
            width: "20%",
            align: 'center'
        },
        {
            title: 'Item Name',
            className: 'ItemName',
            dataIndex: 'ItemName',
            key: 'ItemName',
            width: "25%",
            align: 'center'
        },
        {
            title: 'Item Unit',
            dataIndex: 'ItemUnit',
            key: 'ItemUnit',
            align: 'center',
            width: "20%"

        },
        {
            title: 'Selling Price',
            dataIndex: 'SellingPrice',
            key: 'SellingPrice',
            align: 'center',
            width: "20%"

        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     align: 'center',
        //     width: "25%"
        // },
        {
            title: 'Actions',
            key: 'actions',
            dataIndex: 'actions',
            align: 'center',
            width: "10%",
            fixed: 'right',
        },
    ];

    const [itemDataCall, {
        data: itemData,
        isLoading: isItemLoading,
        isSuccess: isItemSuccess,
        isError: isItemError,
        error: ItemError
    }] = useItemGetAllMutation();


    const handleVen = async () => {
        await itemDataCall(null);
        if (isItemLoading) {
            toast.closeAll();
            toast(
                {
                    title: 'Loading',
                    description: "Data Fetching Loading.",
                    isClosable: true,
                    status: 'loading',
                    position: 'top-right'
                }
            )
        }
        if (isItemSuccess) {
            toast.closeAll();
            toast(
                {
                    title: 'Sucssess',
                    description:"Data Fetching Sucsess.",
                    isClosable: true,
                    status: 'success',
                    position: 'top-right'
                }
            )
            const updatedVendoraData:DataType[] = await itemData.map((d: any) => {
                return {
                    ...d,
                    key:d._id,
                    SellingPrice: d.ItemSalesInfo.SellingPrice,
                    }
                ;
            });
            const newVendoraDataSet = itemData.map((set:any)=> [set._id,{...set}])
            dispatch(setItemData(newVendoraDataSet))
            setStoreItems(updatedVendoraData);
        }
        if (isItemError) {
            toast.closeAll();
            toast(
                {
                    title: 'Error',
                    description: (ItemError as any).message || "Data Fetching Error.",
                    isClosable: true,
                    status: 'error',
                    position: 'top-right'
                }
            )
        }
        if (ItemError) {
            toast.closeAll();
            toast(
                {
                    title: 'Error',
                    description: (ItemError as any).message || "Data Fetching Error.",
                    isClosable: true,
                    status: 'error',
                    position: 'top-right'
                }
            )
        }
    }

    React.useEffect(()=>{
        handleVen();
    },[])


    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>All Items</Heading>
                            <Tooltip label='Reload' placement='top'>
                                <IconButton
                                    variant='link'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<RepeatIcon />}
                                    onClick={handleVen}
                                />
                            </Tooltip>
                        </Flex>
                        <Tooltip label='Add New Item' placement='top'>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<EditIcon />}
                                onClick={()=>setIsDrawerOpen(true)}
                            />
                        </Tooltip>
                        { isDrawerOpen ? <DataAddDrawer Open={isDrawerOpen} DataSet={undefined}/> : null}
                    </Flex>
                </CardHeader>

                <CardBody>
                    <ItemTable
                        data={storeItem}
                        extra={undefined}
                        columnData={columns} loadingState={isItemLoading} />
                </CardBody>
            </Card>
        </Box>
    )
}