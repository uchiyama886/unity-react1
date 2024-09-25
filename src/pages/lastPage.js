import React from 'react';
import { Box, Button, Heading, VStack, useBreakpointValue } from '@chakra-ui/react';
import useSound from 'use-sound';

function LastPage() {
    const [playCorrect] = useSound(require("../sounds/correct.mp3"));
    const [playIncorrect] = useSound(require("../sounds/incorrect.mp3"));
    const boxWidth = useBreakpointValue({ base: "100%", md: "80%" });

    return (
        <Box p={4} maxW={boxWidth} borderWidth="1px" borderRadius="lg" overflow="hidden" mx="auto" textAlign="center" bg="gray.50" boxShadow="lg">
            <Heading as="h1" size="lg" mb={6}>答え合わせ!!
            </Heading>
            <VStack spacing={4}>
                <Button colorScheme="teal" size="lg" onClick={() => playCorrect()}>正解</Button>
                <Button colorScheme="red" size="lg" onClick={() => playIncorrect()}>不正解</Button>
            </VStack>
        </Box>
    );
}

export default LastPage;
