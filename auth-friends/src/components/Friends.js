import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class Friends extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data,
                    newFriend: {
                        id: '',
                        name: '',
                        age: '',
                        email: ''
                    }
                })
            })
            .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
                {this.state.friends.map((friend) => {
                    return (
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
                <form>
                    <h2>Add a new Friend!</h2>
                    <p>ID</p>
                    <input type='text' name='id' onChange={(e) => {
                        this.setState({
                            friends: [...this.state.friends],
                            newFriend: {
                                id: e.target.value,
                                name: this.state.newFriend.name,
                                age: this.state.newFriend.age,
                                email: this.state.newFriend.email
                            }
                        })
                    }} />
                    <p>Name</p>
                    <input type='text' name='name' onChange={(e) => {
                        this.setState({
                            friends: [...this.state.friends],
                            newFriend: {
                                id: this.state.newFriend.id,
                                name: e.target.value,
                                age: this.state.newFriend.age,
                                email: this.state.newFriend.email
                            }
                        })
                    }} />
                    <p>Age</p>
                    <input type='text' name='age' onChange={(e) => {
                        this.setState({
                            friends: [...this.state.friends],
                            newFriend: {
                                id: this.state.newFriend.id,
                                name: this.state.newFriend.name,
                                age: e.target.value,
                                email: this.state.newFriend.email
                            }
                        })
                    }}/>
                    <p>Email</p>
                    <input type='text' name='email' onChange={(e) => {
                        this.setState({
                            friends: [...this.state.friends],
                            newFriend: {
                                id: this.state.newFriend.id,
                                name: this.state.newFriend.name,
                                age: this.state.newFriend.age,
                                email: e.target.value
                            }
                        })
                    }}/>
                    <button onClick={() => {
                        axiosWithAuth()
                            .post('/friends', this.state.newFriend)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch(err => {console.log(err)})
                    }}>Add</button>
                </form>
            </div>
        )
    }
}

export default Friends 