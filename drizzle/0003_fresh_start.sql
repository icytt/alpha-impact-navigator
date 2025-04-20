DROP TABLE IF EXISTS user_investments, investments, users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(255) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  expected_return DECIMAL(5,2) DEFAULT 10.00 NOT NULL,
  risk_level VARCHAR(50) DEFAULT 'moderate' NOT NULL
);

CREATE TABLE user_investments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  investment_id INTEGER NOT NULL REFERENCES investments(id),
  amount DECIMAL(10,2) NOT NULL,
  invested_at TIMESTAMP DEFAULT NOW(),
  current_value DECIMAL(10,2),
  last_valuation_date TIMESTAMP DEFAULT NOW(),
  total_return DECIMAL(5,2)
); 