/* global Meteor */
import React, {PropTypes } from 'react';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import { defineMessages, injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const messages = defineMessages({
  required: {
    id: 'common.required',
    description: 'Error message shown when a required field is missing',
    defaultMessage: 'Required',
  },
  isEmail: {
    id: 'common.isEmail',
    description: 'Error message shown when an email field is not valid',
    defaultMessage: 'Email invalide',
  },
  emailPlaceholder: {
    id: 'inviteCoach.passwordPlaceholder',
    description: 'Placeholder for email input on the invite coach page',
    defaultMessage: 'Enter your email',
  },
});

const InviteCoach = ({formatMessage, inviteCoach}) => (
  <div className="row">
    <div className="col-xs-12">
      <h2>
        <FormattedMessage
          id="inviteCoach.title"
          description="Title of invite coach page"
          defaultMessage="Invite your coach"
        />
      </h2>
    </div>
    <div className="col-xs-12">
      <Form
        className="form-horizontal"
        onValidSubmit={inviteCoach}
      >
        <ValidatedInput
          autofocus
          type="email"
          placeholder={formatMessage(messages.emailPlaceholder)}
          name="email"
          validate="required,isEmail"
          errorHelp={{
            required: formatMessage(messages.required),
            isEmail: formatMessage(messages.isEmail),
          }}
        />

        <button className="btn btn-primary" type="submit">
          <FormattedMessage
            id="inviteCoach.sendInvitation"
            description="Button to send invitation to coach"
            defaultMessage="Send invitation"
          />
        </button>
        <Link to="/planning" className="btn btn-secondary">
          <FormattedMessage
            id="common.cancel"
            description="Button to cancel action"
            defaultMessage="Cancel"
          />
        </Link>
      </Form>
    </div>
  </div>
);

InviteCoach.propTypes = {
  intl: intlShape.isRequired,
  inviteCoach: PropTypes.func.isRequired,
};

export default injectIntl(InviteCoach);
