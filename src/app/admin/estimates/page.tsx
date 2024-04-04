'use client';

import { AddIcon, DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {
    Table,
    Box,
    TableContainer,
    Tbody,
    Td,
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
    Drawer,
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
    CardFooter
} from "@chakra-ui/react"
import React, { useState } from "react";
import { useFormik } from "formik";
import { redirect } from 'next/navigation';
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



export default function Estimate() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [AntDate, setAntDate] = React.useState<any>(new Date())
    const firstField = React.useRef();


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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(values.email)
        }
    });

    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>All Estimate</Heading>
                        </Flex>
                        <Tooltip label='All Estimate' placement='top'>
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

                                            ]} extra={undefined} mb={0} />
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

                                            ]} extra={undefined} mb={0} />
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
                                    <TableContainer>
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
                                    </TableContainer>
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
                                    <Box width={{ base: "100%", md: "42%", xl: "42%"}} pb={10}>
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
                    <TableContainer>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Description</Th>
                                    <Th isNumeric>PURCHASE DESCRIPTION</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                    <Td>
                                        <Badge variant='outline' rounded={'4'} colorScheme='green'>
                                            Active
                                        </Badge>
                                    </Td>
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
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </Box>
    )
}


