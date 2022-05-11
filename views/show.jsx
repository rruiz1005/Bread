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
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <div>
            <li><a href = '/breads'>Go home</a></li>
            </div>
        </Defualt>
    )
}

module.exports = Show