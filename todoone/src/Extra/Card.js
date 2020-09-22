import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const{DeleteCard, onSubmit, DeleteSelectitem}=this.props;
        return (
            <div>
                <div className="todo">
                    <p onClick={DeleteCard} className="deletetodo">X</p>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="Enter your text" name="todotask" autoComplete="off" />
                        <button type="submit">Save</button>
                    </form>
                    <ul>
                        <p onClick={DeleteSelectitem} className="deleteoneline">
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
