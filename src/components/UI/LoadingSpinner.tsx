import classes from "./LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div
      className={`spinner-border text-primary ${classes.spinner}`}
      role="status"
    />
  );
};

export default LoadingSpinner;
