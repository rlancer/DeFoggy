import React from "react";
import { Box, Button, Heading, Progress, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box display="flex" flexDirection="column" flex="1" height="100vh">
      <Progress colorScheme="teal" height="64px" value={20} />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" size="xl" isTruncated>
          DO SOME PUSH UPS
        </Heading>
        <Button colorScheme="teal">Done</Button>
        <Button colorScheme="teal" variant="ghost">
          Snooze
        </Button>
      </Box>
    </Box>
  );
}

export default App;
