import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const user = this.props.user;
        if (!user) {
            return null;
        }
        // console.log('this.props.users.name',this.props.users);
        return <div className="header">{user.name}</div>
    }
}


const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}
export default connect(mapStateToProps)(UserHeader);