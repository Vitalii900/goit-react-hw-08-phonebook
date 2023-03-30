import { Text, Box, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Text textAlign={['center']} fontSize="4xl">
        Phonebook
      </Text>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/5439/5439135.png"
        boxSize="350px"
        m="auto"
      />
      <Text textAlign={['center']} fontSize="2xl">
        Log in and get access to your contacts from any device
      </Text>
    </Box>
  );
}
