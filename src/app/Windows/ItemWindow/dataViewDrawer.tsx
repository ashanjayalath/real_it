"use client";

import { RepeatIcon } from "@chakra-ui/icons"
import { DrawerOverlay, Drawer, Tooltip, Flex, Text, DrawerContent, DrawerCloseButton, DrawerHeader, IconButton, DrawerBody, Box, FormLabel, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ViewBox from "../Component/viewList";

// interface DataType{
//     _id:string,
//     ItemName:string,
//     ItemType:string,
//     ItemUnit:string,
//     ItemSalesInfo:any,
//     SellingPrice:string,
//     SaleAccount:string,
//     SaleDescription:string,
//     ItemPurchaseInfo:any,
//     CostPrice:string,
//     PurchaseAccount:string,
//     PurchaseDescription:string,
//     createdAt:string,
//     updatedAt:string
// }

export default function DataViewDrawer(props: { Open: any, DataSet: any }) {
    const { Open, DataSet } = props;
    const {
        _id,
        ItemType,
        ItemName,
        ItemUnit,
        ItemSalesInfo,
        ItemPurchaseInfo,
        createdAt,
        updatedAt
    } = DataSet;

    const [open, setOpen] = useState(Open);

    const textColorPrimary = useColorModeValue('#1B2559', '#DEDEDF');


    const selectData = useSelector((state: RootState) => state.item.selectedItemData);


    const onClose = () => {
        setOpen(false);
    };

    const dataViewLoad = async () => {
        console.log("Reload")
        console.log(DataSet)

        // const d = DataSet.map((data:any)=>{
        //     console.log(data)
        // })
        // console.log(d)

    }


    return (
        <Drawer
            isOpen={open}
            placement='right'
            onClose={onClose}
            size={'lg'}
        >
            <DrawerOverlay bg='none'
                backdropFilter='auto'
                backdropInvert='80%'
                backdropBlur='2px' />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    Item Details
                    <Tooltip label='Reload' placement='top'>
                        <IconButton
                            variant='link'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<RepeatIcon />}
                            onClick={dataViewLoad}
                        />
                    </Tooltip>
                </DrawerHeader>
                <DrawerBody>
                    <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                        <ViewBox Name={"ID"} Value={_id} Type={"Main"} />
                        <ViewBox Name={"Item Type"} Value={ItemType} Type={"Main"} />
                        <ViewBox Name={"Item Name"} Value={ItemName} Type={"Main"} />
                        <ViewBox Name={"Item Unit"} Value={ItemUnit} Type={"Main"} />

                        <Box width={{ base: "100%", md: "48%", xl: "48%" }}>
                            <FormLabel
                                display="flex"
                                ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Item Sales Information
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Item Selling Price
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {`Rs.${ItemSalesInfo.SellingPrice}`}
                                </Text>
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Account
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {ItemSalesInfo.Account}
                                </Text>
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Description
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {ItemSalesInfo.Description}
                                </Text>
                            </FormLabel>
                        </Box>
                        <Box width={{ base: "100%", md: "48%", xl: "48%" }}>
                            <FormLabel
                                display="flex"
                                ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Item Purchas Information
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Item Purchase Price
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {`Rs.${ItemPurchaseInfo.PurchasePrice}`}
                                </Text>
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Account
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {ItemPurchaseInfo.Account}
                                </Text>
                            </FormLabel>
                            <FormLabel
                                ml={'30px'}
                                display="flex"
                                // ms="10px"
                                fontSize="sm"
                                color={textColorPrimary}
                                fontWeight="bold"
                            >
                                Description
                                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                                    {ItemPurchaseInfo.Description}
                                </Text>
                            </FormLabel>
                        </Box>

                        <ViewBox Name={"Create At"} Value={createdAt} Type={"Main"} />
                        <ViewBox Name={"Update At"} Value={updatedAt} Type={"Main"} />
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}