import { Container, Text, VStack, Button, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Retro Notes App</Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid" size="lg">
          Create New Note
        </Button>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="yellow.100">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Heading as="h3" size="md">Sample Note Title</Heading>
              <Text mt={2}>This is a snippet of the note content...</Text>
            </Box>
            <Box>
              <IconButton aria-label="Edit Note" icon={<FaEdit />} size="sm" mr={2} />
              <IconButton aria-label="Delete Note" icon={<FaTrash />} size="sm" />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;