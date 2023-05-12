import Button from './Button';

const UpdateProgress = () => (
  <div className="update-progress">
    <span>
      <h5>Current Chapter</h5>
      <p>Chapter 1 - A Lesson Learned</p>
    </span>
    <span className="update-progress-btn">
      <Button title="Update Progress" handleClick={null} className="btn btn-block" />
    </span>
  </div>
);

export default UpdateProgress;
