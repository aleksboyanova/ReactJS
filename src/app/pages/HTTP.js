import React, { Component } from 'react';
import API from '../api/API';
import Constants from '../constants/Constants'

export default class HTTP extends Component {

    state = {
        comments: [],
        comment: { creator: "", body: "", index: -1 },
        isAdd: true
    }

    componentDidMount() {
        this.loadComments()
    }

    loadComments = () => {
        API.get(Constants.LOCALHOST, '/comments')
            .then(comments => {
                this.setState({ comments: comments });
            })
    }

    editData = (id) => {
        const commentToEdit = this.state.comments[id];
        commentToEdit.index = id
        this.setState({ comment: commentToEdit, isAdd: false })
    }

    deleteData = (id) => {
        API.delete(Constants.LOCALHOST, `/comments/${id}`).then(() => { this.loadComments() })
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        const comment = Object.assign({}, this.state.comment);
        comment[name] = value;
        this.setState({ comment })
    }

    save = () => {
        API.post(Constants.LOCALHOST, '/comments', this.state.comment).then(() => { this.loadComments(); this.setState({ comment: { creator: "", body: "" } }) })
    }

    update = (index) => {
        API.put(Constants.LOCALHOST, `/comments/${this.state.comment.index}`, this.state.comment).then(() => { this.loadComments(); this.setState({ comment: { creator: "", body: "" }, isAdd: true }) })
    }

    render() {
        return (
            <div>
                <h2 className="text-capitalize text-center">comments</h2>
                <div style={{ width: 500 }}>
                    <div className="form-group">
                        <label className="text-capitalize mt-5" for="creator">Creator</label>
                        <input name="creator" value={this.state.comment.creator} onChange={(event) => this.handleChange(event)} type="text" className="form-control" id="creator" />
                    </div>
                    <div class="form-group">
                        <label for="body">Comment</label>
                        <textarea name="body" value={this.state.comment.body} onChange={(event) => this.handleChange(event)} class="form-control" id="body" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.state.isAdd ? this.save : this.update}>
                        {this.state.isAdd ? "Add" : "Update"}</button>
                </div>
                {this.state.comments.map((comment, id) => <div>
                    <p className="text-capitalize mt-3">Creator: {comment.creator}</p> <p>Comment: {comment.body}</p>
                    <button type="button" className="btn btn-success btn-block text-capitalize mt-2"
                        onClick={() => this.editData(id)}>Edit</button>
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-2"
                        onClick={() => this.deleteData(id)}>Delete</button>
                </div>)}
            </div>)
    }
}
