'use client';

import { AddIcon, DeleteIcon, EditIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
    Table,
    Box,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
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
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Stack,
    Textarea,
    useDisclosure,
    FormControl,
    InputLeftElement,
    Radio,
    RadioGroup,
    StackDivider,
    Tooltip,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react"
import React from "react";
import { MdOutlinePhoneAndroid, MdCopyAll } from "react-icons/md";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import InputBox from "components/fields/InputField";
import ComboBox from "components/fields/comboBox";
import { useFormik } from "formik";
import InputBoxIcon from "components/fields/InputFieldTwo";
import InputBoxTextArea from "components/fields/InputTextArea";

const { Dragger } = Upload;

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

export default function Vendors() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(values.email)
            console.log("ssssssssssssssss" + values)
        }
    });
    // width={{ base: "100%", md: "48%" ,xl:"48%"}}
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    const firstField = React.useRef()
    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >

            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>Vendor List</Heading>
                        </Flex>
                        <Tooltip label='Add New Item' placement='top'>
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<EditIcon />}
                                onClick={onOpen}
                            />
                        </Tooltip>

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
                                <DrawerHeader boxShadow={'2xl'}>Create a Vendor</DrawerHeader>
                                <DrawerBody>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }} >
                                                <FormControl>
                                                    <ComboBox
                                                        id="salutation"
                                                        name="salutation"
                                                        label="Primary Contact"
                                                        placeholder="Select Salutation"
                                                        optionProp={[
                                                            { key: "1", value: "op1", label: "Mr." },
                                                            { key: "2", value: "op2", label: "Mrs." },
                                                            { key: "3", value: "op3", label: "Ms." },
                                                            { key: "4", value: "op4", label: "Miss." },
                                                            { key: "5", value: "op5", label: "Dr." }
                                                        ]} extra={undefined} mb={0}/>
                                                </FormControl>
                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }} >
                                                <FormControl>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="fname"
                                                        label="First Name"
                                                        name="fname"
                                                        placeholder="First Name"
                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                </FormControl>
                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }} >
                                                <FormControl>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="lname"
                                                        label="Last Name"
                                                        name="lname"
                                                        placeholder="Last Name"
                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                </FormControl>
                                            </Box>
                                        </Flex>
                                        <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                            <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                                <FormControl>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="companyName"
                                                        label="Company Name"
                                                        name="companyName"
                                                        placeholder="Company Name"
                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                </FormControl>
                                            </Box>
                                            <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                                <FormControl>
                                                    <InputBox
                                                        onchange={formik.handleChange}
                                                        id="customerDisplayName"
                                                        label="Customer Display Name"
                                                        name="customerDisplayName"
                                                        placeholder="Customer Display Name"
                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                </FormControl>
                                            </Box>
                                        </Flex>
                                        <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }}>
                                                <FormControl>
                                                    <InputBoxIcon
                                                        leftElement={EmailIcon}
                                                        onchange={formik.handleChange}
                                                        id="customerEmailAddress"
                                                        label="Vendor Email"
                                                        name="customerEmailAddress"
                                                        placeholder="Email Address"
                                                        type="text" extra={undefined} mb={0} />
                                                </FormControl>
                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }}>
                                                <FormControl>
                                                    <InputBoxIcon
                                                        leftElement={PhoneIcon}
                                                        onchange={formik.handleChange}
                                                        id="customerPhoneNumber"
                                                        label="Phone Number"
                                                        name="customerPhoneNumber"
                                                        placeholder="Phone Number"
                                                        type="text" extra={undefined} mb={0} />
                                                </FormControl>
                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }}>
                                                <FormControl>
                                                    <InputBoxIcon
                                                        leftElement={MdOutlinePhoneAndroid}
                                                        onchange={formik.handleChange}
                                                        id="customerMobileNumber"
                                                        label="Mobile Number"
                                                        name="customerMobileNumber"
                                                        placeholder="Mobile Number"
                                                        type="text" extra={undefined} mb={0} />
                                                </FormControl>
                                            </Box>
                                        </Flex>

                                        <Tabs mt={'5'}>
                                            <TabList>
                                                <Tab>Other Details</Tab>
                                                <Tab>Address</Tab>
                                                <Tab>Contact Persons</Tab>
                                            </TabList>

                                            <TabPanels>
                                                <TabPanel>
                                                    <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                                        <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                                            <FormControl>
                                                                <InputBoxIcon
                                                                    leftElement={EmailIcon}
                                                                    onchange={formik.handleChange}
                                                                    id="customerOpeningBalance"
                                                                    label="Opening Balance"
                                                                    name="customerOpeningBalance"
                                                                    placeholder="Opening Balance"
                                                                    type="text" extra={undefined} mb={0} />
                                                            </FormControl>
                                                        </Box>
                                                        <Box width={{ base: "100%", md: "48%", xl: "48%" }} >
                                                            <FormControl>
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
                                                                        { key: "8", value: "op8", label: "Custom" }
                                                                    ]} extra={undefined} mb={0}                                                                />
                                                            </FormControl>
                                                        </Box>
                                                    </Flex>
                                                    <Dragger {...props} style={{ marginTop: "5px" }}>
                                                        <p className="ant-upload-drag-icon">
                                                            <InboxOutlined />
                                                        </p>
                                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                        <p className="ant-upload-hint">
                                                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                                            banned files.
                                                        </p>
                                                    </Dragger>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Flex direction={'row'} flexWrap={'wrap'} justify={'space-between'} gap={2}>
                                                        <Card width={{ base: "100%", md: "48%", xl: "48%" }} boxShadow={'2xl'}>
                                                            <CardHeader>Billing Address</CardHeader>
                                                            <CardBody>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="attention"
                                                                        label="Attention"
                                                                        name="attention"
                                                                        placeholder="Attention"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="CountryOrRegion"
                                                                        label="Country / Region"
                                                                        name="CountryOrRegion"
                                                                        placeholder="Country or Region"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxTextArea
                                                                        onchange={formik.handleChange}
                                                                        id="address"
                                                                        label="Address"
                                                                        name="address"
                                                                        placeholder="Address"
                                                                        extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="city"
                                                                        label="City"
                                                                        name="city"
                                                                        placeholder="City"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="province"
                                                                        label="Province"
                                                                        name="province"
                                                                        placeholder="Province"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="zipCode"
                                                                        label="Zip Code"
                                                                        name="zipCode"
                                                                        placeholder="Zip Code"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={PhoneIcon}
                                                                        onchange={formik.handleChange}
                                                                        id="phoneNumber"
                                                                        label="Phone Number"
                                                                        name="phoneNumber"
                                                                        placeholder="Phone Number"
                                                                        type="text" extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={PhoneIcon}
                                                                        onchange={formik.handleChange}
                                                                        id="faxNumber"
                                                                        label="Fax Number"
                                                                        name="faxNumber"
                                                                        placeholder="Fax Number"
                                                                        type="text" extra={undefined} mb={0} />
                                                                </FormControl>
                                                            </CardBody>
                                                        </Card>
                                                        <Card width={{ base: "100%", md: "48%", xl: "48%" }} boxShadow={'2xl'}>
                                                            <CardHeader>Shipping Address</CardHeader>
                                                            <CardBody>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="attention"
                                                                        label="Attention"
                                                                        name="attention"
                                                                        placeholder="Attention"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="CountryOrRegion"
                                                                        label="Country / Region"
                                                                        name="CountryOrRegion"
                                                                        placeholder="Country or Region"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxTextArea
                                                                        onchange={formik.handleChange}
                                                                        id="address"
                                                                        label="Address"
                                                                        name="address"
                                                                        placeholder="Address"
                                                                        extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="city"
                                                                        label="City"
                                                                        name="city"
                                                                        placeholder="City"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="province"
                                                                        label="Province"
                                                                        name="province"
                                                                        placeholder="Province"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBox
                                                                        onchange={formik.handleChange}
                                                                        id="zipCode"
                                                                        label="Zip Code"
                                                                        name="zipCode"
                                                                        placeholder="Zip Code"
                                                                        type="text" extra={undefined} mb={0} value={undefined} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={PhoneIcon}
                                                                        onchange={formik.handleChange}
                                                                        id="phoneNumber"
                                                                        label="Phone Number"
                                                                        name="phoneNumber"
                                                                        placeholder="Phone Number"
                                                                        type="text" extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={PhoneIcon}
                                                                        onchange={formik.handleChange}
                                                                        id="faxNumber"
                                                                        label="Fax Number"
                                                                        name="faxNumber"
                                                                        placeholder="Fax Number"
                                                                        type="text" extra={undefined} mb={0} />
                                                                </FormControl>
                                                            </CardBody>
                                                        </Card>
                                                    </Flex>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Flex>
                                                        <Tooltip label='Add Row' placement='top'>
                                                            <IconButton
                                                                variant='ghost'
                                                                colorScheme='gray'
                                                                aria-label='See menu'
                                                                icon={<MdCopyAll />}
                                                                onClick={onOpen}
                                                            />
                                                        </Tooltip>
                                                    </Flex>
                                                    <Flex>

                                                        <TableContainer>
                                                            <Table size='sm'>
                                                                <Thead>
                                                                    <Tr>
                                                                        <Th>Salutation</Th>
                                                                        <Th>First Name</Th>
                                                                        <Th>Last Name</Th>
                                                                        <Th>Email Address</Th>
                                                                        <Th>Work Phone</Th>
                                                                        <Th>Mobile</Th>
                                                                        <Th>Action</Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    <Tr>
                                                                        <Td>
                                                                            <Select>
                                                                                <option value='option1'>Mr.</option>
                                                                                <option value='option2'>Mrs.</option>
                                                                                <option value='option3'>Ms.</option>
                                                                                <option value='option4'>Miss.</option>
                                                                                <option value='option5'>Dr.</option>
                                                                            </Select>
                                                                        </Td>
                                                                        <Td>test</Td>
                                                                        <Td>asaa</Td>
                                                                        <Td>Active</Td>
                                                                        <Td>Active</Td>
                                                                        <Td>Active</Td>
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
                                                                        <Td>
                                                                            <Select>
                                                                                <option value='option1'>Mr.</option>
                                                                                <option value='option2'>Mrs.</option>
                                                                                <option value='option3'>Ms.</option>
                                                                                <option value='option4'>Miss.</option>
                                                                                <option value='option5'>Dr.</option>
                                                                            </Select>
                                                                        </Td>
                                                                        <Td>test</Td>
                                                                        <Td>asaa</Td>
                                                                        <Td>Active</Td>
                                                                        <Td>Active</Td>
                                                                        <Td>Active</Td>
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
                                                    </Flex>

                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                    </form>
                                </DrawerBody>
                                <DrawerFooter>
                                    <Button variant='outline' mr={3} rounded={'5'} onClick={onClose}>Cancel</Button>
                                    <Button type="submit" colorScheme='blue' rounded={'5'}>Save</Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                    </Flex>
                </CardHeader>

                <CardBody>
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
                                    <Td>Active</Td>
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
        </Box >
    )
}