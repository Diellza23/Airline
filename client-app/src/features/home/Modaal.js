import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function Modaal() {
  return (
    <Modal
      trigger={<Button>Kliko per me shume</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  )
}
export default Modaal