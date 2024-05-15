
import { AddIcon, DeleteIcon, EditIcon, PhoneIcon, EmailIcon, CopyIcon } from "@chakra-ui/icons";
import {
    Box,
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
    useDisclosure,
    FormControl,
    Tooltip,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useColorModeValue,
    ButtonGroup
} from "@chakra-ui/react"
import { MdOutlinePhoneAndroid, MdCopyAll } from "react-icons/md";
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { ConfigProvider, message, Upload } from 'antd';
import InputBox from "components/fields/InputField";
import ComboBox from "components/fields/comboBox";
import { useFormik } from "formik";
import InputBoxIcon from "components/fields/InputFieldTwo";
import InputBoxTextArea from "components/fields/InputTextArea";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { CloudinaryPath } from "ApiLinks/allLinks";
import type { TableColumnsType, TableProps } from 'antd';
import type { GetRef } from 'antd';
import { Form, Input, Popconfirm, Table } from 'antd';
import VendorTable from "components/tables/vendorTable";
import DefaultTable from "components/tables/defaultTable";

let val:string;

type FormInstance<T> = GetRef<typeof Form<T>>;
const { Dragger } = Upload;
interface DataType{
    val: any;
    attention:string;
    CountryOrRegion:string;
    address:string;
    city:string;
    province:string;
    zipCode:string;
    phoneNumber:string;
    faxNumber:string;
}

