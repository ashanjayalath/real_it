import { Box, FormLabel, Text, useColorModeValue } from "@chakra-ui/react";

export default function ViewBox(props: { Name:string, Value:string, Type:string }) {
    const { Name, Value, Type } = props;
    const textColorPrimary = useColorModeValue('#1B2559', '#DEDEDF');
    if (Type === "Main") {
        return <Box width={{ base: "100%", md: "48%", xl: "48%" }}>
            <FormLabel
                display="flex"
                ms="10px"
                fontSize="sm"
                color={textColorPrimary}
                fontWeight="bold"
            >
                {Name}
                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                    {Value}
                </Text>
            </FormLabel>
        </Box>
    } else if (Type === "Sub") {
        return <Box width={{ base: "100%", md: "48%", xl: "48%" }}>
            <FormLabel
                ml={'30px'}
                display="flex"
                // ms="10px"
                fontSize="sm"
                color={textColorPrimary}
                fontWeight="bold"
            >
                {Name}
                <Text fontSize="sm" fontWeight="400" ms="2px" ml={'10px'} _hover={{ cursor: 'text' }}>
                    {Value}
                </Text>
            </FormLabel>
        </Box>
    }


}