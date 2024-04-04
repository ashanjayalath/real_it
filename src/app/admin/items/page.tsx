'use client';

import { AddIcon, DeleteIcon, EditIcon, PhoneIcon } from "@chakra-ui/icons";
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
    Tooltip
} from "@chakra-ui/react"
import InputBox from "components/fields/InputField";
import InputBoxIcon from "components/fields/InputFieldTwo";
import InputBoxTextArea from "components/fields/InputTextArea";
import ComboBox from "components/fields/comboBox";
import { useFormik } from "formik";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Items() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    const firstField = React.useRef()

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




    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Card >
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Heading size='md'>Add New Item</Heading>
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
                                    Create a new Item
                                </DrawerHeader>

                                <DrawerBody>

                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>

                                            <Flex justify={'space-between'} flexWrap={'wrap'} gap={2}>
                                                <Box width={{ base: "100%",sm:"40%", md: "32%", xl: "32%" }} >
                                                    <FormControl>
                                                        <FormLabel>Type</FormLabel>
                                                        <RadioGroup onChange={setValue} value={value}>
                                                            <Stack direction='row'>
                                                                <Radio value='1'>Goods</Radio>
                                                                <Radio value='2'>Service</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>
                                                <Box width={{ base: "100%",sm:"40%", md: "32%", xl: "32%" }} >
                                                    <FormControl>
                                                        <FormLabel>Warranty</FormLabel>
                                                        <RadioGroup onChange={setValue} value={value}>
                                                            <Stack direction='row'>
                                                                <Radio value='1'>Have</Radio>
                                                                <Radio value='2'>Haven&apos;t</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>
                                                <Box width={{ base: "100%",sm:"40%", md: "32%", xl: "32%" }} >
                                                    <FormControl>
                                                        <FormLabel>Serial</FormLabel>
                                                        <RadioGroup onChange={setValue} value={value}>
                                                            <Stack direction='row'>
                                                                <Radio value='1'>Have</Radio>
                                                                <Radio value='2'>Haven&apos;t</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>
                                            </Flex>
                                            <Flex justify={'space-between'} flexWrap={'wrap'} gap={2} mt={5}>
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
                                                    <ComboBox
                                                        id="unit"
                                                        name="unit"
                                                        label="Unit"
                                                        placeholder="Select Unit"
                                                        optionProp={[
                                                            { key: "1", value: "op1", label: "box" },
                                                            { key: "2", value: "op2", label: "cm" },
                                                            { key: "3", value: "op3", label: "dz" },
                                                            { key: "4", value: "op4", label: "ft" },
                                                            { key: "5", value: "op5", label: "g" },
                                                            { key: "6", value: "op6", label: "in" },
                                                            { key: "7", value: "op7", label: "kg" },
                                                            { key: "8", value: "op8", label: "km" },
                                                            { key: "9", value: "op9", label: "lb" },
                                                            { key: "10", value: "op10", label: "mg" },
                                                            { key: "11", value: "op11", label: "ml" },
                                                            { key: "12", value: "op12", label: "m" },
                                                            { key: "13", value: "op13", label: "pcs" }
                                                        ]} extra={undefined} mb={0} />
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
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={'Rs.'}
                                                                        onchange={formik.handleChange}
                                                                        id="sellingPrice"
                                                                        label="Selling Price"
                                                                        name="sellingPrice"
                                                                        placeholder="Selling Price"
                                                                        type="text" extra={undefined} mb={0} value={""} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <ComboBox
                                                                        id="account"
                                                                        name="account"
                                                                        label="Account"
                                                                        placeholder="Select Account"
                                                                        optionProp={[
                                                                            { key: "1", value: "op1", label: "Discount" },
                                                                            { key: "2", value: "op2", label: "Sales" },
                                                                            { key: "3", value: "op3", label: "dz" },
                                                                            { key: "4", value: "op4", label: "Other Charge" }
                                                                        ]} extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxTextArea
                                                                        onchange={formik.handleChange}
                                                                        id="description"
                                                                        label="Description"
                                                                        name="description"
                                                                        placeholder="Description"
                                                                        extra={undefined} mb={0} value={""} />
                                                                </FormControl>
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
                                                                <FormControl>
                                                                    <InputBoxIcon
                                                                        leftElement={'Rs.'}
                                                                        onchange={formik.handleChange}
                                                                        id="costPrice"
                                                                        label="Cost Price"
                                                                        name="costPrice"
                                                                        placeholder="Cost Price"
                                                                        type="text" extra={undefined} mb={0} value={""} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <ComboBox
                                                                        id="account"
                                                                        name="account"
                                                                        label="Account"
                                                                        placeholder="Select Account"
                                                                        optionProp={[
                                                                            { key: "1", value: "op1", label: "Discount" },
                                                                            { key: "2", value: "op2", label: "Sales" },
                                                                            { key: "3", value: "op3", label: "dz" },
                                                                            { key: "4", value: "op4", label: "Other Charge" }
                                                                        ]} extra={undefined} mb={0} />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <InputBoxTextArea
                                                                        onchange={formik.handleChange}
                                                                        id="description"
                                                                        label="Description"
                                                                        name="description"
                                                                        placeholder="Description"
                                                                        extra={undefined} mb={0} value={""} />
                                                                </FormControl>
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