import React from 'react';

class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
        .then(response => {
          return response.json();
        }).then(res => {
          console.log(res)
          this.setState({
            players: res
          })
        })
        .catch(err => {
          console.log("ERROR", err.response)
        })
    }

    render() {
        return (
            <div>
                {this.state.players.map((player) => {
                    return <p> {player.name} </p>
                })}
            </div>
        )
    }
}

export default PlayerList;