import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adding.css'

class Adding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      miniature: '',
      date: '',
      type: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/database';
    axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        console.log(res.data);
        alert(`Vous avez bien enregistré l'élément`);
      })
      .catch(event => {
        console.error(event);
        alert('Erreur lors de l\'inscription, veuillez réessayer');
      });
  }

  render() {
    return (
      <div className="bg_register bg_regPageTwo">
        <div>
          <h2 className="title">Ajout de Composants au catalogue</h2>
          <p className="explication"> Toi aussi tu souhaite ajouter tes créations au catalogue du dreamiverse ? 
            Alors entre tes informations ci dessous pour que tout les autres puissent les voir !
          </p>
        </div>

        <form onSubmit={this.submitForm} className="block_form">
          <fieldset className="block_fieldset">
            <legend>inscris ton élément ici</legend>
            <div className="form_container">
              <label className="inputtext" htmlFor="name">nom</label>
              <input
                className="inputalign"
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                required
              />

              <label className="inputtext" htmlFor="type">Type d'élément</label>
              <input
                className="inputalign"
                type="text"
                id="type"
                name="type"
                onChange={this.onChange}
                value={this.state.type}
                required
              />

              <label className="inputtext" htmlFor="miniature">image (entrez un url)</label>
              <input
                className="inputalign"
                type="text"
                id="miniature"
                name="miniature"
                onChange={this.onChange}
                value={this.state.miniature}
                required
              />
              <label className="inputtext" htmlFor="date">date de création </label>
              <input
                className="inputalign"
                type="text"
                id="date"
                name="date"
                onChange={this.onChange}
                value={this.state.date}
              />
              <input className="submitButton" type="submit" value="envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Adding;