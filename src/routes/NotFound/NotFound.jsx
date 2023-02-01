//No much to see here, this is a small NOT Found page
//If user is trying to access a page that doesn't exist, react-router will bring them here.

export const NotFound = () => {
  return (
    <div>
      <h3>Oops!</h3>
      <p>Seems that the page you're looking for doesn't exist</p>
    </div>
  );
};
