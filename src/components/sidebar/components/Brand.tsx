// Chakra imports
import { Flex,Image, Heading, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import { company } from 'utils/env';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('gray.600', 'white');

	return (
		<Flex alignItems='center' flexDirection='column' mb={5}>
			<Image
				height={'auto'}
				width={'175px'}
				objectFit='fill'
				src={'https://sat02pap004files.storage.live.com/y4myo4fiA98-AassoKKOqY9YuJXg5-79AEjDjEOakTIeeKLRXghaYS1KWPhqO8P6V12uQZJbQ-o8nSHAMlIbQiSN-MC1DsBqubD0RH7Bx1JCwEc-dGa30Qcn_mLwwE2667MxtJyjuK8Qwm-U5nnZPSHhQdWaNDjOvO1uE4wAF7bVwLfb26_m_P8YR1jrgnsaQEBcC8zPtVKoFcXTcVZbaWJtw?encodeFailures=1&width=747&height=332'}
				alt={company.companyName}
			/>
			{/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
			{/* <Heading color="black" fontSize="36px" mb="10px">
				{company.companyName}
			</Heading> */}

			{/* <HSeparator mb='20px' /> */}
		</Flex>
	);
}

export default SidebarBrand;
