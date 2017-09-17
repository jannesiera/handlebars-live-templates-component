import { RenderComponent } from 'RenderComponent';

class LiveHandleBars extends RenderComponent {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});

        Object.defineProperty(this, 'render', {
            get: function() {
                return function() {
                    this.template(this._shadowRoot, this.viewModel);
                }
            }
        });
    };

    connectedCallback() {
        super.connectedCallback();
    }
}

export { LiveHandleBars }