import React from "react";
import PropTypes from "prop-types";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { NavLink } from "react-router-dom";
import { VISIBILITY_TYPES } from "../../constants";

export default class FilterForm extends React.Component {
  render() {
    return (
      <form className="text-center">
        <ToggleButtonGroup
          type="radio"
          name="filter"
          defaultValue={this.props.defaultFilterValue}
        >
          <NavLink
            className="btn btn-outline-secondary"
            to={`/${VISIBILITY_TYPES.ALL}`}
          >
            All tasks
          </NavLink>
          <NavLink
            className="btn btn-outline-secondary"
            to={`/${VISIBILITY_TYPES.ACTIVE}`}
          >
            Active tasks
          </NavLink>
          <NavLink
            className="btn btn-outline-secondary"
            to={`/${VISIBILITY_TYPES.DONE}`}
          >
            Done tasks
          </NavLink>
        </ToggleButtonGroup>
      </form>
    );
  }
}

FilterForm.propTypes = {
  defaultFilterValue: PropTypes.string,
};
