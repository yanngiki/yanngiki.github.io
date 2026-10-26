(function () {
    var list = document.querySelector('[data-work-list]');
    if (!list) return;

    var buttons = Array.prototype.slice.call(
        document.querySelectorAll('[data-work-filter]')
    );
    var cards = Array.prototype.slice.call(
        list.querySelectorAll('[data-work-type]')
    );
    var validTypes = buttons.map(function (button) {
        return button.dataset.workFilter;
    });

    function getTypeFromUrl() {
        var type = window.location.hash.replace('#', '');
        return validTypes.indexOf(type) !== -1 ? type : 'project';
    }

    function getUrlForType(type) {
        var url = window.location.pathname + window.location.search;
        return type === 'project' ? url : url + '#' + type;
    }

    function applyFilter(type, historyMode) {
        if (validTypes.indexOf(type) === -1) {
            type = 'project';
        }

        cards.forEach(function (card) {
            card.hidden = card.dataset.workType !== type;
        });

        buttons.forEach(function (button) {
            button.setAttribute(
                'aria-pressed',
                button.dataset.workFilter === type ? 'true' : 'false'
            );
        });

        list.dataset.activeFilter = type;

        if (historyMode === 'push') {
            window.history.pushState({ workType: type }, '', getUrlForType(type));
        } else if (historyMode === 'replace') {
            window.history.replaceState({ workType: type }, '', getUrlForType(type));
        }
    }

    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            applyFilter(button.dataset.workFilter, 'push');
        });

        button.addEventListener('keydown', function (event) {
            var nextIndex;

            if (event.key === 'ArrowRight') {
                nextIndex = (index + 1) % buttons.length;
            } else if (event.key === 'ArrowLeft') {
                nextIndex = (index - 1 + buttons.length) % buttons.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = buttons.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            buttons[nextIndex].focus();
            buttons[nextIndex].click();
        });
    });

    window.addEventListener('popstate', function () {
        applyFilter(getTypeFromUrl(), 'none');
    });

    applyFilter(getTypeFromUrl(), 'replace');
})();
