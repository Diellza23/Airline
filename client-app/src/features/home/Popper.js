import React from 'react'
import { Popup, Card, Image, Rating } from 'semantic-ui-react'
import image from '../home/studentja.png'
import image2 from '../home/ubt.png'
import image3 from '../home/rector.png'

const Popper = () => (
  <Popup trigger={
      <Card>
        <Image src={image}/>
        <Card.Content>
          <Card.Header>Suksesi i vazhdueshem i studentëve tonë!</Card.Header>
          <Card.Description>
          Studentja e UBT-së shndërron vajin në biodizel që përdoret për shërbime transporti, ul ndotjen e ajrit
          </Card.Description>
        </Card.Content>
        <Image src={image2}/>
        <Card.Content>
          <Card.Header>UBT përmes “Nokia” sjell në Kosovë rrjetin 5G!</Card.Header>
          <Card.Description>
          Studentja e UBT-së shndërron vajin në biodizel që përdoret për shërbime transporti, ul ndotjen e ajrit
          </Card.Description>
        </Card.Content>
        <Image src={image3}/>
        <Card.Content>
          <Card.Header>Nisi punimet Konferenca Ndërkombëtare e UBT-së për Shkencë, Teknologji, Biznes dhe Inovacion</Card.Header>
          <Card.Description>
          Përgjatë dy ditëve sa edhe zgjatë konferenca, edicionin e radhës të kësaj konference do ta pasurojnë punimet që do të prezantohen në 24 fusha shkencore të studimit, nga studiues vendor dhe nga vende të ndryshme të botës.
          </Card.Description>
        </Card.Content>
      </Card>
    }
  >
    <Popup.Header>Vleresimi nga Studentet</Popup.Header>
    <Popup.Content>
      <Rating icon='star' defaultRating={4} maxRating={5} />
    </Popup.Content>
  </Popup>
)

export default Popper;