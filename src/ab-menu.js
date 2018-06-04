/**
 * Component
 * ab-menu
 */

import './ab-menu.scss'

class abMenuCtrl {

    static get $inject() {
        return ['$scope', '$document', '$timeout']
    }

    constructor($scope, $document, $timeout) {
        this.$scope = $scope
        this.$document = $document
        this.$timeout = $timeout

        this.handleDocumentClick = this.handleDocumentClick.bind(this)
    }

    $onInit() {
        this.visible = false
    }

    /**
     * Toggle menu visibility.
     */
    toggle() {
        this.visible = !this.visible

        if (this.visible) {
            this.$timeout(() => {
                this.$document.one('click', this.handleDocumentClick)
            })
        }
    }

    /**
     * Handle click event on document.
     *
     * @param {Event} event
     */
    handleDocumentClick(event) {
        this.visible = false
        this.$scope.$applyAsync()
    }

    /**
     * Handle click event on action element.
     *
     * @param {Object} action
     */
    handleActionClick(action) {
        action.callback(this.context)
    }

}

const template = `
    <div class="ab-menu">
        <!-- Button -->
        <div class="ab-menu-button" ng-click="$ctrl.toggle()">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>

        <!-- Menu -->
        <div class="ab-menu-menu" ng-class="{ visible: $ctrl.visible }">
            <div class="action" ng-repeat="action in $ctrl.actions" ng-click="$ctrl.handleActionClick(action)">
                <span ng-bind="action.name"></span>
            </div>
        </div>
    </<div>
`

export default {
    controller: abMenuCtrl,
    template,
    bindings: {
        context: '<?',
        actions: '<'
    },
    transclude: true
}
