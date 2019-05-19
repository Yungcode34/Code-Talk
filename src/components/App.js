import React from 'react';
import { Grid , Segment, Button, Header, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';
import './App.css';
import { connect } from 'react-redux';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

const App = ({currentUser, currentChannel, isPrivateChannel, userPosts, primaryColor, secondaryColor}) =>(
  <Grid columns="equal" className="app" style={{background: secondaryColor}}>
      <ColorPanel
      key={currentUser && currentUser.name}
      currentUser={currentUser}
      />
      <SidePanel 
      key={currentUser && currentUser.id}
      currentUser={currentUser}
      primaryColor={primaryColor}
      />
      <Grid stackable columns={2}>
      <Grid.Column style={{ marginLeft:320 }}>
        <Segment>
        <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
        />
        </Segment>
      </Grid.Column>
      <Grid.Column width={4} >
      <Segment>
        <MetaPanel 
        key={currentChannel && currentChannel.name}
        userPosts={userPosts}
        currentChannel={currentChannel}
        isPrivateChannel={isPrivateChannel}
        />
        </Segment>
      </Grid.Column>
      </Grid>
  </Grid>
);

const mapStateToProps = state =>({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
})


export default connect(mapStateToProps)(App);
