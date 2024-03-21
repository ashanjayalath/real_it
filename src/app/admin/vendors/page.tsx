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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    const firstField = React.useRef()
    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>Vendors List</Heading>
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
                                <DrawerHeader boxShadow={'2xl'}>
                                    Create a vendor
                                </DrawerHeader>

                                <DrawerBody>

                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>

                                            <FormControl>
                                                <FormLabel>Primary Contact</FormLabel>
                                                <Flex direction={'row'} justify={'space-between'} gap={4}>
                                                    <Select placeholder='Select option'>
                                                        <option value='option1'>Mr.</option>
                                                        <option value='option2'>Mrs.</option>
                                                        <option value='option3'>Ms.</option>
                                                        <option value='option4'>Miss.</option>
                                                        <option value='option5'>Dr.</option>
                                                    </Select>
                                                    <Input placeholder='First name' />
                                                    <Input placeholder='Last name' />

                                                </Flex>
                                            </FormControl>
                                            <Flex direction={'row'} justify={'space-between'} gap={4}>
                                                <FormControl>
                                                    <FormLabel>Company Name</FormLabel>
                                                    <Input placeholder='Company Name' />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Vendor Display Name</FormLabel>
                                                    <Select placeholder='Select option'>
                                                        <option value='option1'>box</option>
                                                    </Select>
                                                </FormControl>
                                            </Flex>
                                            <Flex direction={'row'} justify={'space-between'} gap={4}>
                                                <FormControl>
                                                    <FormLabel>Vendor Email</FormLabel>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <EmailIcon color='gray.300' />
                                                        </InputLeftElement>
                                                        <Input type='tel' placeholder='Email Address' />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>Phone number</FormLabel>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <PhoneIcon color='gray.300' />
                                                        </InputLeftElement>
                                                        <Input type='tel' placeholder='Phone number' />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>Mobile number</FormLabel>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <MdOutlinePhoneAndroid color='gray.100' />
                                                        </InputLeftElement>
                                                        <Input type='tel' placeholder='Mobile number' />
                                                    </InputGroup>
                                                </FormControl>
                                            </Flex>
                                            <Tabs mt={'5'}>
                                                <TabList>
                                                    <Tab>Other Details</Tab>
                                                    <Tab>Address</Tab>
                                                    <Tab>Contact Persons</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel>
                                                        <Flex direction={'row'} justify={'space-between'} gap={4}>
                                                            <FormControl>
                                                                <FormLabel>Opening Balance</FormLabel>
                                                                <InputGroup>
                                                                    <InputLeftElement pointerEvents='none'>
                                                                        <Text color={'gray.500'}>Rs.</Text>
                                                                    </InputLeftElement>
                                                                    <Input type='tel' placeholder='Opening Balance' />
                                                                </InputGroup>
                                                            </FormControl>
                                                            <FormControl>
                                                                <FormLabel>Terms</FormLabel>
                                                                <Select placeholder='Select option'>
                                                                    <option value='option1'>Net 15</option>
                                                                    <option value='option2'>Net 30</option>
                                                                    <option value='option3'>Net 45</option>
                                                                    <option value='option4'>Net 60</option>
                                                                    <option value='option5'>Due end Of the month</option>
                                                                    <option value='option6'>Due end Of the next month</option>
                                                                    <option value='option7'>Due on Receipt</option>
                                                                    <option value='option8'>Custom</option>
                                                                </Select>
                                                            </FormControl>
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
                                                        <Flex direction={'row'} justify={'space-between'} gap={4}>
                                                            <Card w={'100%'} boxShadow={'2xl'}>
                                                                <CardHeader>Billing Address</CardHeader>
                                                                <CardBody>
                                                                    <FormControl>
                                                                        <FormLabel>Attention</FormLabel>
                                                                        <Input placeholder='Attention' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Country / Region</FormLabel>
                                                                        <Input placeholder='Country / Region' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Address</FormLabel>
                                                                        <Textarea placeholder="Address" />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>City</FormLabel>
                                                                        <Input placeholder='City' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>State</FormLabel>
                                                                        <Input placeholder='State' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Zip Code</FormLabel>
                                                                        <Input placeholder='Zip Code' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Phone Number</FormLabel>
                                                                        <InputGroup>
                                                                            <InputLeftElement pointerEvents='none'>
                                                                                <PhoneIcon color='gray.300' />
                                                                            </InputLeftElement>
                                                                            <Input type='tel' placeholder='Phone number' />
                                                                        </InputGroup>
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Fax Number</FormLabel>
                                                                        <InputGroup>
                                                                            <InputLeftElement pointerEvents='none'>
                                                                                <PhoneIcon color='gray.300' />
                                                                            </InputLeftElement>
                                                                            <Input type='tel' placeholder='Phone number' />
                                                                        </InputGroup>
                                                                    </FormControl>
                                                                </CardBody>
                                                            </Card>
                                                            <Card w={'100%'} boxShadow={'2xl'}>
                                                                <CardHeader>
                                                                    <Flex>
                                                                        <Text>Shipping Address</Text>
                                                                        <Flex flex='1' gap='4' alignItems='end' justify={'end'} flexWrap='wrap'>

                                                                            <Tooltip label='Copy billing address' placement='top'>
                                                                                <IconButton
                                                                                    variant='ghost'
                                                                                    colorScheme='gray'
                                                                                    aria-label='See menu'
                                                                                    icon={<MdCopyAll />}
                                                                                    onClick={onOpen}
                                                                                />
                                                                            </Tooltip>
                                                                        </Flex>
                                                                    </Flex>
                                                                </CardHeader>
                                                                <CardBody>
                                                                    <FormControl>
                                                                        <FormLabel>Attention</FormLabel>
                                                                        <Input placeholder='Attention' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Country / Region</FormLabel>
                                                                        <Input placeholder='Country / Region' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Address</FormLabel>
                                                                        <Textarea placeholder="Address" />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>City</FormLabel>
                                                                        <Input placeholder='City' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>State</FormLabel>
                                                                        <Input placeholder='State' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Zip Code</FormLabel>
                                                                        <Input placeholder='Zip Code' />
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Phone Number</FormLabel>
                                                                        <InputGroup>
                                                                            <InputLeftElement pointerEvents='none'>
                                                                                <PhoneIcon color='gray.300' />
                                                                            </InputLeftElement>
                                                                            <Input type='tel' placeholder='Phone number' />
                                                                        </InputGroup>
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Fax Number</FormLabel>
                                                                        <InputGroup>
                                                                            <InputLeftElement pointerEvents='none'>
                                                                                <PhoneIcon color='gray.300' />
                                                                            </InputLeftElement>
                                                                            <Input type='tel' placeholder='Phone number' />
                                                                        </InputGroup>
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
                                        </Box>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter >
                                    <Button variant='outline' mr={3} rounded={'5'} onClick={onClose}>
                                        Cancel
                                    </Button>
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
        </Box>
    )
}