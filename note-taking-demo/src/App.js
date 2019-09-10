import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    notes: [],
    currentNote: '',
    noteEditing: null,
    currentEdit: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      const json = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", json);
    }

    this.state.notes.forEach((note, index) => {
      if (prevState.notes[index] !== note) {
        const json = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", json);
      }
    });
  };

  componentDidMount() {
    const json = localStorage.getItem("notes");
    const notes = JSON.parse(json);
    if (notes) {
      this.setState(() => ({ notes }));
    }
  }

  addNote = () => {
    let notes = [...this.state.notes];
    notes.push(this.state.currentNote);
    this.setState({ notes, currentNote: '' });
  };

  deleteNote = indexToDelete => {
    let notes = [...this.state.notes].filter(
      (note, index) => index !== indexToDelete
    );
    this.setState({ notes });
  };

  setNoteEditing = index => {
    this.setState({ noteEditing: index, currentEdit: this.state.notes[index] });
  };

  editNote = e => {
    this.setState({ currentEdit: e.target.value })
  };

  submitEdit = index => {
    let notes = [...this.state.notes];
    notes[index] = this.state.currentEdit;
    this.setState({ notes, noteEditing: null });
  };
 
  render() {
    return (
      <div className="App">
        <h1>localstorage Note-Taking Demo</h1>
        <textarea 
          className="input" 
          placeholder="Notes" 
          onChange={e => this.setState({ currentNote: e.target.value })}
          value={this.state.currentNote}
        />
        <br />
        <button className="submit" onClick={this.addNote}>Submit</button>
        {
          this.state.notes.map((note, index) => (
            <div className="notes" key={index}>
              {this.state.noteEditing === null || 
              this.state.noteEditing !== index ? (
                <div className="note">
                  <div className="note-content">
                    <div className="note-text">{note}</div>
                    <button onClick={() => this.setNoteEditing(index)}>
                      Edit
                    </button>
                  </div>
                  <button onClick={() => this.deleteNote(index)}>Delete</button>
                </div>
              ) : (
                <div className="note">
                  <div className="note-content">
                    <input value={this.state.currentEdit} type="text" onChange={e => this.editNote(e)} />
                    <button onClick={() => this.submitEdit(index)}>Done</button>
                  </div>
                  <button onClick={() => this.deleteNote(index)}>Delete</button>
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default App;
