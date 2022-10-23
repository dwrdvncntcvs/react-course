import { useCounter } from '../hooks/useCounter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter("backward")

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
