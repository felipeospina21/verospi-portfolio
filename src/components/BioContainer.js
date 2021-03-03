import React from "react"
import Image from "./Image500"
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const BioContainer = () => {
  const breakpoints = useBreakpoint()
  return (
    <>
      <BioContent />
    </>
  )
}

export const BioContent = () => {
  const paragraphMarginY = "0.5rem"

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={4} mb="2rem">
      <Box maxH="700px" overflow="hidden">
        <Image src="verospi-bio2.jpg" alt="Foto Veronica Ospina" />
      </Box>
      <Box mt="1rem">
        <Text my={paragraphMarginY}>
          Soy Ingeniera de diseño de producto de la Universidad Eafit, el
          maquillaje siempre fue mi pasión y por esta razón en el 2011 decidí
          viajar a Milán a estudiar maquillaje y peinado para moda en Up to date
          Fashion Academy.
        </Text>
        <Text my={paragraphMarginY}>
          Regresé a Colombia y comencé a trabajar con diferentes fotógrafos para
          editoriales, campañas publicitarias y de moda, con clientes como:
        </Text>
        <Text fontWeight="bold">
          Éxito, Arkitect, Leonisa, Pomys, Chevignon, Punto Blanco, Falabella,
          Kibys, Pajarolimón, Oropendola, Süsse Lingerie, Makúa, Esprit,
          Spirito, Boamar, Urban Rock, Animalista, Beat a bee, Yerbabuena, entre
          otros.
        </Text>
        <Text my={paragraphMarginY}>
          He trabajado también para Colombiamoda, y diferentes desfiles de la
          semana de la moda en Milán. Adicionalmente trabajé como docente 2 años
          en Makeup Academy en Medellín.
        </Text>
        <Heading as="h4" size="md" my="1rem">
          Estudios complementarios:
        </Heading>
        <UnorderedList>
          <ListItem my={paragraphMarginY}>
            Beauty and fashion advanced makeup course, Makeup forever Academy.
            New York (2015)
          </ListItem>
          <ListItem>
            Class where the Masters teach. Portland, Oregon (2016)
          </ListItem>
        </UnorderedList>
      </Box>
    </SimpleGrid>
  )
}

export default BioContainer
