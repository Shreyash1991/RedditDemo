import { connect } from 'react-redux';
import { requestReddits } from '../../redux/actions';
import Dashboard from './dashboard';
import { resultSelectors } from '../../redux/selectors';
const mapStateToProps = (state, ownProps) => {
    return {
        result: resultSelectors(state)
    }
}
const mapDispatchToProps = {
    requestReddits
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);