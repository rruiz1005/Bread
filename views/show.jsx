const React = require('react')
const Defualt = require('./layouts/Default')


function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Defualt>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT</span>
                }
                have gluten.
            </p>
            <img src = {bread.image} alt = {bread.name}></img>
            <li><a href = '/breads'>Go home</a></li>
        </Defualt>
    )
}

module.exports = Show