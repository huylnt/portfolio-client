import profileLink from 'profileLink'
import OtherSite from 'components/OtherSite'
import { Text, Box, Flex } from '@chakra-ui/react'

const Introduction = () => {

   return <Box pos='relative' height='100%'>

      <Text color='heading' fontSize='150%' fontWeight='bold' textAlign='left'> I'm Huy Le Nguyen Truong </Text>

      <Box maxHeight='55%' overflowY='scroll' marginY='15px'>
         <Text>
            Nice to see you here!
            <br />  <br />
            I always want to improve myself everyday. I have not only studied well at university but also spent most of my free time to discover new things online, gather new technical knowledge, update myself with the latest technology.
            <br />  <br />
            With good English communication skills and also great soft skills, I am confident that I can become familiar with any new environment.
         </Text>
      </Box>

      <Flex flexFlow='column' justify='flex-end' width='100%' pos='absolute' bottom='0' right='0'>
         <OtherSite href={profileLink.cv} content='View my CV' />
         <OtherSite href={profileLink.portfolioClient} content='View my front-end' />
         <OtherSite href={profileLink.portfolioServer} content='View my back-end' />
      </Flex>

   </Box>
}

export default Introduction