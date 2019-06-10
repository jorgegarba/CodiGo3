import React, { Component } from 'react'
import { Text, View, Alert, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-elements';
import t from 'tcomb-form-native';
import SliderTemplate from '../playa/SliderTemplate';
import AppButton from '../AppButton';
const Form = t.form.Form;
import * as firebase from 'firebase';

export default class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comentario: {
                comment: '',
                rating: 0
            }
        }
        this.refComentarios = firebase.database()
            .ref()
            .child(`comentarios/${this.props.idPlaya}`);
    }

    actualizarState = (data) => {
        this.setState({
            comentario: data
        })
    }

    agregarComentario = () => {
        const primaryKey = this.refComentarios.push().key;
        this.refComentarios.child(primaryKey).set({
            comentario: this.state.comentario.comment,
            rating: this.state.comentario.rating
        }).then(() => {
            Alert.alert('Éxito!', 'Comentario agregado exitosamente');
            this.setState({
                comentario: {
                    comment: '',
                    rating: 0
                }
            })
        })
    }

    render() {

        let Comment = t.struct({
            rating: t.Number,
            comment: t.maybe(t.String)
        })
        let options = {
            fields: {
                rating: {
                    label: 'Puntuación',
                    help: '¿Qué puntuación le das del 1 al 5?',
                    config: {
                        step: 1,
                        min: 1,
                        max: 5
                    },
                    template: SliderTemplate
                },
                comment: {
                    label: 'Comentario',
                    placeholder: 'Deja un comentario...',
                    multiline: true
                }
            }
        }

        return (
            <KeyboardAvoidingView behavior={'position'}>
                <Card title="Tu opinión importa!">
                    <View>
                        <Form ref='form'
                            type={Comment}
                            options={options}
                            onChange={(data) => {
                                this.actualizarState(data);
                            }}
                            value={this.state.comentario} />
                        <AppButton
                            bgColor={'rgba(255,38,74,0.8)'}
                            iconName={'comments'}
                            title={"Publicar Comentario"}
                            action={this.agregarComentario}
                            iconColor={"#fff"}
                            iconSize={30}
                            setWidth={false} />
                    </View>
                </Card>
            </KeyboardAvoidingView>
        )
    }
}
