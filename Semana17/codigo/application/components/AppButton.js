import React, { Component } from 'react'
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default class AppButton extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        const {title, iconName, iconColor, bgColor,
                action, iconSize, setWidth} = this.props;
                    
        const {width} = setWidth ? Dimensions.get('window') : {}; 

        let miEstilo = {
            width:width,
            backgroundColor : bgColor,
            height: 45,
            borderColor: "transparent",
            borderWidth:0,
            borderRadius:5,
            marginBottom:5,
        }

        return (
            <Button
                buttonStyle={miEstilo}
                iconRight
                onPress={action}
                title={title}
                icon= {
                        <Icon name={iconName}
                                size={iconSize}
                                color={iconColor}
                                />
                    }
            />    
        )
    }
}
