"use client";

import { AddIcon, DeleteIcon, EditIcon, PhoneIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
    Box,
    TableContainer,
    Tbody,
    Td, useColorModeValue,
    Text,
    Th,
    Thead,
    Tr,
    Card,
    CardBody,
    CardHeader,
    Heading,
    IconButton,
    Button,
    Flex,
    Drawer, Toast,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    useDisclosure,
    FormControl,
    Tooltip,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    TableCaption,
    Badge,
    CardFooter,
    useToast,
    color
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import { RedirectType, redirect } from 'next/navigation';
import InputBox from "components/fields/InputField";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
import type { Dayjs } from 'dayjs';
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import ComboBox from "components/fields/comboBox";
import InputBoxTextArea from "components/fields/InputTextArea";
import InputBoxIconRight from "components/fields/InputFieldThree";
import { useAppDispatch } from "app/services/hooks";

// import { useInvoiceCreateMutation } from "redux/apiMutationSlice";
// import { setInvoiceCredentials } from "../../../redux/features/invoice/invoiceSlice";

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

// interface DataType {
//     InvoCustomerName: string,
//     InvoID: string,
//     InvoOrderNumber: string,
//     InvoDate: string,
//     InvoTerms: string,
//     InvoDueDate: string,
//     InvoSalesperson: string,
//     InvoSubject: string,
//     InvoItemsTable: string,
//     InvoCustmoerNotes: string,
//     InvoTermCondition: string,
//     InvoDocument: string

// }

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}




