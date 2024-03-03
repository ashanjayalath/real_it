// Chakra imports
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import { company } from 'utils/env';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			{/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
			<Heading color="black" fontSize="36px" mb="10px">
            {company.companyName}
          </Heading>

			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
