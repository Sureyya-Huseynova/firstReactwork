import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <div className="todo">
                    <p onClick={this.props.DeleteCard} className="deletetodo">X</p>
                    <form onSubmit={this.props.onSubmit}>
                        <input type="text" placeholder="Enter your text" name="todotask" autoComplete="off" />
                        <button type="submit">Save</button>
                    </form>
                    <ul>
                        <p onClick={this.props.DeleteSelectitem} className="deleteoneline">
                            <i className="fas fa-trash"></i>
                        </p>

                        {
                            this.props.arr.map((item, index) => {
                                return <li key={index}>
                                    <input type="checkbox" name="oneline"></input>
                                    {item}
                                </li>
                            })

                        }
                    </ul>
                </div>
            </div>
        )
    }
}
