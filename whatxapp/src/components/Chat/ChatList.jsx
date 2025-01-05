import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const ChatList = () => {
    const chats = [ /* Your chat data */
        { id: 1, name: 'John Doe', lastMessage: 'Hey!' },
        { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
    ];

    return (
        <List sx={{ width: '300px', borderRight: '1px solid #eee' }}>{/* Style List */}
            {chats.map((chat) => (
                <ListItem button key={chat.id}>
                    <ListItemAvatar>
                        <Avatar alt={chat.name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={chat.name} secondary={chat.lastMessage} />
                </ListItem>
            ))}
        </List>
    );
};

export default ChatList;