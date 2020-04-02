import React from "react"

type LoaderProps = {
  loading: boolean
}

const Loader: React.FC<LoaderProps> = ({ loading }) => (
  <>
    {loading ? (
      <span
        style={{
          position: "absolute",
          width: "35px",
          height: "35px",
          top: "calc(50% - 17.5px)",
          left: "calc(50% - 17.5px)",
        }}
        className="loader"
      ></span>
    ) : null}
  </>
)

export default Loader
