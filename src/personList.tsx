import { EditPerson } from 'editPerson';
import { PersonItem } from 'models/personItem';
import React from 'react';
import { Nav } from './nav';
interface Props { etat: true, isCoched(): void; }
interface State { list: PersonItem[]; }

export class PersonList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            list: [
                { name: 'Alien', image: 'img/1.png', done: false },
                { name: 'Hitman', image: 'img/2.png' },
                { name: 'Asian', image: 'img/3.png' },
                { name: 'Villian', image: 'img/4.png' },
                { name: 'Boxer', image: 'img/5.png' },
                { name: 'Chicken', image: 'img/6.png' },
                { name: 'Basket', image: 'img/7.png' },
                { name: 'Boy', image: 'img/8.png' },
                { name: 'Duck', image: 'img/9.png' },
                { name: 'Child', image: 'img/10.png' },
                { name: 'Chimist', image: 'img/11.png' },
                { name: 'Chef', image: 'img/12.png' },
                { name: 'Businessman', image: 'img/13.png' },
                { name: 'Farmer', image: 'img/14.png' },
                { name: 'Prisioner', image: 'img/15.png' },
                { name: 'Plumber', image: 'img/16.png' },
                { name: 'Superheroe', image: 'img/17.png' },
                { name: 'Smoker', image: 'img/18.png' },
                { name: 'Warrior', image: 'img/19.png' },
                { name: 'Trumpeter', image: 'img/20.png' },
                { name: 'Teacher', image: 'img/21.png' },
                { name: 'Gardener', image: 'img/22.png' },
                { name: 'Psycho', image: 'img/23.png' },
                { name: 'Man', image: 'img/24.png' }
            ]
        };
    }
    public render() {
        return <div>
            <Nav />
            <div className='game'>{this.state.list.map(person =>
                <EditPerson key={person.name} person={person}
                    isCoched={() => this.isCoched(person)} />)}
            </div>
            <button className='rejouer' onClick={() => { console.log(this.props); }}>Rejouer</button>
        </div>;
    }
    private isCoched = (person: PersonItem) => {
        person.done = !person.done;
        this.setState({ list: this.state.list });
    };
}
