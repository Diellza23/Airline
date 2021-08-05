import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import { Typography } from '@material-ui/core';
import { Message } from 'semantic-ui-react'

const Revealing = () => (
  <Reveal animated='move up'>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
    {/* <Typography paragraph > 
          Gjate vendosjes se te dhenave ne forme
          (nota apo konsultime) te keni kujdes me te shtuar
           shkaku i evitimit te gabimeve qe mund te ndodhin.
        </Typography> */}
        <Message color='teal'> Vendosni notat sa me shpejte!
        </Message>
      {/* <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='small' /> */}
    </Reveal.Content>
  </Reveal>
)

export default Revealing