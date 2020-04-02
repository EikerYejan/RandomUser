import React from "react"
import Map from "../Map"
import { UserObject } from "../../types"

import mail from "../../assets/images/mail.svg"
import phone from "../../assets/images/phone.svg"
import home from "../../assets/images/home.svg"
import "../../assets/styles/components/UserModal.scss"

type UserModalProps = {
  user: UserObject
  goBack: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, goBack }) => {
  const address = `${user.location.street.name} ${user.location.street.number}, ${user.location.city} ${user.location.postcode}, ${user.location.state}, ${user.location.country}`

  return (
    <div className="user-modal">
      <button onClick={goBack}>&times;</button>
      <div className="columns is-multiline user-modal__inner">
        <div className="column is-5">
          <img
            className="user-picture"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h2 className="has-after">
            {user.name.first} <span>{user.name.last}</span>
          </h2>
          <p>
            <img className="icon" src={mail} alt="mail-icon" />
            {user.email}
          </p>
          <p>
            <img className="icon" src={phone} alt="phone-icon" />
            {user.cell}
          </p>
          <p>
            <img className="icon" src={home} alt="home-icon" />
            {address}
          </p>
        </div>
        <div className="column is-7">
          <div className="map-wrapper">
            <Map
              lat={user.location.coordinates.latitude}
              lng={user.location.coordinates.longitude}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal
