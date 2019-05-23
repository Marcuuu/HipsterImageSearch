import React from "react"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            imgUrl:
                "https://images.unsplash.com/photo-1557856209-f683eee02298?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjczMTc2fQ",
            imgData: {}
        }

        this.requestNewImage = this.requestNewImage.bind(this)
    }

    componentDidMount() {
        this.requestNewImage()
    }

    requestNewImage() {
        fetch(
            "https://api.unsplash.com/photos/random/?client_id=9d405acfb75f839649b5c5e2099bed8bd03f6032c52aeb8bc62bc4a81ba51740"
        )
            .then(response => response.json())
            .then(data => {
                this.setState({
                    imgData: data,
                    imgUrl: data.urls.full
                })
                console.log(this.state.imgData)
                console.log(this.state.imgUrl)
            })
            .catch(err => {
                console.log("Error caught while fetching the images!", err)
            })
    }

    render() {
        return (
            <div className="imageViewCon">
                <img
                    className="imageView"
                    src={this.state.imgUrl}
                    alt="Sweet success boys"
                />
                <button className="newImgBtn" onClick={this.requestNewImage}>
                    Request new image!
                </button>
                <div className="darkenBg">
                    <div />
                </div>
            </div>
        )
    }
}

export default App
