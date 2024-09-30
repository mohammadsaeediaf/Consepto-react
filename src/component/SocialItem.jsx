function SocialItem({ imageSrc }) {
  return (
    <img src={require(`../images/main/${imageSrc}.png`)} alt="social-logo" />
  );
}

export default SocialItem;
