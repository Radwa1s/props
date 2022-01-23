import react from "react";
import PropTypes from "prop-types";


export const UserData = (props) => {
    alert(`Hello  ` + props.name)
    const styleObject = { color: "blue", textAlign: "center" }
    return (

        <div style={styleObject}>
            <h1 className="username" >{props.name}</h1>
            <img className="userphoto" src={props.children} alt="profilephoto" />
            <p classname="profession">{props.jop}</p>
            <p className="bio">"{props.bio}</p>

        </div>
    );

}
export const Age = ({ userage }) => {

    return (

        <p>
            {userage}
        </p>
    );
}

Age.defaultProps = (`My Age` + { userage: "28" });

export const Thanks = (props) => {
    const styleObject = {
        color: "#1565c0", textAlign: "center"
    }
    return (<h1 style={styleObject} >Thank you for reading,   {props.name}.</h1>)
}

export const myPropTypes = {
    phone: PropTypes.number,
};
export const props = {
    phone: '02 100548473',
};
PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'MyComponent');




