import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { connect } from 'react-redux'
import { fetchCourseofowner, deleteCourseOwner } from '../../actions'

class DeleteCourse extends React.Component {
    componentDidMount() {
        this.props.fetchCourseofowner(
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
                <button onClick={() => this.props.deleteCourseOwner(id)} className="ui button negative">Delete</button>
                <Link to="/teacher/dashboard" className="ui button ">Cancel</Link>
            </React.Fragment>
        )

    }
    renderContent = () => {
        if (!this.props.teachercourse) {
            return "Are you sure you want to delete this course?"
        }
        return `Are you sure you want to delete course with title:${this.props.teachercourse.name}`
    }
    render() {
        return (
            //modal uses react.fragement in it as we have put that in
            <Modal title="Delete Your Course" warning={this.renderContent()} action={this.renderActions()} onDismiss={() => history.push('/teacher/dashboard')} />
        )

    }
};
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return { teachercourse: state.teachercourse[ownProps.match.params.id] }
}
export default connect(mapStateToProps, {
    fetchCourseofowner, deleteCourseOwner
})(DeleteCourse)