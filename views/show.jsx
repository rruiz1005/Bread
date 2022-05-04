const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    return (
        <Default>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
        </Default>
    )
}

module.exports = Show