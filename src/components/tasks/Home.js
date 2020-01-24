import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('task');
    this.unsubscribe = null;
    this.state = {
      tasks: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      const { task, resolve, resolve_date } = doc.data();
      tasks.push({
        key: doc.id,
        doc, // DocumentSnapshot
        task,
        resolve,
        resolve_date,
      });
    });
    this.setState({
      tasks
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h6>
            TASK LIST
          </h6>
        </div>
        <div class="card-body">
          <h4><Link class="btn btn-primary" to="/create">Add Task</Link></h4>
          <table class="table table-stripe">
            <thead>
              <tr>
                <th>Task</th>
                <th>Resolve</th>
                <th>Resolve Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(tasks =>
                <tr>
                  <td><Link to={`/show/${tasks.key}`}>{tasks.task}</Link></td>
                  <td>{tasks.resolve}</td>
                  <td>{tasks.resolve_date}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}

export default App;