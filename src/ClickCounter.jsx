import { useState, useRef } from 'react';
import { Box, Button, Text, VStack, Link, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import clickSound from './assets/click.wav';

const MotionBox = motion(Box);

export default function ClickCounter() {
  const [counter, setCounter] = useState(0);
  const audioRef = useRef(new Audio(clickSound));

  const handleClick = () => {
    setCounter(prev => prev + 1);
    const audio = new Audio(audioRef.current.src);
    audio.play();
  };

  return (
    <MotionBox
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      bgGradient="linear(to-r, #7928CA, #FF0080)"
      bgSize="200% 200%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <VStack
        spacing={6}
        bg="rgba(255,255,255,0.9)"
        p={10}
        rounded="3xl"
        shadow="xl"
        backdropFilter="blur(10px)"
      >
        <Text fontSize="4xl" fontWeight="bold" color="purple.600">
          🚀 Click Counter
        </Text>
        <Text fontSize="lg" color="gray.600">
          Click below to increase your clicks!
        </Text>
        <Button
          colorScheme="purple"
          size="lg"
          px={8}
          py={6}
          onClick={handleClick}
          _hover={{ transform: 'scale(1.05)' }}
          _active={{ transform: 'scale(0.95)' }}
          transition="transform 0.2s"
        >
          Click Me!
        </Button>
        <MotionBox
          key={counter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Text fontSize="5xl" fontWeight="bold" color="purple.700">
            {counter}
          </Text>
        </MotionBox>
      </VStack>

      {/* Secțiunea cu credite */}
      <HStack mt={8} color="whiteAlpha.800" spacing={4}>
        <Text>Created by</Text>
        <Link href="https://github.com/IonutRazvanCopos/" isExternal fontWeight="bold">
          Ionut Copos (GitHub)
        </Link>
        <Text>|</Text>
        <Link href="https://www.linkedin.com/in/ionut-copos-1a7542250/" isExternal fontWeight="bold">
          LinkedIn
        </Link>
      </HStack>
    </MotionBox>
  );
}