export default function Vendors() {

    //Chakra theme color
    const textColorPrimary = useColorModeValue('#1B2559', 'white');

    // width={{ base: "100%", md: "48%" ,xl:"48%"}}
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [billingAddress, setBillingAddress] = useState<DataType>(null)
    const [shippingAddress, setShippingAddress] = useState<DataType>(null)

    const [addreesCopy, setAddressCopy] = useState<boolean>(false);

    interface DataType2 {
        key: React.Key;
        name: string,
        description: string;
        purchaseDescription: string;
        status: string;
        actions: string
    }
    const columns2: TableProps<DataType2>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: 'Description',
            className: 'Description',
            dataIndex: 'description',
            key: 'description',
            align: 'center'
        },
        {
            title: 'Purchase Description',
            dataIndex: 'purchaseDescription',
            key: 'purchaseDescription',
            align: 'center',
            width: "25%"

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center'

        },
        {
            title: 'Actions',
            key: 'actions',
            dataIndex: 'actions',
            align: 'center',
            width: "10%",
            fixed: 'right'
        },
    ];
    const data2: DataType2[] = [
        {
            key: '0',
            name: 'zo Brown',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Active",
            actions: 'New',
        },
        {
            key: '1',
            name: 'bohn',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Inactive",
            actions: 'New',
        },
        {
            key: '2',
            name: 'coh Brown',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Active",
            actions: 'New',
        },
        {
            key: '3',
            name: 'aohn Brown',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Inactive",
            actions: 'New',
        },
        {
            key: '4',
            name: 'hohn Brown',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Inactive",
            actions: 'New',
        },
        {
            key: '5',
            name: 'qohn Brown',
            description: '￥300,000.00',
            purchaseDescription: "sss",
            status: "Active",
            actions: 'New',
        }
    ];
    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: CloudinaryPath.CLOUDINARY_URL,
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
    const tabledata = [
        {
            key: '0',
            FirstName: 'Ashan',
            LastName: 'Jayalath',
            EmailAddress: "shanjayalath@gmail.com",
            WorkPhone: "0552250409",
            Mobile: "0711231232"
        }
    ]

    const addressFormHandle = (e: any) => {
        setBillingAddress((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }
    const shipAddressFormHandle = (e: any) => {
        if (addreesCopy) {
            setShippingAddress(billingAddress)
            setAddressCopy(false);
        } else {
            setShippingAddress((prevData) => ({
                ...prevData,
                [e.target.name]: e.target.value,
            }));
        }
    }

    const copyBillAddress = () => addreesCopy ? setAddressCopy(false) : setAddressCopy(true)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(values.email)
        }
    });

    interface inputBoxDataType{
        key:React.Key,
        leftElement:any,
        id:string,
        label:string,
        name:string,
        placeholder:string,
    }
    const CustomerInputBoxData:inputBoxDataType[]=[
        {
            key:0,
            leftElement:EmailIcon,
            id:"customerEmailAddress",
            label:"Vendor Email",
            name:"customerEmailAddress",
            placeholder:"Email Address"
        },
        {
            key:1,
            leftElement:PhoneIcon,
            id:"customerPhoneNumber",
            label:"Phone Number",
            name:"customerPhoneNumber",
            placeholder:"Phone Number"
        },
        {
            key:2,
            leftElement:MdOutlinePhoneAndroid,
            id:"customerMobileNumber",
            label:"Mobile Number",
            name:"customerMobileNumber",
            placeholder:"Mobile Number"
        }
    ]

    const Address=[
        {
            key:0,
            type:"IB",
            id:"attention",
            label:"Attention",
            name:"attention",
            placeholder:"Attention"
        },
        {
            key:1,
            type:"IB",
            id:"CountryOrRegion",
            label:"Country / Region",
            name:"CountryOrRegion",
            placeholder:"Country or Region"
        },
        {
            key:2,
            type:"IBTA",
            id:"address",
            label:"Address",
            name:"address",
            placeholder:"Address"
        },
        {
            key:3,
            type:"IB",
            id:"city",
            label:"City",
            name:"city",
            placeholder:"City"
        },
        {
            key:4,
            type:"IB",
            id:"province",
            label:"Province",
            name:"province",
            placeholder:"Province"
        },
        {
            key:5,
            type:"IB",
            id:"zipCode",
            label:"Zip Code",
            name:"zipCode",
            placeholder:"Zip Code"
        },
        {
            key:6,
            type:"IBI",
            leftElement:PhoneIcon,
            id:"phoneNumber",
            label:"Phone Number",
            name:"phoneNumber",
            placeholder:"Phone Number"
        },
        {
            key:7,
            type:"IBI",
            leftElement:PhoneIcon,
            id:"faxNumber",
            label:"Fax Number",
            name:"faxNumber",
            placeholder:"Fax Number"
        }
    ]
    
  

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
                                                    ]} extra={undefined} mb={0} onchange={undefined} value={undefined} />

                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }} >

                                                <InputBox
                                                    onchange={formik.handleChange}
                                                    id="fname"
                                                    label="First Name"
                                                    name="fname"
                                                    placeholder="First Name"
                                                    type="text" extra={undefined} mb={0} value={undefined} />

                                            </Box>
                                            <Box width={{ base: "100%", md: "32%", xl: "32%" }} >

                                                <InputBox
                                                    onchange={formik.handleChange}
                                                    id="lname"
                                                    label="Last Name"
                                                    name="lname"
                                                    placeholder="Last Name"
                                                    type="text" extra={undefined} mb={0} value={undefined} />

                                            </Box>
                                        </Flex>
                                        <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                            <Box width={{ base: "100%", md: "48%", xl: "48%" }} >

                                                <InputBox
                                                    onchange={formik.handleChange}
                                                    id="companyName"
                                                    label="Company Name"
                                                    name="companyName"
                                                    placeholder="Company Name"
                                                    type="text" extra={undefined} mb={0} value={undefined} />

                                            </Box>
                                            <Box width={{ base: "100%", md: "48%", xl: "48%" }} >

                                                <InputBox
                                                    onchange={formik.handleChange}
                                                    id="customerDisplayName"
                                                    label="Customer Display Name"
                                                    name="customerDisplayName"
                                                    placeholder="Customer Display Name"
                                                    type="text" extra={undefined} mb={0} value={undefined} />

                                            </Box>
                                        </Flex>
                                        <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>

                                            {CustomerInputBoxData.map((e,key)=>{
                                                return(
                                                <Box width={{ base: "100%", md: "32%", xl: "32%" }} key={key}>
                                                     <InputBoxIcon
                                                        key={key}
                                                        leftElement={e.leftElement}
                                                        onchange={formik.handleChange}
                                                        id={e.id}
                                                        label={e.label}
                                                        name={e.name}
                                                        placeholder={e.placeholder}
                                                        type="text" extra={undefined} mb={0} value={""}
                                                     />
                                                </Box>
                                                )
                                            })}
                                        </Flex>

                                        <Tabs mt={'5'} color={textColorPrimary}>
                                            <TabList>
                                                <Tab>Other Details</Tab>
                                                <Tab>Address</Tab>
                                                <Tab>Contact Persons</Tab>
                                            </TabList>

                                            <TabPanels>
                                                <TabPanel>
                                                    <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                                        <Box width={{ base: "100%", md: "48%", xl: "48%" }} >

                                                            <InputBoxIcon
                                                                leftElement={EmailIcon}
                                                                onchange={formik.handleChange}
                                                                id="customerOpeningBalance"
                                                                label="Opening Balance"
                                                                name="customerOpeningBalance"
                                                                placeholder="Opening Balance"
                                                                type="text" extra={undefined} mb={0} value={""} />

                                                        </Box>
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
                                                                    { key: "8", value: "op8", label: "Custom" }
                                                                ]} extra={undefined} mb={0} onchange={undefined} value={undefined} />

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
                                                            <CardHeader mb={4}>Billing Address</CardHeader>
                                                            <CardBody>
                                                                {Address.map((e,key)=>{
                                                                    if(e.type == 'IB'){
                                                                        return(
                                                                            <InputBox
                                                                                key={key}
                                                                                onchange={addressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                type="text" extra={undefined} mb={0} value={undefined} />
                                                                        )
                                                                    }else if(e.type == 'IBTA'){
                                                                        return(
                                                                            <InputBoxTextArea
                                                                            key={key}
                                                                                onchange={addressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                extra={undefined} mb={0} value={undefined} />
                                                                        )
                                                                    }else if(e.type == 'IBI'){
                                                                        return(
                                                                            <InputBoxIcon
                                                                                key={key}
                                                                                leftElement={e.leftElement}
                                                                                onchange={addressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                type="text" extra={undefined} mb={0} value={undefined} />
                                                                        )
                                                                    }
                                                                })}
                                                               
                                                            </CardBody>
                                                        </Card>
                                                        <Card width={{ base: "100%", md: "48%", xl: "48%" }} boxShadow={'2xl'}>
                                                            <CardHeader>
                                                                Shipping Address
                                                                <Tooltip label='Copy Address from Billing Address' placement='top'>
                                                                    <IconButton
                                                                        variant='ghost'
                                                                        colorScheme='gray'
                                                                        aria-label='See menu'
                                                                        icon={<CopyIcon />}
                                                                        onClick={copyBillAddress}
                                                                    />
                                                                </Tooltip>
                                                            </CardHeader>
                                                            <CardBody>
                                                            {Address.map((e,key)=>{
                                                                val= e.name;
                                                                    if(e.type == 'IB'){
                                                                        return(
                                                                            <InputBox
                                                                                key={key}
                                                                                onchange={shipAddressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                type="text" extra={undefined} mb={0} value={addreesCopy ? billingAddress?.val : undefined}/>
                                                                        )
                                                                    }else if(e.type == 'IBTA'){
                                                                        return(
                                                                            <InputBoxTextArea
                                                                                key={key}
                                                                                onchange={shipAddressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                extra={undefined} mb={0} value={addreesCopy ? billingAddress?.address : undefined} />
                                                                        )
                                                                    }else if(e.type == 'IBI'){
                                                                        return(
                                                                            <InputBoxIcon
                                                                                key={key}
                                                                                leftElement={e.leftElement}
                                                                                onchange={shipAddressFormHandle}
                                                                                id={e.id}
                                                                                label={e.label}
                                                                                name={e.name}
                                                                                placeholder={e.placeholder}
                                                                                type="text" extra={undefined} mb={0} value={addreesCopy ? billingAddress?.address : undefined} />
                                                                        )
                                                                    }
                                                                })}
                                                               
                                                            </CardBody>
                                                        </Card>
                                                    </Flex>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Flex>
                                                        <VendorTable
                                                            data={tabledata}
                                                            extra={undefined}
                                                        />
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
                    <DefaultTable
                        data={data2}
                        extra={undefined}
                        columnData={columns2} loadingState={false}/>
                </CardBody>
            </Card>
        </Box >
    )
}