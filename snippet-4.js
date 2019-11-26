class focusNameInput extends React.Component{
    constructor(props){
        super(props)
        this.nameInput = ReactCreateRef()
    }

    componentDidMount(){
        this.nameInput.current.focus()
    }
    render(){
        return <input ref={this.nameInput} />
    }
}

// or //

class focusNameInput extends React.Component{
    constructor(props){
        super(props)
        this.nameInput = React.ReactCreateRef()
    }

    render(){
        return(
            <input 
                type="text"
                value="name"
                ref={this.nameInput}
            />
        )
    }
}

// now that we've create our ref, we can control the focus wherever we use it.

focus(){
    this.nameInput.current.focus()
}