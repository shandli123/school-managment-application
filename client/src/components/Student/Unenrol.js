import React from 'react'
import Modal from '../Teacher/Modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchCourse, deleteCourse } from '../../actions'

class Unenrol extends React.Component {
    componentDidMount() {
        this.props.fetchCourse(
            this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            // 1st method


            // const actions=(
            //     <div>
            //         <button className="ui button negative">Delete</button>
            //         <button className="ui button ">Cancel</button>
            //     </div>
            // )


            // 2nd method


            //react.fragment is a tag used to bined sibling elements without snyother html tag it is like a invisible tag  <React.Fragment>=<>
            <React.Fragment>
                <button onClick={() => this.props.deleteCourse(id)} className="ui button negative">Delete</button>
                <Link to="/student/dashboard" className="ui button ">Cancel</Link>
            </React.Fragment>
        )

    }
    renderContent = () => {
        if (!this.props.studentcourse) {
            return "Are you sure you want to unenrol this course?"
        }
        return `Are you sure you want to unerol course with title:${this.props.studentcourse.name}`
    }
    render() {
        return (
            //modal uses react.fragement in it as we have put that in
            <Modal title="Delete Your Course" warning={this.renderContent()} action={this.renderActions()} onDismiss={() => history.push('/student/dashboard')} />
        )

    }
};
const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps)
    return { studentcourse: state.studentcourse[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {
    fetchCourse, deleteCourse
})(Unenrol)