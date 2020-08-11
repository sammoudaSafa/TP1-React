import React from 'react';
import { PersonItem } from './personItem';

interface Props { person: PersonItem; isCoched(): void; }

interface State { }

export class EditPerson extends React.Component<Props, State> {

    public render() {
        return <div className='personnage'>
            <h2 className={this.props.person.done ? 'done' : ''}> <span onClick={this.props.isCoched}>{this.props.person.name}</span> </h2>
            <img src={this.props.person.image} />
        </div>;
    }

}