export default function Invoice() {




    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];


    const dataSource: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        dataSource.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }


    const router = useRouter;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [AntDate, setAntDate] = React.useState<any>(new Date())
    const firstField = React.useRef();
    const toast = useToast();




    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        setAntDate(value.format('YYYY-MM-DD'));
    };


    // const [invoiceSave,
    //     {
    //         data: invoiceData,
    //         isLoading: isInvoiceLoading,
    //         isSuccess: isInvoiceSuccess,
    //         isError: isInvoiceError,
    //         error: InvoiceError
    //     }] = useInvoiceCreateMutation();

    const formik = useFormik({
        initialValues: {
            InvoCustomerName: "",
            InvoID: "",
            InvoOrderNumber: "",
            InvoDate: "",
            InvoTerms: "",
            InvoDueDate: "",
            InvoSalesperson: "",
            InvoSubject: "",
            InvoItemsTable: {},
            InvoCustmoerNotes: "",
            InvoTermCondition: "",
            InvoDocument: {}
        },
        onSubmit: async (values) => {
            // await invoiceSave(values)
            alert(values.InvoID)
        }
    });
    // useEffect(() => {
    //     if (isInvoiceSuccess) {
    //         // message.success("gfjhfhgh")
    //         toast.closeAll();
    //         toast(
    //             {
    //                 title: 'Invoice',
    //                 description: "Invoice Save Success",
    //                 status: 'success',
    //                 isClosable: true,
    //                 position: 'top-right'
    //             }
    //         )
    //         dispatch(setInvoiceCredentials(invoiceData))
    //     } else if (InvoiceError) {
    //         toast.closeAll();
    //         toast(
    //             {
    //                 title: 'Invoice',
    //                 description: (InvoiceError as any).message || "Invoice Save Unsuccess.",
    //                 isClosable: true,
    //                 status: 'error',
    //                 position: 'top-right'
    //             }
    //         )
    //     }
    // }, [isInvoiceSuccess]);


    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>All Invoice</Heading>
                        </Flex>
                        <Tooltip label='All Invoice' placement='top'>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<EditIcon />}
                                onClick={onOpen}
                            />
                        </Tooltip>
                    </Flex>

                </CardHeader>

                <CardBody>
                    <Drawer
                        size={'xl'}
                        isOpen={isOpen}
                        placement='left'
                        initialFocusRef={firstField}
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader boxShadow={'2xl'}>
                                Create a new Invoice
                            </DrawerHeader>

                            <DrawerBody>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBox
                                                onchange={formik.handleChange}
                                                id="customerName"
                                                label="Customer Name"
                                                name="customerName"
                                                placeholder="Customer Name"
                                                type="text" extra={undefined} mb={0} value={undefined} />
                                        </FormControl>
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBox
                                                onchange={formik.handleChange}
                                                id="invoiceNumber"
                                                label="Invoice Number"
                                                name="invoiceNumber"
                                                placeholder="Invoice Number"
                                                type="text" extra={undefined} mb={0} value={undefined} />
                                        </FormControl>
                                    </Box>
                                </Flex>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBox
                                                onchange={formik.handleChange}
                                                id="orderNumber"
                                                label="Order Number"
                                                name="orderNumber"
                                                placeholder="Order Number"
                                                type="text" extra={undefined} mb={0} value={undefined} />
                                        </FormControl>
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <Popover
                                                placement='bottom-start'
                                            >
                                                <PopoverTrigger>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="invoiceNumber"
                                                        label="Invoice Number"
                                                        name="invoiceNumber"
                                                        placeholder="Invoice Number"
                                                        value={AntDate}
                                                        type="text" extra={undefined} mb={0} />
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <PopoverBody>
                                                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </Box>
                                </Flex>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <ComboBox
                                            id="terms"
                                            name="terms"
                                            label="Terms"
                                            placeholder="Select Terms"
                                            optionProp={[
                                                { key: "1", value: "op1", label: "Net 15" },
                                                { key: "2", value: "op2", label: "Net 30" },
                                                { key: "3", value: "op3", label: "Net 45" },
                                                { key: "4", value: "op4", label: "Net 60" },
                                                { key: "5", value: "op5", label: "Due end Of the month" },
                                                { key: "6", value: "op6", label: "Due end Of the next month" },
                                                { key: "7", value: "op7", label: "Due on Receipt" },
                                                { key: "8", value: "op8", label: "Custom" },
                                            ]} extra={undefined} mb={0} onchange={undefined} value={undefined} />
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <Popover
                                                placement='bottom-start'
                                            >
                                                <PopoverTrigger>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="invoiceNumber"
                                                        label="Invoice Number"
                                                        name="invoiceNumber"
                                                        placeholder="Invoice Number"
                                                        value={AntDate}
                                                        type="text" extra={undefined} mb={0} />
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <PopoverBody>
                                                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </Box>
                                </Flex>
                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <ComboBox
                                            id="terms"
                                            name="terms"
                                            label="Salesperson"
                                            placeholder="Select Terms"
                                            optionProp={[
                                                { key: "1", value: "op1", label: "Net 15" },
                                                { key: "2", value: "op2", label: "Net 30" },
                                                { key: "3", value: "op3", label: "Net 45" },
                                                { key: "4", value: "op4", label: "Net 60" },
                                                { key: "5", value: "op5", label: "Due end Of the month" },
                                                { key: "6", value: "op6", label: "Due end Of the next month" },
                                                { key: "7", value: "op7", label: "Due on Receipt" },
                                                { key: "8", value: "op8", label: "Custom" },
                                            ]} extra={undefined} mb={0} onchange={undefined} value={undefined} />
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBox
                                                onchange={formik.handleChange}
                                                id="subject"
                                                label="Subject"
                                                name="subject"
                                                placeholder="Subject"
                                                type="text" extra={undefined} mb={0} value={undefined} />
                                        </FormControl>
                                    </Box>
                                </Flex>

                                <Box rounded={'5'} mt={'5'} mb={'10'} boxShadow={"2xl"}>
                                    {/* <TableContainer>
                                        <Table size='sm'>
                                            <TableCaption placement="top" fontSize={'lg'}>
                                                <Flex>
                                                    <Flex flex='1' justify={'space-between'} alignItems='center' flexWrap='wrap'>
                                                        <Text>ITEM TABLE</Text>
                                                        <Button leftIcon={<AddIcon />} variant='outline' size={'xs'} rounded={'4'}>Add Row</Button>
                                                    </Flex>
                                                </Flex>

                                            </TableCaption>

                                            <Thead>
                                                <Tr>
                                                    <Th>Item Detals</Th>
                                                    <Th isNumeric>QUANTITY</Th>
                                                    <Th isNumeric>RATE</Th>
                                                    <Th isNumeric>AMOUNT</Th>
                                                    <Th>Actions</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>

                                                        <FormControl>
                                                            <Input placeholder='Search Item' />
                                                        </FormControl>
                                                    </Td>
                                                    <Td isNumeric>1</Td>
                                                    <Td isNumeric>1</Td>
                                                    <Td isNumeric>0.00</Td>
                                                    <Td>
                                                        <Tooltip label='Edit & Update Item' placement='top'>

                                                            <IconButton
                                                                variant='ghost'
                                                                colorScheme='gray'
                                                                aria-label='See menu'
                                                                icon={<EditIcon />}
                                                            />
                                                        </Tooltip>
                                                        <Tooltip label='Delete Item' placement='top'>

                                                            <IconButton
                                                                variant='ghost'
                                                                colorScheme='gray'
                                                                aria-label='See menu'
                                                                icon={<DeleteIcon />}
                                                            />
                                                        </Tooltip>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer> */}
                                </Box>

                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "55%", xl: "55%" }}>
                                        <Card mb={10}>
                                            <CardHeader>
                                                <Flex justify={'space-between'} direction={'row'} flexWrap={'wrap'} gap={2}>
                                                    <Text>Sub Total</Text>
                                                    <Text>0.00</Text>
                                                </Flex>
                                            </CardHeader>
                                            <CardBody>
                                                <Flex justify={'space-between'} direction={'row'} flexWrap={'wrap'} gap={2}>
                                                    <Box w={'100%'} >
                                                        <InputBoxIconRight
                                                            rightElement={`Rs.${'2500'}`}
                                                            onchange={formik.handleChange}
                                                            id="discount"
                                                            label="Discount"
                                                            name="discount"
                                                            placeholder="Discount"
                                                            type="text" extra={undefined} mb={0} />
                                                    </Box>
                                                    <Box w={'100%'} >
                                                        <InputBoxIconRight
                                                            rightElement={`Rs.${'2500'}`}
                                                            onchange={formik.handleChange}
                                                            id="shippingCharges"
                                                            label="Shipping Charges"
                                                            name="shippingCharges"
                                                            placeholder="Shipping Charges"
                                                            type="text" extra={undefined} mb={0} />
                                                    </Box>
                                                    <Box w={'100%'} >
                                                        <InputBoxIconRight
                                                            rightElement={`Rs.${'2500'}`}
                                                            onchange={formik.handleChange}
                                                            id="adjustment"
                                                            label="Adjustment"
                                                            name="adjustment"
                                                            placeholder="Adjustment"
                                                            type="text" extra={undefined} mb={0} />
                                                    </Box>
                                                </Flex>

                                            </CardBody>
                                            <CardFooter>
                                                <Flex justify={'space-between'} direction={'row'} gap={2}>
                                                    <Text fontSize={'20px'} fontWeight={'bold'}>Total Rs.</Text>
                                                    <Text fontSize={'20px'} fontWeight={'bold'}>0.00</Text>
                                                </Flex>
                                            </CardFooter>
                                        </Card>
                                    </Box>
                                    <Box width={{ base: "100%", md: "42%", xl: "42%" }} pb={10}>
                                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk upload.
                                            </p>
                                        </Dragger>
                                    </Box>
                                </Flex>

                                <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBoxTextArea
                                                onchange={formik.handleChange}
                                                id="customerNotes"
                                                label="Customer Notes"
                                                name="customerNotes"
                                                placeholder="Customer Notes"
                                                extra={undefined} mb={0} value={""} />
                                        </FormControl>
                                    </Box>
                                    <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                        <FormControl>
                                            <InputBoxTextArea
                                                onchange={formik.handleChange}
                                                id="Terms & Conditions"
                                                label="Terms & Conditions"
                                                name="Terms & Conditions"
                                                placeholder="Warranty covers only manufactures defects, damages of defects due to other cause such as negligence, misuse,improper operation, power fluctuation, lightening, natural disaster,disaster, physical damages, burn marks, oxidized & corroded are not included under this warranty."
                                                extra={undefined} mb={0} value={""} />
                                        </FormControl>
                                    </Box>
                                </Flex>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button variant='outline' mr={3} rounded={'5'} size={'sm'} onClick={onClose}>
                                    Save as Draft
                                </Button>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button type="submit" colorScheme='blue' mr={3} rounded={'5'} size={'sm'}
                                        >
                                            Save & Send
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverBody>
                                            <Text
                                                pl={2}
                                                _hover={{
                                                    cursor: 'pointer',
                                                    backgroundColor: "red",
                                                    rounded: "5px",
                                                    color: "white"

                                                }}
                                            >PDF Send from Email</Text>
                                            <Text
                                                onClick={() => redirect('/admin/invoices/invoiceView')}
                                                pl={2}
                                                _hover={{
                                                    cursor: 'pointer',
                                                    backgroundColor: "red",
                                                    rounded: "5px",
                                                    color: "white"

                                                }}
                                            >PDF View & Download</Text>
                                            <Text
                                                pl={2}
                                                _hover={{
                                                    cursor: 'pointer',
                                                    backgroundColor: "red",
                                                    rounded: "5px",
                                                    color: "white"

                                                }}>Download PDF</Text>
                                            <Text
                                                pl={2}
                                                _hover={{
                                                    cursor: 'pointer',
                                                    backgroundColor: "red",
                                                    rounded: "5px",
                                                    color: "white"

                                                }}>Download & Send PDF</Text>

                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <Button variant='outline' mr={3} rounded={'5'} onClick={onClose} size={'sm'}>
                                    Cancel
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                    <Table
                        style={{ color: 'transparent' }}
                        columns={columns}

                        dataSource={dataSource}
                        pagination={{ pageSize: 50 }}
                        scroll={{ y: 240 }}
                    />
                    {/* <InvoicePDF />  */}
                </CardBody>
            </Card>
        </Box>
    )
}

