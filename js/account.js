insertionQ('.c-transactions-tab__chart').every(function(){
    var $this = $('.c-transactions-tab__chart');

    if(!$this.hasClass('fixed')){
        $this
            .addClass('fixed tangerine-fix-hide')
            .after(
                $('<div />')
                    .addClass('btn btn-show-hide-chart')
                    .text('Show/Hide transactions chart')
                    .click(function(){
                        $this.toggleClass('tangerine-fix-hide');
                    })
            );
    }

    $this.parent().addClass('tangerine-fix-clearfix');
});

insertionQ('.c-details-tab-bar').every(function(){
    var $this = $('.c-details-tab-bar');

    if(!$this.hasClass('moved')){
        $this
            .addClass('moved')
            .insertAfter('.c-account-details__balance');
    }
});

insertionQ('.c-account-control-options').every(function(){
    var $this = $('.c-account-control-options');

    if(!$this.hasClass('moved')){
        $this
            .addClass('moved')
            .insertAfter('.c-details-overview');

        $('<div />').addClass('tangerine-fix-clearfix').insertAfter($this);
    }
});

insertionQ('.c-transactions-tab__chevron').every(function(){
    var $this = $('.c-transactions-tab__chevron');

    if(!$this.hasClass('clicked')){
        $this.addClass('clicked');
        window.angular.element($this).triggerHandler('click');
    }
});