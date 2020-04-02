import React, { useState } from "react"
import UserModal from "./UserModal"
import { UserObject } from "../../types"

import phone from "../../assets/images/phone.svg"
import mail from "../../assets/images/mail.svg"
import "../../assets/styles/components/UserCard.scss"

type UserCardProps = {
  data: UserObject
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  const [isShown, showModal] = useState(false)

  const goBack = () => showModal(false)

  return (
    <>
      <div
        className={`modal-container ${
          isShown ? "modal--is-shown" : "modal--is-hidden"
        }`}
      >
        {isShown ? <UserModal goBack={goBack} user={data} /> : null}
      </div>
      <div className="column is-4-desktop is-6-tablet user-card">
        <div className="user-card__inner">
          <h2>
            {data.name.first} <span>{data.name.last}</span>
          </h2>
          <p>
            <img className="icon" src={mail} alt="mail-icon" />
            {data.email}
          </p>
          <p>
            <img className="icon" src={phone} alt="phone-icon" />
            {data.cell}
          </p>
          <img
            className="user-picture"
            src={data.picture.large}
            alt={data.name.first}
          />

          <button className="btn-white" onClick={() => showModal(true)}>
            Read more
          </button>
        </div>
      </div>
    </>
  )
}

export default UserCard
