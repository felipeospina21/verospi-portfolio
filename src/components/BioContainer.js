import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

const BioContainer = () => {
  return (
    <>
      <BioContent />
    </>
  )
}

export const BioContent = () => {
  const paragraphMarginY = "0.5rem"

  return (
    <SimpleGrid
      columns={[1, null, 2]}
      spacing={4}
      m="auto auto 2rem auto"
      maxW="1300px"
    >
      <Box maxH="800px" overflow="hidden">
        <StaticImage
          src="../images/verospi-bio.jpg"
          alt="Foto Veronica Ospina"
          width={500}
          // height={700}
        />
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
          Bronzini, Arkitect, Leonisa, Pomys, Chevignon, Kika Vargas, Gef, Punto
          Blanco, Falabella, Priah Heritage, Kibys, Pajarolimón, Oropendola,
          Süsse Lingerie, Makúa, Esprit, Spirito, Boamar, Urban Rock, Beat a
          bee, Yerbabuena, entre otros.
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
          <ListItem>
            Diplomado en peinado editorial, El muñequero. Medellín (2017)
          </ListItem>
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
