import { useDisclosure, Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerHeader, Button } from '@chakra-ui/react'
import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import MenuOptions from '../components/MenuOptions'
  
  function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
      <div className='pt-2'>
            <span onClick={onOpen}>
                <MenuIcon className='w-6' />
            </span>
            
            
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                
                    <DrawerBody>
                        <MenuOptions onClose={onClose}/>
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
      </div>
      
      </>
    )}
  
  export default Menu