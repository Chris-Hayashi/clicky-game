import React, { Component } from "react";
import Card from "./../components/Card";
import Header from "./../components/Header";
import Wrapper from "./../components/Wrapper";
import images from "./../images.json";

class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0,
        message: "Click an image to begin!"
    };

    sortCards = imageArray => {
        imageArray.sort(() => Math.random() - 0.5);
        for (let i = 0; i < imageArray.length; i++) {
            imageArray[i].id = i;
        }
    }

    componentDidMount() {
        let imageArray = this.state.images;
        this.sortCards(imageArray);
        this.setState({ images: imageArray });
    }

    handleBtnClick = id => {
        let imageArray = this.state.images;
        if (!imageArray[id].clicked) {
            imageArray[id].clicked = true;
            this.sortCards(imageArray);
            if (this.state.score >= this.state.topScore)
                return this.setState({
                    images: imageArray,
                    score: this.state.score + 1,
                    topScore: this.state.topScore + 1,
                    message: "You guessed correctly!"
                });
        } else {
            imageArray.map(image => image.clicked = false);
            this.sortCards(imageArray);
            imageArray = this.state.images;
            this.setState({
                images: imageArray,
                score: 0,
                message: "You guessed incorrectly!"
            });

        }
    }




    render() {
        return (
            <div>

                <div>
                    <Header
                        score={this.state.score}
                        topScore={this.state.topScore}
                        message={this.state.message}
                    />
                </div>

                {/* <div>

                </div> */}

                <div>
                    <Wrapper>
                        {this.state.images.map(image => (
                            <Card
                                id={image.id}
                                key={image.id}
                                clicked={image.clicked}
                                image={image.image}
                                onClick={() => this.handleBtnClick(image.id)}
                            />
                        ))}

                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Game;