import angular from 'angular'
import abMenu from '../src'
import './demo.scss'

class DemoCtrl {

    constructor() {
        //
    }

    $onInit() {
        this.context = {
            id: 1
        }

        this.actions = [
            { name: 'Edit', callback: this.edit },
            { name: 'Delete', callback: this.delete },
            { name: 'Download', callback: this.download }
        ]
    }

    edit(context) {
        console.log('edit', context)
    }

    delete(context) {
        console.log('delete', context)
    }

    download(context) {
        console.log('download', context)
    }

}

const template = `
    <div class="demo">
        <ab-menu context="$ctrl.context" actions="$ctrl.actions"></ab-menu>
    </div>
`

angular
    .module('demo', [abMenu])
    .component('demo', {
        controller: DemoCtrl,
        template
    })

angular.bootstrap(document, ['demo'])
