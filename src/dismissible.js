(function (window) {
  class Dismissible {

    /**
     *
     * @param {HTMLElement} root Root Element
     */
    constructor(root, config = {
      icons: {
        dismiss: ['lni', 'lni-16', 'lni-close'],
        info: ['lni', 'lni-32', 'lni-popup'],
        success: ['lni', 'lni-32', 'lni-checkmark-circle'],
        error: ['lni', 'lni-32', 'lni-warning']
      }
    }) {
      this._container = root;
      this._config = config;
      this._container.classList.add('dismissible-container');
    }

    show(level, message, icon) {
      this.dismiss();

      const dismissible = this._createDismissible(level, message, icon);
      this._container.appendChild(dismissible);
    }

    dismiss() {
      while (this._container.firstChild) {
        this._container.firstChild.remove();
      }
    }

    error(message) {
      this.show('error', message, this._config.icons.error);
    }

    info(message) {
      this.show('info', message, this._config.icons.info);
    }

    success(message) {
      this.show('success', message, this._config.icons.success);
    }

    _createDismissible(level, message, icon) {
      const dismissible = document.createElement('div');

      dismissible.classList.add('dismissible');
      dismissible.classList.add(level);

      dismissible.appendChild(this._createIcon(icon));
      dismissible.appendChild(this._createMessage(message));
      dismissible.appendChild(this._createDismissButton());

      return dismissible;
    }

    _createDismissButton() {
      const {
        icons
      } = this._config;

      const button = document.createElement('button');
      button.classList.add('dismiss');
      button.addEventListener('click', () => this.dismiss());

      const buttonIcon = document.createElement('i');
      buttonIcon.classList.add(...icons.dismiss);

      button.appendChild(buttonIcon);

      return button;
    }

    _createMessage(message) {
      const element = document.createElement('div');
      element.classList.add('dismissible-message');
      element.innerText = message;
      return element;
    }

    _createIcon(icon, text) {
      const element = document.createElement('i');
      element.classList.add(...icon, 'dismissible-icon');
      return element;
    }
  }

  window.Dismissible = Dismissible;

})(window);