import React from 'react'

export default class HotDeals extends React.Component {
    render() {
        return <div class="card" style={{width: 240}}>
            <img class="card-img-top" src="public/logo192.png" alt="Card cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="uhu" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    }
}