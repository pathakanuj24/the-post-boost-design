import { Box, Flex, IconButton, Link,  Text } from "@chakra-ui/react";
// import { ABOUT } from "lib/routes";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
// import { Link as RouterLink } from "@chakra-ui/react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box as="footer" py={1} color="black">
      <Box>
        <IconButton
          aria-label="Back to Top"
          color= "black"
          icon={<FaArrowUp />}
          variant="ghost"
          size="lg"
          borderRadius="full"
          onClick={scrollToTop}
        />
      </Box>
    

      <Flex justify="center" align="center">
        <Flex align="center">
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            size="xl"
            borderRadius="full"
            mr={2}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            size="xl"
            borderRadius="full"
            mr={2}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            size="xl"
            borderRadius="full"
            mr={2}
          />
        </Flex>
      </Flex>
      <Box mt={6} textAlign="center">
      <Link
          href="/about"
            fontWeight="medium"
            textDecor="underline"
          >
            About Us
          </Link>{" "}
        <Link 
          fontWeight="medium"
            textDecor="underline"
             href="/services" mx={4}>
          Services
        </Link>
        <Link 
            fontWeight="medium"
            textDecor="underline"
            href="/contact" mx={4}>
          Contact Us
        </Link>
      </Box>
      <Box mt={6} textAlign="center">
        <Text
          fontWeight="medium"
            
            > Indore, MP, INDIA</Text>


        <Text   fontWeight="medium">
        
        pathakanuj807@gmail.com</Text>

      </Box>
      {/* Add All Rights Reserved text */}
    
        
      
      <Box mt={6} textAlign="center">
        {/* <Text>Terms of Service</Text> */}
        <Text fontWeight= "medium">&copy; {new Date().getFullYear()} The Post Boost. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
