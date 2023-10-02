Rails.application.config.session_store :cookie_store,
  key: '_myapp_session',
  expire_after: 2.hours,
  persistent_session: true
