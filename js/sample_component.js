function LikeButton() {
  const [liked, setLiked] = React.useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }

  return React.createElement(
    "button",
    {
      style: { backgroundColor: liked ? "blue" : "transparent" },
      onClick: handleClick,
    },
    liked ? "Liked" : "Like"
  )
}

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById("react")
)
