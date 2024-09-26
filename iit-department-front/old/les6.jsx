import React, {Component, Fragment} from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
    <TitleContext.Consumer>
        { ({ title, subTitle, click }) => (
            <Fragment>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </Fragment>
        )}
    </TitleContext.Consumer>
)
const LevelTwo = () => <LevelThree />
const LevelOne = () => <LevelTwo />

class Context extends Component {
    render() {
        return (
            <TitleContext.Provider value={{title: "TITLE", subTitle: "subTITLE", click: () => {console.log("Hi!")} }}>
                <LevelOne />
            </TitleContext.Provider>
        )
    }
}

export default Context;