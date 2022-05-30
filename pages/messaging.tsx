import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import Header from "../components/Header";

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl2ZWx5LW1lYWRvdy0zIiwiZXhwIjoxNjUzOTU5MTg1fQ.fEuH5S3pLkaggHjzdfsbSiNw2jWjFAQz50q3UPl81JI';

chatClient.connectUser(
  {
    id: 'lively-meadow-3',
    name: 'lively',
    image: 'https://www.designfreelogoonline.com/wp-content/uploads/2019/02/00580-Family-02.png',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'My Family',
  members: ['lively-meadow-3'],
});

const App = () => (
  <div>
    <Header />
    <Chat client={chatClient} theme='messaging light'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  </div>
);

export default App;
