/**
 * Click button 'Should I do?' ==> 2 case listener
 * 1. Come on, do it!
 * 2. Dont do it
 */
interface ListenerObserver {
    emit(): void;
}

class ListenerObservable {
    listeners: ListenerObserver[] = []
    addListener(listener: ListenerObserver) {
        this.listeners.push(listener)
    }

    emitListener() {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i].emit();
        }
    }
}


class JButton extends ListenerObservable {
    name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }

    clicked() {
        console.log('Question: ' + this.name)
        this.emitListener();
    }
}

class AngelListener implements ListenerObserver {
    emit() {
        console.log('Do it!!!')
    }
}

class DevilListener implements ListenerObserver {
    emit() {
        console.log('Dont do it!!!')
    }
}

const button = new JButton('Should I do it?');
button.addListener(new AngelListener())
button.addListener(new DevilListener())
button.clicked();