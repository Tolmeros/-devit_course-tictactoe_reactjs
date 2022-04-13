import {connect} from 'react-redux';
import {makeTurn, turnToggle} from '../../store/actions';
import TicTacToe from './TicTacToe';
import {turn} from '../../store/selectors';
import {createStructuredSelector} from 'reselect';

const mapStateToProps = createStructuredSelector({
  turn,
});

const mapDispatchToProps = {
  turnToggle,
  makeTurn,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
