import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
  static propTypes = {
    forID: PropTypes.string,
    value: PropTypes.string,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  componentDidMount() {
    if (!this.props.value) {
      this.uuid = uuidv4()
      this.props.onChange(this.uuid)
    }
  }

  render() {
    const {
      forID,
      value,
      classNameWrapper,
    } = this.props;

    return (
      <input
        type="text"
        className={classNameWrapper}
        id={forID} 
        value={value || this.uuid}
        disabled
      />
    );
  }
}