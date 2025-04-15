
import { useLoaderData } from 'react-router';

const UserDetail = () => {
  const userDetail = useLoaderData();
  const {name,website} = userDetail;
  return (
    <div>
      <h3>{name}</h3>
      <p>website: {website}</p>
    </div>
  );
};

export default UserDetail;