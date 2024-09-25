import React, { useState } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import FirstPage from './firstPage';
import { PlayerProvider } from './PlayerConfig';

function LastPage({ correctOrder, userOrder }) {
    const [isCorrect, setIsCorrect] = useState(null);

    const checkOrder = () => {
        if (JSON.stringify(correctOrder) === JSON.stringify(userOrder)) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <Box p={4} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h1" size="lg" mb={4}>答え合わせページ</Heading>
            <Button colorScheme="teal" onClick={checkOrder}>答え合わせ</Button>
            {isCorrect !== null && (
                <Box mt={4}>
                    {isCorrect ? (
                        <Text color="green.500" fontSize="xl">正解です！</Text>
                    ) : (
                        <Text color="red.500" fontSize="xl">間違っています。もう一度試してください。</Text>
                    )}
                </Box>
            )}
        </Box>
    );
}

export default LastPage;
