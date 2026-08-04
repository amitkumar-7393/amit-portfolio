CREATE TABLE IF NOT EXISTS contacts (
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL,

    subject VARCHAR(200) DEFAULT 'Portfolio Contact',

    message TEXT NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contacts_created_at
ON contacts (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contacts_email
ON contacts (email);
