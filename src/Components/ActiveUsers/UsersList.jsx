import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Card, CardContent, CardHeader, Typography} from '@mui/material';
import imageMale from '../..//avatars/avatar-male-1.jpg';
import imageFemale from '../..//avatars/avatar-female-1.jpg';
import { height } from '@mui/system';
export default function UsersList(props) {
  return (
    <Card variant="outlined" style={{
        textAlign:'center',
        height:'100vh',
        overflow:'auto'
    }} >
        <CardHeader title="ActiveUsers"/>
        <hr/>
        <CardContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {props.users.map((item) => {
                return (<ListItem alignItems='flex-start' key={item.id}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.gender == 'male' ? imageMale : imageFemale } />
                    </ListItemAvatar>
                    <ListItemText secondary={`id: ${item.id}`}><Typography variant='h6'>{item.name}</Typography></ListItemText>
                </ListItem>)
            })}
        </List>
        </CardContent>
    </Card>
  )
}
