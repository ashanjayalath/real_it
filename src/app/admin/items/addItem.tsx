import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardHeader, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Radio, RadioGroup, Select, Stack, StackDivider, Text } from "@chakra-ui/react"
import React from "react";

export default function AddNewItem() {
    const [value, setValue] = React.useState('1')
    return(
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <Card >
                <CardHeader>
                    <Heading size='md'>Add New Item</Heading>
                </CardHeader>

                <CardBody>
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
                                            <Input placeholder='Description'/>
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
                                            <Input placeholder='Description'/>
                                        </FormControl>
                                    </Box>
                                </Flex>
                            </Flex>

                            <Button type="submit" colorScheme='blue' rounded={'5'} mt={'20'}>Save</Button>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}