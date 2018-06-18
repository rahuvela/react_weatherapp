var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return {
      title : 'error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#emodal'));
    modal.open();
  },

  render: function(){
    var {title,message} = this.props;
    return(
      <div id="emodal" className="reveal tiny text-center" data-reveal = "">
        <p>
          {title}
        </p>
        <p>
          {message}
        </p>
        <button className = "button hollow" data-close = "">
          Close!
        </button>

      </div>

    );
  }

});

module.exports = ErrorModal;
