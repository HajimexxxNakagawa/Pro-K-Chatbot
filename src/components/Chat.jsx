import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import questioner from '../assets/img/no-profile.png'

const Chat = ({ text, type }) => {
  const isQuestion = type === 'question'
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={questioner} />
        ) : (
          <Avatar alt="icon" src={questioner} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{text}</div>
    </ListItem>
  )
}

export default Chat
