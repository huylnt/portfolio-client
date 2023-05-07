import profileLink from 'profileLink'
import OtherSite from 'components/OtherSite'
import { Text, Box } from '@chakra-ui/react'

const Introduction = () => {

   return <div>

         <Text color='heading' fontSize='150%' fontWeight='bold'> I'm Huy Le Nguyen Truong </Text>

         <Text color='heading' fontSize='125%' fontWeight='bold' fontStyle='italic' marginTop='15px'> Full-stack Web Developer </Text>
         
         <br />

         <Text>
            Nice to see you here!
            <br />  <br />
            I always want to improve myself everyday. I have not only studied well at university but also spent most of my free time to discover new things online, gather new technical knowledge, update myself with the latest technology.
            <br />  <br />
            With good English communication skills and also great soft skills, I am confident that I can become familiar with any new environment.
         </Text>

         <br />

         <Box marginTop='50px'>
            <OtherSite href={profileLink.cv} content='View my CV' />
            <OtherSite href={profileLink.portfolioClient} content='View my front-end' />
            <OtherSite href={profileLink.portfolioServer} content='View my back-end' />
         </Box>

   </div>
}

export default Introduction