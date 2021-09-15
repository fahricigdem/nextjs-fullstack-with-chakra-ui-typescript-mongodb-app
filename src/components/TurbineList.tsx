import {
  Container,
  VStack,
  Text,
  Box,
  HStack,
  Wrap,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import TurbineElement from "./TurbineElement";

const TurbineList = ({ turbines }) => (
  <Container maxW="container.xxl" centerContent minH="85vh">
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
      {turbines.map((turbine, index) => (
        <TurbineElement key={index} turbine={turbine} />
      ))}
    </SimpleGrid>
  </Container>
);

export default TurbineList;
