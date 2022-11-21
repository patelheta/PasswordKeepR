DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(225) NOT NULL,
  org_websites_id INTEGER REFERENCES org_websites(id) ON DELETE CASCADE
);
