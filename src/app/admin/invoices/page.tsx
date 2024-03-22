'use client';

import { AddIcon, DeleteIcon, EditIcon, PhoneIcon, SmallAddIcon } from "@chakra-ui/icons";
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
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Icon,
    TableCaption,
    Badge,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react"
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import 'react-calendar/dist/Calendar.css';
import MiniCalendar from "components/calendar/MiniCalendar";
import Calendar from "react-calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from 'next/router';
import InvoicePDF from "./invoicePDF";
import ReactToPrint from 'react-to-print';
import { redirect } from 'next/navigation';
type ValuePiece = Date | null;

// type CalValue = ValuePiece | [ValuePiece, ValuePiece];

interface CalValue {
    calValue: any,
    ValuePiece: Date
}


export default function Invoice() {
    const router = useRouter;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    const [calValue, onChange] = useState<any>(new Date());
    const firstField = React.useRef();


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

                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Flex direction={'row'} justify={'space-between'} gap={4}>

                                            <FormControl>
                                                <FormLabel>Customer Name</FormLabel>
                                                <Input placeholder='Customer name' />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Invoice Number</FormLabel>
                                                <Input placeholder='Invo Number' />
                                            </FormControl>
                                        </Flex>
                                        <Flex direction={'row'} justify={'space-between'} gap={4}>

                                            <FormControl>
                                                <FormLabel>Order Number</FormLabel>
                                                <Input placeholder='Ord Number' />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Date</FormLabel>

                                                <Popover
                                                    placement='bottom-start'
                                                >
                                                    <PopoverTrigger>
                                                        <Input value={calValue} />
                                                    </PopoverTrigger>
                                                    <PopoverContent>

                                                        <PopoverBody>

                                                            <Calendar
                                                                onChange={onChange}
                                                                value={calValue}
                                                                view={'month'}
                                                                tileContent={<Text color="brand.500" />}
                                                                prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
                                                                nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
                                                            />

                                                        </PopoverBody>
                                                    </PopoverContent>
                                                </Popover>

                                            </FormControl>
                                        </Flex>
                                        <Flex direction={'row'} justify={'space-between'} gap={4}>

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
                                            <FormControl>
                                                <FormLabel>Date</FormLabel>

                                                <Popover
                                                    placement='bottom-start'
                                                >
                                                    <PopoverTrigger>
                                                        <Input value={calValue} />
                                                    </PopoverTrigger>
                                                    <PopoverContent>

                                                        <PopoverBody>

                                                            <Calendar
                                                                onChange={onChange}
                                                                value={calValue}
                                                                view={'month'}
                                                                tileContent={<Text color="brand.500" />}
                                                                prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
                                                                nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
                                                            />

                                                        </PopoverBody>
                                                    </PopoverContent>
                                                </Popover>

                                            </FormControl>
                                        </Flex>
                                        <Flex direction={'row'} justify={'space-between'} gap={4}>

                                            <FormControl>
                                                <FormLabel>Salesperson</FormLabel>
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
                                            <FormControl>
                                                <FormLabel>Subject</FormLabel>
                                                <Input placeholder='Ord Number' />
                                            </FormControl>
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
                                    </Box>
                                    <Box>
                                        <Flex
                                            direction="row"
                                            // align="center"
                                            justify="space-between"
                                            pt="4"
                                        >
                                            <Box w={'70%'} pr={'5'}>
                                                <FormControl>
                                                    <FormLabel>Customer Notes</FormLabel>
                                                    <Textarea value={'Thanks for your business.'} />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Terms & Conditions</FormLabel>
                                                    <Textarea placeholder='Term & Condition' />

                                                </FormControl>
                                            </Box>
                                            <Box w={'100%'} rounded={5} boxShadow={'2xl'}>
                                                <Flex
                                                    direction="row"
                                                    align="center"
                                                    justify="space-between"
                                                    pt="4"
                                                    pl={7}
                                                >
                                                    <Box w={'100%'} pr={'5'}>
                                                        <Text>Sub Total</Text>
                                                        <Text>Discount</Text>
                                                        <Text>Shipping Charges</Text>
                                                        <Text>Adjustment</Text>
                                                        <Text>Total Rs.</Text>
                                                    </Box>
                                                    <Box w={'100%'} pr={'5'}>
                                                        <FormControl>
                                                            <InputGroup>
                                                                <Input placeholder="Discount" />
                                                                <InputRightElement>
                                                                    <Text>%</Text>
                                                                </InputRightElement>
                                                            </InputGroup>
                                                        </FormControl>
                                                        <FormControl>
                                                            <Input placeholder="Shipping Charge" />
                                                        </FormControl>
                                                        <FormControl>
                                                            <Input placeholder="Adjustment" />
                                                        </FormControl>
                                                    </Box>
                                                    <Box w={'100%'} pr={'5'}>
                                                        <Text>0.00</Text>
                                                        <Text>0.00</Text>
                                                        <Text>0.00</Text>
                                                        <Text>0.00</Text>
                                                        <Text>0.00</Text>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Stack>
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
                    <InvoicePDF />
                </CardBody>
            </Card>
        </Box>
    )
}


