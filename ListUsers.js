import React, { Component } from 'react'


class ListUsers extends Component {
  render() {
    console.log(this.props)
    //let users = Object.keys(this.props.users)
    //console.log(users)
    return(
      <ol className='users-list'>
      {this.props.users.map((user) => (
      	<li key={user.id} className='user-list-item'>
			<div className='user-info'>
			<p> {user.name}'s favorite movie is {this.props.profiles.map( (profile) => {
              if (profile.userID === user.id.toString()){
              	return this.props.movies.map(movie => {
            		if (movie.id.toString() === profile.favoriteMovieID) {
                      return movie.name
                    } else {
                    	return null
                    }
            	})
              	//return profile.favoriteMovieID
              } else {
              	return null
              }
            }				
                          )}</p>

			</div>
		</li>
		))}
      </ol>
      
      )
    
  }
  
}

export default ListUsers;
