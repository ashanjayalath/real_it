'use client';

import { PhoneIcon } from "@chakra-ui/icons";
import { Table, Box, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"
import React from "react";

export default function Items() {

    return (
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <Card >
                <CardHeader>
                    <Heading size='md'>Add New Item</Heading>
                </CardHeader>

                <CardBody>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th isNumeric>PURCHASE DESCRIPTION</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
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