import { View, Text, Image } from 'react-native'
import { Container } from '../../Container'

export default function Header() {
  return (
    <Container>
      <Image source={require('~/src/assets/logo.png')}/>
    </Container>
  )
}