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
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Items() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    const firstField = React.useRef()
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
                                <DrawerHeader borderBottomWidth='1px'>
                                    Create a new Item
                                </DrawerHeader>

                                <DrawerBody>

                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>

                                            <FormControl>
                                                <FormLabel>Type</FormLabel>
                                                <RadioGroup onChange={setValue} value={value}>
                                                    <Stack direction='row'>
                                                        <Radio value='1'>Goods</Radio>
                                                        <Radio value='2'>Service</Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>Name</FormLabel>
                                                <Input placeholder='First name' />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Unit</FormLabel>
                                                <Select placeholder='Select option'>
                                                    <option value='option1'>box</option>
                                                    <option value='option2'>cm</option>
                                                    <option value='option3'>dz</option>
                                                    <option value='option4'>ft</option>
                                                    <option value='option5'>g</option>
                                                    <option value='option6'>in</option>
                                                    <option value='option7'>kg</option>
                                                    <option value='option8'>km</option>
                                                    <option value='option9'>lb</option>
                                                    <option value='option10'>mg</option>
                                                    <option value='option11'>ml</option>
                                                    <option value='option11'>m</option>
                                                    <option value='option11'>pcs</option>
                                                </Select>
                                            </FormControl>
                                            <Flex
                                                direction="column"
                                                align="center"
                                                justify="space-between"
                                                pt="4"
                                            >
                                                <Flex
                                                    direction={{
                                                        base: "column",
                                                        md: "row"
                                                    }}
                                                    align="center"
                                                    justify="space-between"
                                                    w="100%"
                                                >
                                                    <Box w={'100%'} pr={'5'}>
                                                        <Text size={'xl'}>Sales Information</Text>
                                                        <FormControl>
                                                            <InputGroup>
                                                                <InputLeftElement pointerEvents='none'>
                                                                    <Text>Rs.</Text>
                                                                </InputLeftElement>
                                                                <Input type='tel' placeholder='Selling Price' />
                                                            </InputGroup>
                                                        </FormControl>

                                                        <FormControl>
                                                            <FormLabel>Account</FormLabel>
                                                            <Select placeholder='Select option'>
                                                                <option value='option1'>Discount</option>
                                                                <option value='option2'>Sales</option>
                                                                <option value='option3'>dz</option>
                                                                <option value='option4'>Other Charge</option>
                                                            </Select>
                                                        </FormControl>

                                                        <FormControl>
                                                            <FormLabel>Description</FormLabel>
                                                            {/* <Editable placeholder='Description' >
                                                <EditablePreview />
                                                <EditableTextarea />
                                            </Editable> */}
                                                            <Input placeholder='Description' />
                                                        </FormControl>
                                                    </Box>
                                                    <Box w={'100%'} pr={'5'}>
                                                        <Text size={'xl'}>Purchase Information</Text>
                                                        <FormControl>
                                                            <InputGroup>
                                                                <InputLeftElement pointerEvents='none'>
                                                                    <Text>Rs.</Text>
                                                                </InputLeftElement>
                                                                <Input type='tel' placeholder='Cost Price' />
                                                            </InputGroup>
                                                        </FormControl>

                                                        <FormControl>
                                                            <FormLabel>Account</FormLabel>
                                                            <Select placeholder='Select option'>
                                                                <option value='option1'>Discount</option>
                                                                <option value='option2'>Sales</option>
                                                                <option value='option3'>dz</option>
                                                                <option value='option4'>Other Charge</option>
                                                            </Select>
                                                        </FormControl>

                                                        <FormControl>
                                                            <FormLabel>Description</FormLabel>
                                                            {/* <Editable placeholder='Description' >
                                                <EditablePreview />
                                                <EditableTextarea />
                                            </Editable> */}
                                                            <Input placeholder='Description' />
                                                        </FormControl>
                                                    </Box>
                                                </Flex>
                                            </Flex>


                                        </Box>
                                    </Stack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth='1px'>
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