function Button() {
  const [like, setLike] = React.useState(false)

  const handleButton = () => {
    setLike(!like)
  }

  return React.createElement(
    "button",
    {
      style: { backgroundColor: like ? "green" : "white" },
      onClick: handleButton,
    },
    like ? "Liked" : "Like"
  )
}

ReactDOM.render(React.createElement(Button), document.getElementById("react"))
