"use client";

import {
    DrawerOverlay, Flex, Radio, Card, Button, DrawerContent,
    DrawerCloseButton, DrawerHeader, DrawerBody, Stack, StackDivider, Box,
    FormLabel, RadioGroup, CardHeader, CardBody, DrawerFooter, Drawer,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';

import InputBox from 'components/fields/InputField';
import InputBoxIcon from 'components/fields/InputFieldTwo';
import InputBoxTextArea from 'components/fields/InputTextArea';
import ComboBox from 'components/fields/comboBox';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useFormik } from 'formik';
import { useItemAddMutation, useItemUpdateMutation } from '../../../redux/apiMutationSlice';
import { useAppDispatch } from 'app/services/hooks';


export default function DataAddDrawer(props: { Open: any, DataSet: any }) {
    const { Open, DataSet } = props;
    const {ItemName,ItemUnit} = DataSet;


    const toast = useToast()
    const firstField = React.useRef()
    const [open, setOpen] = useState(Open);

    const selectDataSet = useSelector((state: RootState) => state.item.selectedItemData);

    const textColorPrimary = useColorModeValue('#1B2559', '#DEDEDF');



    const onClose = () => {
        setOpen(false);
    };

    const [buttonName, setButtonName] = React.useState('Save')

    const [getType, setType] = useState('goods')
    const [getWarranty, setWarranty] = useState('haveNot')
    const [getSerial, setSerial] = useState('haveNot')

    let id: any = "";

    useEffect(() => {
        if (selectDataSet) {
            setButtonName('Update')
            console.log(selectDataSet)
        } else {
            setButtonName('Save')
        }
    }, [selectDataSet])

    const dispatch = useAppDispatch();

    const [itemSave,
        {
            data: itemData,
            isLoading: isItemLoading,
            isSuccess: isItemSuccess,
            isError: isItemError,
            error: ItemError
        }] = useItemAddMutation();

    const [itemUpdate,
        {
            data: itemDataUpdate,
            isLoading: isItemUpdateLoading,
            isSuccess: isItemUpdateSuccess,
            isError: isItemUpdateError,
            error: ItemEUpdaterror
        }] = useItemUpdateMutation();


    const [SellingPrice, setSellingPrice] = useState()
    const [SaleAccount, setSaleAccount] = useState()
    const [SaleDescription, setSaleDescription] = useState()
    const [CostPrice, setCostPrice] = useState()
    const [PurchaseAccount, setPurchaseAccount] = useState()
    const [PurchaseDescription, setPurchaseDescription] = useState()


    const formik = useFormik({
        initialValues: {
            ItemName: ItemName || "",
            ItemUnit: ItemUnit || "",
        },
        onSubmit: async (values) => {
            const getAllData = {
                ...values,
                ItemSalesInfo: {
                    SellingPrice: SellingPrice,
                    Account: SaleAccount,
                    Description: SaleDescription,
                },
                ItemPurchaseInfo: {
                    CostPrice: CostPrice,
                    Account: PurchaseAccount,
                    Description: PurchaseDescription,

                },
                ItemType: getType,
                warranty: getWarranty,
                serial: getSerial
            }
            console.log(getAllData)
            if (buttonName === 'Update') {
                id = DataSet._id;
                await itemUpdate({ getAllData, id })
            } else {
                await itemSave(getAllData)
            }

        }
    });



    useEffect(() => {
        if (isItemSuccess) {
            // message.success("gfjhfhgh")
            toast.closeAll();
            toast(
                {
                    title: 'Item Save',
                    description: "Item Add Success",
                    status: 'success',
                    isClosable: true,
                    position: 'top-right'
                }
            )
            onClose();
        } else if (isItemError) {
            toast.closeAll();
            toast(
                {
                    title: 'Error',
                    description: (ItemError as any).message || "Item Save Unsuccess.",
                    isClosable: true,
                    status: 'error',
                    position: 'top-right'
                }
            )
        }
    }, [isItemSuccess, ItemError, dispatch, itemData, toast, isItemError]);

    useEffect(() => {
        if (isItemUpdateSuccess) {
            // message.success("gfjhfhgh")
            toast.closeAll();
            toast(
                {
                    title: 'Item Update',
                    description: "Item Update Success",
                    status: 'success',
                    isClosable: true,
                    position: 'top-right'
                }
            )
            onClose();
        } else if (isItemUpdateError) {
            toast.closeAll();
            toast(
                {
                    title: 'Error',
                    description: (isItemUpdateError as any).message || "Item Update Unsuccess.",
                    isClosable: true,
                    status: 'error',
                    position: 'top-right'
                }
            )
        }
    }, [isItemUpdateSuccess, dispatch, itemUpdate, toast, isItemUpdateError]);



    return (

        <Drawer
            size={'xl'}
            isOpen={open}
            placement='left'
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <form onSubmit={formik.handleSubmit}>
                <DrawerOverlay bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader boxShadow={'2xl'}>
                        Create a new Item
                    </DrawerHeader>

                    <DrawerBody>

                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", sm: "45%", md: "20%", xl: "22%" }} >
                                        <FormLabel
                                            display='flex'
                                            fontSize='sm'
                                            color={textColorPrimary}
                                            fontWeight='bold'
                                            _hover={{ cursor: 'pointer' }}
                                        >Type
                                        </FormLabel>
                                        <RadioGroup name='ItemType' onChange={setType} value={getType}>
                                            <Stack direction='row'>
                                                <Radio value='goods' size='sm' colorScheme='red'>Goods</Radio>
                                                <Radio value='service' size='sm' colorScheme='red'>Service</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Box width={{ base: "100%", sm: "45%", md: "20%", xl: "22%" }} >
                                        <FormLabel
                                            display='flex'
                                            fontSize='sm'
                                            color={textColorPrimary}
                                            fontWeight='bold'
                                            _hover={{ cursor: 'pointer' }}
                                        >Warranty</FormLabel>
                                        <RadioGroup name='warranty' onChange={setWarranty} value={getWarranty}>
                                            <Stack direction='row'>
                                                <Radio value='have' size='sm' colorScheme='red' >Have</Radio>
                                                <Radio value='haveNot' size='sm' colorScheme='red'>Haven&apos;t</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Box width={{ base: "100%", sm: "45%", md: "20%", xl: "22%" }} >
                                        <FormLabel
                                            display='flex'
                                            fontSize='sm'
                                            color={textColorPrimary}
                                            fontWeight='bold'
                                            _hover={{ cursor: 'pointer' }}
                                        >Serial</FormLabel>
                                        <RadioGroup name='serial' onChange={setSerial} value={getSerial} >
                                            <Stack direction='row'>
                                                <Radio value='have' size='sm' colorScheme='red'>Have</Radio>
                                                <Radio value='haveNot' size='sm' colorScheme='red'>Haven&apos;t</Radio>
                                            </Stack>
                                        </RadioGroup>

                                    </Box>
                                    {/* <Box width={{ base: "100%", sm: "45%", md: "20%", xl: "22%" }} >
                                        <ComboBox
                                            id="Status"
                                            name="Status"
                                            label="Status"
                                            placeholder="Select Status"
                                            optionProp={[
                                                { key: "1", value: "Active", label: "Active" },
                                                { key: "2", value: "Inactive", label: "Inactive" },
                                                { key: "3", value: "Delete", label: "Delete" }
                                            ]} extra={undefined} mb={0}
                                            value={formik.values.Status}
                                            onchange={formik.handleChange} />
                                    </Box> */}
                                </Flex>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2} mt={5}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <InputBox
                                            id="ItemName"
                                            label="Item Name"
                                            name="ItemName"
                                            placeholder="Item Name"
                                            type="text" extra={undefined} mb={0}
                                            value={formik.values.ItemName}
                                            onchange={formik.handleChange} />
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <ComboBox
                                            id="ItemUnit"
                                            name="ItemUnit"
                                            label="Unit"
                                            placeholder="Select Unit"
                                            optionProp={[
                                                { key: "1", value: "box", label: "box" },
                                                { key: "2", value: "cm", label: "cm" },
                                                { key: "3", value: "dz", label: "dz" },
                                                { key: "4", value: "ft", label: "ft" },
                                                { key: "5", value: "g", label: "g" },
                                                { key: "6", value: "in", label: "in" },
                                                { key: "7", value: "kg", label: "kg" },
                                                { key: "8", value: "km", label: "km" },
                                                { key: "9", value: "lb", label: "lb" },
                                                { key: "10", value: "mg", label: "mg" },
                                                { key: "11", value: "ml", label: "ml" },
                                                { key: "12", value: "m", label: "m" },
                                                { key: "13", value: "pcs", label: "pcs" }
                                            ]} extra={undefined} mb={0}
                                            value={formik.values.ItemUnit}
                                            onchange={formik.handleChange} />
                                    </Box>
                                </Flex>

                                <Flex direction="row" align="center" justify="space-between" flexWrap={'wrap'} pt="4" gap={2} >
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <Card w={'100%'} boxShadow={'2xl'}>
                                            <CardHeader fontSize={'20px'}>
                                                Sales Information
                                            </CardHeader>
                                            <CardBody>
                                                <Flex direction="column" justify="space-between" pt="4" gap={2} >
                                                    <InputBoxIcon
                                                        leftElement={'Rs.'}
                                                        id="SellingPrice"
                                                        label="Selling Price"
                                                        name="SellingPrice"
                                                        placeholder="Selling Price"
                                                        type="text" extra={undefined} mb={0}
                                                        value={SellingPrice}
                                                        onchange={(e: any) => setSellingPrice(e.target.value)} />

                                                    <ComboBox
                                                        id="SaleAccount"
                                                        name="SaleAccount"
                                                        label="Account"
                                                        placeholder="Select Account"
                                                        optionProp={[
                                                            { key: "1", value: "Discount", label: "Discount" },
                                                            { key: "2", value: "Sales", label: "Sales" },
                                                            { key: "3", value: "dz", label: "dz" },
                                                            { key: "4", value: "OtherCharge", label: "Other Charge" }
                                                        ]} extra={undefined} mb={0}
                                                        value={SaleAccount}
                                                        onchange={(e: any) => setSaleAccount(e.target.value)}
                                                    />

                                                    <InputBoxTextArea
                                                        id="SaleDescription"
                                                        label="Description"
                                                        name="SaleDescription"
                                                        placeholder="Description"
                                                        extra={undefined} mb={0}
                                                        value={SaleDescription}
                                                        onchange={(e: any) => setSaleDescription(e.target.value)} />

                                                </Flex>
                                            </CardBody>
                                        </Card>
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <Card w={'100%'} boxShadow={'2xl'}>
                                            <CardHeader fontSize={'20px'}>
                                                Purchase Information
                                            </CardHeader>
                                            <CardBody>
                                                <Flex direction="column" justify="space-between" pt="4" gap={2} >
                                                    <InputBoxIcon
                                                        leftElement={'Rs.'}
                                                        id="CostPrice"
                                                        label="Cost Price"
                                                        name="CostPrice"
                                                        placeholder="Cost Price"
                                                        type="text" extra={undefined} mb={0}
                                                        value={CostPrice}
                                                        onchange={(e: any) => setCostPrice(e.target.value)} />

                                                    <ComboBox
                                                        id="PurchaseAccount"
                                                        name="PurchaseAccount"
                                                        label="Account"
                                                        placeholder="Select Account"
                                                        optionProp={[
                                                            { key: "1", value: "Discount", label: "Discount" },
                                                            { key: "2", value: "Sales", label: "Sales" },
                                                            { key: "3", value: "dz", label: "dz" },
                                                            { key: "4", value: "OtherCharge", label: "Other Charge" }
                                                        ]} extra={undefined} mb={0}
                                                        value={PurchaseAccount}
                                                        onchange={(e: any) => setPurchaseAccount(e.target.value)} />

                                                    <InputBoxTextArea
                                                        id="PurchaseDescription"
                                                        label="Description"
                                                        name="PurchaseDescription"
                                                        placeholder="Description"
                                                        extra={undefined} mb={0}
                                                        value={PurchaseDescription}
                                                        onchange={(e: any) => setPurchaseDescription(e.target.value)} />

                                                </Flex>
                                            </CardBody>
                                        </Card>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} rounded={'5'} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" colorScheme='blue' rounded={'5'}>{buttonName}</Button>
                    </DrawerFooter>
                </DrawerContent>
            </form>
        </Drawer>
    )
};