import { Box, Card, CardBody, useColorModeValue, CardFooter, CardHeader, Divider, Flex, Grid, GridItem, Image, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

import { company, companyLogo } from "utils/env";




export default function InvoicePDF() {
    const allTextColor = useColorModeValue('black.900', 'black.900');

    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
            <Flex >
                <Card minW={'210mm'} minH={'297mm'} rounded={'0'} boxShadow={'2xl'}>
                    <Flex
                        m={'0'}
                        p={'0'}
                        height={'205px'}
                        align="center" justify="space-between" pl={'10'} pr={'10'}>
                        <Box mt={20}>
                            <Image
                                // boxSize='150px'
                                height={'auto'}
                                width={'300px'}
                                objectFit='fill'
                                src={'https://sat02pap004files.storage.live.com/y4myo4fiA98-AassoKKOqY9YuJXg5-79AEjDjEOakTIeeKLRXghaYS1KWPhqO8P6V12uQZJbQ-o8nSHAMlIbQiSN-MC1DsBqubD0RH7Bx1JCwEc-dGa30Qcn_mLwwE2667MxtJyjuK8Qwm-U5nnZPSHhQdWaNDjOvO1uE4wAF7bVwLfb26_m_P8YR1jrgnsaQEBcC8zPtVKoFcXTcVZbaWJtw?encodeFailures=1&width=747&height=332'}
                                alt={company.companyName}
                            />
                        </Box>

                        <Box
                            minW={'200px'}
                            minH={' 200px'}
                            mr={'5'}
                            p={'0'}
                        >
                            <Box
                                textAlign={'center'}
                                m={'0'}
                                p={'0'}
                                color={'black'}
                                backgroundColor={'gray.200'}
                                borderBottomRightRadius={'10px'}
                                borderBottomLeftRadius={'10px'}
                            >
                                <Text fontSize={'24px'} color={allTextColor}>INVOICE</Text>
                                <Text fontSize={'14px'} color={allTextColor}># INV-10187</Text>
                            </Box>

                        </Box>

                    </Flex>
                    <Flex m={'0'} p={'0'}
                        align="center" justify="space-between" pl={'10'} pr={'10'}>
                        <Box>
                            <Text fontSize={'16px'} fontWeight={'bold'} mt={'18px'} color={allTextColor}>{company.companyNameFullCapital}</Text>
                        </Box>
                        <Box>
                            <Flex flexDirection={'column'} justifyContent={'end'} alignItems={'end'}>
                                <Text fontSize={'14px'} color={allTextColor} >Balance Due</Text>
                                <Text fontSize={'17px'} color={allTextColor} fontWeight={'bold'}>Rs.548500.50</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex m={'0'} p={'0'}
                        align="center" justify="start" pl={'10'} pr={'10'}>
                        <Box>
                            <Text fontSize={'14px'} color={allTextColor}>{`Company ID : ${company.companyId}`}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{company.companyAddress}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{company.companyEstablishedCountry}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{company.companyPhoneNumber}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{company.companyEmail}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{company.companyWeb}</Text>
                        </Box>
                    </Flex>
                    <CardHeader>
                        <Flex m={'0'} p={'0'} height={'100%'} align="center" justify="space-between" ml={'5'} mr={'5'}>
                            <Flex m={'0'} pt={'0'} height={'100%'} align="center" dir="column" justify="start">
                                <Box>
                                    <Text fontSize={'14px'} color={allTextColor} pt={'5'}>
                                        Bill To
                                    </Text>
                                    <Text fontWeight={'bold'} fontSize={'14px'} color={allTextColor}>
                                        Mr. SHOIB
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex m={'0'} p={'0'} height={'100%'} align="center" dir="column" justify="end" gap={10}>
                                <Box textAlign={'end'}>
                                    <Text fontSize={'14px'} color={allTextColor}>Invoice Date :</Text>
                                    <Text fontSize={'14px'} color={allTextColor}>Terms :</Text>
                                    <Text fontSize={'14px'} color={allTextColor}>Due Date :</Text>
                                </Box>
                                <Box textAlign={'end'}>
                                    <Text fontSize={'14px'} color={allTextColor}>31 Jan 2024</Text>
                                    <Text fontSize={'14px'} color={allTextColor}>Due on Receipt</Text>
                                    <Text fontSize={'14px'} color={allTextColor}>31 Jan 2024</Text>
                                </Box>
                            </Flex>

                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <TableContainer mr={5} ml={5}>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th color={allTextColor}>NO</Th>
                                        <Th color={allTextColor}>Item & Description</Th>
                                        <Th isNumeric color={allTextColor}>QTY</Th>
                                        <Th isNumeric color={allTextColor}>RATE</Th>
                                        <Th isNumeric color={allTextColor}>AMOUNT</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td color={allTextColor}>01</Td>
                                        <Td color={allTextColor}>millimetres (mm)</Td>
                                        <Td isNumeric color={allTextColor}>10</Td>
                                        <Td isNumeric color={allTextColor}>17500.00</Td>
                                        <Td isNumeric color={allTextColor}>175000.00</Td>

                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Flex
                            m={'0'}
                            p={'0'}
                            align="end" justify="end" pr={5} mt={'50px'}

                        >
                            <Card w={'40%'} boxShadow={'2xl'}>
                                <CardHeader>
                                    <Flex justify={'space-between'}>
                                        <Text fontSize={'14px'} color={allTextColor}>Sub Total</Text>
                                        <Text fontSize={'14.5px'} color={allTextColor}>Rs.850000.00</Text>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex align="start" justify="space-between">
                                        <Box>
                                            <Text fontSize={'14px'} fontWeight={'bold'} color={allTextColor}>Total</Text>
                                            <Text fontSize={'14px'} color={allTextColor}>Payment Made</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize={'14px'} fontWeight={'bold'} color={allTextColor}>Rs.850000.00</Text>
                                            <Text fontSize={'14.5px'} color={'red'}>Rs.850000.00</Text>
                                        </Box>
                                    </Flex>
                                </CardBody>
                                <CardFooter
                                    justify='space-between'
                                    flexWrap='wrap'
                                >
                                    <Text fontSize={'14px'} fontWeight={'bold'} color={allTextColor}>BALANCE DUE</Text>
                                    <Text fontSize={'16px'} fontWeight={'bold'} color={allTextColor}>Rs.850000.00</Text>

                                </CardFooter>
                            </Card>
                        </Flex>

                    </CardBody>
                    <CardFooter justify='start' flexWrap='wrap'>
                        <Box>
                            <Text fontSize={'14px'} color={allTextColor}>Notes</Text>
                            <Text fontSize={'12px'} color={allTextColor}>Thanks for your business.</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{`${company.companyNameCapital} - ${company.companyBankDetails.bank1.bankName} - ${company.companyBankDetails.bank1.branch} - ${company.companyBankDetails.bank1.accountNumber}`}</Text>
                            <Text fontSize={'14px'} color={allTextColor}>{`${company.companyNameFullCapital} - ${company.companyBankDetails.bank2.bankName} - ${company.companyBankDetails.bank2.branch} - ${company.companyBankDetails.bank2.accountNumber}`}</Text>
                        </Box>
                    </CardFooter>
                    <Flex
                        m={'0'}
                        pl={'5'} pr={'5'}
                        direction={'column'}
                        align="start" justify="start" mt={'50px'}>

                        <Text color={'red'} mb={5} fontSize={'13px'}>{`Cheque shoude be drawn infavour of " ${company.companyNameCapital} " Accounts Payee Only`}</Text>
                        <Text>
                            Terms & Conditions
                        </Text>
                        <Text fontSize={'13px'} textAlign={'justify'}>
                            Warranty covers only manufactures defects, damages of defects due to other cause such as negligence, misuse,improper operation,
                            power fluctuation, lightening, natural disaster,disaster, physical damages, burn marks, oxidized & corroded are not included under this
                            warranty.
                        </Text>


                    </Flex>
                    <Flex justify={'end'} align={'end'}>
                        <Text fontSize={'14px'} mb={'20px'} mr={5} mt={5}>
                            Authorized Signature : ___________________
                        </Text>
                    </Flex>
                </Card>
            </Flex>
        </Box>
    )
}