import withLoading from '../hocs/withLoading';

const Users = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default withLoading('http://jsonplaceholder.typicode.com/users')(Users);
