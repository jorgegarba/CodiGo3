import React from 'react'
import { View, Text, Slider } from 'react-native'

const SliderTemplate = (props) => {
    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize:16}}>{props.label} {parseInt(props.value)}</Text>
            <Slider ref="input"
                    step={props.config.step}
                    minimumValue={props.config.min}
                    maximumValue={props.config.max}
                    value={parseInt(props.value)}
                    onValueChange={value=>{props.onChange(value)}}/>
            <Text style={{marginBottom:0}}>{props.help}</Text>
        </View>
    )
}

export default SliderTemplate
