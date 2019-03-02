import React from 'react'

class Pet extends React.Component {
  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    var { pet: {name, type, gender, age, weight}, isAdopted} = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {name} {gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button
          onClick={this.handleAdoptPet}
          className="ui primary button"
          >Adopt pet</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
