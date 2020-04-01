import React from "react"
import { UserObject } from "../../types"

import mail from "../../assets/images/mail.svg"
import phone from "../../assets/images/phone.svg"
import "../../assets/styles/components/UserModal.scss"

type UserModalProps = {
  user: UserObject
  goBack: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, goBack }) => (
  <div className="user-modal">
    <button onClick={goBack}>&times;</button>
    <div className="columns is-multiline user-modal__inner">
      <div className="column is-6">
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
      </div>
      <div className="column is-6">
        <img
          className="user-picture"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
    </div>
  </div>
)

export default UserModal
