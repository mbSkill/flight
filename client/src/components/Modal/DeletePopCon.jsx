import { Button, Popconfirm } from 'antd';

const DeletePopCon = ({d}) => {
  const confirm = () => 
  new Promise((resolve) => {
    setTimeout(() => resolve(d()), 1500);
  });
      
  return (
    <Popconfirm
      title="Confirm Delete"
      onConfirm={confirm}
      onVisibleChange={null}
    >
      <Button danger type="primary">Delete</Button>
    </Popconfirm>
  );
};

export default DeletePopCon;