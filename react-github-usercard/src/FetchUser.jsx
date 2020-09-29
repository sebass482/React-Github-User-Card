import React, {useEffect} from "react";
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import FetchRandom from './FetchRandomUser';

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
    username: null,
    followers: 0,
    following: 0,
    source: null,
  };

  async componentDidMount() {
    const url = "https://api.github.com/users/sebass482";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({ person: data.name, loading: false, username: data.login, followers: data.followers, following: data.following, source: data.url });
  }

  // componentDidUpdate(){
  //   console.log('Component Updated')
  // }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <>
      <div className='randomUser'>
      <FetchRandom />   
      </div>

      <div className='themeDiv'>
      
        <FormControl> 
        <img src='' />
          <FormLabel>{this.state.person}</FormLabel>
          <FormLabel>{this.state.username}</FormLabel>
          <FormLabel>Followers : {this.state.followers}</FormLabel>
          <FormLabel>Following : {this.state.following}</FormLabel>
          <FormLabel> Data from : {this.state.source} </FormLabel>

        </FormControl>
      </div>
      </>
    )
  }
}