import React from "react"
import "../assets/styles/components/Error.scss"

const Error: React.FC = () => (
  <div className="column is-12 error-wrapper p-mb-0">
    <p>Error 500</p>
    <h3>Oops</h3>
    <p>There's been an error, please try again later</p>
  </div>
)

export default Error
