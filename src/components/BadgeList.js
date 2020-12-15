import React from 'react'
import './styles/BadgeList.css'

class BadgeList extends React.Component {
  render() {
    return (

      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
          <li className="BadgesListItem" key={badge.id}>
            <img className="BadgesListItem__avatar " src={badge.avatarUrl} alt="imagen de los Badge"></img>
            <div>
              <div><strong>{badge.firstName} {badge.lastName}</strong></div>
              <div className="Twitter__name">
                <span className="Twitter__logo"></span>@{badge.twitter}
              </div>
              <div>{badge.jobTitle}</div>
            </div>
          </li>
          )
        }
        )}
      </ul>
    )
  }

}

export default BadgeList